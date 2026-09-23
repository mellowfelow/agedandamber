'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Trash2, Mail, MessageCircle, ArrowLeft } from 'lucide-react';
import { useAdminContextPasscode } from '../../../../src/components/admin/AdminPasscodeContext';
import { OrderStatusBadge } from '../../../../src/components/admin/StatusBadge';
import type { StoredOrder } from '../../../../src/lib/orderStore';

export default function OrderDetailPage() {
  const passcode = useAdminContextPasscode();
  const params = useParams();
  const router = useRouter();
  const id = decodeURIComponent(String(params.id || ''));

  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/orders/${encodeURIComponent(id)}/`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setOrder(d.order || null))
      .finally(() => setLoading(false));
  }, [id, passcode]);

  const handleDelete = async () => {
    if (!confirm(`Delete order ${id}? This can't be undone.`)) return;
    await fetch(`/api/admin/orders/${encodeURIComponent(id)}/`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } });
    router.push('/admin/orders/');
  };

  if (loading) return <p className="text-amber-300/60 text-sm">Loading…</p>;
  if (!order) {
    return (
      <div>
        <p className="text-amber-300/60 text-sm mb-4">Order {id} not found.</p>
        <Link href="/admin/orders/" className="text-sm text-[#D4AF37] hover:underline">
          ← Back to orders
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/orders/" className="inline-flex items-center gap-1.5 text-xs text-amber-400/60 hover:text-amber-200 mb-5">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to orders
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-amber-100">{order.orderNumber}</h1>
          <p className="text-sm text-amber-400/60 mt-1 flex items-center gap-2 flex-wrap">
            {new Date(order.createdAt).toLocaleString()}
            <OrderStatusBadge status={order.status} />
            <span className="inline-flex items-center gap-1 text-amber-400/50">
              {order.channel === 'whatsapp' ? <MessageCircle className="w-3 h-3" /> : <Mail className="w-3 h-3" />}
              {order.channel}
            </span>
          </p>
        </div>
        <button
          onClick={handleDelete}
          className="p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-950/30 transition-all"
          aria-label="Delete order"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Customer</div>
          <div className="font-semibold text-amber-100">{order.customerName}</div>
          <div className="text-sm text-amber-200/70">{order.customerEmail}</div>
          {order.customerPhone && <div className="text-sm text-amber-200/70">{order.customerPhone}</div>}
        </div>
        <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Payment</div>
          <div className="font-semibold text-amber-100">{order.paymentMethod || '—'}</div>
          <div className="text-2xl font-serif font-bold text-[#D4AF37] mt-1">${order.amountDue.toFixed(2)}</div>
        </div>
      </div>

      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Items</div>
        <div className="rounded-xl border border-stone-800 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-stone-950/80">
              <tr>
                <th className="text-left py-2 px-4 text-amber-400/60 font-semibold text-xs uppercase tracking-wider">Item</th>
                <th className="text-right py-2 px-4 text-amber-400/60 font-semibold text-xs uppercase tracking-wider">Qty</th>
                <th className="text-right py-2 px-4 text-amber-400/60 font-semibold text-xs uppercase tracking-wider">Amount</th>
              </tr>
            </thead>
            <tbody>
              {order.items.map((item, i) => (
                <tr key={i} className="border-t border-stone-800">
                  <td className="py-2.5 px-4 text-amber-100">{item.name}</td>
                  <td className="py-2.5 px-4 text-right text-amber-200/70">×{item.quantity}</td>
                  <td className="py-2.5 px-4 text-right font-mono text-amber-100">${item.lineTotal.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Link
        href={`/admin/send-payment-email/?id=${encodeURIComponent(order.orderNumber)}`}
        className="inline-block py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all"
      >
        {order.status === 'pending' ? 'Send payment details' : 'Resend payment details'}
      </Link>
      {order.status === 'payment-confirmed' && (
        <p className="text-xs text-emerald-400 mt-3">✓ Customer uploaded a payment confirmation screenshot — check your email.</p>
      )}
    </div>
  );
}
