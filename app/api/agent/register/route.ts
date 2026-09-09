import { NextResponse } from 'next/server';
import { SITE } from '@/src/config/site';

const CORS = { 'Access-Control-Allow-Origin': '*', 'Access-Control-Allow-Methods': 'GET, POST, OPTIONS', 'Access-Control-Allow-Headers': 'Content-Type, Accept' };

const body = {
  status: 'open',
  registration_required: false,
  message: `${SITE.name} does not gate any resource. No agent registration or credential is needed — browse, query the APIs, and use the MCP server freely. A human always completes checkout and the 21+ signature.`,
  credentials_issued: null,
  documentation: `https://${SITE.domain}/auth.md`,
};

export const dynamic = 'force-static';

export function GET() {
  return NextResponse.json(body, { headers: CORS });
}
export function POST() {
  return NextResponse.json(body, { headers: CORS });
}
export function OPTIONS() {
  return new NextResponse(null, { status: 204, headers: CORS });
}
