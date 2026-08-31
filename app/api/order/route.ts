import { NextRequest, NextResponse } from 'next/server';
import { CONTACT, SHOP } from '@/src/config/site';
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

interface OrderItem { name: string; quantity: number; lineTotal: number }
interface OrderBody {
  items: OrderItem[];
  subtotal: number;
  cryptoDiscount: number;
  shipping: number;
  total: number;
  paymentMethod: string;
  customer: {
    name: string; email: string; phone: string;
    street: string; city: string; state: string; zip: string;
    notes?: string;
  };
}

/**
 * Order intake. Generates the short order reference, logs the full order
 * server-side (durable), and sends the notification via Resend if
 * configured. The checkout also submits to Web3Forms directly from the
 * browser, so the order still lands in the Web3Forms dashboard regardless.
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

  const lines = body.items
    .map((i) => `  - ${i.name} x${i.quantity} — $${Number(i.lineTotal).toFixed(2)}`)
    .join('\n');

  const text =
    `NEW ORDER ${orderNumber}\n` +
    `Received: ${new Date().toISOString()}\n\n` +
    `Items:\n${lines}\n\n` +
    `Subtotal:        $${Number(body.subtotal).toFixed(2)}\n` +
    `Crypto discount: -$${Number(body.cryptoDiscount || 0).toFixed(2)}\n` +
    `Shipping:        $${Number(body.shipping || 0).toFixed(2)}\n` +
    `Total:           $${Number(body.total).toFixed(2)}\n` +
    `Payment method:  ${body.paymentMethod}\n\n` +
    `Customer:\n` +
    `  ${c.name}\n  ${c.email}\n  ${c.phone}\n` +
    `  ${c.street}, ${c.city}, ${c.state} ${c.zip}\n` +
    (c.notes ? `  Notes: ${c.notes}\n` : '');

  const { emailed } = await sendNotification({
    subject: `New order ${orderNumber} — ${c.name} — $${Number(body.total).toFixed(2)}`,
    text,
    replyTo: c.email,
  });

  return NextResponse.json(
    {
      ok: true,
      orderNumber,
      emailDelivered: emailed,
      concierge: { email: CONTACT.email, whatsapp: CONTACT.whatsapp, phone: CONTACT.phone },
      minOrder: SHOP.minOrder,
    },
    { headers: CORS }
  );
}
