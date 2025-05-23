"use client";

import { useState, useMemo, useEffect } from 'react';
// Removed: import type { Product } from '@/types';
import { ProductCard } from './ProductCard';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search, ListFilter } from 'lucide-react';

// Removed interface ProductListProps

export function ProductList({ products: initialProducts }) {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [categories, setCategories] = useState(['all']);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const uniqueCategories = ['all', ...new Set(initialProducts.map(p => p.category))];
    setCategories(uniqueCategories);
  }, [initialProducts]);

  const filteredProducts = useMemo(() => {
    return initialProducts.filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory, initialProducts]);

  if (!mounted) {
    // Skeleton loader for product list (grid)
    return (
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
          {/* Skeleton for Search Input */}
          <div className="relative w-full sm:flex-grow">
            <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
          </div>
          {/* Skeleton for Select */}
          <div className="relative w-full sm:w-auto sm:min-w-[200px]">
            <div className="h-10 w-full bg-muted rounded-md animate-pulse"></div>
          </div>
        </div>
        {/* Skeleton for Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-muted p-4 rounded-lg animate-pulse aspect-[3/4]">
              <div className="w-full aspect-video bg-muted-foreground/20 rounded mb-2"></div>
              <div className="h-6 w-3/4 bg-muted-foreground/20 rounded mb-2"></div>
              <div className="h-4 w-1/2 bg-muted-foreground/20 rounded mb-2"></div>
              <div className="h-10 w-full bg-muted-foreground/20 rounded mt-4"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      <div className="flex flex-col sm:flex-row gap-4 items-center p-4 bg-card rounded-lg shadow">
        <div className="relative w-full sm:flex-grow">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 w-full"
            aria-label="Search products"
          />
        </div>
        <div className="relative w-full sm:w-auto sm:min-w-[200px]">
           <ListFilter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground pointer-events-none" />
          <Select
            value={selectedCategory}
            onValueChange={setSelectedCategory}
          >
            <SelectTrigger className="w-full pl-10" aria-label="Filter by category">
              <SelectValue placeholder="Filter by category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map(category => (
                <SelectItem key={category} value={category}>
                  {category === 'all' ? 'All Categories' : category}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <Search className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-semibold mb-2">No Products Found</h2>
          <p className="text-muted-foreground">Try adjusting your search or filters.</p>
        </div>
      )}
    </div>
  );
}