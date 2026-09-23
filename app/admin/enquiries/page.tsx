'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { Trash2 } from 'lucide-react';
import { useAdminContextPasscode } from '../../../src/components/admin/AdminPasscodeContext';
import type { StoredEnquiry } from '../../../src/lib/enquiryStore';

type Filter = 'all' | 'contact' | 'wholesale' | 'new' | 'replied';

export default function EnquiriesPage() {
  const passcode = useAdminContextPasscode();
  const [enquiries, setEnquiries] = useState<StoredEnquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState<Filter>('all');

  const load = () => {
    setLoading(true);
    fetch('/api/admin/enquiries/', { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiries(d.enquiries || []))
      .finally(() => setLoading(false));
  };

  useEffect(load, [passcode]);

  const filtered = useMemo(() => {
    if (filter === 'all') return enquiries;
    if (filter === 'new' || filter === 'replied') return enquiries.filter((e) => e.status === filter);
    return enquiries.filter((e) => e.type === filter);
  }, [enquiries, filter]);

  const deleteEnquiry = async (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (!confirm("Delete this enquiry? This can't be undone.")) return;
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}/`, {
      method: 'DELETE',
      headers: { 'X-Admin-Passcode': passcode },
    });
    load();
  };

  return (
    <div>
      <h1 className="text-3xl font-serif font-bold text-amber-100 mb-6">Enquiries</h1>

      <div className="flex flex-wrap gap-2 mb-5">
        {(['all', 'contact', 'wholesale', 'new', 'replied'] as Filter[]).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`py-1.5 px-3 rounded-full text-xs font-semibold capitalize transition-all ${
              filter === f ? 'bg-[#D4AF37] text-[#140D08]' : 'bg-stone-900 text-amber-300/70 hover:bg-stone-800'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {loading ? (
        <p className="text-amber-300/60 text-sm">Loading…</p>
      ) : filtered.length === 0 ? (
        <p className="text-amber-300/60 text-sm">No enquiries match this filter.</p>
      ) : (
        <div className="space-y-2.5">
          {filtered.map((e) => (
            <div
              key={e.id}
              className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 hover:border-stone-700 transition-all flex items-center gap-4"
            >
              <Link href={`/admin/enquiries/${encodeURIComponent(e.id)}/`} className="flex-1 min-w-0 grid grid-cols-1 md:grid-cols-4 gap-2 items-center">
                <div>
                  <div className="font-bold text-amber-100 text-sm capitalize">{e.type}</div>
                  <div className="text-xs text-amber-400/50">{new Date(e.createdAt).toLocaleString()}</div>
                </div>
                <div className="text-sm text-amber-200/80 truncate">
                  {e.name}
                  <div className="text-xs text-amber-400/50 truncate">{e.email}</div>
                </div>
                <div className="text-sm text-amber-200/60 truncate md:col-span-1">{e.message}</div>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full w-fit ${
                    e.status === 'new'
                      ? 'bg-amber-950 text-amber-400 border border-amber-800'
                      : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
                  }`}
                >
                  {e.status}
                </span>
              </Link>
              <button
                onClick={(ev) => deleteEnquiry(e.id, ev)}
                className="p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-950/30 transition-all shrink-0"
                aria-label="Delete enquiry"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
