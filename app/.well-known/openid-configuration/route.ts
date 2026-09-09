import { wellKnownResponse } from '@/src/data/wellKnown';

export const dynamic = 'force-static';

export function GET() {
  return wellKnownResponse('openid-configuration');
}
