'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { Trash2, ArrowLeft } from 'lucide-react';
import { useAdminContextPasscode } from '../../../../src/components/admin/AdminPasscodeContext';
import type { StoredEnquiry } from '../../../../src/lib/enquiryStore';

export default function EnquiryDetailPage() {
  const passcode = useAdminContextPasscode();
  const params = useParams();
  const router = useRouter();
  const id = decodeURIComponent(String(params.id || ''));

  const [enquiry, setEnquiry] = useState<StoredEnquiry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/admin/enquiries/${encodeURIComponent(id)}/`, { headers: { 'X-Admin-Passcode': passcode } })
      .then((r) => r.json())
      .then((d) => setEnquiry(d.enquiry || null))
      .finally(() => setLoading(false));
  }, [id, passcode]);

  const handleDelete = async () => {
    if (!confirm("Delete this enquiry? This can't be undone.")) return;
    await fetch(`/api/admin/enquiries/${encodeURIComponent(id)}/`, { method: 'DELETE', headers: { 'X-Admin-Passcode': passcode } });
    router.push('/admin/enquiries/');
  };

  if (loading) return <p className="text-amber-300/60 text-sm">Loading…</p>;
  if (!enquiry) {
    return (
      <div>
        <p className="text-amber-300/60 text-sm mb-4">Enquiry not found.</p>
        <Link href="/admin/enquiries/" className="text-sm text-[#D4AF37] hover:underline">
          ← Back to enquiries
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl">
      <Link href="/admin/enquiries/" className="inline-flex items-center gap-1.5 text-xs text-amber-400/60 hover:text-amber-200 mb-5">
        <ArrowLeft className="w-3.5 h-3.5" /> Back to enquiries
      </Link>

      <div className="flex items-start justify-between mb-6">
        <div>
          <h1 className="text-2xl font-serif font-bold text-amber-100 capitalize">{enquiry.type} enquiry</h1>
          <p className="text-sm text-amber-400/60 mt-1 flex items-center gap-2">
            {new Date(enquiry.createdAt).toLocaleString()}
            <span
              className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full ${
                enquiry.status === 'new'
                  ? 'bg-amber-950 text-amber-400 border border-amber-800'
                  : 'bg-emerald-950 text-emerald-400 border border-emerald-800'
              }`}
            >
              {enquiry.status}
            </span>
          </p>
        </div>
        <button
          onClick={handleDelete}
          className="p-2 rounded-lg text-red-400/60 hover:text-red-400 hover:bg-red-950/30 transition-all"
          aria-label="Delete enquiry"
        >
          <Trash2 className="w-4 h-4" />
        </button>
      </div>

      <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 mb-6">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Contact</div>
        <div className="font-semibold text-amber-100">{enquiry.name}</div>
        <div className="text-sm text-amber-200/70">{enquiry.email}</div>
        {enquiry.phone && <div className="text-sm text-amber-200/70">{enquiry.phone}</div>}
      </div>

      {enquiry.meta && Object.keys(enquiry.meta).length > 0 && (
        <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 mb-6 space-y-1.5">
          <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Details</div>
          {Object.entries(enquiry.meta).map(([k, v]) => (
            <div key={k} className="text-sm flex justify-between gap-4">
              <span className="text-amber-400/60 capitalize">{k.replace(/([A-Z])/g, ' $1')}</span>
              <span className="text-amber-100 text-right">{v}</span>
            </div>
          ))}
        </div>
      )}

      <div className="mb-6">
        <div className="text-[10px] font-bold uppercase tracking-wider text-amber-400/50 mb-2">Message</div>
        <div className="p-4 rounded-xl bg-stone-950/80 border border-stone-800 text-sm text-amber-200/80 whitespace-pre-wrap">
          {enquiry.message}
        </div>
      </div>

      <Link
        href={`/admin/reply-enquiry/?id=${encodeURIComponent(enquiry.id)}`}
        className="inline-block py-3 px-6 rounded-xl bg-[#D4AF37] text-[#140D08] font-bold text-sm hover:bg-[#E5C158] transition-all"
      >
        {enquiry.status === 'replied' ? 'Send another reply' : 'Reply'}
      </Link>
    </div>
  );
}
