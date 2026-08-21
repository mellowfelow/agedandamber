import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { BRAND_HUBS } from '@/src/data/brandHubs';
import { BLOG_POSTS } from '@/src/data/blog';
import { SITE, BRAND, CONTACT, SHOP } from '@/src/config/site';

function notFoundMd(pathname: string) {
  return `# Not found\n\nNo markdown representation exists for \`${pathname}\`.\n`;
}

function homepageMd() {
  return `# ${SITE.name}

> ${BRAND.description}

## Categories

${CATEGORIES.map((c) => `- [${c.name}](https://${SITE.domain}/shop/${c.slug}/): ${c.description}`).join('\n')}

## Policies

- Minimum order: $${SHOP.minOrder}
- Free shipping over $${SHOP.freeShippingThreshold}
- Same-day delivery before ${SHOP.sameDayCutoff} to ${SHOP.sameDayStates.join(', ')}
- 10% instant discount paying with Bitcoin or USDT
- 21+ adult signature required at delivery for alcoholic products

## Contact

- Email: ${CONTACT.email}
- Phone: ${CONTACT.phone}

## More

- [Full product catalog](https://${SITE.domain}/shop/)
- [Shop by brand](https://${SITE.domain}/shop/brands/)
- [Spirits Journal (blog)](https://${SITE.domain}/blog/)
- [llms.txt](https://${SITE.domain}/llms.txt)
`;
}

function categoryMd(slug: string) {
  const cat = CATEGORIES.find((c) => c.slug === slug);
  if (!cat) return null;
  const products = PRODUCTS.filter((p) => p.category === cat.slug);
  const prices = products.map((p) => p.price).filter((p) => p > 0);
  const range = prices.length ? `$${Math.min(...prices)}–$${Math.max(...prices)}` : 'N/A';
  return `# ${cat.seo?.h1 || cat.name}

> ${cat.seo?.metaDescription || cat.description}

${cat.seo?.definitionHook || cat.description}

**${products.length} products, ${range}**

## Products

${products.slice(0, 100).map((p) => `- [${p.name}](https://${SITE.domain}/shop/${p.category}/${p.slug}/) — $${p.price}`).join('\n')}
${products.length > 100 ? `\n…and ${products.length - 100} more.` : ''}

${cat.seo?.faqs?.length ? `## FAQ\n\n${cat.seo.faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join('\n\n')}` : ''}
`;
}

function hubMd(categorySlug: string, hubSlug: string) {
  const subHub = SUBCATEGORY_HUBS.find((h) => h.categorySlug === categorySlug && h.hubSlug === hubSlug);
  const brandHub = BRAND_HUBS.find((h) => h.categorySlug === categorySlug && h.hubSlug === hubSlug);
  const hub = subHub || brandHub;
  if (!hub) return null;
  const products = subHub
    ? PRODUCTS.filter((p) => p.category === subHub.categorySlug && p.subcategory === subHub.subcategoryName)
    : PRODUCTS.filter(
        (p) =>
          p.category === brandHub!.categorySlug &&
          brandHub!.brandKeywords.some((kw) => p.name.toLowerCase().includes(kw.toLowerCase()))
      );
  return `# ${hub.seo.h1}

> ${hub.seo.metaDescription}

${hub.seo.definitionHook}

## Products (${products.length})

${products.length > 0 ? products.map((p) => `- [${p.name}](https://${SITE.domain}/shop/${p.category}/${p.slug}/) — $${p.price}`).join('\n') : '_Coming soon — no products currently in stock in this line._'}

${hub.seo.faqs?.length ? `## FAQ\n\n${hub.seo.faqs.map((f) => `**${f.question}**\n\n${f.answer}`).join('\n\n')}` : ''}
`;
}

function productMd(category: string, slug: string) {
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) return null;
  return `# ${product.name}

> ${product.shortDescription}

**Price:** $${product.price} ${SITE.currency}
**Category:** ${product.category} / ${product.subcategory}
**Proof:** ${product.proof} | **Age:** ${product.age} | **Volume:** ${product.volume}
**Availability:** ${product.stock > 0 ? 'In stock' : 'Out of stock'}

${product.fullDescription}

## Tasting Notes

- **Nose:** ${product.tastingNotes.nose}
- **Palate:** ${product.tastingNotes.palate}
- **Finish:** ${product.tastingNotes.finish}

**Cask:** ${product.caskType}
**Distillery location:** ${product.distilleryLocation}

[View full product page](https://${SITE.domain}/shop/${product.category}/${product.slug}/)
`;
}

function blogMd(slug: string) {
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return null;
  return `# ${post.title}

> ${post.excerpt}

${post.content}
`;
}

export async function GET(req: NextRequest) {
  const pathname = req.nextUrl.searchParams.get('path') || '/';
  const segments = pathname.replace(/^\/|\/$/g, '').split('/').filter(Boolean);

  let md: string | null = null;

  if (segments.length === 0) {
    md = homepageMd();
  } else if (segments[0] === 'shop' && segments.length === 1) {
    md = `# Shop All Spirits\n\n${CATEGORIES.map((c) => `- [${c.name}](https://${SITE.domain}/shop/${c.slug}/)`).join('\n')}\n`;
  } else if (segments[0] === 'shop' && segments.length === 2) {
    md = categoryMd(segments[1]);
  } else if (segments[0] === 'shop' && segments.length === 3) {
    md = hubMd(segments[1], segments[2]) || productMd(segments[1], segments[2]);
  } else if (segments[0] === 'blog' && segments.length === 1) {
    md = `# Spirits Journal\n\n${BLOG_POSTS.map((p) => `- [${p.title}](https://${SITE.domain}/blog/${p.slug}/): ${p.excerpt}`).join('\n')}\n`;
  } else if (segments[0] === 'blog' && segments.length === 2) {
    md = blogMd(segments[1]);
  }

  if (!md) {
    return new NextResponse(notFoundMd(pathname), {
      status: 404,
      headers: { 'Content-Type': 'text/markdown; charset=utf-8', 'Access-Control-Allow-Origin': '*' },
    });
  }

  return new NextResponse(md, {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=300',
      'Access-Control-Allow-Origin': '*',
    },
  });
}
