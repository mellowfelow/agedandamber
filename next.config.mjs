/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  reactStrictMode: true,
  images: {
    remotePatterns: [{ protocol: 'https', hostname: 'images.unsplash.com' }],
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
