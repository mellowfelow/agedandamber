import nodemailer, { type Transporter } from 'nodemailer';
import { SITE, CONTACT, FORMS } from '../config/site';

/**
 * Server-side notification for the order / contact / wholesale forms.
 *
 * Always writes the full submission to the function log (Vercel -> Logs) —
 * the durable copy, never lost even if every email channel fails.
 *
 * Then tries, in order:
 *   1. Zoho SMTP (nodemailer). Mail authenticated as your own Zoho mailbox,
 *      delivered to your own inbox — Zoho does not spam-filter that, so it
 *      is the reliable path. Enabled by ZOHO_SMTP_USER + ZOHO_SMTP_PASS.
 *   2. Resend, if RESEND_API_KEY is set.
 * This is the only notification path — one email per submission.
 */

let cachedTransport: Transporter | null | undefined;

function zohoTransport(): Transporter | null {
  if (cachedTransport !== undefined) return cachedTransport;
  const user = process.env.ZOHO_SMTP_USER;
  const pass = process.env.ZOHO_SMTP_PASS;
  if (!user || !pass) {
    cachedTransport = null;
    return null;
  }
  cachedTransport = nodemailer.createTransport({
    host: process.env.ZOHO_SMTP_HOST || 'smtp.zoho.com',
    port: Number(process.env.ZOHO_SMTP_PORT || 465),
    secure: Number(process.env.ZOHO_SMTP_PORT || 465) === 465,
    auth: { user, pass },
    dnsTimeout: 5000,
    connectionTimeout: 6000,
    greetingTimeout: 6000,
    socketTimeout: 8000,
  });
  return cachedTransport;
}

export async function sendNotification(opts: {
  subject: string;
  text: string;
  replyTo?: string;
}): Promise<{ logged: true; emailed: boolean }> {
  const { subject, text, replyTo } = opts;

  console.log(`[notify] ${subject}\n${text}`);

  const to = process.env.ORDER_NOTIFY_EMAIL || CONTACT.email;

  // 1) Zoho SMTP — the reliable path. Hard-capped at 8s so a misconfigured
  //    or slow SMTP host can never hold up the order response (Vercel
  //    functions time out at 10s on Hobby).
  const transport = zohoTransport();
  if (transport) {
    try {
      await Promise.race([
        transport.sendMail({
          from: `"${SITE.name}" <${process.env.ZOHO_SMTP_USER}>`,
          to,
          replyTo: replyTo || undefined,
          subject,
          text,
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('SMTP timeout after 8s')), 8000)),
      ]);
      return { logged: true, emailed: true };
    } catch (err) {
      console.error('[notify] Zoho SMTP send failed', err);
    }
  }

  // 2) Resend fallback.
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: { Authorization: `Bearer ${resendKey}`, 'Content-Type': 'application/json' },
        body: JSON.stringify({
          from: `${SITE.name} <${FORMS.resendFrom}>`,
          to: [to],
          ...(replyTo ? { reply_to: replyTo } : {}),
          subject,
          text,
        }),
      });
      if (res.ok) return { logged: true, emailed: true };
      console.error(`[notify] Resend ${res.status}`, await res.text().catch(() => ''));
    } catch (err) {
      console.error('[notify] Resend request threw', err);
    }
  }

  console.error(
    `[notify] no email channel delivered "${subject}" — it is in this log only. ` +
      `Set ZOHO_SMTP_USER + ZOHO_SMTP_PASS (+ ORDER_NOTIFY_EMAIL) in the Vercel project env.`
  );
  return { logged: true, emailed: false };
}
