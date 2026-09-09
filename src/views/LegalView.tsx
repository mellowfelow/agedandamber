import React from 'react';
import Link from 'next/link';
import { LEGAL_DOCS, LEGAL_NAV, LEGAL_EFFECTIVE_DATE, type LegalDoc } from '../data/legal';
import { getRouteUrl } from '../utils/routes';

export const LegalView: React.FC<{ doc: LegalDoc }> = ({ doc }) => {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-10">
      <header className="space-y-3 border-b border-amber-900/40 pb-6">
        <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider block">
          Policies
        </span>
        <h1 className="text-3xl sm:text-4xl font-serif font-bold text-amber-100">{doc.title}</h1>
        <p className="text-[11px] text-amber-400/60">Effective {LEGAL_EFFECTIVE_DATE}</p>
        <p className="text-sm text-amber-200/80 leading-relaxed">{doc.intro}</p>
      </header>

      <div className="space-y-8">
        {doc.sections.map((section) => (
          <section key={section.heading} className="space-y-3">
            <h2 className="text-lg font-serif font-bold text-amber-100">{section.heading}</h2>
            {section.body.map((block, i) =>
              typeof block === 'string' ? (
                <p key={i} className="text-sm text-amber-200/80 leading-relaxed">
                  {block}
                </p>
              ) : (
                <ul key={i} className="list-disc pl-5 space-y-1.5 text-sm text-amber-200/80 leading-relaxed">
                  {block.list.map((li, j) => (
                    <li key={j}>{li}</li>
                  ))}
                </ul>
              )
            )}
          </section>
        ))}
      </div>

      <nav className="pt-8 border-t border-amber-900/40" aria-label="Other policies">
        <p className="text-xs font-semibold text-amber-400/60 uppercase tracking-wider mb-3">
          Other policies
        </p>
        <div className="flex flex-wrap gap-3 text-sm">
          {LEGAL_NAV.filter((n) => n.slug !== doc.slug).map((n) => (
            <Link
              key={n.slug}
              href={`/${n.slug}/`}
              className="text-[#D4AF37] hover:underline"
            >
              {n.title}
            </Link>
          ))}
          <Link href={getRouteUrl.faq()} className="text-[#D4AF37] hover:underline">
            FAQ
          </Link>
          <Link href={getRouteUrl.contact()} className="text-[#D4AF37] hover:underline">
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
};

export { LEGAL_DOCS };
