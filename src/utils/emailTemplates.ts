import { SITE, CONTACT } from '../config/site';
import { paymentTermsHtml, paymentTermsLines } from '../lib/order';

/**
 * Internal order / contact / wholesale notification emails.
 *
 * Table + inline-style layout — the subset that renders consistently in
 * Zoho Mail, Gmail (web + app), and Apple Mail (macOS + iOS). Light-mode
 * locked (every surface sets an explicit background) so a client's dark
 * mode can't wash the letterhead out. No web fonts, no background images,
 * no <style> block — everything is inlined.
 */

const C = {
  page: '#ECE3D2', // aged paper — the mount the card sits on
  card: '#FFFFFF',
  head: '#1C1206', // roasted-brown letterhead band
  gold: '#E7C15E', // warm gold, for the dark band + accent rule
  goldInk: '#9A6B15', // deeper gold that holds contrast on white (links)
  cream: '#FBF3E0',
  headMeta: '#B9A582',
  ink: '#2B1D0E',
  soft: '#6E5C43',
  faint: '#9C8A6E',
  rule: '#E6D9BF',
  panel: '#F8F2E4',
  good: '#3C7A4C',
};

const SERIF = "Georgia, 'Times New Roman', serif";
const SANS =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif";

export const escapeHtml = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
const esc = escapeHtml;

const money = (n: number) => `$${Number(n || 0).toFixed(2)}`;

const stamp = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date()) + ' PT';

/* ---------------------------- shared pieces --------------------------- */

function shell(o: { eyebrow: string; title: string; meta: string; body: string }) {
  return `<!doctype html>
<html lang="en"><head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${esc(o.eyebrow)}</title>
</head>
<body style="margin:0;padding:0;background:${C.page};-webkit-text-size-adjust:100%;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:${C.page};">
<tr><td align="center" style="padding:28px 12px;">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;border:1px solid ${C.rule};border-radius:3px;">

  <tr><td style="background:${C.head};padding:27px 34px 24px;border-radius:3px 3px 0 0;">
    <div style="font-family:${SANS};font-size:11px;font-weight:700;letter-spacing:2.5px;text-transform:uppercase;color:${C.gold};">${esc(o.eyebrow)}</div>
    <div style="font-family:${SERIF};font-size:25px;line-height:1.22;color:${C.cream};margin-top:10px;">${esc(o.title)}</div>
    <div style="font-family:${SANS};font-size:12px;line-height:1.5;color:${C.headMeta};margin-top:9px;">${esc(o.meta)}</div>
  </td></tr>
  <tr><td style="height:3px;background:${C.gold};font-size:0;line-height:0;">&nbsp;</td></tr>

  <tr><td style="background:${C.card};padding:26px 34px 30px;font-family:${SANS};color:${C.ink};">
    ${o.body}
  </td></tr>

  <tr><td style="background:${C.page};padding:15px 34px;border-top:1px solid ${C.rule};border-radius:0 0 3px 3px;font-family:${SANS};font-size:11px;line-height:1.6;color:${C.faint};">
    ${esc(SITE.name)} &nbsp;&middot;&nbsp; internal notification, not sent to the customer<br>
    ${esc(CONTACT.address)}
  </td></tr>

</table>
</td></tr></table>
</body></html>`;
}

const label = (t: string) =>
  `<div style="font-family:${SANS};font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${C.faint};margin-bottom:5px;">${esc(t)}</div>`;

function field(l: string, valueHtml: string, marginBottom = 18) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 ${marginBottom}px;"><tr><td>
    ${label(l)}
    <div style="font-family:${SANS};font-size:14px;line-height:1.6;color:${C.ink};">${valueHtml}</div>
  </td></tr></table>`;
}

const divider = `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:4px 0 18px;"><tr><td style="border-top:1px solid ${C.rule};font-size:0;line-height:0;">&nbsp;</td></tr></table>`;

function callout(innerHtml: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin:0 0 24px;"><tr>
    <td style="background:${C.panel};border:1px solid ${C.rule};border-left:3px solid ${C.goldInk};border-radius:3px;padding:16px 18px;font-family:${SANS};font-size:13px;line-height:1.6;color:${C.ink};">
      ${innerHtml}
    </td></tr></table>`;
}

function button(href: string, text: string) {
  return `<a href="${esc(href)}" style="display:inline-block;background:${C.head};color:${C.cream};font-family:${SANS};font-size:13px;font-weight:600;line-height:1;text-decoration:none;padding:11px 22px;border-radius:3px;">${esc(text)} &rarr;</a>`;
}

const mailLink = (e: string) =>
  `<a href="mailto:${esc(e)}" style="color:${C.goldInk};text-decoration:none;font-weight:600;">${esc(e)}</a>`;

const telLink = (p: string) =>
  `<a href="tel:${esc(String(p).replace(/[^\d+]/g, ''))}" style="color:${C.goldInk};text-decoration:none;font-weight:600;">${esc(p)}</a>`;

/* ------------------------------- ORDER ------------------------------- */

export interface OrderEmailInput {
  orderNumber: string;
  items: { name: string; quantity: number; lineTotal: number }[];
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

export function orderEmail(o: OrderEmailInput): { subject: string; text: string; html: string } {
  const c = o.customer;
  const ts = stamp();
  const units = o.items.reduce((n, i) => n + i.quantity, 0);

  const rows = o.items
    .map(
      (i) => `<tr>
      <td style="padding:12px 0;border-bottom:1px solid ${C.rule};font-family:${SANS};font-size:14px;line-height:1.4;color:${C.ink};">${esc(i.name)}</td>
      <td align="center" style="padding:12px 10px;border-bottom:1px solid ${C.rule};font-family:${SANS};font-size:13px;color:${C.soft};white-space:nowrap;">&times;${i.quantity}</td>
      <td align="right" style="padding:12px 0;border-bottom:1px solid ${C.rule};font-family:${SERIF};font-size:14px;color:${C.ink};white-space:nowrap;">${money(i.lineTotal)}</td>
    </tr>`
    )
    .join('');

  const totalRow = (
    l: string,
    v: string,
    opt: { grand?: boolean; good?: boolean } = {}
  ) => {
    const lc = opt.good ? C.good : C.soft;
    const vc = opt.good ? C.good : opt.grand ? C.goldInk : C.ink;
    const top = opt.grand ? `border-top:2px solid ${C.head};` : '';
    return `<tr>
      <td align="right" style="padding:${opt.grand ? '13px' : '4px'} 16px 4px 0;font-family:${SANS};font-size:${opt.grand ? '11px' : '13px'};${opt.grand ? 'font-weight:700;letter-spacing:1.6px;text-transform:uppercase;' : ''}color:${lc};${top}">${esc(l)}</td>
      <td align="right" width="118" style="padding:${opt.grand ? '13px' : '4px'} 0 4px;font-family:${SERIF};font-size:${opt.grand ? '20px' : '14px'};color:${vc};white-space:nowrap;${top}">${esc(v)}</td>
    </tr>`;
  };

  const th = `padding:0 0 10px;border-bottom:2px solid ${C.head};font-family:${SANS};font-size:10px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:${C.faint};`;

  const body = `
  ${callout(
    `<strong style="font-family:${SANS};">Payment not yet collected.</strong> This is an order request — reply to the customer to confirm the order and arrange payment by <strong>${esc(o.paymentMethod)}</strong>.
     <div style="margin-top:13px;">${button(
       `https://${SITE.domain}/admin/send-payment-email/?id=${encodeURIComponent(o.orderNumber)}`,
       'Reply in Dashboard'
     )}</div>`
  )}

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
    <tr>
      <td style="${th}">Item</td>
      <td align="center" style="${th}">Qty</td>
      <td align="right" style="${th}">Amount</td>
    </tr>
    ${rows}
  </table>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:10px;">
    ${totalRow('Subtotal', money(o.subtotal))}
    ${o.cryptoDiscount > 0 ? totalRow('Crypto discount', `−${money(o.cryptoDiscount)}`, { good: true }) : ''}
    ${totalRow('Shipping', o.shipping === 0 ? 'Free' : money(o.shipping))}
    ${totalRow('Total', money(o.total), { grand: true })}
  </table>

  ${divider}

  ${field('Ship to', `<strong>${esc(c.name)}</strong><br>${esc(c.street)}<br>${esc(c.city)}, ${esc(c.state)} ${esc(c.zip)}`, 16)}
  ${field('Customer', `${mailLink(c.email)}<br>${telLink(c.phone)}`, 16)}
  ${field('Payment method', `<strong>${esc(o.paymentMethod)}</strong>`, c.notes ? 16 : 0)}
  ${c.notes ? divider + field('Order notes', esc(c.notes).replace(/\n/g, '<br>'), 0) : ''}
  `;

  const text =
    `NEW ORDER  ${o.orderNumber}\n${ts}  ·  ${units} unit${units === 1 ? '' : 's'}\n\n` +
    `** Payment not yet collected — arrange ${o.paymentMethod} at https://${SITE.domain}/admin/send-payment-email/?id=${o.orderNumber} **\n\n` +
    `ITEMS\n${o.items.map((i) => `  ${i.name}  x${i.quantity}  ${money(i.lineTotal)}`).join('\n')}\n\n` +
    `Subtotal  ${money(o.subtotal)}\n` +
    (o.cryptoDiscount > 0 ? `Crypto discount  -${money(o.cryptoDiscount)}\n` : '') +
    `Shipping  ${o.shipping === 0 ? 'Free' : money(o.shipping)}\n` +
    `TOTAL  ${money(o.total)}\n\n` +
    `SHIP TO\n  ${c.name}\n  ${c.street}\n  ${c.city}, ${c.state} ${c.zip}\n\n` +
    `CUSTOMER\n  ${c.email}\n  ${c.phone}\n\n` +
    `PAYMENT METHOD\n  ${o.paymentMethod}\n` +
    (c.notes ? `\nORDER NOTES\n  ${c.notes}\n` : '');

  return {
    subject: `New order · ${o.orderNumber} · ${money(o.total)} · ${c.name}`,
    text,
    html: shell({
      eyebrow: 'New order',
      title: o.orderNumber,
      meta: `${ts}  ·  ${units} unit${units === 1 ? '' : 's'}`,
      body,
    }),
  };
}

/* ------------------------------ CONTACT ------------------------------ */

export interface ContactEmailInput {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export function contactEmail(i: ContactEmailInput): { subject: string; text: string; html: string } {
  const ts = stamp();

  const body = `
  ${field('Email', mailLink(i.email), 14)}
  ${field('Subject', esc(i.subject), 0)}
  ${divider}
  ${field('Message', esc(i.message).replace(/\n/g, '<br>'), 20)}
  <div>${button(
    `mailto:${i.email}?subject=${encodeURIComponent(`Re: ${i.subject}`)}`,
    'Reply'
  )}</div>
  `;

  const text =
    `CONTACT MESSAGE\n${ts}\n\n` +
    `From: ${i.name} <${i.email}>\nSubject: ${i.subject}\n\n${i.message}\n`;

  return {
    subject: `Contact · ${i.subject} · ${i.name}`,
    text,
    html: shell({ eyebrow: 'Contact message', title: i.name || 'New message', meta: ts, body }),
  };
}

/* ----------------------------- WHOLESALE ---------------------------- */

export interface WholesaleEmailInput {
  businessName: string;
  contactName: string;
  email: string;
  phone: string;
  licenseType: string;
  estimatedVolume: string;
  tier?: string;
  notes?: string;
}

export function wholesaleEmail(i: WholesaleEmailInput): { subject: string; text: string; html: string } {
  const ts = stamp();

  const tierBadge = i.tier
    ? `<span style="display:inline-block;background:${C.panel};border:1px solid ${C.rule};border-radius:999px;padding:4px 12px;font-family:${SANS};font-size:11px;font-weight:700;letter-spacing:1px;text-transform:uppercase;color:${C.goldInk};margin-bottom:20px;">${esc(i.tier)}</span>`
    : '';

  const body = `
  ${tierBadge}
  ${field('Contact', `<strong>${esc(i.contactName || '—')}</strong>`, 14)}
  ${field('Email', mailLink(i.email), 14)}
  ${field('Phone', i.phone ? telLink(i.phone) : '—', 14)}
  ${divider}
  ${field('License type', esc(i.licenseType || '—'), 14)}
  ${field('Estimated volume', esc(i.estimatedVolume || '—'), i.notes ? 14 : 20)}
  ${i.notes ? field('Notes', esc(i.notes).replace(/\n/g, '<br>'), 20) : ''}
  <div>${button(
    `mailto:${i.email}?subject=${encodeURIComponent(`${SITE.name} wholesale — ${i.businessName}`)}`,
    'Reply with price sheets'
  )}</div>
  `;

  const text =
    `WHOLESALE INQUIRY\n${ts}\n\n` +
    `Business: ${i.businessName}\n` +
    (i.tier ? `Tier: ${i.tier}\n` : '') +
    `Contact: ${i.contactName}\nEmail: ${i.email}\nPhone: ${i.phone}\n` +
    `License: ${i.licenseType}\nVolume: ${i.estimatedVolume}\n` +
    (i.notes ? `\nNotes: ${i.notes}\n` : '');

  return {
    subject: `Wholesale inquiry · ${i.businessName}`,
    text,
    html: shell({
      eyebrow: 'Wholesale inquiry',
      title: i.businessName,
      meta: ts,
      body,
    }),
  };
}

/* -------------------------- PAYMENT DETAILS (Reply Portal, customer-facing) -------------------------- */

export interface PaymentDetailsEmailInput {
  orderNumber: string;
  amountDue: number;
  customerName: string;
  instructionsHtml: string; // admin-composed HTML (Template or Paste mode), trusted
}

export function paymentDetailsEmail(i: PaymentDetailsEmailInput): { subject: string; text: string; html: string } {
  const ts = stamp();

  const body = `
  ${field('Order', `<strong>${esc(i.orderNumber)}</strong>`, 14)}
  ${field('Amount due', `<span style="font-family:${SERIF};font-size:20px;color:${C.goldInk};">${money(i.amountDue)}</span>`, 20)}
  ${divider}
  <div style="font-family:${SANS};font-size:14px;line-height:1.7;color:${C.ink};margin-bottom:20px;">${i.instructionsHtml}</div>
  ${callout(
    `<strong style="font-family:${SANS};">Before your order ships</strong>
     <ul style="margin:10px 0 0;padding-left:18px;">${paymentTermsHtml(C.goldInk)}</ul>`
  )}
  <div>${button(`mailto:${CONTACT.email}?subject=${encodeURIComponent(`Re: Payment for ${i.orderNumber}`)}`, 'Reply to concierge')}</div>
  `;

  const text =
    `PAYMENT DETAILS — ${i.orderNumber}\n${ts}\n\n` +
    `Amount due: ${money(i.amountDue)}\n\n` +
    `${i.instructionsHtml.replace(/<[^>]+>/g, '')}\n\n` +
    paymentTermsLines()
      .map((l) => `- ${l}`)
      .join('\n') +
    '\n';

  return {
    subject: `Payment details for order ${i.orderNumber} · ${money(i.amountDue)} due`,
    text,
    html: shell({
      eyebrow: 'Payment details',
      title: `Hi ${i.customerName || 'there'}`,
      meta: ts,
      body,
    }),
  };
}

/* -------------------------- ENQUIRY REPLY (Reply Portal, customer-facing) -------------------------- */

export interface EnquiryReplyEmailInput {
  customerName: string;
  originalSubject: string;
  replyHtml: string; // admin-composed HTML, trusted
}

export function enquiryReplyEmail(i: EnquiryReplyEmailInput): { subject: string; text: string; html: string } {
  const ts = stamp();

  const body = `
  <div style="font-family:${SANS};font-size:14px;line-height:1.7;color:${C.ink};">${i.replyHtml}</div>
  <div style="margin-top:22px;">${button(`mailto:${CONTACT.email}`, 'Reply to concierge')}</div>
  `;

  const text = `${i.replyHtml.replace(/<[^>]+>/g, '')}\n\n— ${SITE.name}\n${CONTACT.email}\n`;

  return {
    subject: `Re: ${i.originalSubject}`,
    text,
    html: shell({
      eyebrow: SITE.name,
      title: `Hi ${i.customerName || 'there'}`,
      meta: ts,
      body,
    }),
  };
}
