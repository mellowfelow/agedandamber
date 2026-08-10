import type { Metadata } from 'next';
import { PRODUCTS } from '@/src/data/products';
import { HomeView } from '@/src/views/HomeView';
import { JsonLd } from '@/src/components/JsonLd';
import { BRAND, SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Aged & Amber — Fine Spirits, Rare Casks & Cellar Reserve',
  description: BRAND.description,
  alternates: { canonical: `https://${SITE.domain}/` },
};

export default function HomePage() {
  return (
    <>
      <JsonLd type="homepage" />
      <HomeView products={PRODUCTS} />
    </>
  );
}
