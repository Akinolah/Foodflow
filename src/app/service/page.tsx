
import { ServicePageClient } from '@/components/ServicePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Services - FoodFlow',
  description: 'Discover the services offered by FoodFlow, including delivery, and customer support.',
};

export default function ServicePage() {
  return <ServicePageClient />;
}
