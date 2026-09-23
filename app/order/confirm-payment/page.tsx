'use client';

import React, { Suspense, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, Upload } from 'lucide-react';
import { CONTACT } from '../../../src/config/site';

function ConfirmPaymentForm() {
  const params = useSearchParams();
  const orderNumber = params.get('id') || '';

  const [file, setFile] = useState<File | null>(null);
  const [note, setNote] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderNumber) {
      setError('This link is missing your order number — please use the link from your payment-details email.');
      return;
    }
    if (!file) {
      setError('Choose a screenshot of your completed payment first.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const form = new FormData();
      form.set('orderNumber', orderNumber);
      form.set('note', note);
      form.set('file', file);
      const res = await fetch('/api/order/confirm-payment/', { method: 'POST', body: form });
      const data = await res.json();
      if (data.ok) setSent(true);
      else setError(data.error || 'Upload failed — please try again.');
    } catch {
      setError('Upload failed — check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-stone-950/90 border border-stone-800 rounded-2xl p-8">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block text-center">
          Aged &amp; Amber
        </span>
        <h1 className="text-2xl font-serif font-bold text-amber-100 text-center mt-1 mb-6">
          Confirm Your Payment
        </h1>

        {sent ? (
          <div className="text-center space-y-3 py-4">
            <CheckCircle2 className="w-10 h-10 text-emerald-400 mx-auto" />
            <p className="text-emerald-300 font-semibold">Thanks — we&apos;ve received your confirmation.</p>
            <p className="text-amber-300/70 text-sm">
              Our concierge will verify the payment and follow up shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} className="space-y-4">
            {orderNumber && (
              <p className="text-center text-sm text-amber-300/70">
                Order <span className="font-bold text-amber-100">{orderNumber}</span>
              </p>
            )}

            <div className="space-y-2">
              <label htmlFor="screenshot" className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Payment screenshot
              </label>
              <label
                htmlFor="screenshot"
                className="flex flex-col items-center justify-center gap-2 p-6 rounded-xl border-2 border-dashed border-stone-700 hover:border-[#D4AF37] transition-all cursor-pointer text-center"
              >
                <Upload className="w-6 h-6 text-amber-400/60" />
                <span className="text-sm text-amber-200/80">{file ? file.name : 'Tap to choose a screenshot'}</span>
                <span className="text-xs text-amber-400/50">JPG, PNG, WebP, or HEIC — up to 4MB</span>
              </label>
              <input
                id="screenshot"
                type="file"
                accept="image/jpeg,image/png,image/webp,image/heic,image/heif"
                required
                onChange={(e) => setFile(e.target.files?.[0] || null)}
                className="sr-only"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="note" className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                Note (optional)
              </label>
              <textarea
                id="note"
                value={note}
                onChange={(e) => setNote(e.target.value)}
                rows={3}
                placeholder="Anything we should know…"
                className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm focus:outline-none focus:border-[#D4AF37]"
              />
            </div>

            {error && <p className="text-red-400 text-xs text-center">{error}</p>}

            <button
              type="submit"
              disabled={sending}
              className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all disabled:opacity-60"
            >
              {sending ? 'Uploading…' : 'Send Payment Confirmation'}
            </button>

            <p className="text-center text-xs text-amber-400/50">
              Having trouble? Email <a href={`mailto:${CONTACT.email}`} className="text-[#D4AF37] underline">{CONTACT.email}</a> or
              WhatsApp {CONTACT.phone}.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}

export default function ConfirmPaymentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#140D08]" />}>
      <ConfirmPaymentForm />
    </Suspense>
  );
}
