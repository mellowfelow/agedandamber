export const getRouteUrl = {
  home: () => '#/',
  shop: (category?: string) => (category && category !== 'all' ? `#/shop/${category}` : '#/shop'),
  product: (slug: string) => `#/product/${slug}`,
  about: () => '#/about',
  blog: (postSlug?: string) => (postSlug ? `#/blog/${postSlug}` : '#/blog'),
  faq: () => '#/faq',
  wholesale: () => '#/wholesale',
  contact: () => '#/contact',
};

export interface RouteState {
  view: string;
  category: string;
  productSlug: string | null;
  blogSlug: string | null;
}

export function parseHash(hash: string): RouteState {
  const cleanHash = hash.replace(/^#\/?/, '').trim();

  if (!cleanHash || cleanHash === 'home') {
    return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
  }

  const parts = cleanHash.split('/').map((p) => decodeURIComponent(p));

  if (parts[0] === 'shop') {
    const category = parts[1] || 'all';
    return { view: 'shop', category, productSlug: null, blogSlug: null };
  }

  if (parts[0] === 'product' && parts[1]) {
    return { view: 'product-detail', category: 'all', productSlug: parts[1], blogSlug: null };
  }

  if (parts[0] === 'about') {
    return { view: 'about', category: 'all', productSlug: null, blogSlug: null };
  }

  if (parts[0] === 'blog') {
    const blogSlug = parts[1] || null;
    return { view: 'blog', category: 'all', productSlug: null, blogSlug };
  }

  if (parts[0] === 'faq') {
    return { view: 'faq', category: 'all', productSlug: null, blogSlug: null };
  }

  if (parts[0] === 'wholesale') {
    return { view: 'wholesale', category: 'all', productSlug: null, blogSlug: null };
  }

  if (parts[0] === 'contact') {
    return { view: 'contact', category: 'all', productSlug: null, blogSlug: null };
  }

  return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
}
