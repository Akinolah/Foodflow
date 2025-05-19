
"use client";

import { ProductList } from '@/components/ProductList';
import { mockProducts } from '@/data/products'; // In a real app, you might fetch this
import { PackageSearch } from 'lucide-react';

export function ProductsPageClient() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex flex-col items-center mb-8 text-center">
        <PackageSearch className="h-12 w-12 text-primary mb-4" />
        <h1 className="text-4xl font-bold tracking-tight">Explore Our Products</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl">
          Find everything you need, from fresh fruits and vegetables to pantry staples and gourmet treats.
        </p>
      </div>
      <ProductList products={mockProducts} />
      {/* You can add more sections here specific to the products page, like featured categories, special offers etc. */}
    </div>
  );
}
