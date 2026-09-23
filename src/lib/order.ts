/**
 * The single source of truth for payment-terms copy. WA text, the payment
 * -details email, and the <PaymentTermsList> composer preview all read from
 * this one function so the three render paths can never drift apart.
 */
export function paymentTermsLines(): string[] {
  return [
    'This order is confirmed once payment is received — it is not yet final.',
    'Complete payment using the method shown below and reply with your confirmation.',
    'Your order ships within 1 business day of confirmed payment.',
    'Adult signature (21+) is required at delivery for every alcohol order.',
  ];
}

export function paymentTermsHtml(color = '#9A6B15'): string {
  return paymentTermsLines()
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
 * Wraps a pasted payment-detail snippet (Paste mode in the composer) with
 * the standard opening/closing framing so the admin never has to retype it.
 */
export function instructionsParts(opening: string, pastedDetail: string, closing: string): string {
  return [opening, '', pastedDetail.trim(), '', closing].join('\n');
}
