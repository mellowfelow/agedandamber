import type { Product, BrandHub, SubcategoryHub } from '../types';

/**
 * A hub page (brand or subcategory) is only worth indexing once it has real
 * depth. Below this many matching products it's thin, near-duplicate,
 * templated content — GSC was leaving ~half the site "Discovered, currently
 * not indexed" and these pages are the reason. Thin hubs still render and
 * stay internally linked (so their products remain crawlable), they just
 * carry `robots: noindex` and drop out of sitemap.xml.
 */
export const HUB_INDEX_MIN_PRODUCTS = 3;

/** Products that belong to a brand hub — name contains one of its keywords. */
export function brandHubProducts(hub: BrandHub, products: Product[]): Product[] {
  const kws = hub.brandKeywords.map((k) => k.toLowerCase());
  return products.filter(
    (p) => p.category === hub.categorySlug && kws.some((kw) => p.name.toLowerCase().includes(kw))
  );
}

/** Products that belong to a subcategory hub. */
export function subcategoryHubProducts(hub: SubcategoryHub, products: Product[]): Product[] {
  return products.filter(
    (p) => p.category === hub.categorySlug && p.subcategory === hub.subcategoryName
  );
}

/** Whether a hub has enough depth to be indexed and listed in the sitemap. */
export function hubIsIndexable(count: number): boolean {
  return count >= HUB_INDEX_MIN_PRODUCTS;
}

/**
 * The producer/brand name for a product, derived from the brand hub whose
 * keywords match its name (e.g. "Buffalo Trace Kentucky Straight Bourbon"
 * -> "Buffalo Trace"). Used for Product schema `brand`, which must be the
 * product's own brand, not the retailer. Returns undefined when no brand
 * hub matches — better to omit `brand` than to assert the wrong one.
 */
export function productBrandName(
  product: Product,
  brandHubs: BrandHub[]
): string | undefined {
  const name = product.name.toLowerCase();
  let best: { hub: BrandHub; kwLen: number } | undefined;
  for (const hub of brandHubs) {
    if (hub.categorySlug !== product.category) continue;
    for (const kw of hub.brandKeywords) {
      if (name.includes(kw.toLowerCase()) && (!best || kw.length > best.kwLen)) {
        best = { hub, kwLen: kw.length };
      }
    }
  }
  return best?.hub.name;
}
