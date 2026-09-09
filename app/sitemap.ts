import type { MetadataRoute } from 'next';
import { SITE } from '@/src/config/site';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { BRAND_HUBS } from '@/src/data/brandHubs';
import { BLOG_POSTS } from '@/src/data/blog';
import { brandHubProducts, subcategoryHubProducts, hubIsIndexable } from '@/src/utils/hubs';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/shop/`, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/shop/brands/`, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/`, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/faq/`, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wholesale/`, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact/`, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}/shop/${c.slug}/`,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  // Only list hubs deep enough to be indexed — thin hubs (< 3 products)
  // carry robots:noindex, so including them here just wastes crawl budget
  // and sends mixed signals. They stay reachable via on-page links.
  const subcategoryHubPages: MetadataRoute.Sitemap = SUBCATEGORY_HUBS.filter((h) =>
    hubIsIndexable(subcategoryHubProducts(h, PRODUCTS).length)
  ).map((h) => ({
    url: `${BASE}/shop/${h.categorySlug}/${h.hubSlug}/`,
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const brandHubPages: MetadataRoute.Sitemap = BRAND_HUBS.filter((h) =>
    hubIsIndexable(brandHubProducts(h, PRODUCTS).length)
  ).map((h) => ({
    url: `${BASE}/shop/${h.categorySlug}/${h.hubSlug}/`,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  // Product entries carry their primary image (image sitemap) — Google
  // prefers products with images and it's one of the few free rich-result
  // wins. No lastModified: there's no genuine per-product timestamp, and an
  // always-"now" value on ~1,300 URLs just trains Google to ignore lastmod.
  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE}/shop/${p.category}/${p.slug}/`,
    changeFrequency: 'monthly',
    priority: 0.6,
    images: p.images?.length ? [`${BASE}${p.images[0]}`] : undefined,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.isoDate ? new Date(post.isoDate) : undefined,
    changeFrequency: 'monthly',
    priority: 0.6,
    images: post.image ? [post.image.startsWith('http') ? post.image : `${BASE}${post.image}`] : undefined,
  }));

  return [
    ...staticPages,
    ...categoryPages,
    ...subcategoryHubPages,
    ...brandHubPages,
    ...productPages,
    ...blogPages,
  ];
}
