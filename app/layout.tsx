import type { Metadata } from 'next';
import { Cinzel, Plus_Jakarta_Sans } from 'next/font/google';
import Script from 'next/script';
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
    // Fallback for every page that doesn't set its own openGraph.images
    // (about, FAQ, wholesale, contact, shop index, blog index, hub pages,
    // and previously the homepage) — without this, links to those pages
    // shared on social/Slack/iMessage, or scraped by an AI crawler looking
    // for a representative image, had nothing to show at all. Individual
    // product pages, and now blog posts and category pages, override this
    // with their own more specific image.
    images: ['/images/hero/hero-1.webp'],
  },
  twitter: {
    card: 'summary_large_image',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${plusJakartaSans.variable}`}
      // The age-gate check script adds `age-verified` to <html> before
      // hydration; without this, React 19 flags the className mismatch and
      // can strip the class, briefly un-hiding the age gate for a visitor
      // who already passed it.
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-[#140D08] text-amber-50 font-sans selection:bg-[#D4AF37] selection:text-[#140D08] flex flex-col justify-between overflow-x-hidden">
        {/* Runs synchronously during parse, before the age-gate markup below —
            a returning visitor's browser then never paints the gate at all.
            Plain inline <script>, not next/script, so its position (and
            therefore its timing) is guaranteed. */}
        <script
          id="age-gate-check"
          dangerouslySetInnerHTML={{
            __html: `(function(){var v=false;try{v=localStorage.getItem('aged-and-amber-age-verified')==='true'}catch(e){}if(!v){try{v=document.cookie.indexOf('aa_age_verified=1')>-1}catch(e){}}if(v){document.documentElement.className+=' age-verified'}})();`,
          }}
        />
        {/* Critical CSS for the age gate — the first thing every fresh visitor sees.
            Inlined so it paints correctly before the site-wide stylesheet has
            downloaded. It MUST also carry the `html.age-verified` hide rule:
            without it, a returning visitor's browser paints a full-screen black
            gate for the time it takes the external stylesheet to load, then it
            vanishes — a jarring flash on every page load. */}
        <style
          id="age-gate-critical-css"
          dangerouslySetInnerHTML={{
            __html: `html.age-verified #age-gate-modal{display:none!important}html:not(.age-verified),html:not(.age-verified) body{overflow-y:hidden}#age-gate-modal{position:fixed;inset:0;z-index:100;overflow-y:auto;background-color:#000;opacity:1;animation:none}#age-gate-scroll{min-height:100%;display:flex;align-items:center;justify-content:center;padding:1rem}#age-gate-card{width:100%;max-width:32rem;padding:2rem;border-radius:1rem;background-color:#1C140E;border:1px solid rgba(212,175,55,.3);color:#fffbeb;text-align:center;box-shadow:0 25px 50px -12px rgba(0,0,0,.25);position:relative;overflow:hidden}#age-gate-eyebrow{font-size:.75rem;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#D4AF37;margin-bottom:.5rem;display:block}#age-gate-heading{font-family:var(--font-cinzel),Georgia,"Times New Roman",serif;font-size:1.875rem;line-height:1.2;font-weight:700;color:#fef3c7;margin-bottom:.75rem;letter-spacing:-.025em}#age-gate-desc{color:rgba(253,230,138,.8);font-size:.875rem;line-height:1.43;margin-bottom:1.5rem}`,
          }}
        />
        <Script src="/js/webmcp.js" strategy="beforeInteractive" />
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
