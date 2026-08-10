import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS } from '@/src/data/products';
import { ProductDetailView } from '@/src/views/ProductDetailView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ category: string; slug: string }>;
}

export async function generateStaticParams() {
  return PRODUCTS.map((p) => ({ category: p.category, slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
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
  const product = PRODUCTS.find((p) => p.slug === slug && p.category === category);
  if (!product) notFound();

  return (
    <>
      <JsonLd type="product" data={product} />
      <ProductDetailView product={product} allProducts={PRODUCTS} />
    </>
  );
}
