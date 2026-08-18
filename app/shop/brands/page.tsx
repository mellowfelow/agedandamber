import type { Metadata } from 'next';
import { BrandsIndexView } from '@/src/views/BrandsIndexView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Shop by Brand — Allocated Spirits Direct',
  description: 'Browse allocated spirits by distillery and brand — bourbon, scotch, tequila, rum, gin, vodka, and cognac houses, direct from our Napa Valley cellar.',
  alternates: { canonical: `https://${SITE.domain}/shop/brands/` },
};

export default function ShopBrandsPage() {
  return <BrandsIndexView />;
}
