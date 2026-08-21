'use client';

import React, { useState, useEffect } from 'react';
import { ShieldCheck, AlertCircle } from 'lucide-react';
import { SITE, COMPLIANCE } from '../config/site';
import { BrandLogo } from './BrandLogo';

export const AgeGateModal: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    const verified = localStorage.getItem('aged-and-amber-age-verified');
    if (!verified) {
      setIsOpen(true);
    }
  }, []);

  const handleVerify = () => {
    localStorage.setItem('aged-and-amber-age-verified', 'true');
    setIsOpen(false);
  };

  const handleDeny = () => {
    setDenied(true);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 animate-fade-in">
      <div className="w-full max-w-lg p-8 rounded-2xl bg-[#1C140E] border border-[#D4AF37]/30 text-amber-50 text-center shadow-2xl relative overflow-hidden">
        {/* Glow accent */}
        <div className="absolute -top-24 -left-24 w-48 h-48 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
        
        <div className="flex justify-center mb-6">
          <BrandLogo size="xl" showText={false} />
        </div>

        <span className="text-xs font-semibold tracking-widest text-[#D4AF37] uppercase mb-2 block">
          Age Verification Required
        </span>

        <h2 className="text-3xl font-serif font-bold text-amber-100 mb-3 tracking-tight">
          Welcome to {SITE.name}
        </h2>

        <p className="text-amber-200/80 text-sm mb-6 leading-relaxed">
          Our craft whiskeys, rare single malts, and artisan cask spirits are intended solely for individuals of legal drinking age.
        </p>

        {denied ? (
          <div className="p-4 rounded-xl bg-red-950/60 border border-red-800/50 text-red-200 text-sm flex items-center gap-3">
            <AlertCircle className="w-5 h-5 shrink-0 text-red-400" />
            <p className="text-left">
              You must be at least {COMPLIANCE.ageMinimum} years old to enter this site. Please return when you reach legal drinking age.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            <p className="text-xs font-medium text-amber-300/70 uppercase tracking-wider">
              Are you {COMPLIANCE.ageMinimum} years of age or older?
            </p>

            <div className="grid grid-cols-2 gap-4 pt-2">
              <button
                onClick={handleVerify}
                className="w-full py-3.5 px-6 rounded-xl font-semibold bg-[#D4AF37] text-[#140D08] hover:bg-[#E5C158] transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 flex items-center justify-center gap-2"
              >
                <ShieldCheck className="w-4 h-4" />
                Yes, I am {COMPLIANCE.ageMinimum}+
              </button>

              <button
                onClick={handleDeny}
                className="w-full py-3.5 px-6 rounded-xl font-medium bg-amber-950/40 text-amber-300 border border-amber-800/40 hover:bg-amber-900/40 transition-all duration-200"
              >
                No, I am Under {COMPLIANCE.ageMinimum}
              </button>
            </div>

            <p className="text-[11px] text-amber-400/50 pt-4 border-t border-amber-900/40">
              {COMPLIANCE.disclaimer}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
