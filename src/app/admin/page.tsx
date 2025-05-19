
import { AdminDashboardPageClient } from '@/components/AdminDashboardPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Admin Dashboard - FoodFlow',
  description: 'Manage FoodFlow operations.',
};

export default function AdminDashboardPage() {
  return <AdminDashboardPageClient />;
}
