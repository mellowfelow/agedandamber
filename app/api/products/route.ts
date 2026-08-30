import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/src/data/products';
import { SITE } from '@/src/config/site';

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const category = searchParams.get('category');
  const q = searchParams.get('q');
  const limit = searchParams.get('limit');

  let result = [...PRODUCTS];

  if (category) {
    result = result.filter((p) => p.category === category);
  }

  if (q) {
    const term = q.toLowerCase();
    result = result.filter(
      (p) =>
        p.name.toLowerCase().includes(term) ||
        p.shortDescription.toLowerCase().includes(term) ||
        p.fullDescription.toLowerCase().includes(term) ||
        p.category.toLowerCase().includes(term)
    );
  }

  if (limit && !isNaN(Number(limit))) {
    result = result.slice(0, Number(limit));
  }

  const mapped = result.map((p) => ({
    ...p,
    currency: SITE.currency,
    url: `https://${SITE.domain}/shop/${p.category}/${p.slug}/`,
  }));

  return NextResponse.json(
    { total: mapped.length, currency: SITE.currency, products: mapped },
    {
      headers: {
        'Access-Control-Allow-Origin': '*',
        // Catalog data only changes on deploy. Let the CDN serve this
        // (notably the full-catalog fetch the /shop/ page fires on load)
        // from cache so it isn't recomputed per request.
        'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
      },
    }
  );
}
