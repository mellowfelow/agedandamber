import React, { useState, useEffect } from 'react';
import { Wine, Search, ShoppingBag, Menu, X, ChevronDown, ShieldCheck, Coins, PhoneCall } from 'lucide-react';
import { SITE, SHOP, CONTACT } from '../config/site';
import { CATEGORIES } from '../data/products';

interface HeaderProps {
  currentView: string;
  setCurrentView: (view: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentView,
  setCurrentView,
  setSelectedCategory,
  cartCount,
  onOpenCart,
  searchQuery,
  setSearchQuery,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [announcementIdx, setAnnouncementIdx] = useState(0);
  const [shopDropdownOpen, setShopDropdownOpen] = useState(false);

  const announcements = [
    `Minimum Order $${SHOP.minOrder} • Fast Insured Express Delivery`,
    `Free Temperature-Controlled Shipping on Orders $${SHOP.freeShippingThreshold}+`,
    `Save 10% Instantly When Paying with Bitcoin (BTC) or USDT`,
    `Compliant Direct Spirits Shipping across 45 States • 21+ Adult Signature Required`,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setAnnouncementIdx((prev) => (prev + 1) % announcements.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [announcements.length]);

  const handleNav = (view: string, category: string = '') => {
    setCurrentView(view);
    if (category) {
      setSelectedCategory(category);
    }
    setMobileMenuOpen(false);
    setShopDropdownOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#140D08]/95 border-b border-[#D4AF37]/20 backdrop-blur-md text-amber-50">
      {/* Announcement Bar */}
      <div className="bg-[#2C1A0E] text-amber-200/90 text-xs py-2 px-4 border-b border-amber-900/30 overflow-hidden">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
          <div className="flex items-center gap-2 font-medium mx-auto md:mx-0">
            <Coins className="w-3.5 h-3.5 text-[#D4AF37]" />
            <span className="transition-all">
              {announcements[announcementIdx]}
            </span>
          </div>

          <div className="hidden md:flex items-center gap-4 text-[11px] text-amber-400/80">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              Verified 21+ Spirits House
            </span>
            <span>•</span>
            <a href={`tel:${CONTACT.phone}`} className="hover:text-amber-100 flex items-center gap-1">
              <PhoneCall className="w-3 h-3 text-[#D4AF37]" />
              {CONTACT.phone}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        {/* Mobile Hamburger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-amber-200 hover:text-amber-100"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Brand Logo */}
        <div
          onClick={() => handleNav('home')}
          className="flex items-center gap-3 cursor-pointer group shrink-0"
        >
          <div className="w-10 h-10 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/40 flex items-center justify-center group-hover:bg-[#D4AF37]/20 transition-all shadow-md">
            <Wine className="w-6 h-6 text-[#D4AF37] transform group-hover:rotate-12 transition-transform" />
          </div>
          <div>
            <span className="font-serif font-bold text-xl md:text-2xl text-amber-100 tracking-tight block leading-none">
              {SITE.name}
            </span>
            <span className="text-[10px] text-[#D4AF37] font-sans tracking-widest uppercase block mt-1">
              Craft Spirits & Rare Casks
            </span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium">
          <button
            onClick={() => handleNav('home')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'home' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            Home
          </button>

          {/* Shop Mega Dropdown */}
          <div
            className="relative"
            onMouseEnter={() => setShopDropdownOpen(true)}
            onMouseLeave={() => setShopDropdownOpen(false)}
          >
            <button
              onClick={() => handleNav('shop')}
              className={`hover:text-[#D4AF37] transition-colors flex items-center gap-1 py-2 ${currentView === 'shop' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
            >
              Shop Vault
              <ChevronDown className="w-4 h-4 opacity-70" />
            </button>

            {shopDropdownOpen && (
              <div className="absolute top-full -left-20 w-[640px] max-h-[80vh] overflow-y-auto p-6 bg-[#1C140E] rounded-2xl border border-[#D4AF37]/30 shadow-2xl z-50 animate-fade-in space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-amber-900/40">
                  <button
                    onClick={() => handleNav('shop', 'all')}
                    className="font-serif font-bold text-amber-100 text-sm hover:text-[#D4AF37]"
                  >
                    All Spirits Collection ({CATEGORIES.length} Categories)
                  </button>
                  <span className="text-[11px] text-[#D4AF37] font-sans">
                    Napa Cellar Direct
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                  {CATEGORIES.map((cat) => (
                    <div key={cat.slug} className="space-y-1">
                      <button
                        onClick={() => handleNav('shop', cat.slug)}
                        className="w-full text-left text-xs font-bold text-[#D4AF37] hover:underline block"
                      >
                        {cat.name}
                      </button>
                      <div className="pl-2 space-y-0.5">
                        {cat.subcategories.slice(0, 4).map((sub) => (
                          <button
                            key={sub}
                            onClick={() => handleNav('shop', cat.slug)}
                            className="block text-[11px] text-amber-200/70 hover:text-amber-100 text-left truncate w-full"
                          >
                            • {sub}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          <button
            onClick={() => handleNav('about')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'about' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            Our Story
          </button>

          <button
            onClick={() => handleNav('blog')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'blog' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            Cask Blog
          </button>

          <button
            onClick={() => handleNav('faq')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'faq' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            FAQ
          </button>

          <button
            onClick={() => handleNav('wholesale')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'wholesale' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            Wholesale
          </button>

          <button
            onClick={() => handleNav('contact')}
            className={`hover:text-[#D4AF37] transition-colors ${currentView === 'contact' ? 'text-[#D4AF37] font-semibold' : 'text-amber-200/90'}`}
          >
            Contact
          </button>
        </nav>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          {/* Search Trigger */}
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="p-2.5 rounded-xl bg-amber-950/40 border border-amber-900/40 text-amber-200 hover:text-amber-100 hover:border-[#D4AF37]/40 transition-all"
            aria-label="Search Spirits Vault"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Cart Trigger */}
          <button
            onClick={onOpenCart}
            className="p-2.5 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold hover:bg-[#E5C158] transition-all shadow-md flex items-center gap-2"
          >
            <ShoppingBag className="w-5 h-5" />
            <span className="hidden sm:inline text-xs font-bold">Vault Cart</span>
            <span className="w-5 h-5 rounded-full bg-[#140D08] text-[#D4AF37] text-[11px] flex items-center justify-center font-bold">
              {cartCount}
            </span>
          </button>
        </div>
      </div>

      {/* Search Bar Slide-Down */}
      {searchOpen && (
        <div className="bg-[#1C140E] border-b border-[#D4AF37]/30 p-4 animate-fade-in">
          <div className="max-w-2xl mx-auto relative flex items-center">
            <input
              type="text"
              autoFocus
              placeholder="Search rare bourbons, single malts, tequila, proof, cask type..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                if (currentView !== 'shop') setCurrentView('shop');
              }}
              className="w-full p-3.5 pr-10 rounded-xl bg-stone-900 border border-amber-800/40 text-amber-100 placeholder-stone-500 text-sm focus:outline-none focus:border-[#D4AF37]"
            />
            <button
              onClick={() => setSearchOpen(false)}
              className="absolute right-3 text-stone-400 hover:text-amber-200"
              aria-label="Close search"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#160E08] border-b border-[#D4AF37]/30 p-6 space-y-4 animate-fade-in max-h-[85vh] overflow-y-auto">
          <div className="grid grid-cols-1 gap-3">
            <button
              onClick={() => handleNav('home')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              Home
            </button>
            <button
              onClick={() => handleNav('shop')}
              className="text-left font-serif font-bold text-[#D4AF37] text-lg"
            >
              Shop All Spirits
            </button>

            <div className="pl-4 space-y-2 border-l border-amber-900/40 my-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.slug}
                  onClick={() => handleNav('shop', cat.slug)}
                  className="block text-left text-xs text-amber-300 hover:text-amber-100"
                >
                  • {cat.name}
                </button>
              ))}
            </div>

            <button
              onClick={() => handleNav('about')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              Our Story
            </button>
            <button
              onClick={() => handleNav('blog')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              Cask Blog
            </button>
            <button
              onClick={() => handleNav('faq')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              FAQ
            </button>
            <button
              onClick={() => handleNav('wholesale')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              Wholesale
            </button>
            <button
              onClick={() => handleNav('contact')}
              className="text-left font-serif font-bold text-amber-100 text-lg hover:text-[#D4AF37]"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
