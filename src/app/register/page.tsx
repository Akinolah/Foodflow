
import { RegisterPageClient } from '@/components/RegisterPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Register - FoodFlow',
  description: 'Create a new FoodFlow account.',
};

export default function RegisterPage() {
  return <RegisterPageClient />;
}
