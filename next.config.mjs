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
    ];
  },
};

export default nextConfig;
