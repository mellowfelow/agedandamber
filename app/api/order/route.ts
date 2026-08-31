import { NextRequest, NextResponse } from 'next/server';
import { SITE, CONTACT, FORMS, SHOP } from '@/src/config/site';

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
 * Server-side order intake.
 *
 * The checkout used to POST straight to api.web3forms.com from the browser.
 * Two problems with that: privacy browsers / ad-blockers (Brave, uBlock,
 * Firefox strict) block requests to web3forms.com outright, so the order
 * email silently never sent; and the client swallowed every failure and
 * still showed "order confirmed". This route makes the Web3Forms call
 * server-to-server (no CORS, nothing to block) and always writes the full
 * order to the function log, so an order is recoverable even if the email
 * provider is down. It returns ok:true whenever the order was received —
 * emailDelivered tells the client whether the notification actually went
 * out.
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

  // Short, human-readable order reference. Six digits off the timestamp —
  // reads like a normal running order number and is unique enough for a
  // concierge-completed flow.
  const orderNumber = `AA-${String(Date.now()).slice(-6)}`;
  const receivedAt = new Date().toISOString();

  const lines = body.items
    .map((i) => `  - ${i.name} ×${i.quantity} — $${Number(i.lineTotal).toFixed(2)}`)
    .join('\n');

  const summary =
    `NEW ORDER ${orderNumber}\n` +
    `Received: ${receivedAt}\n\n` +
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

  // Always log — this is the durable copy of the order (Vercel → Logs).
  console.log(`[order] ${orderNumber}\n${summary}`);

  let emailDelivered = false;

  // Preferred path: Resend, if configured. Set RESEND_API_KEY and
  // ORDER_NOTIFY_EMAIL in the Vercel project env and orders email through a
  // verified agedandamber.com sender with real delivery logs — no code
  // change needed.
  const resendKey = process.env.RESEND_API_KEY;
  const notifyTo = process.env.ORDER_NOTIFY_EMAIL || CONTACT.email;
  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${SITE.name} Orders <${FORMS.resendFrom}>`,
          to: [notifyTo],
          reply_to: c.email,
          subject: `New order ${orderNumber} — ${c.name} — $${Number(body.total).toFixed(2)}`,
          text: summary,
        }),
      });
      emailDelivered = res.ok;
      if (!res.ok) {
        console.error(`[order] ${orderNumber} Resend responded`, res.status, await res.text().catch(() => ''));
      }
    } catch (err) {
      console.error(`[order] ${orderNumber} Resend threw`, err);
    }
  }

  if (!emailDelivered && FORMS.web3formsKey) {
    try {
      const fd = new FormData();
      fd.append('access_key', FORMS.web3formsKey);
      fd.append('subject', `New order ${orderNumber} — ${c.name} — $${Number(body.total).toFixed(2)}`);
      fd.append('from_name', `${SITE.name} Orders`);
      fd.append('email', c.email);
      fd.append('replyto', c.email);
      fd.append('to', CONTACT.email); // honoured on Web3Forms plans with custom recipients; ignored otherwise
      fd.append('message', summary);
      fd.append('botcheck', '');

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          // A Web3Forms access key can be locked to specific domains; a
          // server-to-server request carries no browser Origin, so send the
          // site's own origin explicitly or a domain-locked key 403s.
          Origin: `https://${SITE.domain}`,
          Referer: `https://${SITE.domain}/`,
        },
        body: fd,
      });
      const json = await res.json().catch(() => ({}));
      emailDelivered = res.ok && json?.success === true;
      if (!emailDelivered) {
        console.error(`[order] ${orderNumber} email NOT delivered — Web3Forms responded`, res.status, json);
      }
    } catch (err) {
      console.error(`[order] ${orderNumber} email send threw`, err);
    }
  }

  if (!emailDelivered) {
    console.error(
      `[order] ${orderNumber} — NOTIFICATION NOT SENT. Order is captured in this log only. ` +
        `Check RESEND_API_KEY / Web3Forms key + spam folder.`
    );
  }

  return NextResponse.json(
    {
      ok: true,
      orderNumber,
      emailDelivered,
      concierge: { email: CONTACT.email, whatsapp: CONTACT.whatsapp, phone: CONTACT.phone },
      minOrder: SHOP.minOrder,
    },
    { headers: CORS }
  );
}
