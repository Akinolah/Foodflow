
import { ProductsPageClient } from '@/components/ProductsPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Products - FoodFlow',
  description: 'Browse all fresh groceries and products available at FoodFlow.',
};

export default function ProductsPage() {
  return <ProductsPageClient />;
}
