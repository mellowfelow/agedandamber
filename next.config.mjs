// Content-Security-Policy. Kept in one place and applied via both
// next.config headers() (so `next start` / local testing gets it) and
// vercel.json (production). 'unsafe-inline' on script/style is required by
// Next's App Router hydration payload and the inline age-gate script
// without a nonce setup; everything else is an explicit allowlist. The
// only third parties are the Tawk.to chat widget and the Unsplash image
// used as a broken-image fallback.
const CSP = [
  "default-src 'self'",
  "script-src 'self' 'unsafe-inline' 'unsafe-eval' https://embed.tawk.to https://*.tawk.to https://cdn.jsdelivr.net",
  "style-src 'self' 'unsafe-inline' https://*.tawk.to https://fonts.googleapis.com",
  "img-src 'self' data: blob: https://images.unsplash.com https://*.tawk.to https://*.amazonaws.com",
  "font-src 'self' data: https://*.tawk.to https://fonts.gstatic.com",
  "connect-src 'self' https://*.tawk.to wss://*.tawk.to",
  "frame-src 'self' https://*.tawk.to",
  "media-src 'self' blob: https://*.tawk.to",
  "worker-src 'self' blob:",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'self'",
  'upgrade-insecure-requests',
].join('; ');

/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  // nodemailer uses dynamic requires internally; keep it external to the
  // serverless bundle so the /api/order + /api/inquiry SMTP send works.
  serverExternalPackages: ['nodemailer'],
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
    // Vercel's on-the-fly image optimization is metered per source image on
    // the Hobby plan and this catalog has 1,300+ product photos plus 268
    // blog images — well past that quota, which made most /_next/image
    // requests fail with 402 Payment Required in production (confirmed via
    // direct fetch against the live site) even though the underlying static
    // files were all serving fine. Disabling optimization serves the
    // pre-built webp files directly instead of transforming them on
    // request: no quota, no 402s, and next/image still provides lazy
    // loading, `fill`, and `sizes` layout — it just skips resizing/format
    // negotiation. Revisit if the project ever moves to a paid Vercel plan.
    unoptimized: true,
  },
  async headers() {
    // Standard security headers — Vercel already terminates TLS and adds
    // HSTS for the custom domain at the edge, so this only covers the
    // headers the app itself is responsible for.
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
          { key: 'Content-Security-Policy', value: CSP },
        ],
      },
      {
        // Admin dashboard + its API: never cached, never indexed even if
        // robots.txt is ignored.
        source: '/admin/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store' },
          { key: 'X-Robots-Tag', value: 'noindex, nofollow' },
        ],
      },
      {
        source: '/api/admin/:path*',
        headers: [{ key: 'Cache-Control', value: 'no-store' }],
      },
    ];
  },
  async redirects() {
    return [
      // Category slug changes. These were in vercel.json but weren't firing
      // (Vercel's Next.js build only reliably honours the redirects it emits
      // from next.config); keeping them here fixes /shop/vodka|gin|rum/*.
      {
        source: '/shop/vodka/:path*',
        destination: '/shop/craft-vodka/:path*',
        permanent: true,
      },
      {
        source: '/shop/gin/:path*',
        destination: '/shop/artisanal-gin/:path*',
        permanent: true,
      },
      {
        source: '/shop/rum/:path*',
        destination: '/shop/aged-dark-rum/:path*',
        permanent: true,
      },
      {
        source: '/shop/aged-dark-rum/plantation-xo-20th-anniversary-rum',
        destination: '/shop/aged-dark-rum/planteray-xo-20th-anniversary-rum',
        permanent: true,
      },
      {
        source: '/shop/scotch-whisky/aberlour-16-year-old-single-malt-scotch-whisky',
        destination: '/shop/scotch-whisky/aberlour-16-year-double-cask',
        permanent: true,
      },
      {
        source: '/shop/scotch-whisky/glen-scotia-double-cask-single-malt-scotch-whisky',
        destination: '/shop/scotch-whisky/glen-scotia-double-cask',
        permanent: true,
      },
      {
        source: '/shop/scotch-whisky/glendronach-15-year-revival',
        destination: '/shop/scotch-whisky/glendronach-15-year-old-revival-single-malt-scotch-whisky',
        permanent: true,
      },
      {
        source: '/shop/bourbon-whiskey/bookers-bourbon',
        destination: '/shop/bourbon-whiskey/bookers-small-batch-bourbon',
        permanent: true,
      },
      {
        source: '/shop/beer/samuel-adams-boston-lager',
        destination: '/shop/beer/samuel-adams-boston-lager-12-x-12oz-bottles',
        permanent: true,
      },
      {
        source: '/shop/tequila-mezcal/el-tesoro-extra-anejo',
        destination: '/shop/tequila-mezcal/el-tesoro-extra-anejo-tequila-750ml',
        permanent: true,
      },
      {
        source: '/shop/beer/bells-two-hearted-ale',
        destination: '/shop/beer/bells-two-hearted-ale-6-x-12oz-can',
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
