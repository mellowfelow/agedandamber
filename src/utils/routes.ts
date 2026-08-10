export const getRouteUrl = {
  home: () => '/',
  shop: (category?: string) => (category && category !== 'all' ? `/shop/${category}/` : '/shop/'),
  product: (category: string, slug: string) => `/shop/${category}/${slug}/`,
  about: () => '/about/',
  blog: (postSlug?: string) => (postSlug ? `/blog/${postSlug}/` : '/blog/'),
  faq: () => '/faq/',
  wholesale: () => '/wholesale/',
  contact: () => '/contact/',
};
