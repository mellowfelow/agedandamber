import { SITE } from '../config/site';

/**
 * Plain, presentable HTML for the internal order / contact / wholesale
 * notification emails. Table-based layout with inline styles only — the
 * subset that renders consistently in Zoho Mail, Gmail, and Apple Mail.
 */

const C = {
  ink: '#241a12',
  soft: '#6b5d4a',
  faint: '#96876f',
  line: '#e7ddca',
  panel: '#faf6ec',
  accent: '#a9701f',
  good: '#3f7d4f',
  bg: '#f2ede1',
};

const esc = (s: unknown) =>
  String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');

const money = (n: number) => `$${Number(n || 0).toFixed(2)}`;

const stamp = () =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: 'America/Los_Angeles',
    dateStyle: 'medium',
    timeStyle: 'short',
  }).format(new Date()) + ' PT';

function shell(opts: { eyebrow: string; title: string; meta?: string; bodyHtml: string }) {
  return `<!doctype html><html><body style="margin:0;padding:0;background:${C.bg};">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:${C.bg};padding:28px 12px;">
<tr><td align="center">
<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="width:600px;max-width:100%;font-family:-apple-system,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:${C.ink};">
  <tr><td style="background:#1a120b;border-radius:12px 12px 0 0;padding:24px 30px;">
    <div style="color:#d4af37;font-size:11px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;">${esc(opts.eyebrow)}</div>
    <div style="color:#fef3c7;font-size:23px;font-weight:700;margin-top:7px;letter-spacing:-.01em;">${esc(opts.title)}</div>
    ${opts.meta ? `<div style="color:#b8a88c;font-size:13px;margin-top:5px;">${esc(opts.meta)}</div>` : ''}
  </td></tr>
  <tr><td style="background:#ffffff;border:1px solid ${C.line};border-top:none;border-radius:0 0 12px 12px;padding:26px 30px;">
    ${opts.bodyHtml}
  </td></tr>
  <tr><td style="padding:16px 30px;color:${C.faint};font-size:11px;">
    Sent by ${esc(SITE.name)} · this is an internal order notification.
  </td></tr>
</table>
</td></tr></table>
</body></html>`;
}

function panel(label: string, innerHtml: string) {
  return `<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:14px;">
  <tr><td style="background:${C.panel};border:1px solid ${C.line};border-radius:9px;padding:15px 18px;">
    <div style="font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:${C.faint};margin-bottom:6px;">${esc(label)}</div>
    <div style="font-size:14px;line-height:1.6;color:${C.ink};">${innerHtml}</div>
  </td></tr></table>`;
}

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
  const when = stamp();

  const rows = o.items
    .map(
      (i) => `<tr>
      <td style="padding:11px 0;border-bottom:1px solid #f1e9d8;font-size:14px;">${esc(i.name)}</td>
      <td align="center" style="padding:11px 0;border-bottom:1px solid #f1e9d8;font-size:14px;color:${C.soft};white-space:nowrap;">×${i.quantity}</td>
      <td align="right" style="padding:11px 0;border-bottom:1px solid #f1e9d8;font-size:14px;white-space:nowrap;">${money(i.lineTotal)}</td>
    </tr>`
    )
    .join('');

  const totalRow = (label: string, value: string, opts: { strong?: boolean; good?: boolean } = {}) => {
    const labelColor = opts.good ? C.good : opts.strong ? C.ink : C.soft;
    const valueColor = opts.good ? C.good : opts.strong ? C.accent : C.ink;
    const size = opts.strong ? '16px' : '13px';
    const pad = opts.strong ? '10px' : '3px';
    const topRule = opts.strong ? `border-top:2px solid ${C.line};` : '';
    const weight = opts.strong ? 'font-weight:700;' : '';
    return `<tr>
      <td align="right" style="padding:${pad} 14px 3px 0;font-size:${size};color:${labelColor};${weight}${topRule}">${esc(label)}</td>
      <td align="right" width="96" style="padding:${pad} 0 3px 0;font-size:${size};white-space:nowrap;color:${valueColor};${weight}${topRule}">${esc(value)}</td>
    </tr>`;
  };

  const bodyHtml = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    <tr>
      <th align="left" style="padding:0 0 8px 0;border-bottom:2px solid ${C.line};font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:${C.faint};">Item</th>
      <th align="center" style="padding:0 0 8px 0;border-bottom:2px solid ${C.line};font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:${C.faint};">Qty</th>
      <th align="right" style="padding:0 0 8px 0;border-bottom:2px solid ${C.line};font-size:10.5px;font-weight:700;letter-spacing:.8px;text-transform:uppercase;color:${C.faint};">Amount</th>
    </tr>
    ${rows}
  </table>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-top:6px;">
    ${totalRow('Subtotal', money(o.subtotal))}
    ${o.cryptoDiscount > 0 ? totalRow('Crypto discount', `−${money(o.cryptoDiscount)}`, { good: true }) : ''}
    ${totalRow('Shipping', o.shipping === 0 ? 'Free' : money(o.shipping))}
    ${totalRow('Total', money(o.total), { strong: true })}
  </table>

  ${panel('Payment method', `<strong>${esc(o.paymentMethod)}</strong>`)}
  ${panel(
    'Ship to',
    `<strong>${esc(c.name)}</strong><br>${esc(c.street)}<br>${esc(c.city)}, ${esc(c.state)} ${esc(c.zip)}<br>
     <a href="mailto:${esc(c.email)}" style="color:${C.accent};text-decoration:none;">${esc(c.email)}</a> &nbsp;·&nbsp; ${esc(c.phone)}`
  )}
  ${c.notes ? panel('Order notes', esc(c.notes)) : ''}`;

  const text =
    `NEW ORDER — ${o.orderNumber}\n${when}\n\n` +
    `ITEMS\n${o.items.map((i) => `  ${i.name}  ×${i.quantity}  ${money(i.lineTotal)}`).join('\n')}\n\n` +
    `Subtotal: ${money(o.subtotal)}\n` +
    (o.cryptoDiscount > 0 ? `Crypto discount: -${money(o.cryptoDiscount)}\n` : '') +
    `Shipping: ${o.shipping === 0 ? 'Free' : money(o.shipping)}\n` +
    `TOTAL: ${money(o.total)}\n\n` +
    `Payment: ${o.paymentMethod}\n\n` +
    `SHIP TO\n  ${c.name}\n  ${c.street}\n  ${c.city}, ${c.state} ${c.zip}\n  ${c.email} · ${c.phone}\n` +
    (c.notes ? `\nNotes: ${c.notes}\n` : '');

  return {
    subject: `New order ${o.orderNumber} — ${c.name} — ${money(o.total)}`,
    text,
    html: shell({
      eyebrow: `${SITE.name} · New order`,
      title: o.orderNumber,
      meta: when,
      bodyHtml,
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
  const when = stamp();
  const bodyHtml = `
  ${panel('From', `<strong>${esc(i.name)}</strong><br><a href="mailto:${esc(i.email)}" style="color:${C.accent};text-decoration:none;">${esc(i.email)}</a>`)}
  ${panel('Subject', esc(i.subject))}
  ${panel('Message', esc(i.message).replace(/\n/g, '<br>'))}`;

  const text = `CONTACT MESSAGE\n${when}\n\nFrom: ${i.name} <${i.email}>\nSubject: ${i.subject}\n\n${i.message}\n`;

  return {
    subject: `Concierge message — ${i.subject}`,
    text,
    html: shell({ eyebrow: `${SITE.name} · Contact form`, title: 'New message', meta: when, bodyHtml }),
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
  const when = stamp();
  const row = (k: string, v: string) =>
    `<tr><td style="padding:7px 14px 7px 0;font-size:11px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;color:${C.faint};white-space:nowrap;vertical-align:top;">${esc(k)}</td>
     <td style="padding:7px 0;font-size:14px;color:${C.ink};">${v}</td></tr>`;

  const bodyHtml = `
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
    ${row('Business', `<strong>${esc(i.businessName)}</strong>`)}
    ${row('Contact', esc(i.contactName))}
    ${row('Email', `<a href="mailto:${esc(i.email)}" style="color:${C.accent};text-decoration:none;">${esc(i.email)}</a>`)}
    ${row('Phone', esc(i.phone))}
    ${i.tier ? row('Tier', esc(i.tier)) : ''}
    ${row('License', esc(i.licenseType))}
    ${row('Volume', esc(i.estimatedVolume))}
  </table>
  ${i.notes ? panel('Notes', esc(i.notes).replace(/\n/g, '<br>')) : ''}`;

  const text =
    `WHOLESALE INQUIRY\n${when}\n\n` +
    `Business: ${i.businessName}\nContact: ${i.contactName}\nEmail: ${i.email}\nPhone: ${i.phone}\n` +
    (i.tier ? `Tier: ${i.tier}\n` : '') +
    `License: ${i.licenseType}\nVolume: ${i.estimatedVolume}\n` +
    (i.notes ? `\nNotes: ${i.notes}\n` : '');

  return {
    subject: `Wholesale inquiry — ${i.businessName}`,
    text,
    html: shell({ eyebrow: `${SITE.name} · Wholesale`, title: i.businessName, meta: when, bodyHtml }),
  };
}
