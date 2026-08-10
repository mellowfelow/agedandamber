import { NextResponse } from 'next/server';
import { PRODUCTS, CATEGORIES } from '@/src/data/products';
import { SITE } from '@/src/config/site';

export async function GET() {
  const mapped = CATEGORIES.map((c) => ({
    ...c,
    count: PRODUCTS.filter((p) => p.category === c.slug).length,
    url: `https://${SITE.domain}/shop/${c.slug}/`,
  }));

  return NextResponse.json({ categories: mapped }, { headers: { 'Access-Control-Allow-Origin': '*' } });
}
