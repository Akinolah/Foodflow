"use client";

import Image from 'next/image';
import Link from 'next/link';
// Removed: import type { Product } from '@/types';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ShoppingCart, ArrowLeft, Info } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

// Removed interface ProductDetailPageClientProps

export function ProductDetailPageClient({ product }) {
  const { addToCart } = useCart();
  const isOutOfStock = product.stock !== undefined && product.stock === 0;

  return (
    <div>
      <Button variant="outline" asChild className="mb-6">
        <Link href="/">
          <ArrowLeft className="mr-2 h-4 w-4" /> Back to Products
        </Link>
      </Button>
      <Card className="overflow-hidden shadow-xl">
        <div className="grid md:grid-cols-2 gap-0 md:gap-0">
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src={product.imageUrl}
              alt={product.name}
              layout="fill"
              objectFit="cover"
              className="md:rounded-l-lg"
              data-ai-hint={product.imageAiHint || 'product detail'}
            />
          </div>
          <div className="p-6 md:p-8 flex flex-col">
            <CardHeader className="p-0">
              <Badge variant="secondary" className="w-fit mb-2">{product.category}</Badge>
              <CardTitle className="text-3xl lg:text-4xl font-bold tracking-tight">{product.name}</CardTitle>
            </CardHeader>
            <CardContent className="p-0 mt-4 flex-grow">
              <p className="text-2xl lg:text-3xl font-semibold text-primary mb-4">${product.price.toFixed(2)}</p>
              <CardDescription className="text-base text-muted-foreground leading-relaxed">
                {product.description}
              </CardDescription>
              
              {isOutOfStock && (
                <Alert variant="destructive" className="mt-4">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Out of Stock</AlertTitle>
                  <AlertDescription>
                    This product is currently unavailable.
                  </AlertDescription>
                </Alert>
              )}
              {product.stock !== undefined && product.stock > 0 && product.stock < 10 && (
                 <Alert variant="default" className="mt-4 border-yellow-500 text-yellow-700">
                  <Info className="h-4 w-4" />
                  <AlertTitle>Low Stock</AlertTitle>
                  <AlertDescription>
                    Only {product.stock} items left in stock. Order soon!
                  </AlertDescription>
                </Alert>
              )}

            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                size="lg"
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className="w-full md:w-auto"
                aria-label={`Add ${product.name} to cart`}
              >
                <ShoppingCart className="mr-2 h-5 w-5" /> 
                {isOutOfStock ? 'Out of Stock' : 'Add to Cart'}
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}