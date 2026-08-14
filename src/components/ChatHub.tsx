'use client';

import React, { useState } from 'react';
import { MessageSquare, MessageCircle, Mail, Phone, X, ChevronUp } from 'lucide-react';
import { CHAT, CONTACT } from '../config/site';
import { useAppState } from '../../app/providers';

export const ChatHub: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { cookieBannerVisible } = useAppState();

  return (
    <div
      className={`fixed bottom-6 right-4 md:right-6 z-40 flex-col items-end ${
        cookieBannerVisible ? 'hidden md:flex' : 'flex'
      }`}
    >
      {/* Expanded Menu */}
      {isOpen && (
        <div className="mb-3 w-72 p-4 rounded-2xl bg-[#1C140E] border border-[#D4AF37]/40 text-amber-50 shadow-2xl space-y-3 animate-fade-in">
          <div className="flex items-center justify-between border-b border-amber-900/40 pb-2">
            <span className="font-serif font-bold text-sm text-amber-100">Spirits Concierge</span>
            <button onClick={() => setIsOpen(false)} className="text-amber-400 hover:text-amber-100">
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-amber-200/70">
            Have questions about proof, barrel finishes, or custom allocations? Connect directly:
          </p>

          <div className="space-y-2 pt-1">
            <a
              href={`https://wa.me/${CHAT.channels[0].value.replace(/[^0-9]/g, '')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2.5 rounded-xl bg-emerald-950/60 border border-emerald-800/60 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 transition-all"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              WhatsApp Live Desk
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-200 text-xs font-semibold hover:bg-amber-900/60 transition-all"
            >
              <Mail className="w-4 h-4 text-[#D4AF37]" />
              Email Spirits Advisor
            </a>

            <a
              href={`tel:${CONTACT.phone}`}
              className="flex items-center gap-3 p-2.5 rounded-xl bg-amber-950/60 border border-amber-800/60 text-amber-200 text-xs font-semibold hover:bg-amber-900/60 transition-all"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call {CONTACT.phone}
            </a>
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="py-3 px-5 rounded-full bg-[#D4AF37] text-[#140D08] font-bold text-xs shadow-2xl hover:bg-[#E5C158] transition-all flex items-center gap-2"
      >
        <MessageSquare className="w-4 h-4" />
        <span>Chat Concierge</span>
        <ChevronUp className={`w-3.5 h-3.5 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
    </div>
  );
};
