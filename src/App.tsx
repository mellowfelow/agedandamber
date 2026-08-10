import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { SITE } from './config/site';
import { parseHash, getRouteUrl } from './utils/routes';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { AgeGateModal } from './components/AgeGateModal';
import { GdprBanner } from './components/GdprBanner';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { ProductQuickView } from './components/ProductQuickView';
import { ChatHub } from './components/ChatHub';
import { JsonLd } from './components/JsonLd';

import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { AboutView } from './views/AboutView';
import { BlogView } from './views/BlogView';
import { FaqView } from './views/FaqView';
import { WholesaleView } from './views/WholesaleView';
import { ContactView } from './views/ContactView';

export default function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);

  // Synchronize location hash with app state
  useEffect(() => {
    const handleLocationChange = () => {
      const route = parseHash(window.location.hash);
      setCurrentView(route.view);
      setSelectedCategory(route.category);

      if (route.view === 'product-detail' && route.productSlug) {
        const found = PRODUCTS.find(
          (p) => p.slug === route.productSlug || p.id === route.productSlug
        );
        if (found) {
          setSelectedProduct(found);
        } else {
          // Fallback if product slug not found
          setCurrentView('shop');
        }
      }
    };

    // Initialize on mount
    handleLocationChange();

    window.addEventListener('hashchange', handleLocationChange);
    return () => window.removeEventListener('hashchange', handleLocationChange);
  }, []);

  // Navigation handlers that update hash location
  const handleNavView = (view: string, category: string = 'all') => {
    let url = '#/';
    if (view === 'home') url = getRouteUrl.home();
    else if (view === 'shop') url = getRouteUrl.shop(category);
    else if (view === 'about') url = getRouteUrl.about();
    else if (view === 'blog') url = getRouteUrl.blog();
    else if (view === 'faq') url = getRouteUrl.faq();
    else if (view === 'wholesale') url = getRouteUrl.wholesale();
    else if (view === 'contact') url = getRouteUrl.contact();

    if (window.location.hash !== url) {
      window.location.hash = url;
    } else {
      setCurrentView(view);
      setSelectedCategory(category);
    }
  };

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    const url = getRouteUrl.product(product.slug);
    if (window.location.hash !== url) {
      window.location.hash = url;
    } else {
      setCurrentView('product-detail');
    }
  };

  // Cart State with localStorage
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart]);

  // Scroll to top on view change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentView, selectedProduct]);

  const handleAddToCart = (product: Product, quantity: number = 1) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prev, { product, quantity }];
    });
    setCartDrawerOpen(true);
  };

  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const handleRemoveItem = (productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const handleClearCart = () => {
    setCart([]);
  };

  const handleNav = (view: string, category?: string) => {
    handleNavView(view, category);
  };

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 font-sans selection:bg-[#D4AF37] selection:text-[#140D08] flex flex-col justify-between overflow-x-hidden">
      {/* Schema JSON-LD */}
      <JsonLd type="homepage" />

      {/* 21+ Age Gate & Cookie Consent */}
      <AgeGateModal />
      <GdprBanner />

      {/* Main Header Nav */}
      <Header
        currentView={currentView}
        setCurrentView={handleNav}
        selectedCategory={selectedCategory}
        setSelectedCategory={(cat) => handleNavView('shop', cat)}
        cartCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        onOpenCart={() => setCartDrawerOpen(true)}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      {/* Page Content View Router */}
      <main className="flex-1">
        {currentView === 'home' && (
          <HomeView
            products={PRODUCTS}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectProduct={handleSelectProduct}
            setCurrentView={handleNav}
            setSelectedCategory={(cat) => handleNavView('shop', cat)}
          />
        )}

        {currentView === 'shop' && (
          <ShopView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            setSelectedCategory={(cat) => handleNavView('shop', cat)}
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
            onAddToCart={handleAddToCart}
            onQuickView={(p) => setQuickViewProduct(p)}
            onSelectProduct={handleSelectProduct}
          />
        )}

        {currentView === 'product-detail' && selectedProduct && (
          <>
            <JsonLd type="product" data={selectedProduct} />
            <ProductDetailView
              product={selectedProduct}
              allProducts={PRODUCTS}
              onBack={() => handleNavView('shop')}
              onAddToCart={handleAddToCart}
              onQuickView={(p) => setQuickViewProduct(p)}
              onSelectProduct={handleSelectProduct}
            />
          </>
        )}

        {currentView === 'about' && <AboutView />}
        {currentView === 'blog' && <BlogView />}
        {currentView === 'faq' && <FaqView />}
        {currentView === 'wholesale' && <WholesaleView />}
        {currentView === 'contact' && <ContactView />}
      </main>

      {/* Main Footer */}
      <Footer
        setCurrentView={handleNav}
        setSelectedCategory={(cat) => handleNavView('shop', cat)}
      />

      {/* Modals & Overlays */}
      <CartDrawer
        isOpen={cartDrawerOpen}
        onClose={() => setCartDrawerOpen(false)}
        cart={cart}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onOpenCheckout={() => setCheckoutModalOpen(true)}
      />

      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        cart={cart}
        onClearCart={handleClearCart}
      />

      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      {/* Live Chat Floating Hub */}
      <ChatHub />
    </div>
  );
}
