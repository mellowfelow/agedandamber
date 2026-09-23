'use client';

import React, { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2 } from 'lucide-react';
import { PasscodeGate } from '../../../src/components/admin/PasscodeGate';
import { AdminNav } from '../../../src/components/admin/AdminNav';
import { WhatsAppSendPanel } from '../../../src/components/admin/WhatsAppSendPanel';
import { PaymentTermsList } from '../../../src/components/admin/PaymentTermsList';
import { instructionsParts, paymentTermsLines } from '../../../src/lib/order';
import { waPaymentDetailsLink, waPaymentDetailsMessage } from '../../../src/lib/whatsapp';
import type { StoredOrder } from '../../../src/lib/orderStore';

const OPENING = "Here's how to complete payment for your order:";
const CLOSING = 'Reply to this email once payment is sent and we\'ll confirm your order right away.';

function Composer({ passcode }: { passcode: string }) {
  const params = useSearchParams();
  const id = params.get('id') || '';

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [mode, setMode] = useState<'paste' | 'template'>('paste');
  const [detail, setDetail] = useState('');
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!id) {
      setLoading(false);
      return;
    }
    fetch(`/api/admin/orders/${encodeURIComponent(id)}/`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setOrder(d.order || null))
      .finally(() => setLoading(false));
  }, [id, passcode]);

  const instructions = instructionsParts(OPENING, detail, CLOSING);

  const send = async () => {
    if (!order || !detail.trim()) {
      setError('Paste the payment detail (wallet address, Cash App tag, bank routing, etc.) before sending.');
      return;
    }
    setSending(true);
    setError('');
    try {
      const res = await fetch('/api/admin/send-payment-email/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'X-Admin-Passcode': passcode },
        body: JSON.stringify({ orderNumber: order.orderNumber, instructions, instructionsIsHtml: false }),
      });
      const data = await res.json();
      if (data.ok) {
        setSent(true);
        // Fire-and-forget: mark sent already happens server-side.
      } else {
        setError(data.error || 'Send failed.');
      }
    } catch {
      setError('Send failed — check your connection and try again.');
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">Aged &amp; Amber</span>
        <h1 className="text-3xl font-serif font-bold text-amber-100 mt-1 mb-6">Send Payment Details</h1>
        <AdminNav />

        {loading ? (
          <p className="text-amber-300/60 text-sm">Loading…</p>
        ) : !order ? (
          <p className="text-amber-300/60 text-sm">
            {id ? `Order ${id} not found.` : 'Open this page from an order row in Orders.'}
          </p>
        ) : (
          <div className="space-y-6">
            <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 flex justify-between items-center">
              <div>
                <div className="font-bold text-amber-100">{order.orderNumber}</div>
                <div className="text-sm text-amber-300/70">{order.customerName} · {order.customerEmail}</div>
              </div>
              <div className="text-right">
                <div className="text-lg font-serif font-bold text-[#D4AF37]">${order.amountDue.toFixed(2)}</div>
                <div className="text-xs text-amber-400/50">{order.paymentMethod}</div>
              </div>
            </div>

            {sent ? (
              <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
                <p className="text-emerald-300 font-semibold">Payment details sent to {order.customerEmail}.</p>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  {(['paste', 'template'] as const).map((m) => (
                    <button
                      key={m}
                      onClick={() => setMode(m)}
                      className={`py-1.5 px-4 rounded-full text-xs font-semibold capitalize transition-all ${
                        mode === m ? 'bg-[#D4AF37] text-[#140D08]' : 'bg-stone-900 text-amber-300/70 hover:bg-stone-800'
                      }`}
                    >
                      {m} mode
                    </button>
                  ))}
                </div>

                {mode === 'paste' ? (
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
                      Payment detail for {order.paymentMethod}
                    </label>
                    <textarea
                      value={detail}
                      onChange={(e) => setDetail(e.target.value)}
                      rows={5}
                      placeholder="Paste the wallet address, Cash App $cashtag, Chime/bank routing + account, or wire details here…"
                      className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm focus:outline-none focus:border-[#D4AF37]"
                    />
                    <p className="text-[11px] text-amber-400/50">
                      Your text is wrapped automatically with the standard opening/closing and payment terms — you only
                      paste the specific routing info.
                    </p>
                  </div>
                ) : (
                  <div className="p-5 rounded-xl bg-white text-[#2B1D0E] text-sm space-y-3">
                    <p>{OPENING}</p>
                    <p className="whitespace-pre-wrap font-mono text-xs bg-stone-100 p-3 rounded">{detail || '(paste detail above to preview)'}</p>
                    <p>{CLOSING}</p>
                    <ul className="list-disc list-inside text-xs space-y-1">
                      {paymentTermsLines().map((l, i) => (
                        <li key={i}>{l}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {error && <p className="text-red-400 text-xs">{error}</p>}

                <button
                  onClick={send}
                  disabled={sending}
                  className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all disabled:opacity-60"
                >
                  {sending ? 'Sending…' : `Email payment details to ${order.customerEmail}`}
                </button>
              </>
            )}

            <div className="pt-2 border-t border-stone-800">
              <WhatsAppSendPanel
                phone={order.customerPhone}
                link={waPaymentDetailsLink(order.customerPhone, {
                  orderNumber: order.orderNumber,
                  amountDue: order.amountDue,
                  instructions: detail || '(add payment detail above first)',
                })}
                messageLines={waPaymentDetailsMessage({
                  orderNumber: order.orderNumber,
                  amountDue: order.amountDue,
                  instructions: detail || '(add payment detail above first)',
                })}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function SendPaymentEmailPage() {
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
