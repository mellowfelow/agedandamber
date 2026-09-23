import { SITE, REPLY } from '../config/site';
import { paymentTermsLines } from './order';

export const WA_HEADER = `*${SITE.name}*`;

export function toWhatsAppNumber(phone: string): string {
  const digits = String(phone || '').replace(/[^\d]/g, '');
  return digits;
}

function buildText(body: string | string[]): string {
  const lines = Array.isArray(body) ? body : [body];
  return [WA_HEADER, '', ...lines].join('\n');
}

export function waMessageText(body: string | string[]): string {
  return buildText(body);
}

export function waLink(body: string | string[]): string {
  const number = toWhatsAppNumber(REPLY.channels.whatsapp);
  return `https://wa.me/${number}?text=${encodeURIComponent(buildText(body))}`;
}

export function waLinkTo(phone: string, body: string | string[]): string {
  const number = toWhatsAppNumber(phone);
  return `https://wa.me/${number}?text=${encodeURIComponent(buildText(body))}`;
}

/** Admin -> customer: pre-filled payment-details message for the WA reply panel. */
export function waPaymentDetailsMessage(opts: {
  orderNumber: string;
  amountDue: number;
  instructions: string;
}): string[] {
  const terms = paymentTermsLines(opts.orderNumber).map((l) => `✅ ${l}`);
  return [
    `Payment details for order ${opts.orderNumber} — $${opts.amountDue.toFixed(2)} due.`,
    '',
    opts.instructions.trim(),
    '',
    ...terms,
  ];
}

export function waPaymentDetailsLink(phone: string, opts: { orderNumber: string; amountDue: number; instructions: string }): string {
  return waLinkTo(phone, waPaymentDetailsMessage(opts));
}

/** Customer checkout -> business: new WhatsApp order notification. */
export interface OrderSummary {
  orderNumber: string;
  items: { name: string; quantity: number }[];
  total: number;
  paymentMethod: string;
}
export interface OrderCustomer {
  name: string;
  email: string;
  phone: string;
}

export function waOrderLink(order: OrderSummary, customer: OrderCustomer): string {
  const lines = [
    `New order request ${order.orderNumber}`,
    '',
    ...order.items.map((i) => `${i.quantity}x ${i.name}`),
    '',
    `Total: $${order.total.toFixed(2)}`,
    `Payment method: ${order.paymentMethod}`,
    '',
    `Name: ${customer.name}`,
    `Email: ${customer.email}`,
    `Phone: ${customer.phone}`,
  ];
  return waLink(lines);
}

export function waPaymentConfirmationLink(orderNumber: string): string {
  return waLink([`I've completed payment for order ${orderNumber}.`]);
}
