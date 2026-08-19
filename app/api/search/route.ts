import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/src/data/products';
import { BLOG_POSTS } from '@/src/data/blog';
import { SITE } from '@/src/config/site';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').toLowerCase();

  const matchedProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
  ).map((p) => ({
    ...p,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));
  const matchedPosts = BLOG_POSTS.filter(
    (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
  ).map((post) => ({
    ...post,
    url: `https://${SITE.domain}/blog/${post.slug}/`,
  }));

  return NextResponse.json(
    { query: q, products: matchedProducts, posts: matchedPosts },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
