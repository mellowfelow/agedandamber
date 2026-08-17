import type { Metadata } from 'next';
import { PRODUCTS } from '@/src/data/products';
import { ShopView } from '@/src/views/ShopView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: `Buy Whiskey Online — ${PRODUCTS.length} Allocated Bottles`,
  description: `Buy whiskey online from ${SITE.name} — ${PRODUCTS.length} direct allocations. Rare bourbon, single malt scotch, tequila, and fine wine. Free shipping on $300+.`,
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

export default function ShopPage() {
  return (
    <>
      <JsonLd type="itemlist" data={{ name: 'All Spirits', products: PRODUCTS }} />
      <ShopView products={PRODUCTS} selectedCategory="all" />
    </>
  );
}
