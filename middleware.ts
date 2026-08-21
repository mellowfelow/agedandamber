import { NextResponse, type NextRequest } from 'next/server';

export const config = {
  matcher: [
    /*
     * Match all paths except:
     * - api routes, _next internals, .well-known, static files, thank-you pages
     */
    '/((?!api|_next|\\.well-known|thank-you-contact|thank-you-order|thank-you-wholesale|favicon.svg|llms.txt|auth.md|robots.txt|sitemap.xml|images|js|fonts).*)',
  ],
};

function prefersMarkdownOverHtml(accept: string): boolean {
  let mdQ = -1;
  let htmlQ = -1;
  for (const part of accept.split(',')) {
    const [type, ...params] = part.trim().split(';').map((s) => s.trim());
    let q = 1;
    for (const p of params) {
      const m = /^q=([\d.]+)$/.exec(p);
      if (m) q = parseFloat(m[1]);
    }
    if (type === 'text/markdown') mdQ = Math.max(mdQ, q);
    if (type === 'text/html') htmlQ = Math.max(htmlQ, q);
  }
  return mdQ > -1 && mdQ > htmlQ;
}

export async function middleware(request: NextRequest) {
  const accept = request.headers.get('accept') || '';

  if (!prefersMarkdownOverHtml(accept)) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  const mdUrl = new URL('/api/markdown', url.origin);
  mdUrl.searchParams.set('path', url.pathname);

  try {
    const mdRes = await fetch(mdUrl.toString());
    if (mdRes.ok) {
      const text = await mdRes.text();
      return new NextResponse(text, {
        status: 200,
        headers: { 'Content-Type': 'text/markdown; charset=utf-8' },
      });
    }
  } catch {
    // fall through to normal HTML response on any failure
  }

  return NextResponse.next();
}
