import { NextRequest, NextResponse, after } from 'next/server';
import { CONTACT, SHOP } from '@/src/config/site';
import { sendNotification, sendMail } from '@/src/utils/notify';
import { orderEmail, orderConfirmationEmail, type OrderEmailInput } from '@/src/utils/emailTemplates';
import { saveOrder } from '@/src/lib/orderStore';

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

type OrderBody = Omit<OrderEmailInput, 'orderNumber'> & {
  channel?: 'whatsapp' | 'email';
  orderNumber?: string; // client-supplied for the WhatsApp checkout path, so the wa.me
  // message and the saved/emailed order share the same reference (see CheckoutModal —
  // window.open() must fire synchronously, before this route can assign one)
};

/**
 * Order intake. Generates the short order reference, saves it to the
 * Reply Portal store (so it shows up in /admin/orders regardless of
 * channel), logs the full order (durable, in the function log), and fires
 * the single email notification AFTER the response so the customer never
 * waits on SMTP.
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
  // reads like a normal running order number. Honour a client-supplied one
  // (WhatsApp checkout) so the wa.me message and the saved order match.
  const orderNumber =
    body.orderNumber && /^AA-\d{6}$/.test(body.orderNumber) ? body.orderNumber : `AA-${String(Date.now()).slice(-6)}`;

  const mail = orderEmail({ ...body, orderNumber });
  const confirmation = orderConfirmationEmail({ ...body, orderNumber });

  await saveOrder({
    orderNumber,
    customerName: c.name,
    customerEmail: c.email,
    customerPhone: c.phone || '',
    items: body.items,
    amountDue: body.total,
    paymentMethod: body.paymentMethod,
    status: 'pending',
    channel: body.channel === 'whatsapp' ? 'whatsapp' : 'email',
    createdAt: new Date().toISOString(),
  });

  after(async () => {
    await sendNotification({ ...mail, replyTo: c.email });
    // Customer-facing receipt — separate from the concierge notification above,
    // and separate again from the payment-details email the admin sends later.
    await sendMail({ to: c.email, ...confirmation, replyTo: CONTACT.email });
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
