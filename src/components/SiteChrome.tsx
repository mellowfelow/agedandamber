'use client';

import React from 'react';
import { usePathname } from 'next/navigation';
import { Header } from './Header';
import { Footer } from './Footer';
import { AgeGateModal } from './AgeGateModal';
import { GdprBanner } from './GdprBanner';
import { CartDrawer } from './CartDrawer';
import { CheckoutModal } from './CheckoutModal';
import { ProductQuickView } from './ProductQuickView';
import { TawkWidget } from './TawkWidget';

/**
 * The admin dashboard is a separate, passcode-gated tool — it doesn't want
 * the storefront chrome (nav, age gate, cookie banner, chat widget, cart).
 * Everything else keeps the full site shell.
 */
export const SiteChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isAdmin = pathname?.startsWith('/admin');

  if (isAdmin) {
    return <main id="main" className="flex-1">{children}</main>;
  }

  return (
    <>
      <AgeGateModal />
      <GdprBanner />
      <Header />
      <main id="main" className="flex-1">{children}</main>
      <Footer />
      <CartDrawer />
      <CheckoutModal />
      <ProductQuickView />
      <TawkWidget />
    </>
  );
};
