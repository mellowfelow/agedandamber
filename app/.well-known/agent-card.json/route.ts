import { AGENT_CARD } from '@/src/data/wellKnown';

export const dynamic = 'force-static';

export function GET() {
  return new Response(JSON.stringify(AGENT_CARD, null, 2), {
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Access-Control-Allow-Origin': '*',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  });
}
