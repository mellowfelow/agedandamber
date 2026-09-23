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
 * The admin dashboard and the /order/* transactional flows (e.g. the
 * payment-confirmation upload) are focused, single-purpose pages — they
 * don't want the storefront chrome (nav, age gate, cookie banner, chat
 * widget, cart). Everything else keeps the full site shell.
 */
export const SiteChrome: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const pathname = usePathname();
  const isChromeFree = pathname?.startsWith('/admin') || pathname?.startsWith('/order/');

  if (isChromeFree) {
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
