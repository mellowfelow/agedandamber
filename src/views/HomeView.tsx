'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Product } from '../types';
import { ProductCard } from '../components/ProductCard';
import { CATEGORIES } from '../data/products';
import { BLOG_POSTS } from '../data/blog';
import { FAQ_ITEMS } from '../data/faq';
import {
  Wine,
  ShieldCheck,
  Award,
  Coins,
  ArrowRight,
  Flame,
  MapPin,
  ChevronRight,
  ChevronDown,
  Truck,
  ChevronLeft,
} from 'lucide-react';
import { SITE, BRAND, SHOP, CONTACT } from '../config/site';

import { getRouteUrl } from '../utils/routes';

interface HomeViewProps {
  products: Product[];
}

export const HomeView: React.FC<HomeViewProps> = ({ products }) => {
  const featuredProducts = products.filter((p) => p.featured);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(0);

  // Hero Carousel Data with SEO captions and image slugs
  const heroSlides = [
    {
      id: 'slide-1',
      badge: 'Napa Valley Curated Spirits House',
      headingText: 'Authentic Allocated Bourbon, Scotch & Rare Cask Spirits',
      isH1: true, // Only slide 1 has H1
      caption: 'Every bottle is sourced directly from trusted distilleries and licensed distributors, verified for authenticity, and shipped from our Napa Valley cellar.',
      image: '/images/hero/hero-1.webp',
      imageAlt: 'Amber bourbon whiskey poured into a crystal tumbler beside aging oak barrels in a dim spirits cellar',
      slug: 'bourbon-whiskey-pour-napa-valley-cellar',
      categorySlug: 'bourbon-whiskey',
      ctaText: 'Explore Spirits Vault',
    },
    {
      id: 'slide-2',
      badge: 'Hand-Selected Allocations',
      headingText: 'Rare Cask Finishes & Single Barrel Releases',
      isH1: false,
      caption: 'A rotating lineup of allocated bourbons, single malts, and añejo tequilas sourced directly from distillery partners across Kentucky, Scotland, and Mexico.',
      image: '/images/hero/hero-5.webp',
      imageAlt: 'Lineup of rare cask-strength whiskey, vodka, and tequila decanters displayed on a bar shelf',
      slug: 'rare-cask-strength-spirits-lineup',
      categorySlug: 'all',
      ctaText: 'Shop Rare Vault',
    },
    {
      id: 'slide-3',
      badge: 'Direct Import Speyside & Highland Single Malts',
      headingText: 'First-Fill Sherry & Highland Single Malt Scotch',
      isH1: false,
      caption: 'Authentic single malt scotch sourced directly from distillery allocations, including sherry-finished and Highland expressions.',
      image: '/images/hero/hero-7.webp',
      imageAlt: 'Single malt Scotch whisky bottles lined up in a moody, softly lit bar display',
      slug: 'single-malt-scotch-whisky-collection',
      categorySlug: 'scotch-whisky',
      ctaText: 'Shop Rare Scotch',
    },
    {
      id: 'slide-4',
      badge: 'Small Batch & Single Barrel Bourbon',
      headingText: 'Hand-Selected Bourbon From Trusted Distilleries',
      isH1: false,
      caption: '28 real, verified bourbon bottlings sourced directly and shipped with mandatory adult-signature delivery.',
      image: '/images/hero/hero-10.webp',
      imageAlt: 'Single barrel bourbon whiskey bottles resting in a black presentation case',
      slug: 'small-batch-single-barrel-bourbon-whiskey',
      categorySlug: 'bourbon-whiskey',
      ctaText: 'Shop Bourbon Whiskey',
    },
    {
      id: 'slide-5',
      badge: 'Artisanal Tequila & Mezcal',
      headingText: 'Blanco Tequila & Artisanal Mezcal, Sourced Direct',
      isH1: false,
      caption: '100% agave tequila and small-batch mezcal sourced directly from Jalisco and Oaxaca producers for collectors and mixologists alike.',
      image: '/images/hero/hero-3.webp',
      imageAlt: 'Close-up of blanco tequila and artisanal mezcal bottles with a cocktail shaker on a bar counter',
      slug: 'artisanal-tequila-mezcal-agave-spirits',
      categorySlug: 'tequila-mezcal',
      ctaText: 'Discover Artisanal Tequila',
    },
  ];

  // Auto-play timer for hero carousel
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isPaused, heroSlides.length]);

  return (
    <div className="space-y-16 pb-16">
      {/* Hero Carousel Section */}
      <section
        className="relative min-h-[80vh] flex items-center justify-center bg-[#140D08] overflow-hidden border-b border-[#D4AF37]/30"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {/* Background Images with Fade */}
        {heroSlides.map((slide, idx) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              activeSlide === idx ? 'opacity-100 z-0' : 'opacity-0 -z-10'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className="w-full h-full object-cover filter brightness-[0.38] contrast-125 scale-105"
              loading={idx === 0 ? 'eager' : 'lazy'}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#140D08] via-[#140D08]/60 to-transparent" />
          </div>
        ))}

        {/* Ambient Glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#D4AF37]/10 rounded-full blur-[140px] pointer-events-none z-10" />

        {/* Slide Content */}
        <div className="relative z-20 max-w-5xl mx-auto text-center space-y-6 px-4 sm:px-6 lg:px-8 py-20">
          {heroSlides.map((slide, idx) => {
            if (activeSlide !== idx) return null;
            return (
              <div key={slide.id} className="space-y-6 animate-fade-in">
                <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-[#2C1A0E]/90 border border-[#D4AF37]/50 text-[#D4AF37] text-xs font-semibold uppercase tracking-widest shadow-xl backdrop-blur-md">
                  <Flame className="w-3.5 h-3.5 text-[#D4AF37]" />
                  {slide.badge}
                </div>

                {/* EXACTLY ONE H1 PER PAGE rule: Slide 0 has H1, others use styled div */}
                {slide.isH1 ? (
                  <h1 className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-amber-100 tracking-tight leading-[1.1] drop-shadow-md">
                    {slide.headingText}
                  </h1>
                ) : (
                  <div className="text-4xl sm:text-6xl lg:text-7xl font-serif font-bold text-amber-100 tracking-tight leading-[1.1] drop-shadow-md">
                    {slide.headingText}
                  </div>
                )}

                <p className="text-base sm:text-xl text-amber-200/90 max-w-2xl mx-auto leading-relaxed font-sans">
                  {slide.caption}
                </p>

                {/* SEO Image Caption Tag */}
                <div className="pt-1 text-[11px] text-amber-400/60 font-mono tracking-wide">
                  <span className="text-[#D4AF37]">Location Focus:</span> {slide.imageAlt} • <code className="text-amber-300/80">{slide.slug}</code>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Link
                    href={getRouteUrl.shop(slide.categorySlug)}
                    className="w-full sm:w-auto py-4 px-8 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all shadow-xl shadow-[#D4AF37]/20 flex items-center justify-center gap-2 group"
                  >
                    {slide.ctaText}
                    <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>

                  <Link
                    href={getRouteUrl.wholesale()}
                    className="w-full sm:w-auto py-4 px-8 rounded-xl bg-amber-950/60 text-amber-200 border border-amber-800/60 font-medium text-sm hover:bg-amber-900/60 backdrop-blur-sm transition-all"
                  >
                    Wholesale & Private Allocations
                  </Link>
                </div>
              </div>
            );
          })}

          {/* Trust Highlights */}
          <div className="pt-8 border-t border-amber-900/50 grid grid-cols-2 md:grid-cols-4 gap-4 text-xs text-amber-300/80">
            <div className="flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>21+ Adult Signature Delivery</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Truck className="w-4 h-4 text-[#D4AF37]" />
              <span>Free Express Shipping over ${SHOP.freeShippingThreshold}</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Coins className="w-4 h-4 text-emerald-400" />
              <span>10% Off via Bitcoin & USDT</span>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Non-Chill Filtered</span>
            </div>
          </div>
        </div>

        {/* Carousel Navigation Arrows & Indicators */}
        <button
          onClick={() =>
            setActiveSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length)
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-amber-900/40 text-amber-200 hover:text-white hover:bg-black/80 transition-all"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        <button
          onClick={() => setActiveSlide((prev) => (prev + 1) % heroSlides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-3 rounded-full bg-black/50 border border-amber-900/40 text-amber-200 hover:text-white hover:bg-black/80 transition-all"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2 rounded-full transition-all ${
                activeSlide === idx ? 'w-8 bg-[#D4AF37]' : 'w-2 bg-amber-900/60 hover:bg-amber-600'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Categories Grid — Full 11 Categories List */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
              Curated Spirits Catalogue
            </span>
            <h2 className="text-3xl font-serif font-bold text-amber-100">
              Explore Cask & Spirits Categories
            </h2>
          </div>

          <Link
            href={getRouteUrl.shop()}
            className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
          >
            View All Categories ({CATEGORIES.length})
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={getRouteUrl.shop(category.slug)}
              className="group relative rounded-3xl overflow-hidden border border-[#D4AF37]/20 hover:border-[#D4AF37]/60 transition-all duration-300 cursor-pointer h-80 flex flex-col justify-end p-6 shadow-xl block"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: `url(${category.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />

              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-bold text-[#D4AF37] uppercase tracking-widest block">
                  {category.subcategories.length} Subcategories
                </span>
                <h3 className="text-xl font-serif font-bold text-amber-100 group-hover:text-[#D4AF37] transition-colors">
                  {category.name}
                </h3>
                <p className="text-xs text-amber-200/80 line-clamp-2">
                  {category.description}
                </p>

                {/* Subcategory Pills Preview */}
                <div className="flex flex-wrap gap-1 pt-1">
                  {category.subcategories.slice(0, 3).map((sub) => (
                    <span
                      key={sub}
                      className="py-0.5 px-2 rounded-md bg-stone-900/80 text-[9px] text-amber-300/90 border border-stone-800"
                    >
                      {sub}
                    </span>
                  ))}
                  {category.subcategories.length > 3 && (
                    <span className="py-0.5 px-2 rounded-md bg-amber-950/80 text-[9px] text-[#D4AF37]">
                      +{category.subcategories.length - 3} more
                    </span>
                  )}
                </div>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-[#D4AF37]">
                  <span>Browse {category.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Spirits Vault */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
              Hand-Selected Allocations
            </span>
            <h2 className="text-3xl font-serif font-bold text-amber-100">
              Featured Spirits Releases
            </h2>
          </div>

          <Link
            href={getRouteUrl.shop()}
            className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
          >
            View Full Vault ({products.length} bottles)
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Authority Section — "About Aged And Amber" */}
      <section className="bg-[#18100A] border-y border-[#D4AF37]/20 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block">
              Heritage & Craftsmanship
            </span>

            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100 leading-tight">
              About Aged And Amber: Napa Valley Curated Spirits House
            </h2>

            <p className="text-amber-200/80 text-sm leading-relaxed">
              Founded in {BRAND.foundingYear} in {BRAND.foundingLocation}, {SITE.name} was established with a singular vision: to source and curate uncompromised, authentic allocated spirits directly from trusted distilleries and licensed distributors.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
              {BRAND.differentiation.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 p-3 rounded-xl bg-amber-950/30 border border-amber-900/40">
                  <Wine className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                  <span className="text-amber-200/90">{point}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-6">
              <Link
                href={getRouteUrl.about()}
                className="py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-xs hover:bg-[#E5C158] transition-all"
              >
                Read Our Sourcing Story
              </Link>

              <div className="flex items-center gap-2 text-xs text-amber-400">
                <MapPin className="w-4 h-4 text-[#D4AF37]" />
                <span>{CONTACT.hq}</span>
              </div>
            </div>
          </div>

          <div className="relative aspect-video rounded-3xl overflow-hidden border border-[#D4AF37]/30 shadow-2xl">
            <img
              src="/images/hero/hero-9.webp"
              alt="Rows of wine and spirits bottles resting in a climate-controlled Napa Valley cellar rack"
              className="w-full h-full object-cover filter brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-stone-950/80 backdrop-blur-md border border-stone-800 text-amber-100 text-xs">
              <p className="font-serif font-bold text-sm text-[#D4AF37]">Napa Valley Spirits Cellar</p>
              <p className="text-amber-300/70 text-[11px] mt-1">
                Temperature-controlled storage cellar holding thousands of curated, allocated bottles.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cask Blog Journal Snippets */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
              Spirits Education
            </span>
            <h2 className="text-3xl font-serif font-bold text-amber-100">
              The Cask & Wood Journal
            </h2>
          </div>

          <Link
            href={getRouteUrl.blog()}
            className="text-xs font-bold text-[#D4AF37] hover:underline flex items-center gap-1"
          >
            Explore All Journal Articles
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={getRouteUrl.blog(post.slug)}
              className="bg-[#1A120B] rounded-2xl border border-amber-900/30 overflow-hidden cursor-pointer hover:border-[#D4AF37]/50 transition-all group flex flex-col justify-between block"
            >
              <div>
                <div className="aspect-video relative overflow-hidden bg-stone-900">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <span className="absolute top-3 left-3 py-1 px-2.5 rounded-md bg-[#140D08]/90 text-[#D4AF37] text-[10px] font-bold uppercase">
                    {post.category}
                  </span>
                </div>

                <div className="p-5 space-y-2">
                  <div className="text-[11px] text-amber-400/60 flex items-center justify-between">
                    <span>{post.author}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h3 className="font-serif font-bold text-amber-100 text-lg group-hover:text-[#D4AF37] transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-xs text-amber-200/70 line-clamp-3">
                    {post.excerpt}
                  </p>
                </div>
              </div>

              <div className="px-5 pb-5 pt-2 border-t border-amber-900/20 text-xs font-semibold text-[#D4AF37] flex items-center gap-1">
                Read Article
                <ArrowRight className="w-3.5 h-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Direct-Answer FAQ Preview */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
            Client Information
          </span>
          <h2 className="text-3xl font-serif font-bold text-amber-100">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-4">
          {FAQ_ITEMS.slice(0, 5).map((faq, idx) => {
            const isOpen = openFaqIdx === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-[#1A120B] border border-amber-900/40 text-amber-100 overflow-hidden transition-all duration-300 hover:border-[#D4AF37]/40 shadow-md"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaqIdx(isOpen ? null : idx)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none group cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="font-serif font-bold text-base text-[#D4AF37] group-hover:text-[#E5C158] transition-colors pr-2">
                    {faq.question}
                  </h3>
                  <div className={`p-1.5 rounded-lg bg-stone-900/80 border border-amber-900/30 text-[#D4AF37] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-amber-950/60 border-[#D4AF37]/50' : ''}`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-amber-200/80 leading-relaxed border-t border-amber-900/20 mt-1 pt-3 animate-fadeIn">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-center pt-2">
          <Link
            href={getRouteUrl.faq()}
            className="inline-block py-3 px-6 rounded-xl bg-amber-950/50 text-amber-200 border border-amber-800/50 text-xs font-semibold hover:bg-amber-900/50 transition-all"
          >
            View Complete FAQ Center
          </Link>
        </div>
      </section>
    </div>
  );
};
