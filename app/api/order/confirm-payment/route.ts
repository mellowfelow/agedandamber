import { NextRequest, NextResponse, after } from 'next/server';
import { getOrder, markPaymentConfirmed } from '@/src/lib/orderStore';
import { sendMail } from '@/src/utils/notify';
import { CONTACT, SITE } from '@/src/config/site';

// nodemailer (SMTP) needs the Node runtime, not Edge.
export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';
export const maxDuration = 15;

const CORS = { 'Access-Control-Allow-Origin': '*' };
const MAX_BYTES = 4 * 1024 * 1024; // 4MB — stays under Vercel's serverless body-size limit
const ALLOWED_TYPES = new Set(['image/jpeg', 'image/png', 'image/webp', 'image/heic', 'image/heif']);

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
 * Public, no-auth endpoint — reachable from the "Upload Payment Confirmation"
 * link in the payment-details email. Only ever emails the concierge with the
 * screenshot attached; never mutates anything sensitive, never exposes order
 * data back to the caller beyond ok/error.
 */
export async function POST(req: NextRequest) {
  let form: FormData;
  try {
    form = await req.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid form data' }, { status: 400, headers: CORS });
  }

  const orderNumber = String(form.get('orderNumber') || '').trim();
  const note = String(form.get('note') || '').trim();
  const file = form.get('file');

  if (!orderNumber) {
    return NextResponse.json({ ok: false, error: 'Missing order number' }, { status: 400, headers: CORS });
  }
  if (!(file instanceof File)) {
    return NextResponse.json({ ok: false, error: 'Missing screenshot' }, { status: 400, headers: CORS });
  }
  if (!ALLOWED_TYPES.has(file.type)) {
    return NextResponse.json({ ok: false, error: 'File must be a JPG, PNG, WebP, or HEIC image' }, { status: 400, headers: CORS });
  }
  if (file.size > MAX_BYTES) {
    return NextResponse.json({ ok: false, error: 'Image is too large (max 4MB)' }, { status: 400, headers: CORS });
  }

  const order = await getOrder(orderNumber);
  if (!order) {
    return NextResponse.json({ ok: false, error: 'Order not found' }, { status: 404, headers: CORS });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.type.split('/')[1] || 'jpg';

  after(async () => {
    const to = process.env.ORDER_NOTIFY_EMAIL || CONTACT.email;
    await sendMail({
      to,
      subject: `Payment confirmation screenshot — ${order.orderNumber} — ${SITE.name}`,
      text:
        `${order.customerName} says they've paid for order ${order.orderNumber} ($${order.amountDue.toFixed(2)}).\n` +
        (note ? `Note from customer: ${note}\n` : '') +
        `Screenshot attached. Verify the payment, then mark the order fulfilled.\n\n` +
        `Dashboard: https://${SITE.domain}/admin/orders/${order.orderNumber}/`,
      html:
        `<p><strong>${order.customerName}</strong> (${order.customerEmail}) says they've paid for order <strong>${order.orderNumber}</strong> ($${order.amountDue.toFixed(
          2
        )}).</p>` +
        (note ? `<p>Note from customer: ${note.replace(/</g, '&lt;')}</p>` : '') +
        `<p>Screenshot attached — verify the payment, then mark the order fulfilled.</p>` +
        `<p><a href="https://${SITE.domain}/admin/orders/${order.orderNumber}/">Open in Dashboard</a></p>`,
      replyTo: order.customerEmail,
      attachments: [{ filename: `payment-confirmation-${order.orderNumber}.${ext}`, content: buffer, contentType: file.type }],
    });
    await markPaymentConfirmed(order.orderNumber);
  });

  return NextResponse.json({ ok: true }, { headers: CORS });
}
