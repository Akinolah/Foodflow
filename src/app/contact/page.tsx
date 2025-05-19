
import { ContactPageClient } from '@/components/ContactPageClient';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us - FoodFlow',
  description: 'Get in touch with FoodFlow for support, inquiries, or feedback.',
};

export default function ContactPage() {
  return <ContactPageClient />;
}
