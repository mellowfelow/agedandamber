import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { ShopView } from '@/src/views/ShopView';
import { SITE } from '@/src/config/site';

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return CATEGORIES.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) return {};
  return {
    title: `${cat.name} — Shop`,
    description: cat.description,
    alternates: { canonical: `https://${SITE.domain}/shop/${cat.slug}/` },
  };
}

export default async function ShopCategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = CATEGORIES.find((c) => c.slug === category);
  if (!cat) notFound();

  return <ShopView products={PRODUCTS} selectedCategory={category} />;
}
