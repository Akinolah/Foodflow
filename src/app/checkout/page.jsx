import { CheckoutPageClient } from '@/components/CheckoutPageClient';

export const metadata = {
  title: 'Checkout - FoodFlow',
  description: 'Complete your FoodFlow order by providing shipping and payment information.',
};

export default function CheckoutPage() {
  return <CheckoutPageClient />;
}