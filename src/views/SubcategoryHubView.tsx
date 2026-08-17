'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { Product, SubcategoryHub, Category } from '../types';
import { ProductCard } from '../components/ProductCard';
import { getRouteUrl } from '../utils/routes';

interface SubcategoryHubViewProps {
  hub: SubcategoryHub;
  category: Category;
  products: Product[];
}

export const SubcategoryHubView: React.FC<SubcategoryHubViewProps> = ({ hub, category, products }) => {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const hubProducts = products.filter(
    (p) => p.category === hub.categorySlug && p.subcategory === hub.subcategoryName
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-xs text-amber-400/60">
        <Link href={getRouteUrl.shop()} className="hover:text-[#D4AF37]">Shop</Link>
        <ChevronRight className="w-3 h-3" />
        <Link href={getRouteUrl.shop(category.slug)} className="hover:text-[#D4AF37]">{category.name}</Link>
        <ChevronRight className="w-3 h-3" />
        <span className="text-amber-200">{hub.name}</span>
      </div>

      {/* Header */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
          <span>Aged & Amber Spirits Vault</span>
          <span>•</span>
          <span>{hubProducts.length} Direct Allocations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 tracking-tight">
          {hub.seo.h1}
        </h1>
        <p className="text-sm text-amber-200/70 max-w-3xl leading-relaxed">
          {hub.seo.definitionHook}
        </p>
        <div className="text-[11px] text-amber-400/50">Last updated: August 2026</div>
        {hub.seo.transactionalCTA && (
          <p className="text-xs text-amber-200/90 bg-[#1A120B] border border-[#D4AF37]/30 rounded-xl px-4 py-3 max-w-3xl leading-relaxed">
            {hub.seo.transactionalCTA}
          </p>
        )}
      </div>

      {/* Product Grid */}
      {hubProducts.length === 0 ? (
        <div className="text-center py-16 space-y-3 bg-[#160E08] rounded-3xl border border-amber-900/30 p-8 shadow-inner">
          <p className="text-sm text-amber-300/70">
            No {hub.name} allocations currently in stock — check back soon or explore the full {category.name} vault.
          </p>
          <Link
            href={getRouteUrl.shop(category.slug)}
            className="inline-block py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs hover:bg-[#E5C158] transition-all shadow-lg"
          >
            Browse {category.name}
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {hubProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* FAQ */}
      {hub.seo.faqs.length > 0 && (
        <div className="max-w-3xl space-y-4 pt-4">
          <h2 className="text-xl font-serif font-bold text-amber-100">
            {hub.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {hub.seo.faqs.map((item, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-[#1A120B] border border-amber-900/40 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaqIdx(openFaqIdx === idx ? null : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-serif font-bold text-sm text-amber-100 hover:text-[#D4AF37] transition-colors"
                >
                  <span>{item.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#D4AF37] shrink-0 transition-transform ${
                      openFaqIdx === idx ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaqIdx === idx && (
                  <div className="p-4 pt-0 text-xs text-amber-200/80 leading-relaxed border-t border-amber-900/20">
                    {item.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
