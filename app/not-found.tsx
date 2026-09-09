import Link from 'next/link';
import { getRouteUrl } from '@/src/utils/routes';

// Next.js already emits `<meta name="robots" content="noindex">` for
// not-found.tsx and serves it with a 404 status — no extra metadata needed.

export default function NotFound() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-24 text-center space-y-6">
      <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-widest block">
        404 — Bottle Not Found
      </span>
      <h1 className="text-4xl sm:text-5xl font-serif font-bold text-amber-100">
        This page has left the cellar
      </h1>
      <p className="text-amber-200/70 text-sm">
        The page you're looking for doesn't exist or may have been moved.
      </p>
      <Link
        href={getRouteUrl.shop()}
        className="inline-block py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all"
      >
        Browse the Spirits Vault
      </Link>
    </div>
  );
}
