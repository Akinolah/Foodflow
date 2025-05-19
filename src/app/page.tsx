
import { HeroSection } from '@/components/HeroSection';
import { AboutSectionHome } from '@/components/AboutSectionHome';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ServiceSectionHome } from '@/components/ServiceSectionHome';
import { ContactSectionHome } from '@/components/ContactSectionHome';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { ProductList } from '@/components/ProductList';
import { mockProducts } from '@/data/products';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ShoppingBag } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="container mx-auto px-4">
        <div className="text-center mb-10">
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-lg text-muted-foreground mt-2 max-w-2xl mx-auto">
                Check out some of our popular items.
            </p>
        </div>
        <ProductList products={mockProducts} />
        <div className="text-center mt-10">
            <Button asChild size="lg">
              <Link href="/products">
                <ShoppingBag className="mr-2 h-5 w-5" />
                Explore All Products
              </Link>
            </Button>
        </div>
      </section>

      <WhyChooseUsSection />

      <ServiceSectionHome />

      <TestimonialSection />

      <AboutSectionHome />

      <ContactSectionHome />
    </div>
  );
}
