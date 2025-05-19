
import { OrdersPageClient } from '@/components/OrdersPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Orders - FoodFlow',
  description: 'View your past orders on FoodFlow.',
};

export default function OrdersPage() {
  return <OrdersPageClient />;
}
