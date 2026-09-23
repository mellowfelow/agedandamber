import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { getEnquiry, deleteEnquiry } from '@/src/lib/enquiryStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const { id } = await params;
  const enquiry = await getEnquiry(decodeURIComponent(id));
  if (!enquiry) return NextResponse.json({ ok: false, error: 'Not found' }, { status: 404 });
  return NextResponse.json({ ok: true, enquiry });
}

export async function DELETE(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const { id } = await params;
  await deleteEnquiry(decodeURIComponent(id));
  return NextResponse.json({ ok: true });
}
