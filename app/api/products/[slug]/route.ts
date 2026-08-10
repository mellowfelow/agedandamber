import { NextRequest, NextResponse } from 'next/server';
import { PRODUCTS } from '@/src/data/products';
import { SITE } from '@/src/config/site';

export async function GET(req: NextRequest, { params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS.find((p) => p.slug === slug || p.id === slug);

  if (!product) {
    return NextResponse.json(
      { error: 'Product not found' },
      { status: 404, headers: { 'Access-Control-Allow-Origin': '*' } }
    );
  }

  return NextResponse.json(
    { ...product, currency: SITE.currency, url: `https://${SITE.domain}/shop/${product.category}/${product.slug}/` },
    { headers: { 'Access-Control-Allow-Origin': '*' } }
  );
}
