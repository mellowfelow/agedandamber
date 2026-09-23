'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { PasscodeGate } from '../../../src/components/admin/PasscodeGate';
import { AdminNav } from '../../../src/components/admin/AdminNav';
import type { StoredEnquiry } from '../../../src/lib/enquiryStore';

function Composer({ passcode }: { passcode: string }) {
  const params = useSearchParams();
  const id = params.get('id') || '';

  const [enquiry, setEnquiry] = useState<StoredEnquiry | null>(null);
  const [loading, setLoading] = useState(true);
  const [reply, setReply] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    fetch(`/api/admin/enquiries/${encodeURIComponent(id)}/`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiry(d.enquiry || null))
      .finally(() => setLoading(false));
  }, [id, passcode]);

  const send = async () => {
    if (!enquiry || !reply.trim()) {
      setError('Write a reply before sending.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/admin/reply-enquiry/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ id: enquiry.id, reply, replyIsHtml: false }),
      });
      const data = await res.json();
      if (data.ok) setSent(true);
      else setError(data.error || 'Send failed.');
    } catch {
      setError('Send failed — check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  const previewHtml = reply
    .split('\n')
    .map((l) => l.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
    .join('<br>');

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">Aged &amp; Amber</span>
        <h1 className="text-3xl font-serif font-bold text-amber-100 mt-1 mb-6">Reply to Enquiry</h1>
        <AdminNav />

        {loading ? (
          <p className="text-amber-300/60 text-sm">Loading…</p>
        ) : !enquiry ? (
          <p className="text-amber-300/60 text-sm">
            {id ? `Enquiry ${id} not found.` : 'Open this page from a row in Enquiries.'}
          </p>
        ) : (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
              <div className="font-bold text-amber-100 capitalize">{enquiry.type} · {enquiry.name}</div>
              <div className="text-sm text-amber-300/70">{enquiry.email}</div>
              <p className="text-sm text-amber-200/70 mt-3 whitespace-pre-wrap border-t border-stone-800 pt-3">{enquiry.message}</p>
            </div>

            {sent ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-emerald-300 font-semibold">Reply sent to {enquiry.email}.</p>
              </div>
            ) : (
              <>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">Your reply</label>
                  <textarea
                    value={reply}
                    onChange={(e) => setReply(e.target.value)}
                    rows={7}
                    placeholder="Write your reply…"
                    className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm focus:outline-none focus:border-[#D4AF37]"
                  />
                </div>

                {reply && (
                  <div className="p-5 rounded-xl bg-white text-[#2B1D0E] text-sm" dangerouslySetInnerHTML={{ __html: previewHtml }} />
                )}

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button
                  onClick={send}
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all disabled:opacity-60"
                >
                  {sending ? 'Sending…' : `Send reply to ${enquiry.email}`}
                </button>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function ReplyEnquiryPage() {
  return (
    <PasscodeGate>
      {(passcode) => (
        <Suspense fallback={<div className="min-h-screen bg-[#140D08]" />}>
          <Composer passcode={passcode} />
        </Suspense>
      )}
    </PasscodeGate>
  );
}
