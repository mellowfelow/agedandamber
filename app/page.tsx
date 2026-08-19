import type { Metadata } from 'next';
import { PRODUCTS } from '@/src/data/products';
import { FAQ_ITEMS } from '@/src/data/faq';
import { HomeView } from '@/src/views/HomeView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Best Whiskey Online — Rare & Allocated Spirits',
  description: 'Shop the best whiskey online — rare allocated bourbon, single malt scotch, and curated spirits from Napa Valley. Free shipping on $300+.',
  alternates: { canonical: `https://${SITE.domain}/` },
};

export default function HomePage() {
  const prices = PRODUCTS.map((p) => p.price).filter((p) => p > 0);
  const homepageStats = {
    numberOfItems: PRODUCTS.length,
    lowPrice: Math.min(...prices),
    highPrice: Math.max(...prices),
  };

  return (
    <>
      <JsonLd type="homepage" data={homepageStats} />
      <JsonLd type="faq" data={FAQ_ITEMS.slice(0, 5)} />
      <HomeView products={PRODUCTS} />
    </>
  );
}
