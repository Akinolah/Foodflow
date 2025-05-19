import { CartPageClient } from '@/components/CartPageClient';

export const metadata = {
  title: 'Your Shopping Cart - FoodFlow',
  description: 'Review items in your FoodFlow shopping cart and proceed to checkout.',
};

export default function CartPage() {
  return <CartPageClient />;
}
