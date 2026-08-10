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

export interface RouteState {
  view: string;
  category: string;
  productSlug: string | null;
  blogSlug: string | null;
}

export function parseRoute(pathname: string): RouteState {
  const cleanPath = pathname.replace(/^\/+|\/+$/g, '').trim();
  if (!cleanPath || cleanPath === 'home') {
    return { view: 'home', category: 'all', productSlug: null, blogSlug: null };
  }

  const parts = cleanPath.split('/').map((p) => decodeURIComponent(p));
  return parsePathParts(parts);
}

function parsePathParts(parts: string[]): RouteState {
  if (parts[0] === 'shop') {
    if (parts[1] && parts[2]) {
      return { view: 'product-detail', category: parts[1], productSlug: parts[2], blogSlug: null };
    }
    const category = parts[1] || 'all';
    return { view: 'shop', category, productSlug: null, blogSlug: null };
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
