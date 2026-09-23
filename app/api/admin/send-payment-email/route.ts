import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { getOrder, markOrderSent } from '@/src/lib/orderStore';
import { sendMail } from '@/src/utils/notify';
import { paymentDetailsEmail, escapeHtml } from '@/src/utils/emailTemplates';
import { instructionsParts } from '@/src/lib/order';
import { CONTACT } from '@/src/config/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  let body: { orderNumber?: string; methodId?: string; detail?: string };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 });
  }

  if (!body.orderNumber || !body.methodId || !body.detail) {
    return NextResponse.json({ ok: false, error: 'Missing orderNumber, methodId, or detail' }, { status: 400 });
  }

  const order = await getOrder(body.orderNumber);
  if (!order) return NextResponse.json({ ok: false, error: 'Order not found' }, { status: 404 });

  const instructions = instructionsParts(body.methodId, order.amountDue, order.orderNumber, body.detail);
  const instructionsHtml = escapeHtml(instructions).replace(/\n/g, '<br>');

  const mail = paymentDetailsEmail({
    orderNumber: order.orderNumber,
    amountDue: order.amountDue,
    customerName: order.customerName,
    instructionsHtml,
  });

  const { emailed } = await sendMail({
    to: order.customerEmail,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    replyTo: CONTACT.email,
  });

  await markOrderSent(order.orderNumber);

  return NextResponse.json({ ok: true, emailed });
}
