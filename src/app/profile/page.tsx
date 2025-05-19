
import { ProfilePageClient } from '@/components/ProfilePageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Your Profile - FoodFlow',
  description: 'Manage your FoodFlow account details.',
};

export default function ProfilePage() {
  return <ProfilePageClient />;
}
