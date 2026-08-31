import { NextRequest, NextResponse, after } from 'next/server';
import { CONTACT, SHOP } from '@/src/config/site';
import { sendNotification } from '@/src/utils/notify';
import { orderEmail, type OrderEmailInput } from '@/src/utils/emailTemplates';

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

type OrderBody = Omit<OrderEmailInput, 'orderNumber'>;

/**
 * Order intake. Generates the short order reference, logs the full order
 * (durable, in the function log), and fires the single email notification
 * AFTER the response so the customer never waits on SMTP.
 */
export async function POST(req: NextRequest) {
  let body: OrderBody;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request body' }, { status: 400, headers: CORS });
  }

  const c = body?.customer;
  if (!c?.name || !c?.email || !Array.isArray(body.items) || body.items.length === 0) {
    return NextResponse.json({ ok: false, error: 'Missing order details' }, { status: 400, headers: CORS });
  }

  // Short, professional order reference — six digits off the timestamp,
  // reads like a normal running order number.
  const orderNumber = `AA-${String(Date.now()).slice(-6)}`;

  const mail = orderEmail({ ...body, orderNumber });

  after(async () => {
    await sendNotification({ ...mail, replyTo: c.email });
  });

  return NextResponse.json(
    {
      ok: true,
      orderNumber,
      concierge: { email: CONTACT.email, whatsapp: CONTACT.whatsapp, phone: CONTACT.phone },
      minOrder: SHOP.minOrder,
    },
    { headers: CORS }
  );
}
