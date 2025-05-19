
import { LoginPageClient } from '@/components/LoginPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Login - FoodFlow',
  description: 'Login to your FoodFlow account.',
};

export default function LoginPage() {
  return <LoginPageClient />;
}
