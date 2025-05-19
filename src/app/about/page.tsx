
import { AboutPageClient } from '@/components/AboutPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - FoodFlow',
  description: 'Learn more about FoodFlow and our mission to deliver fresh groceries.',
};

export default function AboutPage() {
  return <AboutPageClient />;
}
