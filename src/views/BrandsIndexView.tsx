import React from 'react';
import Link from 'next/link';
import { BRAND_HUBS } from '../data/brandHubs';
import { CATEGORIES, PRODUCTS } from '../data/products';
import { getRouteUrl } from '../utils/routes';

export const BrandsIndexView: React.FC = () => {
  const grouped = CATEGORIES.map((cat) => ({
    category: cat,
    brands: BRAND_HUBS.filter((h) => h.categorySlug === cat.slug),
  })).filter((g) => g.brands.length > 0);

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <div className="text-center space-y-3">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Aged & Amber Spirits Vault
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          Shop by Brand
        </h1>
        <p className="text-sm text-amber-200/70 max-w-xl mx-auto">
          Browse allocated direct inventory by distillery and house, from Kentucky bourbon dynasties to Speyside single malts.
        </p>
      </div>

      <div className="space-y-8">
        {grouped.map(({ category, brands }) => (
          <div key={category.slug} className="space-y-3">
            <h2 className="text-sm font-bold text-amber-100 uppercase tracking-wide border-b border-amber-900/40 pb-2">
              {category.name}
            </h2>
            <div className="flex flex-wrap gap-2">
              {brands.map((h) => {
                const inStock = PRODUCTS.some(
                  (p) =>
                    p.category === h.categorySlug &&
                    p.stock > 0 &&
                    h.brandKeywords.some((kw) => p.name.toLowerCase().includes(kw.toLowerCase()))
                );
                return (
                  <Link
                    key={h.hubSlug}
                    href={getRouteUrl.product(h.categorySlug, h.hubSlug)}
                    className="py-2 px-3.5 rounded-xl bg-stone-900/80 border border-stone-800 text-xs font-semibold text-amber-200 hover:border-[#D4AF37]/60 hover:text-[#D4AF37] transition-colors flex items-center gap-2"
                  >
                    {h.name}
                    {!inStock && (
                      <span className="text-[9px] font-bold text-amber-500/70 uppercase tracking-wide">
                        Coming Soon
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
