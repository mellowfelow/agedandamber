import { NextRequest, NextResponse, after } from 'next/server';
import { sendNotification } from '@/src/utils/notify';

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

/**
 * Contact + wholesale form intake. Durable server-side log plus an email
 * notification fired after the response (so the visitor never waits on
 * SMTP). The forms also post to Web3Forms directly from the browser.
 */
export async function POST(req: NextRequest) {
  let body: { kind?: string; subject?: string; text?: string; replyTo?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400, headers: CORS });
  }

  const subject = (body.subject || '').trim();
  const text = (body.text || '').trim();
  if (!subject || !text) {
    return NextResponse.json({ ok: false, error: 'Missing subject or message' }, { status: 400, headers: CORS });
  }

  after(async () => {
    await sendNotification({
      subject: `[${body.kind || 'inquiry'}] ${subject}`,
      text,
      replyTo: body.replyTo && /.+@.+\..+/.test(body.replyTo) ? body.replyTo : undefined,
    });
  });

  return NextResponse.json({ ok: true }, { headers: CORS });
}
