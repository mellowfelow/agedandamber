import { NextRequest, NextResponse } from 'next/server';

/**
 * Server-only passcode check for every /api/admin/* route. Reads
 * ADMIN_PASSCODE (never NEXT_PUBLIC_*) and compares against the
 * X-Admin-Passcode request header. Call as the first statement in every
 * admin API route handler.
 */
export function checkAdminPasscode(request: NextRequest): NextResponse | null {
  const configured = process.env.ADMIN_PASSCODE;
  const supplied = request.headers.get('x-admin-passcode');

  if (!configured) {
    return NextResponse.json(
      { ok: false, error: 'ADMIN_PASSCODE is not set on the server' },
      { status: 503 }
    );
  }
  if (!supplied || supplied !== configured) {
    return NextResponse.json({ ok: false, error: 'Unauthorized' }, { status: 401 });
  }
  return null;
}
