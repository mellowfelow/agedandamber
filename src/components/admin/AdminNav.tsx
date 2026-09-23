'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LogOut } from 'lucide-react';

const LINKS = [
  { href: '/admin/', label: 'Dashboard' },
  { href: '/admin/orders/', label: 'Orders' },
  { href: '/admin/enquiries/', label: 'Enquiries' },
];

export const AdminNav: React.FC<{ onSignOut: () => void }> = ({ onSignOut }) => {
  const pathname = usePathname();
  return (
    <nav className="sticky top-0 z-10 bg-[#140D08]/95 backdrop-blur border-b border-stone-800">
      <div className="flex items-center justify-between gap-3 px-4 md:px-8 pt-3">
        <span className="text-xs font-bold text-[#D4AF37] uppercase tracking-wider whitespace-nowrap">
          Aged &amp; Amber
        </span>
        <button
          onClick={onSignOut}
          className="flex items-center gap-1.5 py-1.5 px-3 rounded-lg text-xs font-semibold text-amber-400/50 hover:text-red-400 hover:bg-red-950/30 transition-all whitespace-nowrap shrink-0"
        >
          <LogOut className="w-3.5 h-3.5" /> Sign out
        </button>
      </div>
      <div className="flex items-center gap-1 px-4 md:px-8 py-3 overflow-x-auto">
        {LINKS.map((l) => {
          const active = pathname === l.href;
          return (
            <Link
              key={l.href}
              href={l.href}
              className={`py-1.5 px-3 rounded-lg text-sm font-semibold transition-all whitespace-nowrap shrink-0 ${
                active ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'text-amber-300/60 hover:text-amber-100'
              }`}
            >
              {l.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
};
