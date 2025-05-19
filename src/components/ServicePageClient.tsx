
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Cog } from 'lucide-react';

export function ServicePageClient() {
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Cog className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>What We Offer</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground">
            FoodFlow is dedicated to providing a seamless and enjoyable grocery shopping experience. Our services include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2 text-muted-foreground">
            <li>Fast and reliable home delivery.</li>
            <li>A wide selection of fresh produce, pantry staples, and specialty items.</li>
            <li>Easy-to-use online ordering platform.</li>
            <li>Responsive customer support.</li>
            <li>Subscription options for regular deliveries (Coming Soon!).</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
