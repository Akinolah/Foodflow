
import { ManageProductsPageClient } from '@/components/ManageProductsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manage Products - Admin - FoodFlow',
  description: 'Add, edit, and manage products in FoodFlow.',
};

export default function ManageProductsPage() {
  return <ManageProductsPageClient />;
}
