import { OrdersPageClient } from '@/components/OrdersPageClient';

export const metadata = {
  title: 'Your Orders - FoodFlow',
  description: 'View your past orders on FoodFlow.',
};

export default function OrdersPage() {
  return <OrdersPageClient />;
}