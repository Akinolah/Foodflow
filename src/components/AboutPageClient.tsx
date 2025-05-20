
"use client";

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContactSectionHome } from '@/components/ContactSectionHome';
import { Info, Users, Heart } from 'lucide-react';
import Image from 'next/image';

export function AboutPageClient() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-background to-background text-center">
        <div className="container mx-auto px-4">
          <Heart className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Our Story: Freshness &amp; Community
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            FoodFlow started with a simple passion: connecting people with the freshest, highest-quality food while building a stronger, healthier community.
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://placehold.co/600x450.png"
              alt="FoodFlow team or local farm"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
              data-ai-hint="community team farm"
            />
          </div>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Info className="h-6 w-6 text-primary mr-3" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-muted-foreground">
                  At FoodFlow, our mission is to provide the freshest groceries and household essentials directly to your doorstep, making healthy eating and convenient shopping accessible to everyone. We believe in quality, sustainability, and exceptional customer service.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-2xl">
                  <Users className="h-6 w-6 text-primary mr-3" />
                  Our Values
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-lg text-muted-foreground">
                  <li><strong>Quality First:</strong> Sourcing the best ingredients for you.</li>
                  <li><strong>Community Focused:</strong> Supporting local producers and our customers.</li>
                  <li><strong>Sustainable Practices:</strong> Caring for our planet.</li>
                  <li><strong>Customer Delight:</strong> Ensuring a seamless and happy experience.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      <section className="container mx-auto px-4 py-8">
        <Card>
           <CardHeader>
            <CardTitle className="text-2xl text-center">Our Journey</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="mt-4 text-lg text-muted-foreground text-center max-w-3xl mx-auto">
              Founded in 2024, FoodFlow started with a simple idea: to bridge the gap between local farmers, producers, and you, the customer. We work tirelessly to source the best products, ensuring they meet our high standards for quality and freshness. We are continuously evolving, driven by our commitment to innovation and your satisfaction.
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Contact Section */}
      <ContactSectionHome />
    </div>
  );
}
