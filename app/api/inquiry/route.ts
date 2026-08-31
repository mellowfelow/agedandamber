import { NextRequest, NextResponse } from 'next/server';
import { sendNotification } from '@/src/utils/notify';

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
 * Contact + wholesale form intake. Same idea as /api/order: a durable
 * server-side log plus a Resend send when configured. The forms also post
 * to Web3Forms directly from the browser (that path populates the
 * Web3Forms dashboard).
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

  const { emailed } = await sendNotification({
    subject: `[${body.kind || 'inquiry'}] ${subject}`,
    text,
    replyTo: body.replyTo && /.+@.+\..+/.test(body.replyTo) ? body.replyTo : undefined,
  });

  return NextResponse.json({ ok: true, emailDelivered: emailed }, { headers: CORS });
}
