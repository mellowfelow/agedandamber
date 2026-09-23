'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { PackageCheck, MessagesSquare, ArrowRight } from 'lucide-react';
import { PasscodeGate } from '../../src/components/admin/PasscodeGate';
import { AdminNav } from '../../src/components/admin/AdminNav';
import type { StoredOrder } from '../../src/lib/orderStore';
import type { StoredEnquiry } from '../../src/lib/enquiryStore';

function Hub({ passcode }: { passcode: string }) {
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

  return (
    <div className="min-h-screen bg-[#140D08] text-amber-50 p-6 md:p-10">
      <div className="max-w-3xl mx-auto space-y-8">
        <div>
          <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">Aged &amp; Amber</span>
          <h1 className="text-3xl font-serif font-bold text-amber-100 mt-1">Admin Dashboard</h1>
        </div>

        <AdminNav />

        {loading ? (
          <p className="text-amber-300/60 text-sm">Loading…</p>
        ) : (
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
        )}
      </div>
    </div>
  );
}

export default function AdminHubPage() {
  return <PasscodeGate>{(passcode) => <Hub passcode={passcode} />}</PasscodeGate>;
}
