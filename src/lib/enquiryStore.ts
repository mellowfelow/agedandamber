import { getRedis, isStoreConfigured } from './redis';

export interface StoredEnquiry {
  id: string;
  type: 'contact' | 'wholesale';
  name: string;
  email: string;
  phone?: string;
  message: string;
  meta?: Record<string, string>;
  status: 'new' | 'replied';
  createdAt: string;
}

const KEY = 'aa:enquiries';

export const isEnquiryStoreConfigured = isStoreConfigured;

export function generateEnquiryId(): string {
  return `ENQ-${Date.now().toString(36)}${Math.random().toString(36).slice(2, 6)}`.toUpperCase();
}

export async function saveEnquiry(enquiry: StoredEnquiry): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  await redis.hset(KEY, { [enquiry.id]: JSON.stringify(enquiry) });
}

export async function listEnquiries(): Promise<StoredEnquiry[]> {
  const redis = getRedis();
  if (!redis) return [];
  const all = await redis.hgetall<Record<string, string>>(KEY);
  if (!all) return [];
  return Object.values(all)
    .map((v) => (typeof v === 'string' ? (JSON.parse(v) as StoredEnquiry) : (v as unknown as StoredEnquiry)))
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
}

export async function getEnquiry(id: string): Promise<StoredEnquiry | null> {
  const redis = getRedis();
  if (!redis) return null;
  const raw = await redis.hget<string>(KEY, id);
  if (!raw) return null;
  return typeof raw === 'string' ? (JSON.parse(raw) as StoredEnquiry) : (raw as unknown as StoredEnquiry);
}

export async function markEnquiryReplied(id: string): Promise<void> {
  const enquiry = await getEnquiry(id);
  if (!enquiry) return;
  enquiry.status = 'replied';
  await saveEnquiry(enquiry);
}

export async function deleteEnquiry(id: string): Promise<void> {
  const redis = getRedis();
  if (!redis) return;
  await redis.hdel(KEY, id);
}
