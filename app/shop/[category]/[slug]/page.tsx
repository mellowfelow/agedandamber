import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { BRAND_HUBS } from '@/src/data/brandHubs';
import { ProductDetailView } from '@/src/views/ProductDetailView';
import { HubPageView } from '@/src/views/HubPageView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';
import { brandHubProducts, subcategoryHubProducts, hubIsIndexable, productBrandName } from '@/src/utils/hubs';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...PRODUCTS.map((p) => ({ category: p.category, slug: p.slug })),
    ...SUBCATEGORY_HUBS.map((h) => ({ category: h.categorySlug, slug: h.hubSlug })),
    ...BRAND_HUBS.map((h) => ({ category: h.categorySlug, slug: h.hubSlug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;

  const subHub = SUBCATEGORY_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  const brandHub = BRAND_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  const hub = subHub || brandHub;
  if (hub) {
    // Prefer an actual product photo from within this hub (e.g. a real
    // Blanton's bottle for the Blanton's brand hub) over the generic
    // category image, so all 511 hub pages get a genuinely representative
    // share image instead of falling back to the sitewide default.
    let ogImage: string | undefined;
    if (subHub) {
      ogImage = PRODUCTS.find(
        (p) => p.category === subHub.categorySlug && p.subcategory === subHub.subcategoryName
      )?.images?.[0];
    } else if (brandHub) {
      const lowerKeywords = brandHub.brandKeywords.map((k) => k.toLowerCase());
      ogImage = PRODUCTS.find(
        (p) => p.category === brandHub.categorySlug && lowerKeywords.some((kw) => p.name.toLowerCase().includes(kw))
      )?.images?.[0];
    }
    if (!ogImage) {
      ogImage = CATEGORIES.find((c) => c.slug === hub.categorySlug)?.image;
    }

    // Thin hubs (fewer than 3 matching products) are noindexed — see
    // src/utils/hubs.ts. They stay crawlable (follow) and internally linked
    // so their products remain discoverable; they're also dropped from
    // sitemap.xml (app/sitemap.ts).
    const hubProductCount = subHub
      ? subcategoryHubProducts(subHub, PRODUCTS).length
      : brandHubProducts(brandHub!, PRODUCTS).length;

    return {
      title: hub.seo.titleTag,
      description: hub.seo.metaDescription,
      alternates: { canonical: `https://${SITE.domain}/shop/${hub.categorySlug}/${hub.hubSlug}/` },
      openGraph: ogImage ? { images: [ogImage] } : undefined,
      robots: hubIsIndexable(hubProductCount) ? undefined : { index: false, follow: true },
    };
  }

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: product.seo?.titleTag || `${product.name} — Buy Online`,
    description: product.seo?.metaDescription || product.shortDescription,
    alternates: { canonical: `https://${SITE.domain}/shop/${product.category}/${product.slug}/` },
    openGraph: { images: product.images },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;

  const subHub = SUBCATEGORY_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  if (subHub) {
    const cat = CATEGORIES.find((c) => c.slug === subHub.categorySlug);
    if (!cat) notFound();
    const hubProducts = PRODUCTS.filter((p) => p.category === subHub.categorySlug && p.subcategory === subHub.subcategoryName);
    return (
      <>
        <JsonLd type="itemlist" data={{ name: subHub.name, products: hubProducts }} />
        {subHub.seo.faqs.length > 0 && <JsonLd type="faq" data={subHub.seo.faqs} />}
        <JsonLd
          type="breadcrumb"
          data={[
            { name: 'Home', url: '/' },
            { name: 'Shop', url: '/shop/' },
            { name: cat.name, url: `/shop/${cat.slug}/` },
            { name: subHub.name, url: `/shop/${subHub.categorySlug}/${subHub.hubSlug}/` },
          ]}
        />
        <HubPageView name={subHub.name} seo={subHub.seo} category={cat} products={hubProducts} />
      </>
    );
  }

  const brandHub = BRAND_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  if (brandHub) {
    const cat = CATEGORIES.find((c) => c.slug === brandHub.categorySlug);
    if (!cat) notFound();
    const lowerKeywords = brandHub.brandKeywords.map((k) => k.toLowerCase());
    const hubProducts = PRODUCTS.filter(
      (p) => p.category === brandHub.categorySlug && lowerKeywords.some((kw) => p.name.toLowerCase().includes(kw))
    );
    return (
      <>
        {hubProducts.length > 0 && <JsonLd type="itemlist" data={{ name: brandHub.name, products: hubProducts }} />}
        {brandHub.seo.faqs.length > 0 && <JsonLd type="faq" data={brandHub.seo.faqs} />}
        <JsonLd
          type="breadcrumb"
          data={[
            { name: 'Home', url: '/' },
            { name: 'Shop', url: '/shop/' },
            { name: cat.name, url: `/shop/${cat.slug}/` },
            { name: brandHub.name, url: `/shop/${brandHub.categorySlug}/${brandHub.hubSlug}/` },
          ]}
        />
        <HubPageView
          name={brandHub.name}
          seo={brandHub.seo}
          category={cat}
          products={hubProducts}
          comingSoon={hubProducts.length === 0}
        />
      </>
    );
  }

  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  const productCat = CATEGORIES.find((c) => c.slug === product.category);

  // Same fix as the homepage: compute the (at most 3) related products on
  // the server instead of handing the client component the entire
  // 1,347-product catalog just to filter it down itself. This one matters
  // more than the homepage fix — it was happening on every single one of
  // the ~1,347 product pages, not just one page.
  const relatedProducts = PRODUCTS
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  // Product schema `brand` must be the product's own brand, not the
  // retailer. Derived from the matching brand hub (e.g. "Buffalo Trace"),
  // undefined when none matches — see src/utils/hubs.ts.
  const brandName = productBrandName(product, BRAND_HUBS);

  return (
    <>
      <JsonLd type="product" data={{ ...product, brandName }} />
      {product.seo?.faqs && product.seo.faqs.length > 0 && <JsonLd type="faq" data={product.seo.faqs} />}
      <JsonLd
        type="breadcrumb"
        data={[
          { name: 'Home', url: '/' },
          { name: 'Shop', url: '/shop/' },
          ...(productCat ? [{ name: productCat.name, url: `/shop/${productCat.slug}/` }] : []),
          { name: product.name, url: `/shop/${product.category}/${product.slug}/` },
        ]}
      />
      <ProductDetailView product={product} relatedProducts={relatedProducts} />
    </>
  );
}
