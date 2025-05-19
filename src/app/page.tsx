
import { ProductList } from '@/components/ProductList';
import { mockProducts } from '@/data/products';
import { HeroSection } from '@/components/HeroSection';
import { AboutSectionHome } from '@/components/AboutSectionHome';
import { TestimonialSection } from '@/components/TestimonialSection';
import { ServiceSectionHome } from '@/components/ServiceSectionHome';
import { ContactSectionHome } from '@/components/ContactSectionHome';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';

export default function HomePage() {
  return (
    <div className="space-y-16 md:space-y-24">
      <HeroSection />

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center tracking-tight">Explore Our Products</h2>
        <ProductList products={mockProducts} />
      </section>

      <WhyChooseUsSection />

      <ServiceSectionHome />

      <TestimonialSection />

      <AboutSectionHome />

      <ContactSectionHome />
    </div>
  );
}
