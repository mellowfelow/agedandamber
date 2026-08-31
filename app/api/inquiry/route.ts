import { NextRequest, NextResponse, after } from 'next/server';
import { sendNotification } from '@/src/utils/notify';
import { contactEmail, wholesaleEmail } from '@/src/utils/emailTemplates';

// nodemailer (SMTP) needs the Node runtime, not Edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 15;

const CORS = { 'Access-Control-Allow-Origin': '*' };

export function OPTIONS() {
  return new NextResponse(null, {
    headers: {
      ...CORS,
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}

const isEmail = (v: unknown) => typeof v === 'string' && /.+@.+\..+/.test(v);

/**
 * Contact + wholesale form intake. Durable server-side log plus a single
 * email notification fired after the response (so the visitor never waits
 * on SMTP).
 */
export async function POST(req: NextRequest) {
  let body: Record<string, string>;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400, headers: CORS });
  }

  let mail: { subject: string; text: string; html: string };

  if (body.kind === 'wholesale') {
    if (!body.businessName || !isEmail(body.email)) {
      return NextResponse.json({ ok: false, error: 'Missing business or email' }, { status: 400, headers: CORS });
    }
    mail = wholesaleEmail({
      businessName: body.businessName,
      contactName: body.contactName || '',
      email: body.email,
      phone: body.phone || '',
      licenseType: body.licenseType || '',
      estimatedVolume: body.estimatedVolume || '',
      tier: body.tier || undefined,
      notes: body.notes || undefined,
    });
  } else {
    if (!isEmail(body.email) || !body.message) {
      return NextResponse.json({ ok: false, error: 'Missing email or message' }, { status: 400, headers: CORS });
    }
    mail = contactEmail({
      name: body.name || '',
      email: body.email,
      subject: body.subject || 'General inquiry',
      message: body.message,
    });
  }

  after(async () => {
    await sendNotification({ ...mail, replyTo: isEmail(body.email) ? body.email : undefined });
  });

  return NextResponse.json({ ok: true }, { headers: CORS });
}
