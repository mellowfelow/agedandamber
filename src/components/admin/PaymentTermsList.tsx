import React from 'react';
import { paymentTermsLines } from '../../lib/order';

export const PaymentTermsList: React.FC = () => (
  <ul className="space-y-1.5 text-xs text-amber-200/80 list-disc list-inside">
    {paymentTermsLines().map((line, i) => (
      <li key={i}>{line}</li>
    ))}
  </ul>
);
