import { SITE, CONTACT, FORMS } from '../config/site';

/**
 * Server-side notification helper for the order / contact / wholesale
 * forms. Two jobs:
 *
 * 1. Always write the full submission to the function log (Vercel → Logs),
 *    so a submission is never lost even when email delivery fails. This is
 *    the durable copy.
 * 2. Send an email via Resend when RESEND_API_KEY (and optionally
 *    ORDER_NOTIFY_EMAIL) are set in the project env. Resend is the
 *    reliable path — a verified agedandamber.com sender with real delivery
 *    logs — and needs no code change to enable.
 *
 * The forms still submit to Web3Forms directly from the browser as well,
 * which is what populates the Web3Forms dashboard. This helper does NOT
 * call Web3Forms: a server-to-server request has no browser origin and
 * Web3Forms' firewall 403s it.
 */
export async function sendNotification(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ logged: true; emailed: boolean }> {
  const { subject, text, replyTo } = opts;

  console.log(`[notify] ${subject}\n${text}`);

  const resendKey = process.env.RESEND_API_KEY;
  const to = process.env.ORDER_NOTIFY_EMAIL || CONTACT.email;

  if (!resendKey) {
    console.error(
      `[notify] no RESEND_API_KEY — "${subject}" is in this log only. ` +
        `Set RESEND_API_KEY + ORDER_NOTIFY_EMAIL in the Vercel project env, or ` +
        `fix Web3Forms email delivery (verify the recipient under Linked Emails).`
    );
    return { logged: true, emailed: false };
  }

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${resendKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `${SITE.name} <${FORMS.resendFrom}>`,
        to: [to],
        ...(replyTo ? { reply_to: replyTo } : {}),
        subject,
        text,
      }),
    });
    if (!res.ok) {
      console.error(`[notify] Resend ${res.status}`, await res.text().catch(() => ''));
      return { logged: true, emailed: false };
    }
    return { logged: true, emailed: true };
  } catch (err) {
    console.error('[notify] Resend request threw', err);
    return { logged: true, emailed: false };
  }
}
