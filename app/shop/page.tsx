import type { Metadata } from 'next';
import { PRODUCTS } from '@/src/data/products';
import { ShopView } from '@/src/views/ShopView';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: 'Shop All Spirits — Bourbon, Scotch, Tequila & More',
  description: 'Browse the complete Aged & Amber spirits vault: real, verified bourbon bottlings, single malt scotch, tequila, wine, and more — sourced directly from trusted distilleries.',
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function ShopPage() {
  return <ShopView products={PRODUCTS} selectedCategory="all" />;
}
