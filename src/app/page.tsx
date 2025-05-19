
import { HeroSection } from '@/components/HeroSection';
import { AboutSectionHome } from '@/components/AboutSectionHome';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ServiceSectionHome } from '@/components/ServiceSectionHome';
import { ContactSectionHome } from '@/components/ContactSectionHome';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6 tracking-tight">Discover Our Wide Range of Products</h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          From farm-fresh produce to pantry essentials, find everything you need for your kitchen.
        </p>
        <Button asChild size="lg">
          <Link href="/products">
            <ShoppingBag className="mr-2 h-5 w-5" />
            Explore All Products
          </Link>
        </Button>
      </section>

      <WhyChooseUsSection />

      <ServiceSectionHome />

      <TestimonialSection />

      <AboutSectionHome />

      <ContactSectionHome />
    </div>
  );
}
