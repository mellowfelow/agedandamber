import { NextRequest, NextResponse } from 'next/server';
import { checkAdminPasscode } from '@/src/lib/adminAuth';
import { getEnquiry, markEnquiryReplied } from '@/src/lib/enquiryStore';
import { sendMail } from '@/src/utils/notify';
import { enquiryReplyEmail, escapeHtml } from '@/src/utils/emailTemplates';
import { CONTACT } from '@/src/config/site';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const denied = checkAdminPasscode(req);
  if (denied) return denied;

  let body: { id?: string; reply?: string; replyIsHtml?: boolean };
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid body' }, { status: 400 });
  }

  if (!body.id || !body.reply) {
    return NextResponse.json({ ok: false, error: 'Missing id or reply' }, { status: 400 });
  }

  const enquiry = await getEnquiry(body.id);
  if (!enquiry) return NextResponse.json({ ok: false, error: 'Enquiry not found' }, { status: 404 });

  const replyHtml = body.replyIsHtml ? body.reply : escapeHtml(body.reply).replace(/\n/g, '<br>');

  const mail = enquiryReplyEmail({
    customerName: enquiry.name,
    originalSubject: enquiry.type === 'wholesale' ? 'Your wholesale enquiry' : 'Your enquiry',
    replyHtml,
  });

  const { emailed } = await sendMail({
    to: enquiry.email,
    subject: mail.subject,
    text: mail.text,
    html: mail.html,
    replyTo: CONTACT.email,
  });

  await markEnquiryReplied(enquiry.id);

  return NextResponse.json({ ok: true, emailed });
}
