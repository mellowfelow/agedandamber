'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const LINKS = [
  { href: '/admin/', label: 'Dashboard' },
  { href: '/admin/orders/', label: 'Orders' },
  { href: '/admin/enquiries/', label: 'Enquiries' },
];

export const AdminNav: React.FC = () => {
  const pathname = usePathname();
  return (
    <nav className="flex items-center gap-1 mb-8 border-b border-stone-800 pb-4">
      {LINKS.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`py-2 px-4 rounded-lg text-sm font-semibold transition-all ${
              active ? 'bg-[#D4AF37]/15 text-[#D4AF37]' : 'text-amber-300/60 hover:text-amber-100'
            }`}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
};
