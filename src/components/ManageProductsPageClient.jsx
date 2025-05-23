"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlusCircle, Edit, Trash2 } from 'lucide-react';
// Placeholder for product data, in a real app this would come from a store or API
import { mockProducts } from '@/data/products';
import Image from 'next/image';

export function ManageProductsPageClient() {
  // Placeholder for product management logic

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold tracking-tight">Manage Products</h1>
        <Button>
          <PlusCircle className="mr-2 h-5 w-5" /> Add New Product
        </Button>
      </div>

      <div className="space-y-6">
        {mockProducts.map(product => (
          <Card key={product.id} className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/5 p-4">
              <Image 
                src={product.imageUrl} 
                alt={product.name} 
                width={100} 
                height={100} 
                className="rounded-md object-cover aspect-square"
                data-ai-hint={product.imageAiHint || 'product thumbnail'}
              />
            </div>
            <CardContent className="flex-grow p-4 space-y-1 md:w-3/5">
              <h3 className="text-lg font-semibold">{product.name}</h3>
              <p className="text-sm text-muted-foreground">Category: {product.category}</p>
              <p className="text-sm text-muted-foreground">Price: ${product.price.toFixed(2)}</p>
              <p className="text-sm text-muted-foreground">Stock: {product.stock !== undefined ? product.stock : 'N/A'}</p>
            </CardContent>
            <div className="p-4 flex flex-col md:flex-row gap-2 items-center justify-end md:w-1/5">
              <Button variant="outline" size="sm">
                <Edit className="mr-2 h-4 w-4" /> Edit
              </Button>
              <Button variant="destructive" size="sm">
                <Trash2 className="mr-2 h-4 w-4" /> Delete
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}