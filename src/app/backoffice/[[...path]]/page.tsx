import type { Metadata } from 'next';
import Backoffice from '@/components/backoffice';
export const metadata: Metadata = { title: 'Backoffice | VIP Immigration Services', robots: { index: false, follow: false } };
export default function BackofficePage() { return <Backoffice />; }
