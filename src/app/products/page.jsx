import { ProductsPageClient } from '@/components/ProductsPageClient';

export const metadata = {
  title: 'Our Products - FoodFlow',
  description: 'Browse all fresh groceries and products available at FoodFlow.',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}