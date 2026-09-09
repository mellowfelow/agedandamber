'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Cookie, X } from 'lucide-react';
import { useAppState } from '../../app/providers';

export const GdprBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setCookieBannerVisible } = useAppState();

  useEffect(() => {
    // Show on the first visit regardless of which page the visitor lands on
    // (most arrivals from search hit a product or article, not the homepage).
    try {
      const consent = localStorage.getItem('aged-and-amber-cookie-consent');
      if (!consent) setIsVisible(true);
    } catch {
      /* storage blocked — skip the banner rather than nag every load */
    }
  }, []);

  useEffect(() => {
    setCookieBannerVisible(isVisible);
  }, [isVisible, setCookieBannerVisible]);

  const handleDismiss = () => {
    try {
      localStorage.setItem('aged-and-amber-cookie-consent', 'acknowledged');
    } catch {
      /* storage blocked */
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-40 p-5 rounded-2xl bg-[#1C140E] border border-[#D4AF37]/30 text-amber-100 shadow-2xl animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs text-amber-200/80 space-y-2">
          <p className="font-semibold text-amber-100 text-sm">Cookie &amp; Privacy Notice</p>
          <p>
            We use only essential browser storage — your cart, your age-verification status, and this
            notice preference. No advertising or analytics trackers. See our{' '}
            <Link href="/privacy/" className="text-[#D4AF37] underline">Privacy Policy</Link>.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleDismiss}
              className="py-3.5 px-4 rounded-lg bg-[#D4AF37] text-[#140D08] font-semibold text-xs hover:bg-[#E5C158] transition-all"
            >
              Got it
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="flex items-center justify-center w-11 h-11 -m-2.5 text-amber-400/60 hover:text-amber-200 shrink-0"
          aria-label="Dismiss cookie notice"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
