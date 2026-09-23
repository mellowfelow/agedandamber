'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Trash2, MessageCircle, Mail } from 'lucide-react';
import { useAdminContextPasscode } from '../../../src/components/admin/AdminPasscodeContext';
import { OrderStatusBadge } from '../../../src/components/admin/StatusBadge';
import type { StoredOrder } from '../../../src/lib/orderStore';

export default function OrdersPage() {
  const passcode = useAdminContextPasscode();
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

  const deleteOrder = async (orderNumber: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
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
    <div>
      <h1 className="text-3xl font-serif font-bold text-amber-100 mb-6">Orders</h1>

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
                <Link href={`/admin/orders/${encodeURIComponent(o.orderNumber)}/`} className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
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
                    <OrderStatusBadge status={o.status} />
                    <span className="text-amber-400/50 shrink-0" title={o.channel}>
                      {o.channel === 'whatsapp' ? <MessageCircle className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                    </span>
                  </div>
                </Link>
                <button
                  onClick={(e) => deleteOrder(o.orderNumber, e)}
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
  );
}
