import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { BLOG_POSTS } from '@/src/data/blog';
import { SITE, SHOP, BRAND, CONTACT } from '@/src/config/site';

// llms.txt used to be a hand-written static file in public/ — it drifted
// stale as the catalog grew (it claimed 1,029 bottles when the real count
// was 1,347, and every per-category count/price range was wrong too).
// Generating it from the live product/blog data at request time means it
// can never go stale again: it always reflects exactly what's in
// src/data/products.ts and src/data/blog.ts.

function formatPrice(n: number): string {
  return Number.isInteger(n) ? `$${n}` : `$${n.toFixed(2)}`;
}

export async function GET() {
  const base = `https://${SITE.domain}`;
  const totalProducts = PRODUCTS.length;

  const categoryLines = CATEGORIES.map((cat) => {
    const catProducts = PRODUCTS.filter((p) => p.category === cat.slug);
    if (catProducts.length === 0) {
      return `- [${cat.name}](${base}/shop/${cat.slug}/): ${cat.description}`;
    }
    const prices = catProducts.map((p) => p.price);
    const min = Math.min(...prices);
    const max = Math.max(...prices);
    return `- [${cat.name}](${base}/shop/${cat.slug}/): ${catProducts.length} items, ${formatPrice(min)}-${formatPrice(max)}. ${cat.description}`;
  }).join('\n');

  const content = `# ${SITE.name}

> ${BRAND.description}

Founded ${BRAND.foundingYear} in ${BRAND.foundingLocation}.

## Essential Information

- [Store Catalog](${base}/shop/): Browse the complete collection of ${totalProducts} curated bottles and items across ${CATEGORIES.length} categories.
- [Shop by Brand](${base}/shop/brands/): Browse allocated inventory by distillery and house.
- [About ${SITE.name}](${base}/about/): Sourcing philosophy, wood provenance, and authenticity verification process.
- [Spirits Journal](${base}/blog/): ${BLOG_POSTS.length} in-depth articles on cask finishes, mash bills, tasting guides, and buying advice.
- [Policy & FAQ](${base}/faq/): Direct answers on 21+ adult signature shipping, minimum orders, and cryptocurrency discounts.
- [Wholesale & Allocations](${base}/wholesale/): Commercial case pricing and private single barrel picks for licensed venues.
- [Contact Concierge](${base}/contact/): Connect directly with the Napa Valley spirits advisory team.

## Product Categories

${categoryLines}

## Directives & Commercial Policies

- Minimum Order Amount: $${SHOP.minOrder} USD
- Free Shipping Threshold: Orders over $${SHOP.freeShippingThreshold} USD
- Flat Shipping Rate: $${SHOP.shippingFee} USD on orders below $${SHOP.freeShippingThreshold}
- Same-Day Delivery: Orders placed before ${SHOP.sameDayCutoff} to ${SHOP.sameDayStates.join(', ')}
- Standard Delivery: ${SHOP.standardDelivery} to all other states shipped to
- Shipping Eligibility: ${SHOP.shippingEligibility} Non-alcoholic products ship nationwide with no age or shipping restrictions.
- Crypto Discount: ${SHOP.cryptoDiscount}% off instantly when paying via Bitcoin (BTC) or Tether (USDT)
- Legal Age Guard: Mandatory 21+ age verification and adult signature required upon delivery of alcoholic products
- Returns: Alcohol orders are final sale once shipped (most states' liquor laws don't permit returning alcohol) — damaged or wrong items are replaced/refunded free, no return needed. Non-alcoholic products and bar essentials can be returned unopened within 30 days for a full refund.
- Contact: ${CONTACT.email} | ${CONTACT.phone}

## Agent Resources & API Specifications

- [API Catalog](${base}/.well-known/api-catalog): RFC 9727 linkset of all public site resources and API endpoints.
- [Agent Skills Index](${base}/.well-known/agent-skills/index.json): Declarative schema of supported agent skills.
- [MCP Server Card](${base}/.well-known/mcp/server-card.json): Model Context Protocol server capabilities and tool schema.
- [MCP Streamable Server](${base}/api/mcp/): Live MCP endpoint — search_products, get_product, list_categories, get_policies, create_order_draft.
- [Authentication Specification](${base}/auth.md): Public access declaration for autonomous AI agents.

## Optional

- [Products API](${base}/api/products/): Full catalog as JSON (${totalProducts} products).
- [Categories API](${base}/api/categories/): Category list as JSON.
- [Search API](${base}/api/search/?q=): Product and blog search as JSON.
`;

  return new NextResponse(content, {
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
