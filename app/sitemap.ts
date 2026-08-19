import type { MetadataRoute } from 'next';
import { SITE } from '@/src/config/site';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SUBCATEGORY_HUBS } from '@/src/data/subcategoryHubs';
import { BRAND_HUBS } from '@/src/data/brandHubs';
import { BLOG_POSTS } from '@/src/data/blog';

const BASE = `https://${SITE.domain}`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/shop/`, lastModified: now, changeFrequency: 'daily', priority: 0.9 },
    { url: `${BASE}/shop/brands/`, lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: `${BASE}/about/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/blog/`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${BASE}/faq/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${BASE}/wholesale/`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/contact/`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
  ];

  const categoryPages: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${BASE}/shop/${c.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.7,
  }));

  const subcategoryHubPages: MetadataRoute.Sitemap = SUBCATEGORY_HUBS.map((h) => ({
    url: `${BASE}/shop/${h.categorySlug}/${h.hubSlug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.65,
  }));

  const brandHubPages: MetadataRoute.Sitemap = BRAND_HUBS.map((h) => ({
    url: `${BASE}/shop/${h.categorySlug}/${h.hubSlug}/`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.6,
  }));

  const productPages: MetadataRoute.Sitemap = PRODUCTS.map((p) => ({
    url: `${BASE}/shop/${p.category}/${p.slug}/`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  const blogPages: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${BASE}/blog/${post.slug}/`,
    lastModified: post.isoDate ? new Date(post.isoDate) : now,
    changeFrequency: 'monthly',
    priority: 0.6,
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
