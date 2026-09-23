'use client';

import React from 'react';
import { CONTACT } from '../config/site';
import { useAppState } from '../../app/providers';

const WHATSAPP_GREETING = "Hi! I'd like to ask about your spirits.";

const WhatsAppIcon: React.FC = () => (
  <svg viewBox="0 0 32 32" className="w-7 h-7" fill="currentColor" aria-hidden="true">
    <path d="M16.001 3C9.098 3 3.5 8.598 3.5 15.5c0 2.348.646 4.545 1.77 6.428L3 29l7.24-2.226A12.44 12.44 0 0 0 16 28.999C22.902 28.999 28.5 23.401 28.5 16.5S22.902 3 16.001 3Zm7.377 17.719c-.309.869-1.53 1.591-2.5 1.795-.663.14-1.53.252-4.443-.956-3.731-1.545-6.131-5.334-6.318-5.582-.18-.248-1.512-2.014-1.512-3.841s.947-2.727 1.283-3.099c.309-.34.67-.425.893-.425.223 0 .447.002.643.012.206.011.483-.078.756.576.309.744 1.05 2.571 1.142 2.758.093.187.155.404.031.652-.124.248-.186.404-.371.62-.186.218-.39.486-.557.652-.186.187-.38.39-.163.767.217.377.965 1.591 2.072 2.577 1.424 1.269 2.625 1.663 3.002 1.85.377.187.598.156.82-.093.223-.248.947-1.104 1.2-1.482.253-.377.505-.311.848-.187.34.125 2.166 1.021 2.537 1.207.371.187.618.28.71.436.093.156.093.9-.217 1.769Z" />
  </svg>
);

/**
 * A dedicated WhatsApp live-chat button — bottom-left, deliberately opposite
 * the Tawk.to widget (bottom-right). A real `<a href>` link (zero JS, zero
 * CSP/perf cost), so it works even with JS disabled. The cookie banner also
 * lives bottom-left and its height varies with content/viewport, so rather
 * than guess an offset that could still collide, this just steps aside
 * (hidden) while the banner is up — it's one-time-per-browser and the
 * button reappears the instant the visitor dismisses it.
 */
export const WhatsAppFloatingButton: React.FC = () => {
  const { cookieBannerVisible } = useAppState();
  if (cookieBannerVisible) return null;

  const number = CONTACT.whatsapp.replace(/[^\d]/g, '');
  const href = `https://wa.me/${number}?text=${encodeURIComponent(WHATSAPP_GREETING)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-4 left-4 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-2xl hover:bg-[#20BD5A] transition-all hover:scale-105"
    >
      <WhatsAppIcon />
    </a>
  );
};
