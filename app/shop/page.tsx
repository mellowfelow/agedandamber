import type { Metadata } from 'next';
import { PRODUCTS, CATALOG_STATS } from '@/src/data/products';
import { ShopView } from '@/src/views/ShopView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

export const metadata: Metadata = {
  title: `Buy Whiskey Online — ${PRODUCTS.length} Allocated Bottles`,
  description: `Buy whiskey online from ${SITE.name} — ${PRODUCTS.length} direct allocations. Rare bourbon, single malt scotch, tequila, and fine wine. Free shipping on $300+.`,
  alternates: { canonical: `https://${SITE.domain}/shop/` },
};

// Server-rendered seed for the all-catalog page. ShopView fetches the full
// ~1,350-product list client-side (see `lazyLoadFullCatalog`) so it doesn't
// have to be serialized into the page HTML — that was ~1.5 MB and tripped
// Bing's "HTML size is too long" notice. This seed just fills the first few
// grid pages and gives crawlers real product links to follow; the default
// "Featured Allocations" sort means it reads as a natural first page. Every
// product URL is still covered by sitemap.xml and the category pages.
const SEED_PRODUCTS = PRODUCTS.filter((p) => p.featured).slice(0, 36);

export default function ShopPage() {
  return (
    <>
      <JsonLd type="itemlist" data={{ name: 'Featured Allocations', products: SEED_PRODUCTS }} />
      <ShopView
        products={SEED_PRODUCTS}
        selectedCategory="all"
        catalogStats={CATALOG_STATS}
        lazyLoadFullCatalog
      />
    </>
  );
}
