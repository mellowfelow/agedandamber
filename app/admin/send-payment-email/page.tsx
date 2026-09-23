'use client';

import React, { Suspense, useEffect, useState } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { CheckCircle2, ArrowLeft } from 'lucide-react';
import { useAdminContextPasscode } from '../../../src/components/admin/AdminPasscodeContext';
import { WhatsAppSendPanel } from '../../../src/components/admin/WhatsAppSendPanel';
import { REPLY } from '../../../src/config/site';
import { paymentMethodParts, paymentTermsLines } from '../../../src/lib/order';
import { waPaymentDetailsLink, waPaymentDetailsMessage } from '../../../src/lib/whatsapp';
import type { StoredOrder } from '../../../src/lib/orderStore';

function Composer() {
  const passcode = useAdminContextPasscode();
  const params = useSearchParams();
  const id = params.get('id') || '';

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);
  const [methodId, setMethodId] = useState(REPLY.paymentMethods[0]?.id || '');
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
      .then((d) => {
        setOrder(d.order || null);
        // Default the method dropdown to whatever the customer selected at checkout, if it matches a registry entry.
        const matched = REPLY.paymentMethods.find((m) => m.label === d.order?.paymentMethod);
        if (matched) setMethodId(matched.id);
      })
      .finally(() => setLoading(false));
  }, [id, passcode]);

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
        body: JSON.stringify({ orderNumber: order.orderNumber, methodId, detail }),
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

  if (loading) return <p className="text-amber-300/60 text-sm">Loading…</p>;
  if (!order) {
    return (
      <div>
        <p className="text-amber-300/60 text-sm mb-4">{id ? `Order ${id} not found.` : 'Open this page from an order.'}</p>
        <Link href="/admin/orders/" className="text-sm text-[#D4AF37] hover:underline">
          ← Back to orders
        </Link>
      </div>
    );
  }

  const { opening, closing } = paymentMethodParts(methodId, order.amountDue, order.orderNumber);

  return (
    <div className="max-w-2xl">
      <Link href={`/admin/orders/${encodeURIComponent(order.orderNumber)}/`} className="inline-flex items-center gap-1.5 text-xs text-amber-400/60 hover:text-amber-200 mb-5">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to order
      </Link>

      <h1 className="text-2xl font-serif font-bold text-amber-100 mb-1">Send Payment Details</h1>
      <p className="text-sm text-amber-300/70 mb-6">
        {order.orderNumber} · {order.customerName} · {order.customerEmail} ·{' '}
        <span className="text-[#D4AF37] font-semibold">${order.amountDue.toFixed(2)}</span>
      </p>

      {sent ? (
        <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/50 text-center space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-400 mx-auto" />
          <p className="text-emerald-300 font-semibold">Payment details sent to {order.customerEmail}.</p>
        </div>
      ) : (
        <div className="space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">Payment method</label>
            <select
              value={methodId}
              onChange={(e) => setMethodId(e.target.value)}
              className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm focus:outline-none focus:border-[#D4AF37]"
            >
              {REPLY.paymentMethods.map((m) => (
                <option key={m.id} value={m.id}>
                  {m.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label className="text-xs font-bold text-amber-300 uppercase tracking-wider block">
              Payment detail — wallet address, $cashtag, or bank/wire details
            </label>
            <textarea
              value={detail}
              onChange={(e) => setDetail(e.target.value)}
              rows={5}
              placeholder="Paste the real routing detail for this order's payment method…"
              className="w-full p-3 rounded-xl bg-stone-900 border border-stone-800 text-amber-100 text-sm font-mono focus:outline-none focus:border-[#D4AF37]"
            />
          </div>

          <div className="p-5 rounded-xl bg-white text-[#2B1D0E] text-sm space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-stone-400">Email preview</p>
            <p>{opening}</p>
            <p className="whitespace-pre-wrap font-mono text-xs bg-stone-100 p-3 rounded">{detail || '(paste detail above to preview)'}</p>
            <p>{closing}</p>
            <ul className="list-disc list-inside text-xs space-y-1">
              {paymentTermsLines(order.orderNumber).map((l, i) => (
                <li key={i}>{l}</li>
              ))}
            </ul>
          </div>

          {error && <p className="text-red-400 text-xs">{error}</p>}

          <button
            onClick={send}
            disabled={sending}
            className="w-full py-3.5 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all disabled:opacity-60"
          >
            {sending ? 'Sending…' : `Email payment details to ${order.customerEmail}`}
          </button>
        </div>
      )}

      <div className="pt-6 mt-6 border-t border-stone-800">
        <WhatsAppSendPanel
          phone={order.customerPhone}
          link={waPaymentDetailsLink(order.customerPhone, {
            orderNumber: order.orderNumber,
            amountDue: order.amountDue,
            instructions: `${opening}\n\n${detail || '(add payment detail above first)'}\n\n${closing}`,
          })}
          messageLines={waPaymentDetailsMessage({
            orderNumber: order.orderNumber,
            amountDue: order.amountDue,
            instructions: `${opening}\n\n${detail || '(add payment detail above first)'}\n\n${closing}`,
          })}
        />
      </div>
    </div>
  );
}

export default function SendPaymentEmailPage() {
  return (
    <Suspense fallback={<p className="text-amber-300/60 text-sm">Loading…</p>}>
      <Composer />
    </Suspense>
  );
}
