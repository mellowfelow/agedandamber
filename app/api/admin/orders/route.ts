import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { listOrders } from '@/src/lib/orderStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const orders = await listOrders();
  return NextResponse.json({ ok: true, orders });
}
