import type { Metadata } from 'next';
import { PRODUCTS, CATALOG_STATS } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { ShopView } from '@/src/views/ShopView';
import { JsonLd } from '@/src/components/JsonLd';
import { SITE } from '@/src/config/site';

// Every subcategory with a dedicated hub page, across all categories — the
// sidebar (rendered here too) uses this to link straight to the SEO page
// instead of just filtering in place. Tiny (3 short strings per hub), so
// safe to send whole rather than scoping it like styleHubs/brandHubs.
const SUBCATEGORY_ROUTES = SUBCATEGORY_HUBS.map((h) => ({
  categorySlug: h.categorySlug,
  subcategoryName: h.subcategoryName,
  hubSlug: h.hubSlug,
}));

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
        subcategoryRoutes={SUBCATEGORY_ROUTES}
        lazyLoadFullCatalog
      />
    </>
  );
}
