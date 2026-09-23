import { getRedis, isStoreConfigured } from './redis';

export interface StoredOrder {
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  items: { name: string; quantity: number; lineTotal: number }[];
  amountDue: number;
  paymentMethod: string;
  status: 'pending' | 'payment-sent';
  channel: 'whatsapp' | 'email';
  createdAt: string;
}

const KEY = 'aa:orders';

export const isOrderStoreConfigured = isStoreConfigured;

export async function saveOrder(order: StoredOrder): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  await redis.hset(KEY, { [order.orderNumber]: JSON.stringify(order) });
}

export async function listOrders(): Promise<StoredOrder[]> {
  const redis = getRedis();
  if (!redis) return [];
  const all = await redis.hgetall<Record<string, string>>(KEY);
  if (!all) return [];
  return Object.values(all)
    .map((v) => (typeof v === 'string' ? (JSON.parse(v) as StoredOrder) : (v as unknown as StoredOrder)))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getOrder(orderNumber: string): Promise<StoredOrder | null> {
  const redis = getRedis();
  if (!redis) return null;
  const raw = await redis.hget<string>(KEY, orderNumber);
  if (!raw) return null;
  return typeof raw === 'string' ? (JSON.parse(raw) as StoredOrder) : (raw as unknown as StoredOrder);
}

export async function markOrderSent(orderNumber: string): Promise<void> {
  const order = await getOrder(orderNumber);
  if (!order) return;
  order.status = 'payment-sent';
  await saveOrder(order);
}

export async function deleteOrder(orderNumber: string): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  await redis.hdel(KEY, orderNumber);
}
