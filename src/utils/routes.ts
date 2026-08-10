export const getRouteUrl = {
  home: () => '/#/',
  shop: (category?: string) => (category && category !== 'all' ? `/#/shop/${category}` : '/#/shop'),
  product: (slug: string) => `/#/product/${slug}`,
  about: () => '/#/about',
  blog: (postSlug?: string) => (postSlug ? `/#/blog/${postSlug}` : '/#/blog'),
  faq: () => '/#/faq',
  wholesale: () => '/#/wholesale',
  contact: () => '/#/contact',
};

export interface RouteState {
  view: string;
  category: string;
  productSlug: string | null;
  blogSlug: string | null;
}

export function parseRoute(pathname: string, hash: string): RouteState {
  // Primary: Support hash routing for SPA deep-linking
  if (hash && hash.includes('#/')) {
    const cleanHash = hash.substring(hash.indexOf('#/') + 2).trim();
    if (!cleanHash) {
      return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
    }
    return parsePathParts(cleanHash.split('/'));
  }

  // Fallback: Support pathname routing if hash is absent
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '').trim();
  if (!cleanPath || cleanPath === 'home') {
    return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
  }

  const parts = cleanPath.split('/');
  return parsePathParts(parts);
}

function parsePathParts(parts: string[]): RouteState {
  const decodedParts = parts.map((p) => decodeURIComponent(p));

  if (decodedParts[0] === 'shop') {
    const category = decodedParts[1] || 'all';
    return { view: 'shop', category, productSlug: null, blogSlug: null };
  }

  if (decodedParts[0] === 'product' && decodedParts[1]) {
    return { view: 'product-detail', category: 'all', productSlug: decodedParts[1], blogSlug: null };
  }

  if (decodedParts[0] === 'about') {
    return { view: 'about', category: 'all', productSlug: null, blogSlug: null };
  }

  if (decodedParts[0] === 'blog') {
    const blogSlug = decodedParts[1] || null;
    return { view: 'blog', category: 'all', productSlug: null, blogSlug };
  }

  if (decodedParts[0] === 'faq') {
    return { view: 'faq', category: 'all', productSlug: null, blogSlug: null };
  }

  if (decodedParts[0] === 'wholesale') {
    return { view: 'wholesale', category: 'all', productSlug: null, blogSlug: null };
  }

  if (decodedParts[0] === 'contact') {
    return { view: 'contact', category: 'all', productSlug: null, blogSlug: null };
  }

  return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
}
