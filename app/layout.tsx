import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { AppStateProvider } from './providers';
import { Header } from '@/src/components/Header';
import { Footer } from '@/src/components/Footer';
import { AgeGateModal } from '@/src/components/AgeGateModal';
import { GdprBanner } from '@/src/components/GdprBanner';
import { CartDrawer } from '@/src/components/CartDrawer';
import { CheckoutModal } from '@/src/components/CheckoutModal';
import { ProductQuickView } from '@/src/components/ProductQuickView';
import { TawkWidget } from '@/src/components/TawkWidget';
import { SITE, BRAND } from '@/src/config/site';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-plus-jakarta-sans',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(`https://${SITE.domain}`),
  title: {
    default: 'Aged & Amber — Fine Spirits, Rare Casks & Cellar Reserve',
    template: `%s | ${SITE.name}`,
  },
  description: BRAND.description,
  icons: { icon: '/favicon.svg' },
  openGraph: {
    siteName: SITE.name,
    type: 'website',
    locale: SITE.locale,
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cinzel.variable} ${plusJakartaSans.variable}`}>
      <body className="min-h-screen bg-[#140D08] text-amber-50 font-sans selection:bg-[#D4AF37] selection:text-[#140D08] flex flex-col justify-between overflow-x-hidden">
        <AppStateProvider>
          <AgeGateModal />
          <GdprBanner />
          <Header />
          <main className="flex-1">{children}</main>
          <Footer />
          <CartDrawer />
          <CheckoutModal />
          <ProductQuickView />
          <TawkWidget />
        </AppStateProvider>
      </body>
    </html>
  );
}
