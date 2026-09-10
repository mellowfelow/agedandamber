import nodemailer, { type Transporter } from 'nodemailer';
import { SITE, CONTACT } from '../config/site';

/**
 * Server-side notification for the order / contact / wholesale forms.
 *
 * Two layers, in order:
 *   1. The full submission is written to the function log (Vercel -> Logs).
 *      This is the durable copy — it is never lost, even if the email send
 *      below fails for any reason.
 *   2. One email via Zoho SMTP (nodemailer), authenticated as your own Zoho
 *      mailbox and delivered to your own inbox — Zoho does not spam-filter
 *      that path. Enabled by ZOHO_SMTP_USER + ZOHO_SMTP_PASS.
 *
 * Zoho SMTP is the only email channel. No third-party form service.
 * Required Vercel env vars:
 *   ZOHO_SMTP_USER   full mailbox, e.g. concierge@agedandamber.com (also the From)
 *   ZOHO_SMTP_PASS   Zoho app-specific password (not the login password)
 * Optional:
 *   ZOHO_SMTP_HOST   default smtp.zoho.com  (smtp.zoho.eu etc. for other DCs)
 *   ZOHO_SMTP_PORT   default 465 (SSL); set 587 for STARTTLS
 *   ORDER_NOTIFY_EMAIL  where mail is delivered; default CONTACT.email
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
  html?: string;
  replyTo?: string;
}): Promise<{ logged: true; emailed: boolean }> {
  const { subject, text, html, replyTo } = opts;

  console.log(`[notify] ${subject}\n${text}`);

  const to = process.env.ORDER_NOTIFY_EMAIL || CONTACT.email;

  // Zoho SMTP — the only email channel. Hard-capped at 8s so a misconfigured
  // or slow SMTP host can never hold up the order response (Vercel functions
  // time out at 10s on Hobby). On any failure the submission is still safe in
  // the function log above.
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
          ...(html ? { html } : {}),
        }),
        new Promise((_, reject) => setTimeout(() => reject(new Error('SMTP timeout after 8s')), 8000)),
      ]);
      return { logged: true, emailed: true };
    } catch (err) {
      console.error('[notify] Zoho SMTP send failed', err);
    }
  }

  console.error(
    `[notify] Zoho SMTP did not deliver "${subject}" — it is in this log only. ` +
      `Set ZOHO_SMTP_USER + ZOHO_SMTP_PASS (+ ORDER_NOTIFY_EMAIL) in the Vercel project env.`
  );
  return { logged: true, emailed: false };
}
