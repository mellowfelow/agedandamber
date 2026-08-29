/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
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
        ],
      },
    ];
  },
  async redirects() {
    return [
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
