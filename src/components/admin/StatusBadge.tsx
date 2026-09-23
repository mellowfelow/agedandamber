import React from 'react';
import type { StoredOrder } from '../../lib/orderStore';

const STYLES: Record<StoredOrder['status'], string> = {
  pending: 'bg-amber-950 text-amber-400 border border-amber-800',
  'payment-sent': 'bg-sky-950 text-sky-400 border border-sky-800',
  'payment-confirmed': 'bg-emerald-950 text-emerald-400 border border-emerald-800',
};

const LABELS: Record<StoredOrder['status'], string> = {
  pending: 'Pending',
  'payment-sent': 'Details sent',
  'payment-confirmed': 'Confirmed',
};

export const OrderStatusBadge: React.FC<{ status: StoredOrder['status']; className?: string }> = ({
  status,
  className = '',
}) => (
  <span className={`text-[10px] font-bold uppercase tracking-wider py-1 px-2 rounded-full whitespace-nowrap ${STYLES[status]} ${className}`}>
    {LABELS[status]}
  </span>
);
