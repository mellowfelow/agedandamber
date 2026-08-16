'use client';

import { useEffect } from 'react';
import { CHAT } from '../config/site';

declare global {
  interface Window {
    Tawk_API?: Record<string, unknown>;
    Tawk_LoadStart?: Date;
  }
}

export const TawkWidget: React.FC = () => {
  useEffect(() => {
    const widget = CHAT.widget;
    if (!widget || widget.type !== 'tawk' || !widget.propertyId || !widget.widgetId) return;
    if (document.getElementById('tawk-embed-script')) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;

      window.Tawk_API = window.Tawk_API || {};
      window.Tawk_LoadStart = new Date();

      const s1 = document.createElement('script');
      s1.id = 'tawk-embed-script';
      s1.async = true;
      s1.src = `https://embed.tawk.to/${widget.propertyId}/${widget.widgetId}`;
      s1.charset = 'UTF-8';
      s1.setAttribute('crossorigin', '*');
      const s0 = document.getElementsByTagName('script')[0];
      s0.parentNode?.insertBefore(s1, s0);

      window.removeEventListener('scroll', load);
      window.removeEventListener('click', load);
      window.removeEventListener('keydown', load);
      window.removeEventListener('touchstart', load);
    };

    const idleTimer = setTimeout(load, 3000);
    window.addEventListener('scroll', load, { once: true, passive: true });
    window.addEventListener('click', load, { once: true });
    window.addEventListener('keydown', load, { once: true });
    window.addEventListener('touchstart', load, { once: true, passive: true });

    return () => {
      clearTimeout(idleTimer);
      window.removeEventListener('scroll', load);
      window.removeEventListener('click', load);
      window.removeEventListener('keydown', load);
      window.removeEventListener('touchstart', load);
    };
  }, []);

  return null;
};
