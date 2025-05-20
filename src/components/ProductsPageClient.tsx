
"use client";

import { ProductList } from '@/components/ProductList';
import { mockProducts } from '@/data/products'; // In a real app, you might fetch this
import { PackageSearch, ShieldCheck, Star } from 'lucide-react';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import { TestimonialSection } from '@/components/TestimonialSection';

export function ProductsPageClient() {
  return (
    <div className="container mx-auto py-8 space-y-12 md:space-y-16">
      <section className="text-center py-8 md:py-12 bg-card shadow-lg rounded-lg">
        <div className="container mx-auto px-4">
          <PackageSearch className="mx-auto h-16 w-16 text-primary mb-4" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">Explore Our Products</h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Find everything you need, from fresh fruits and vegetables to pantry staples and gourmet treats. We are committed to quality and freshness in every item.
          </p>
        </div>
      </section>

      <ProductList products={mockProducts} />

      <WhyChooseUsSection />
      <TestimonialSection />
      
    </div>
  );
}

