import { REPLY } from '../config/site';

export function money(n: number): string {
  const { symbol } = REPLY.currency;
  return `${symbol}${Number(n || 0).toFixed(2)}`;
}

export function findMethod(methodId: string) {
  return REPLY.paymentMethods.find((m) => m.id === methodId) || REPLY.paymentMethods[0];
}

function fill(tpl: string, amount: number, ref: string): string {
  return String(tpl || '')
    .replace(/\{amount\}/g, money(amount))
    .replace(/\{ref\}/g, ref || '');
}

/** { method, opening, closing } with {amount}/{ref} tokens resolved. */
export function paymentMethodParts(methodId: string, amount: number, ref: string) {
  const method = findMethod(methodId);
  return {
    method,
    opening: fill(method.opening, amount, ref),
    closing: fill(method.closing, amount, ref),
  };
}

/**
 * Standing terms appended to every payment-details email and WA message.
 * Single source — the email, the WA text, and the composer preview all
 * read from this function so the three render paths can never drift apart.
 */
export function paymentTermsLines(ref?: string): string[] {
  return [
    'This order is confirmed once payment is received — it is not yet final.',
    ref ? `Use your order number — ${ref} — as the payment reference.` : 'Use your order number as the payment reference.',
    REPLY.dispatchLine,
    'Adult signature (21+) is required at delivery for every alcohol order.',
  ];
}

export function paymentTermsHtml(ref?: string): string {
  return paymentTermsLines(ref)
    .map(
      (line) =>
        `<li style="margin:0 0 8px;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;font-size:13px;line-height:1.6;color:#2B1D0E;">${escapeHtmlLocal(
          line
        )}</li>`
    )
    .join('');
}

function escapeHtmlLocal(s: string): string {
  return String(s ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Wraps a pasted payment-detail snippet with the standard opening/closing
 * framing for the chosen payment method, so the admin only ever types the
 * one real, order-specific thing: the wallet address / Cash App tag / bank
 * account details.
 */
export function instructionsParts(methodId: string, amount: number, ref: string, pastedDetail: string): string {
  const { opening, closing } = paymentMethodParts(methodId, amount, ref);
  return [opening, '', pastedDetail.trim(), '', closing].join('\n');
}
