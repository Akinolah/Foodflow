
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Info } from 'lucide-react';

export function AboutPageClient() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Info className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">About FoodFlow</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            At FoodFlow, our mission is to provide the freshest groceries and household essentials directly to your doorstep, making healthy eating and convenient shopping accessible to everyone. We believe in quality, sustainability, and exceptional customer service.
          </p>
          <p className="mt-4 text-lg text-muted-foreground">
            Founded in 2024, FoodFlow started with a simple idea: to bridge the gap between local farmers, producers, and you, the customer. We work tirelessly to source the best products, ensuring they meet our high standards for quality and freshness.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
