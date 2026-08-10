import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/src/data/products';
import { BLOG_POSTS } from '@/src/data/blog';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const q = (searchParams.get('q') || '').toLowerCase();

  const matchedProducts = PRODUCTS.filter(
    (p) => p.name.toLowerCase().includes(q) || p.shortDescription.toLowerCase().includes(q)
  );
  const matchedPosts = BLOG_POSTS.filter(
    (post) => post.title.toLowerCase().includes(q) || post.excerpt.toLowerCase().includes(q)
  );

  return NextResponse.json(
    { query: q, products: matchedProducts, posts: matchedPosts },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
