'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PackageCheck, MessagesSquare, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { useAdminContextPasscode } from '../../src/components/admin/AdminPasscodeContext';
import type { StoredOrder } from '../../src/lib/orderStore';
import type { StoredEnquiry } from '../../src/lib/enquiryStore';

export default function AdminHubPage() {
  const passcode = useAdminContextPasscode();
  const [orders, setOrders] = useState<StoredOrder[]>([]);
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const headers = { 'X-Admin-Passcode': passcode };
    Promise.all([
      fetch('/api/admin/orders/', { headers }).then((r) => r.json()),
      fetch('/api/admin/enquiries/', { headers }).then((r) => r.json()),
    ])
      .then(([o, e]) => {
        setOrders(o.orders || []);
        setEnquiries(e.enquiries || []);
      })
      .finally(() => setLoading(false));
  }, [passcode]);

  const pendingOrders = orders.filter((o) => o.status === 'pending').length;
  const newEnquiries = enquiries.filter((e) => e.status === 'new').length;

  if (loading) return <p className="text-amber-300/60 text-sm">Loading…</p>;

  return (
    <div className="space-y-10">
      <h1 className="text-3xl font-serif font-bold text-amber-100">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Link
          href="/admin/orders/"
          className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-[#D4AF37] transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <PackageCheck className="w-6 h-6 text-[#D4AF37]" />
            <ArrowRight className="w-4 h-4 text-amber-500/50 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-3xl font-serif font-bold text-amber-100">{orders.length}</div>
          <div className="text-amber-300/70 text-sm mt-1">
            Orders {pendingOrders > 0 && <span className="text-[#D4AF37] font-semibold">· {pendingOrders} pending</span>}
          </div>
        </Link>

        <Link
          href="/admin/enquiries/"
          className="p-6 rounded-2xl bg-stone-950/80 border border-stone-800 hover:border-[#D4AF37] transition-all group"
        >
          <div className="flex items-center justify-between mb-3">
            <MessagesSquare className="w-6 h-6 text-[#D4AF37]" />
            <ArrowRight className="w-4 h-4 text-amber-500/50 group-hover:translate-x-1 transition-transform" />
          </div>
          <div className="text-3xl font-serif font-bold text-amber-100">{enquiries.length}</div>
          <div className="text-amber-300/70 text-sm mt-1">
            Enquiries {newEnquiries > 0 && <span className="text-[#D4AF37] font-semibold">· {newEnquiries} new</span>}
          </div>
        </Link>
      </div>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-serif font-bold text-amber-100">Recent orders</h2>
          {orders.length > 5 && (
            <Link href="/admin/orders/" className="text-xs text-[#D4AF37] hover:underline">
              View all {orders.length} →
            </Link>
          )}
        </div>
        {orders.length === 0 ? (
          <p className="text-amber-300/50 text-sm p-6 rounded-xl bg-stone-950/50 border border-stone-800">
            No orders yet — they&apos;ll appear here once customers check out.
          </p>
        ) : (
          <div className="space-y-2">
            {orders.slice(0, 5).map((o) => (
              <Link
                key={o.orderNumber}
                href={`/admin/orders/${encodeURIComponent(o.orderNumber)}/`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-stone-700 transition-all"
              >
                <span className="font-bold text-amber-100 text-sm w-24 shrink-0">{o.orderNumber}</span>
                <span className="text-sm text-amber-200/80 truncate flex-1">{o.customerName}</span>
                <span className="text-sm font-mono text-amber-100 shrink-0">${o.amountDue.toFixed(2)}</span>
                <span className="text-amber-400/50 shrink-0" title={o.channel}>
                  {o.channel === 'whatsapp' ? <MessageCircle className="w-3.5 h-3.5" /> : <Mail className="w-3.5 h-3.5" />}
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full shrink-0 ${
                    o.status === 'pending'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}
                >
                  {o.status === 'pending' ? 'Pending' : 'Sent'}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>

      <section>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-serif font-bold text-amber-100">Recent enquiries</h2>
          {enquiries.length > 5 && (
            <Link href="/admin/enquiries/" className="text-xs text-[#D4AF37] hover:underline">
              View all {enquiries.length} →
            </Link>
          )}
        </div>
        {enquiries.length === 0 ? (
          <p className="text-amber-300/50 text-sm p-6 rounded-xl bg-stone-950/50 border border-stone-800">
            No enquiries yet — contact and wholesale submissions appear here.
          </p>
        ) : (
          <div className="space-y-2">
            {enquiries.slice(0, 5).map((e) => (
              <Link
                key={e.id}
                href={`/admin/enquiries/${encodeURIComponent(e.id)}/`}
                className="flex items-center gap-4 p-3.5 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-stone-700 transition-all"
              >
                <span className="text-xs font-bold uppercase tracking-wider text-amber-400/60 w-20 shrink-0">{e.type}</span>
                <span className="text-sm text-amber-200/80 truncate flex-1">{e.name}</span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full shrink-0 ${
                    e.status === 'new'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}
                >
                  {e.status}
                </span>
              </Link>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
