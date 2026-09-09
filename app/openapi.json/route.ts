import { OPENAPI_SPEC } from '@/src/data/wellKnown';

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(OPENAPI_SPEC, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
