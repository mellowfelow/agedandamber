import React, { useState, useEffect } from 'react';
import { Product, CartItem } from './types';
import { PRODUCTS } from './data/products';
import { SITE } from './config/site';

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

  const handleSelectProduct = (product: Product) => {
    setSelectedProduct(product);
    setCurrentView('product-detail');
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
        setCurrentView={setCurrentView}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
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
            setCurrentView={setCurrentView}
            setSelectedCategory={setSelectedCategory}
          />
        )}

        {currentView === 'shop' && (
          <ShopView
            products={PRODUCTS}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
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
              onBack={() => setCurrentView('shop')}
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
        setCurrentView={setCurrentView}
        setSelectedCategory={setSelectedCategory}
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
