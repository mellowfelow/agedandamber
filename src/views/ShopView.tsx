'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/products';
import { SUBCATEGORY_HUBS } from '../data/subcategoryHubs';
import { getRouteUrl } from '../utils/routes';
import {
  Search,
  Filter,
  ArrowUpDown,
  ChevronDown,
  ChevronRight,
  X,
  RotateCcw,
  GlassWater,
  Flame,
  Wine,
  Check,
  CheckSquare,
  Square,
  Sparkles,
  SlidersHorizontal,
} from 'lucide-react';
import { SITE } from '../config/site';
import { useAppState } from '../../app/providers';

interface ShopViewProps {
  products: Product[];
  selectedCategory: string;
}

export const ShopView: React.FC<ShopViewProps> = ({ products, selectedCategory }) => {
  const router = useRouter();
  const { searchQuery, setSearchQuery } = useAppState();

  const setSelectedCategory = (cat: string) => {
    router.push(getRouteUrl.shop(cat));
  };

  const [selectedSubcategory, setSelectedSubcategory] = useState('all');
  const [sortBy, setSortBy] = useState<'featured' | 'price-asc' | 'price-desc' | 'proof-desc' | 'name-asc'>('featured');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(600);
  const [proofFilter, setProofFilter] = useState<'all' | 'zero' | 'standard' | 'cask-strength'>('all');
  const [inStockOnly, setInStockOnly] = useState(false);
  const [macroGroup, setMacroGroup] = useState<'all' | 'whiskey' | 'spirits' | 'na'>('all');
  const [categorySearch, setCategorySearch] = useState('');
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);
  const PRODUCTS_PER_PAGE = 12;

  // Category collapse state - defaults to all expanded so clients immediately see all subcategories
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    CATEGORIES.forEach((c) => {
      initial[c.slug] = true;
    });
    return initial;
  });

  const toggleCategoryExpand = (slug: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [slug]: !prev[slug],
    }));
  };

  const expandAllCategories = () => {
    const updated: Record<string, boolean> = {};
    CATEGORIES.forEach((c) => {
      updated[c.slug] = true;
    });
    setExpandedCategories(updated);
  };

  const collapseAllCategories = () => {
    const updated: Record<string, boolean> = {};
    CATEGORIES.forEach((c) => {
      updated[c.slug] = false;
    });
    setExpandedCategories(updated);
  };

  // Group definitions for Macro Tabs
  const macroGroups = [
    { id: 'all', name: 'All Vault Collections', icon: Sparkles },
    { id: 'whiskey', name: 'Whiskies & Malts', icon: Flame },
    { id: 'wine', name: 'Fine Wine & Champagne', icon: Wine },
    { id: 'spirits', name: 'Agave, Rum & Clear Spirits', icon: SlidersHorizontal },
    { id: 'na', name: 'Zero-Proof Collection', icon: GlassWater },
  ];

  // Helper to categorize categories into macro groups
  const isCategoryInMacroGroup = (slug: string, group: string) => {
    if (group === 'all') return true;
    if (group === 'whiskey') {
      return ['bourbon-whiskey', 'scotch-whisky', 'irish-whiskey', 'japanese-whisky', 'other-whiskey'].includes(slug);
    }
    if (group === 'wine') {
      return ['fine-wine', 'champagne-sparkling', 'na-wine', 'na-champagne-sparkling'].includes(slug);
    }
    if (group === 'spirits') {
      return ['tequila-mezcal', 'craft-vodka', 'artisanal-gin', 'aged-dark-rum', 'cognac-brandy', 'rtd-liqueurs'].includes(slug);
    }
    if (group === 'na') {
      return slug.startsWith('na-');
    }
    return true;
  };

  // Filter categories by category search string and macro group
  const visibleCategories = CATEGORIES.filter((cat) => {
    const matchesMacro = isCategoryInMacroGroup(cat.slug, macroGroup);
    if (!categorySearch) return matchesMacro;

    const term = categorySearch.toLowerCase();
    const nameMatches = cat.name.toLowerCase().includes(term);
    const subMatches = cat.subcategories.some((sub) => sub.toLowerCase().includes(term));
    return matchesMacro && (nameMatches || subMatches);
  });

  // Calculate live counts for each category
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CATEGORIES.forEach((c) => {
      counts[c.slug] = products.filter((p) => p.category === c.slug).length;
    });
    return counts;
  }, [products]);

  // Calculate live counts for subcategories
  const subcategoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    products.forEach((p) => {
      if (p.subcategory) {
        counts[p.subcategory] = (counts[p.subcategory] || 0) + 1;
      }
    });
    return counts;
  }, [products]);

  // Main Product Filtering Logic
  const filteredProducts = products.filter((p) => {
    // Category match
    const matchesCategory = selectedCategory === 'all' || p.category === selectedCategory;

    // Subcategory match
    const matchesSubcategory = selectedSubcategory === 'all' || p.subcategory === selectedSubcategory;

    // Price match
    const matchesPrice = p.price >= minPrice && p.price <= maxPrice;

    // Proof filter match
    let matchesProof = true;
    if (proofFilter === 'zero') matchesProof = p.proof === 0;
    else if (proofFilter === 'standard') matchesProof = p.proof > 0 && p.proof <= 95;
    else if (proofFilter === 'cask-strength') matchesProof = p.proof > 95;

    // Stock match
    const matchesStock = !inStockOnly || p.stock > 0;

    // Search query match
    const matchesSearch =
      !searchQuery ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.caskType.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.subcategory && p.subcategory.toLowerCase().includes(searchQuery.toLowerCase())) ||
      p.distilleryLocation.toLowerCase().includes(searchQuery.toLowerCase());

    return (
      matchesCategory &&
      matchesSubcategory &&
      matchesPrice &&
      matchesProof &&
      matchesStock &&
      matchesSearch
    );
  });

  // Sort products
  const sortedProducts = [...filteredProducts].sort((a, b) => {
    if (sortBy === 'price-asc') return a.price - b.price;
    if (sortBy === 'price-desc') return b.price - a.price;
    if (sortBy === 'proof-desc') return b.proof - a.proof;
    if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
    return 0; // featured
  });

  // Reset to page 1 whenever the filtered/sorted set changes
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, selectedSubcategory, sortBy, minPrice, maxPrice, proofFilter, inStockOnly, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE));
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  const activeCategoryObj = CATEGORIES.find((c) => c.slug === selectedCategory);

  // Count active filters
  const activeFiltersCount =
    (selectedCategory !== 'all' ? 1 : 0) +
    (selectedSubcategory !== 'all' ? 1 : 0) +
    (minPrice > 0 || maxPrice < 600 ? 1 : 0) +
    (proofFilter !== 'all' ? 1 : 0) +
    (inStockOnly ? 1 : 0) +
    (searchQuery ? 1 : 0);

  const resetAllFilters = () => {
    setSelectedCategory('all');
    setSelectedSubcategory('all');
    setMinPrice(0);
    setMaxPrice(600);
    setProofFilter('all');
    setInStockOnly(false);
    setSearchQuery('');
    setMacroGroup('all');
    setCategorySearch('');
  };

  const renderFilterSidebar = () => (
    <div className="space-y-6 text-xs">
      {/* Category Navigation Header */}
      <div className="bg-[#1A120B] border border-amber-900/40 rounded-2xl p-4 space-y-4 shadow-lg">
        <div className="flex items-center justify-between border-b border-amber-900/30 pb-3">
          <div className="flex items-center gap-2 font-serif font-bold text-amber-100 text-sm">
            <SlidersHorizontal className="w-4 h-4 text-[#D4AF37]" />
            <span>Categories & Vault Filters</span>
          </div>
          {activeFiltersCount > 0 && (
            <button
              onClick={resetAllFilters}
              className="text-[#D4AF37] hover:underline flex items-center gap-1 text-[11px] font-semibold"
            >
              <RotateCcw className="w-3 h-3" />
              Reset ({activeFiltersCount})
            </button>
          )}
        </div>

        {/* Quick Category / Subcategory Search */}
        <div className="relative">
          <input
            type="text"
            placeholder="Filter categories or subcategories..."
            value={categorySearch}
            onChange={(e) => setCategorySearch(e.target.value)}
            className="w-full p-2 pl-8 rounded-xl bg-stone-900/90 border border-stone-800 text-amber-100 placeholder-stone-500 text-xs focus:outline-none focus:border-[#D4AF37]"
          />
          <Search className="w-3.5 h-3.5 text-stone-500 absolute left-2.5 top-2.5" />
          {categorySearch && (
            <button
              onClick={() => setCategorySearch('')}
              className="absolute right-2.5 top-2.5 text-stone-400 hover:text-amber-100"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Controls (Expand / Collapse All) */}
        <div className="flex items-center justify-between text-[10px] text-amber-400/60 pt-1">
          <span>{visibleCategories.length} Categories Available</span>
          <div className="flex items-center gap-2">
            <button
              onClick={expandAllCategories}
              className="hover:text-amber-200 transition-colors"
            >
              Expand All
            </button>
            <span>•</span>
            <button
              onClick={collapseAllCategories}
              className="hover:text-amber-200 transition-colors"
            >
              Collapse
            </button>
          </div>
        </div>

        {/* "All Spirits" Option */}
        <button
          onClick={() => {
            setSelectedCategory('all');
            setSelectedSubcategory('all');
          }}
          className={`w-full flex items-center justify-between p-2.5 rounded-xl transition-all font-semibold ${
            selectedCategory === 'all'
              ? 'bg-[#D4AF37] text-[#140D08] shadow-md'
              : 'bg-stone-900/60 text-amber-200/90 hover:bg-stone-800 border border-stone-800'
          }`}
        >
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 shrink-0" />
            <span>All Spirits & Zero Proof</span>
          </div>
          <span
            className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${
              selectedCategory === 'all'
                ? 'bg-[#140D08] text-[#D4AF37]'
                : 'bg-stone-800 text-amber-400/80'
            }`}
          >
            {products.length}
          </span>
        </button>

        {/* Category Accordion Tree */}
        <div className="space-y-2 max-h-[480px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-amber-900/40">
          {visibleCategories.map((cat) => {
            const isSelected = selectedCategory === cat.slug;
            const isExpanded = expandedCategories[cat.slug];
            const catCount = categoryCounts[cat.slug] || 0;
            const isNA = cat.slug.startsWith('na-');

            return (
              <div
                key={cat.slug}
                className={`rounded-xl border transition-all ${
                  isSelected
                    ? 'border-[#D4AF37] bg-[#D4AF37]/10'
                    : 'border-stone-800/80 bg-stone-900/40 hover:border-amber-900/40'
                }`}
              >
                {/* Category Header Row */}
                <div className="flex items-center justify-between p-2.5">
                  <button
                    onClick={() => {
                      setSelectedCategory(cat.slug);
                      setSelectedSubcategory('all');
                    }}
                    className="flex items-center gap-2 text-left flex-1 font-medium group text-amber-100 hover:text-[#D4AF37] transition-colors"
                  >
                    {isNA ? (
                      <GlassWater className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    ) : (
                      <Wine className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                    )}
                    <span className={`text-xs ${isSelected ? 'font-bold text-[#D4AF37]' : ''}`}>
                      {cat.name}
                    </span>
                  </button>

                  <div className="flex items-center gap-1.5 shrink-0">
                    <span className="px-1.5 py-0.5 rounded-md bg-stone-800/80 text-[10px] text-amber-300/70 font-mono">
                      {catCount}
                    </span>
                    <button
                      onClick={() => toggleCategoryExpand(cat.slug)}
                      className="p-1 hover:bg-stone-800 rounded-md text-amber-400/60 hover:text-amber-200 transition-colors"
                      title={isExpanded ? 'Collapse subcategories' : 'Expand subcategories'}
                    >
                      {isExpanded ? (
                        <ChevronDown className="w-3.5 h-3.5" />
                      ) : (
                        <ChevronRight className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Subcategories List */}
                {isExpanded && cat.subcategories.length > 0 && (
                  <div className="px-2 pb-2.5 pt-1 space-y-1 border-t border-stone-800/60 ml-2">
                    {cat.subcategories.map((sub) => {
                      const isSubSelected =
                        selectedCategory === cat.slug && selectedSubcategory === sub;
                      const subCount = subcategoryCounts[sub] || 0;

                      return (
                        <button
                          key={sub}
                          onClick={() => {
                            setSelectedCategory(cat.slug);
                            setSelectedSubcategory(sub);
                          }}
                          className={`w-full flex items-center justify-between p-1.5 rounded-lg text-left transition-all ${
                            isSubSelected
                              ? 'bg-[#D4AF37] text-[#140D08] font-bold shadow-sm'
                              : 'text-amber-300/75 hover:bg-stone-800 hover:text-amber-100'
                          }`}
                        >
                          <div className="flex items-center gap-1.5 truncate">
                            <span
                              className={`w-1.5 h-1.5 rounded-full ${
                                isSubSelected ? 'bg-[#140D08]' : 'bg-amber-600/50'
                              }`}
                            />
                            <span className="truncate text-[11px]">{sub}</span>
                          </div>
                          {subCount > 0 && (
                            <span
                              className={`text-[9px] font-mono px-1 rounded ${
                                isSubSelected
                                  ? 'bg-[#140D08]/20 text-[#140D08]'
                                  : 'text-amber-400/50'
                              }`}
                            >
                              {subCount}
                            </span>
                          )}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Price Range Filter Card */}
      <div className="bg-[#1A120B] border border-amber-900/40 rounded-2xl p-4 space-y-3 shadow-lg">
        <div className="flex items-center justify-between">
          <span className="font-serif font-bold text-amber-100 text-xs">Price Range</span>
          <span className="font-bold text-[#D4AF37] font-mono">
            {SITE.currencySymbol}{minPrice} - {SITE.currencySymbol}{maxPrice}
          </span>
        </div>

        <div className="space-y-2">
          <input
            type="range"
            min={0}
            max={600}
            step={25}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-[#D4AF37] cursor-pointer"
          />

          {/* Quick Price Presets */}
          <div className="grid grid-cols-2 gap-1.5 pt-1">
            {[
              { label: 'Under $35', max: 35 },
              { label: 'Under $75', max: 75 },
              { label: 'Under $200', max: 200 },
              { label: 'All Prices', max: 600 },
            ].map((preset) => (
              <button
                key={preset.label}
                onClick={() => {
                  setMinPrice(0);
                  setMaxPrice(preset.max);
                }}
                className={`p-1.5 rounded-lg border text-[10px] font-medium transition-all ${
                  maxPrice === preset.max
                    ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-amber-100 font-bold'
                    : 'border-stone-800 text-amber-400/60 hover:text-amber-200 hover:border-stone-700'
                }`}
              >
                {preset.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Proof / Alcohol Strength Filter */}
      <div className="bg-[#1A120B] border border-amber-900/40 rounded-2xl p-4 space-y-3 shadow-lg">
        <span className="font-serif font-bold text-amber-100 text-xs block">
          Proof & Alcohol Strength
        </span>
        <div className="space-y-1.5">
          {[
            { id: 'all', label: 'All Alcohol Levels' },
            { id: 'zero', label: 'Zero Proof (0% ABV)' },
            { id: 'standard', label: 'Standard (80–95 Proof)' },
            { id: 'cask-strength', label: 'Cask Strength (100+ Proof)' },
          ].map((pf) => (
            <button
              key={pf.id}
              onClick={() => setProofFilter(pf.id as any)}
              className={`w-full flex items-center justify-between p-2 rounded-xl border text-left transition-all ${
                proofFilter === pf.id
                  ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-amber-100 font-bold'
                  : 'border-stone-800/80 text-amber-300/70 hover:bg-stone-800 hover:text-amber-100'
              }`}
            >
              <span>{pf.label}</span>
              {proofFilter === pf.id && <Check className="w-3.5 h-3.5 text-[#D4AF37]" />}
            </button>
          ))}
        </div>
      </div>

      {/* Stock Filter Toggle */}
      <div className="bg-[#1A120B] border border-amber-900/40 rounded-2xl p-4 flex items-center justify-between shadow-lg">
        <span className="font-medium text-amber-200/90 text-xs">In-Stock Allocations Only</span>
        <button
          onClick={() => setInStockOnly(!inStockOnly)}
          className={`p-1 rounded-lg transition-colors ${
            inStockOnly ? 'text-[#D4AF37]' : 'text-stone-600 hover:text-stone-400'
          }`}
        >
          {inStockOnly ? <CheckSquare className="w-5 h-5" /> : <Square className="w-5 h-5" />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Header Banner */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
          <span>Aged & Amber Spirits Vault</span>
          <span>•</span>
          <span>{products.length} Direct Allocations</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-serif font-bold text-amber-100 tracking-tight">
          {activeCategoryObj
            ? activeCategoryObj.seo?.h1 || activeCategoryObj.name
            : `Buy Whiskey Online — ${products.length} Direct Allocations`}
        </h1>
        <p className="text-sm text-amber-200/70 max-w-3xl leading-relaxed">
          {activeCategoryObj
            ? activeCategoryObj.seo?.definitionHook || activeCategoryObj.description
            : 'Explore our complete direct allocation list of rare bourbons, cask strength ryes, single malt scotches, aged tequilas, and zero-proof non-alcoholic fine wines and spirits.'}
        </p>
        {activeCategoryObj?.seo && selectedSubcategory === 'all' && (
          <div className="text-[11px] text-amber-400/50">Last updated: August 2026</div>
        )}
        {activeCategoryObj?.seo?.transactionalCTA && selectedSubcategory === 'all' && (
          <p className="text-xs text-amber-200/90 bg-[#1A120B] border border-[#D4AF37]/30 rounded-xl px-4 py-3 max-w-3xl leading-relaxed">
            {activeCategoryObj.seo.transactionalCTA}
          </p>
        )}
        {activeCategoryObj && selectedSubcategory === 'all' && (() => {
          const hubs = SUBCATEGORY_HUBS.filter((h) => h.categorySlug === activeCategoryObj.slug);
          if (hubs.length === 0) return null;
          return (
            <div className="flex flex-wrap items-center gap-2 pt-1">
              <span className="text-[11px] text-amber-400/60 font-semibold uppercase tracking-wider">Shop by style:</span>
              {hubs.map((h) => (
                <Link
                  key={h.hubSlug}
                  href={getRouteUrl.product(h.categorySlug, h.hubSlug)}
                  className="text-xs font-semibold text-[#D4AF37] hover:underline"
                >
                  {h.name}
                </Link>
              ))}
            </div>
          );
        })()}
        {!activeCategoryObj && (
          <p className="text-xs text-amber-200/90 bg-[#1A120B] border border-[#D4AF37]/30 rounded-xl px-4 py-3 max-w-3xl leading-relaxed">
            Buy whiskey online — direct from distillery allocations, shipped to every state with compliant direct-to-consumer alcohol shipping laws. Adult signature required.
          </p>
        )}
      </div>

      {/* Macro Collection Group Filter Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 border-b border-amber-900/30 pb-4">
        {macroGroups.map((mg) => {
          const Icon = mg.icon;
          const isActive = macroGroup === mg.id;

          return (
            <button
              key={mg.id}
              onClick={() => {
                setMacroGroup(mg.id as any);
                if (mg.id === 'na' && !selectedCategory.startsWith('na-')) {
                  setSelectedCategory('na-wine');
                  setSelectedSubcategory('all');
                } else if (mg.id === 'whiskey' && !selectedCategory.includes('whiskey') && !selectedCategory.includes('scotch')) {
                  setSelectedCategory('bourbon-whiskey');
                  setSelectedSubcategory('all');
                } else if (mg.id === 'spirits' && (selectedCategory.includes('whiskey') || selectedCategory.startsWith('na-'))) {
                  setSelectedCategory('tequila-mezcal');
                  setSelectedSubcategory('all');
                } else if (mg.id === 'all') {
                  setSelectedCategory('all');
                  setSelectedSubcategory('all');
                }
              }}
              className={`flex items-center gap-2 p-3 rounded-2xl border text-xs font-bold transition-all ${
                isActive
                  ? 'border-[#D4AF37] bg-[#D4AF37]/20 text-amber-100 shadow-lg scale-[1.02]'
                  : 'border-stone-800/80 bg-[#1A120B]/60 text-amber-300/70 hover:bg-stone-900 hover:text-amber-100'
              }`}
            >
              <Icon
                className={`w-4 h-4 shrink-0 ${
                  isActive ? 'text-[#D4AF37]' : 'text-amber-400/60'
                }`}
              />
              <span className="truncate">{mg.name}</span>
            </button>
          );
        })}
      </div>

      {/* Main Grid: Left Filter Sidebar + Right Products Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Desktop Left Sidebar */}
        <div className="hidden lg:block lg:col-span-1">{renderFilterSidebar()}</div>

        {/* Right Product Grid Area */}
        <div className="lg:col-span-3 space-y-6">
          {/* Search, Sort, and Mobile Filter Toggle Header Bar */}
          <div className="p-4 rounded-2xl bg-[#1A120B] border border-amber-900/40 flex flex-col md:flex-row items-center justify-between gap-4 text-xs shadow-md">
            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search bottle, distillery, cask..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full p-2.5 pl-9 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 placeholder-stone-500 focus:outline-none focus:border-[#D4AF37]"
              />
              <Search className="w-4 h-4 text-stone-400 absolute left-3 top-3" />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-3 text-stone-400 hover:text-amber-100"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Controls Right */}
            <div className="flex items-center gap-3 w-full md:w-auto justify-between md:justify-end">
              {/* Mobile Filter Toggle Button */}
              <button
                onClick={() => setMobileFilterOpen(true)}
                className="lg:hidden flex items-center gap-2 py-2.5 px-4 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs shadow-md"
              >
                <Filter className="w-4 h-4" />
                <span>Filters & Categories</span>
                {activeFiltersCount > 0 && (
                  <span className="w-5 h-5 rounded-full bg-[#140D08] text-[#D4AF37] text-[10px] flex items-center justify-center font-bold">
                    {activeFiltersCount}
                  </span>
                )}
              </button>

              {/* Sort By Dropdown */}
              <div className="flex items-center gap-2 shrink-0">
                <ArrowUpDown className="w-3.5 h-3.5 text-[#D4AF37]" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as any)}
                  className="p-2.5 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 focus:outline-none focus:border-[#D4AF37]"
                >
                  <option value="featured">Featured Allocations</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="proof-desc">Proof: Highest First</option>
                  <option value="name-asc">Alphabetical (A-Z)</option>
                </select>
              </div>
            </div>
          </div>

          {/* Active Filter Chips Bar */}
          {activeFiltersCount > 0 && (
            <div className="flex flex-wrap items-center gap-2 p-3 rounded-xl bg-stone-900/50 border border-amber-900/20 text-xs">
              <span className="text-amber-400/60 font-medium text-[11px]">Active Filters:</span>

              {selectedCategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-amber-200">
                  Category: <strong>{activeCategoryObj?.name || selectedCategory}</strong>
                  <button
                    onClick={() => {
                      setSelectedCategory('all');
                      setSelectedSubcategory('all');
                    }}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {selectedSubcategory !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/40 text-amber-200">
                  Subcategory: <strong>{selectedSubcategory}</strong>
                  <button
                    onClick={() => setSelectedSubcategory('all')}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {(minPrice > 0 || maxPrice < 600) && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-amber-200">
                  Max Price: <strong>{SITE.currencySymbol}{maxPrice}</strong>
                  <button
                    onClick={() => {
                      setMinPrice(0);
                      setMaxPrice(600);
                    }}
                    className="hover:text-white"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {proofFilter !== 'all' && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-amber-200">
                  Proof: <strong>{proofFilter}</strong>
                  <button onClick={() => setProofFilter('all')} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {inStockOnly && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-amber-200">
                  In Stock Only
                  <button onClick={() => setInStockOnly(false)} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              {searchQuery && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-stone-800 border border-stone-700 text-amber-200">
                  Search: <strong>"{searchQuery}"</strong>
                  <button onClick={() => setSearchQuery('')} className="hover:text-white">
                    <X className="w-3 h-3" />
                  </button>
                </span>
              )}

              <button
                onClick={resetAllFilters}
                className="text-[#D4AF37] hover:underline font-bold text-[11px] ml-auto"
              >
                Clear All
              </button>
            </div>
          )}

          {/* Results Summary Bar */}
          <div className="flex items-center justify-between text-xs text-amber-400/60 border-b border-amber-900/20 pb-2">
            <span>
              Showing <strong className="text-amber-100">{sortedProducts.length}</strong> of{' '}
              {products.length} direct allocations
            </span>
            {selectedSubcategory !== 'all' && (
              <span className="text-[#D4AF37]">Filtered by subcategory: {selectedSubcategory}</span>
            )}
          </div>

          {/* Product Grid */}
          {sortedProducts.length === 0 ? (
            <div className="text-center py-20 space-y-4 bg-[#160E08] rounded-3xl border border-amber-900/30 p-8 shadow-inner">
              <Filter className="w-12 h-12 text-amber-600/40 mx-auto" />
              <h3 className="font-serif font-bold text-[#D4AF37] text-xl">
                No Spirits Match Your Selected Filters
              </h3>
              <p className="text-xs text-amber-300/60 max-w-md mx-auto">
                Try clearing your subcategory filter, increasing your price range slider, or resetting your search keywords.
              </p>
              <button
                onClick={resetAllFilters}
                className="py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs hover:bg-[#E5C158] transition-all shadow-lg"
              >
                Reset All Category Filters
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>

              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 pt-4">
                  <button
                    onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                    disabled={currentPage === 1}
                    className="px-3 py-2 rounded-lg text-xs font-bold border border-amber-900/40 text-amber-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-900/20 transition-all"
                  >
                    Prev
                  </button>

                  <div className="flex items-center gap-1 flex-wrap justify-center">
                    {Array.from({ length: totalPages }, (_, i) => i + 1)
                      .filter(
                        (page) =>
                          page === 1 ||
                          page === totalPages ||
                          Math.abs(page - currentPage) <= 1
                      )
                      .map((page, idx, arr) => (
                        <React.Fragment key={page}>
                          {idx > 0 && arr[idx - 1] !== page - 1 && (
                            <span className="px-2 text-amber-600/50 text-xs">...</span>
                          )}
                          <button
                            onClick={() => setCurrentPage(page)}
                            className={`w-9 h-9 rounded-lg text-xs font-bold transition-all ${
                              page === currentPage
                                ? 'bg-[#D4AF37] text-[#140D08]'
                                : 'border border-amber-900/40 text-amber-200 hover:bg-amber-900/20'
                            }`}
                          >
                            {page}
                          </button>
                        </React.Fragment>
                      ))}
                  </div>

                  <button
                    onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                    disabled={currentPage === totalPages}
                    className="px-3 py-2 rounded-lg text-xs font-bold border border-amber-900/40 text-amber-200 disabled:opacity-30 disabled:cursor-not-allowed hover:bg-amber-900/20 transition-all"
                  >
                    Next
                  </button>
                </div>
              )}
            </>
          )}
        </div>
      </div>

      {/* Category FAQ */}
      {activeCategoryObj?.seo?.faqs && activeCategoryObj.seo.faqs.length > 0 && selectedSubcategory === 'all' && (
        <div className="max-w-3xl space-y-4 pt-4">
          <h2 className="text-xl font-serif font-bold text-amber-100">
            {activeCategoryObj.name} — Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {activeCategoryObj.seo.faqs.map((item, idx) => (
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

      {/* Mobile Slide-Over Filter Drawer */}
      {mobileFilterOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex justify-end bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="w-full max-w-xs sm:max-w-sm bg-[#140D08] h-full overflow-y-auto p-6 space-y-6 border-l border-amber-900/40 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-amber-900/40 pb-4">
                <div className="flex items-center gap-2 font-serif font-bold text-amber-100 text-base">
                  <Filter className="w-5 h-5 text-[#D4AF37]" />
                  <span>Category & Filter Vault</span>
                </div>
                <button
                  onClick={() => setMobileFilterOpen(false)}
                  className="p-2 text-stone-400 hover:text-amber-100 rounded-lg bg-stone-900"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {renderFilterSidebar()}
            </div>

            <div className="pt-4 border-t border-amber-900/40 space-y-2">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="w-full py-3 bg-[#D4AF37] text-[#140D08] font-bold text-xs rounded-xl shadow-lg"
              >
                Show {sortedProducts.length} Results
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
