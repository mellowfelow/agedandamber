import React, { useState } from 'react';
import { FAQ_ITEMS } from '../data/faq';
import { Search, ChevronDown, HelpCircle, ShieldCheck } from 'lucide-react';
import { JsonLd } from '../components/JsonLd';

export const FaqView: React.FC = () => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<'all' | 'shipping' | 'ordering' | 'products' | 'payment' | 'wholesale'>('all');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filtered = FAQ_ITEMS.filter((item) => {
    const matchesCat = activeCategory === 'all' || item.category === activeCategory;
    const matchesSearch =
      !search ||
      item.question.toLowerCase().includes(search.toLowerCase()) ||
      item.answer.toLowerCase().includes(search.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-10">
      <JsonLd type="faq" data={FAQ_ITEMS} />

      <div className="text-center space-y-3">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Client Support & Policy Center
        </span>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100">
          Frequently Asked Questions
        </h1>
        <p className="text-sm text-amber-200/70 max-w-xl mx-auto">
          Direct answers regarding 21+ adult signature delivery, minimum order thresholds, cryptocurrency discounts, and spirits shipping rules.
        </p>
      </div>

      {/* Search Input */}
      <div className="relative max-w-xl mx-auto">
        <input
          type="text"
          placeholder="Search question, e.g. minimum order, crypto discount, 21+ signature..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full p-4 pl-11 rounded-2xl bg-[#1A120B] border border-amber-900/50 text-amber-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#D4AF37]"
        />
        <Search className="w-5 h-5 text-stone-400 absolute left-4 top-4" />
      </div>

      {/* Category Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-2 text-xs">
        {(['all', 'ordering', 'shipping', 'payment', 'products', 'wholesale'] as const).map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`py-2 px-4 rounded-xl font-semibold capitalize transition-all whitespace-nowrap ${
              activeCategory === cat
                ? 'bg-[#D4AF37] text-[#140D08]'
                : 'bg-stone-900 text-amber-300/70 hover:bg-stone-800'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Accordion List */}
      <div className="space-y-4">
        {filtered.map((item, idx) => (
          <div
            key={idx}
            className="rounded-2xl bg-[#1A120B] border border-amber-900/40 overflow-hidden transition-all"
          >
            <button
              onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              className="w-full p-5 text-left flex items-center justify-between gap-4 font-serif font-bold text-base text-amber-100 hover:text-[#D4AF37] transition-colors"
            >
              <span>{item.question}</span>
              <ChevronDown
                className={`w-5 h-5 text-[#D4AF37] shrink-0 transition-transform ${
                  openIdx === idx ? 'rotate-180' : ''
                }`}
              />
            </button>

            {openIdx === idx && (
              <div className="p-5 pt-0 text-xs text-amber-200/80 leading-relaxed border-t border-amber-900/20">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
