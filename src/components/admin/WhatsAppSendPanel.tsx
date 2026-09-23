'use client';

import React, { useState } from 'react';
import { MessageCircle, Copy, Check } from 'lucide-react';
import { waMessageText } from '../../lib/whatsapp';

export const WhatsAppSendPanel: React.FC<{
  phone: string;
  link: string;
  messageLines: string[];
}> = ({ phone, link, messageLines }) => {
  const [copied, setCopied] = useState(false);

  const copyMessage = async () => {
    try {
      await navigator.clipboard.writeText(waMessageText(messageLines));
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="p-4 rounded-xl bg-emerald-950/30 border border-emerald-800/40 space-y-3">
      <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
        <MessageCircle className="w-4 h-4" /> WhatsApp reply — {phone}
      </div>
      <p className="text-amber-200/70 text-xs">
        Opens WhatsApp with the message pre-filled — just press Send.
      </p>
      <div className="flex gap-2">
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 text-center py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all"
        >
          Open in WhatsApp
        </a>
        <button
          type="button"
          onClick={copyMessage}
          className="py-2.5 px-4 rounded-lg bg-stone-900 border border-stone-700 text-amber-200 text-xs font-semibold hover:border-[#D4AF37] transition-all flex items-center gap-1.5"
        >
          {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
          {copied ? 'Copied' : 'Copy message'}
        </button>
      </div>
    </div>
  );
};
