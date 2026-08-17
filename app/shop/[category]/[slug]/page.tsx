import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { ProductDetailView } from '@/src/views/ProductDetailView';
import { SubcategoryHubView } from '@/src/views/SubcategoryHubView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return [
    ...PRODUCTS.map((p) => ({ category: p.category, slug: p.slug })),
    ...SUBCATEGORY_HUBS.map((h) => ({ category: h.categorySlug, slug: h.hubSlug })),
  ];
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;

  const hub = SUBCATEGORY_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  if (hub) {
    return {
      title: hub.seo.titleTag,
      description: hub.seo.metaDescription,
      alternates: { canonical: `https://${SITE.domain}/shop/${hub.categorySlug}/${hub.hubSlug}/` },
    };
  }

  const product = PRODUCTS.find((p) => p.slug === slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${SITE.currencySymbol}${product.price}`,
    description: product.shortDescription,
    alternates: { canonical: `https://${SITE.domain}/shop/${product.category}/${product.slug}/` },
    openGraph: { images: product.images },
  };
}

export default async function ProductPage({ params }: Props) {
  const { category, slug } = await params;

  const hub = SUBCATEGORY_HUBS.find((h) => h.categorySlug === category && h.hubSlug === slug);
  if (hub) {
    const cat = CATEGORIES.find((c) => c.slug === hub.categorySlug);
    if (!cat) notFound();
    const hubProducts = PRODUCTS.filter((p) => p.category === hub.categorySlug && p.subcategory === hub.subcategoryName);
    return (
      <>
        <JsonLd type="itemlist" data={{ name: hub.name, products: hubProducts }} />
        <JsonLd type="faq" data={hub.seo.faqs} />
        <SubcategoryHubView hub={hub} category={cat} products={PRODUCTS} />
      </>
    );
  }

  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  return (
    <>
      <JsonLd type="product" data={product} />
      <ProductDetailView product={product} allProducts={PRODUCTS} />
    </>
  );
}
