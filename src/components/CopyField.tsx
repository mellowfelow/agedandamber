'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';

export const CopyField: React.FC<{ label: string; value: string; mono?: boolean }> = ({
  label,
  value,
  mono,
}) => {
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* clipboard unavailable — silently ignore */
    }
  };

  return (
    <button
      type="button"
      onClick={onCopy}
      className="inline-flex items-center gap-2 py-1.5 px-3 rounded-full bg-stone-900/80 border border-stone-700 text-xs text-amber-100 hover:border-[#D4AF37] transition-all"
    >
      <span className="text-amber-400/60">{label}:</span>
      <span className={mono ? 'font-mono' : ''}>{value}</span>
      {copied ? (
        <Check className="w-3.5 h-3.5 text-emerald-400" />
      ) : (
        <Copy className="w-3.5 h-3.5 text-amber-400/60" />
      )}
      {copied && <span className="text-emerald-400">Copied!</span>}
    </button>
  );
};
