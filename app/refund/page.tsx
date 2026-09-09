import type { Metadata } from 'next';
import { LegalView } from '@/src/views/LegalView';
import { LEGAL_DOCS } from '@/src/data/legal';
import { SITE } from '@/src/config/site';

const doc = LEGAL_DOCS.refund;

export const metadata: Metadata = {
  title: doc.metaTitle,
  description: doc.metaDescription,
  alternates: { canonical: `https://${SITE.domain}/refund/` },
};

export default function RefundPage() {
  return <LegalView doc={doc} />;
}
