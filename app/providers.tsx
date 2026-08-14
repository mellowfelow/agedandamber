'use client';

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import { Product, CartItem } from '@/src/types';
import { SITE } from '@/src/config/site';

interface AppState {
  cart: CartItem[];
  cartCount: number;
  addToCart: (product: Product, quantity?: number) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  removeItem: (productId: string) => void;
  clearCart: () => void;
  cartDrawerOpen: boolean;
  setCartDrawerOpen: (open: boolean) => void;
  checkoutModalOpen: boolean;
  setCheckoutModalOpen: (open: boolean) => void;
  quickViewProduct: Product | null;
  setQuickViewProduct: (product: Product | null) => void;
  searchQuery: string;
  setSearchQuery: (q: string) => void;
  cookieBannerVisible: boolean;
  setCookieBannerVisible: (visible: boolean) => void;
}

const AppStateContext = createContext<AppState | null>(null);

export function AppStateProvider({ children }: { children: React.ReactNode }) {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [cookieBannerVisible, setCookieBannerVisible] = useState(false);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(SITE.cartKey);
      if (saved) setCart(JSON.parse(saved));
    } catch (e) {
      console.error(e);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(SITE.cartKey, JSON.stringify(cart));
    } catch (e) {
      console.error(e);
    }
  }, [cart, hydrated]);

  const addToCart = useCallback((product: Product, quantity: number = 1) => {
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
  }, []);

  const updateQuantity = useCallback((productId: string, quantity: number) => {
    if (quantity <= 0) {
      setCart((prev) => prev.filter((item) => item.product.id !== productId));
      return;
    }
    setCart((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity } : item))
    );
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  }, []);

  const clearCart = useCallback(() => setCart([]), []);

  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <AppStateContext.Provider
      value={{
        cart,
        cartCount,
        addToCart,
        updateQuantity,
        removeItem,
        clearCart,
        cartDrawerOpen,
        setCartDrawerOpen,
        checkoutModalOpen,
        setCheckoutModalOpen,
        quickViewProduct,
        setQuickViewProduct,
        searchQuery,
        setSearchQuery,
        cookieBannerVisible,
        setCookieBannerVisible,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState(): AppState {
  const ctx = useContext(AppStateContext);
  if (!ctx) throw new Error('useAppState must be used within AppStateProvider');
  return ctx;
}
