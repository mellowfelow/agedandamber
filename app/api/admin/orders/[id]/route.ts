import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { getOrder, deleteOrder, markOrderSent } from '@/src/lib/orderStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const { id } = await params;
  const order = await getOrder(decodeURIComponent(id));
  if (!order) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true, order });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const { id } = await params;
  await deleteOrder(decodeURIComponent(id));
  return NextResponse.json({ ok: true });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const { id } = await params;
  await markOrderSent(decodeURIComponent(id));
  return NextResponse.json({ ok: true });
}
