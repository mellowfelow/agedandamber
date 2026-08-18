'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import { Cookie, X } from 'lucide-react';
import { useAppState } from '../../app/providers';

export const GdprBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { setCookieBannerVisible } = useAppState();
  const pathname = usePathname();

  useEffect(() => {
    if (pathname !== '/') return;
    const consent = localStorage.getItem('aged-and-amber-cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setCookieBannerVisible(isVisible);
  }, [isVisible, setCookieBannerVisible]);

  const handleAccept = () => {
    localStorage.setItem('aged-and-amber-cookie-consent', 'accepted');
    setIsVisible(false);
  };

  const handleDismiss = () => {
    localStorage.setItem('aged-and-amber-cookie-consent', 'dismissed');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 md:right-auto md:max-w-md z-40 p-5 rounded-2xl bg-[#1C140E]/95 border border-[#D4AF37]/30 text-amber-100 shadow-2xl backdrop-blur-md animate-fade-in">
      <div className="flex items-start gap-3">
        <div className="p-2 rounded-lg bg-[#D4AF37]/10 text-[#D4AF37] shrink-0 mt-0.5">
          <Cookie className="w-5 h-5" />
        </div>
        <div className="flex-1 text-xs text-amber-200/80 space-y-2">
          <p className="font-semibold text-amber-100 text-sm">Cookie & Privacy Notice</p>
          <p>
            We use essential cookies to maintain your cart session, age verification state, and secure checkout preference.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <button
              onClick={handleAccept}
              className="py-2 px-4 rounded-lg bg-[#D4AF37] text-[#140D08] font-semibold text-xs hover:bg-[#E5C158] transition-all"
            >
              Accept All
            </button>
            <button
              onClick={handleDismiss}
              className="py-2 px-3 text-xs text-amber-300 hover:text-amber-100"
            >
              Preferences
            </button>
          </div>
        </div>
        <button
          onClick={handleDismiss}
          className="text-amber-400/60 hover:text-amber-200 p-1"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
