"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Leaf, Smile, Truck } from 'lucide-react';

const features = [
  {
    icon: <Truck className="h-8 w-8 text-primary" />,
    title: 'Speedy Delivery',
    description: 'Get your groceries delivered to your doorstep in record time, ensuring freshness and convenience.',
  },
  {
    icon: <Leaf className="h-8 w-8 text-primary" />,
    title: 'Quality & Freshness',
    description: 'We source the finest local and organic products, guaranteeing top quality for your family.',
  },
  {
    icon: <Zap className="h-8 w-8 text-primary" />,
    title: 'Easy Ordering',
    description: 'Our user-friendly platform makes shopping for groceries a breeze, anytime, anywhere.',
  },
  {
    icon: <Smile className="h-8 w-8 text-primary" />,
    title: 'Customer Happiness',
    description: 'Dedicated support and a satisfaction guarantee. We\'re here to make your experience great.',
  },
];

export function WhyChooseUsSection() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">Why Choose FoodFlow?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                {feature.icon}
                <CardTitle className="mt-4 text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}