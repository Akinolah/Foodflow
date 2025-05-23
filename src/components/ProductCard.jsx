"use client";

import Image from 'next/image';
import Link from 'next/link';
// Removed: import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { PlusCircle } from 'lucide-react';

// Removed interface ProductCardProps

export function ProductCard({ product }) {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock !== undefined && product.stock === 0;

  return (
    <Card className="flex flex-col overflow-hidden rounded-lg shadow-lg transition-all hover:shadow-xl h-full">
      <CardHeader className="p-0">
        <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`} className="block aspect-video overflow-hidden">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={600}
            height={400}
            className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
            data-ai-hint={product.imageAiHint || 'product image'}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex-grow">
        <Link href={`/products/${product.id}`} aria-label={`View details for ${product.name}`}>
          <CardTitle className="text-lg font-semibold mb-1 hover:text-primary transition-colors line-clamp-2">{product.name}</CardTitle>
        </Link>
        <p className="text-primary font-bold text-xl mb-2">${product.price.toFixed(2)}</p>
        <CardDescription className="text-sm text-muted-foreground line-clamp-3 h-12">{product.description}</CardDescription>
      </CardContent>
      <CardFooter className="p-4 border-t mt-auto">
        <Button 
          onClick={() => addToCart(product)} 
          className="w-full"
          aria-label={`Add ${product.name} to cart`}
          disabled={isOutOfStock}
        >
          <PlusCircle className="mr-2 h-5 w-5" /> 
          {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
        </Button>
      </CardFooter>
    </Card>
  );
}