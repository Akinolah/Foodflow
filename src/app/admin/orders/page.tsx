
import { ManageOrdersPageClient } from '@/components/ManageOrdersPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Orders - Admin - FoodFlow',
  description: 'View and manage customer orders in FoodFlow.',
};

export default function ManageOrdersPage() {
  return <ManageOrdersPageClient />;
}
