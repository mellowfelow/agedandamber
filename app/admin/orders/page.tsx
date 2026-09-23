'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, MessageCircle, Mail } from 'lucide-react';
import { PasscodeGate } from '../../../src/components/admin/PasscodeGate';
import { AdminNav } from '../../../src/components/admin/AdminNav';
import type { StoredOrder } from '../../../src/lib/orderStore';

function OrdersList({ passcode }: { passcode: string }) {
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [loading, setLoading] = useState(true);

  const load = () => {
    setLoading(true);
    fetch('/api/admin/orders/', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setOrders(d.orders || []))
      .finally(() => setLoading(false));
  };

  useEffect(load, [passcode]);

  const deleteOrder = async (orderNumber: string) => {
    if (!confirm(`Delete order ${orderNumber}? This can't be undone.`)) return;
    await fetch(`/api/admin/orders/${encodeURIComponent(orderNumber)}/`, {
      method: 'DELETE',
      headers: { 'X-Admin-Passcode': passcode },
    });
    load();
  };

  const deleteAll = async () => {
    if (!confirm(`Delete all ${orders.length} orders? This can't be undone.`)) return;
    await Promise.all(
      orders.map((o) =>
        fetch(`/api/admin/orders/${encodeURIComponent(o.orderNumber)}/`, {
          method: 'DELETE',
          headers: { 'X-Admin-Passcode': passcode },
        })
      )
    );
    load();
  };

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 p-6 md:p-10">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">Aged &amp; Amber</span>
        <h1 className="text-3xl font-serif font-bold text-amber-100 mt-1 mb-6">Orders</h1>
        <AdminNav />

        {loading ? (
          <p className="text-amber-300/60 text-sm">Loading…</p>
        ) : orders.length === 0 ? (
          <p className="text-amber-300/60 text-sm">No orders yet.</p>
        ) : (
          <>
            <div className="flex justify-end mb-3">
              <button
                onClick={deleteAll}
                className="text-xs text-red-400/70 hover:text-red-400 flex items-center gap-1.5"
              >
                <Trash2 className="w-3.5 h-3.5" /> Delete all
              </button>
            </div>
            <div className="space-y-2.5">
              {orders.map((o) => (
                <div
                  key={o.orderNumber}
                  className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-stone-700 transition-all flex items-center gap-4"
                >
                  <Link href={`/admin/send-payment-email/?id=${encodeURIComponent(o.orderNumber)}`} className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                    <div>
                      <div className="font-bold text-amber-100 text-sm">{o.orderNumber}</div>
                      <div className="text-xs text-amber-400/50">{new Date(o.createdAt).toLocaleString()}</div>
                    </div>
                    <div className="text-sm text-amber-200/80 truncate">
                      {o.customerName}
                      <div className="text-xs text-amber-400/50 truncate">{o.customerEmail}</div>
                    </div>
                    <div className="text-sm font-mono text-amber-100">${o.amountDue.toFixed(2)}</div>
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full ${
                          o.status === 'pending'
                            ? 'bg-amber-950 text-amber-400 border border-amber-800'
                            : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                        }`}
                      >
                        {o.status === 'pending' ? 'Pending' : 'Sent'}
                      </span>
                      <span className="text-amber-400/50" title={o.channel}>
                        {o.channel === 'whatsapp' ? <MessageCircle className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                      </span>
                    </div>
                  </Link>
                  <button
                    onClick={() => deleteOrder(o.orderNumber)}
                    className="p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-950/30 transition-all shrink-0"
                    aria-label={`Delete order ${o.orderNumber}`}
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function OrdersPage() {
  return <PasscodeGate>{(passcode) => <OrdersList passcode={passcode} />}</PasscodeGate>;
}
