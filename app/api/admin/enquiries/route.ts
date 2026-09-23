import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { listEnquiries } from '@/src/lib/enquiryStore';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  const enquiries = await listEnquiries();
  return NextResponse.json({ ok: true, enquiries });
}
