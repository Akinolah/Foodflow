"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const services = [
  "Wide selection of fresh produce and pantry staples",
  "Contactless and scheduled delivery options",
  "Personalized shopping assistance",
  "Easy returns and satisfaction guarantee"
];

export function ServiceSectionHome() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <Image
              src="https://placehold.co/600x450.png"
              alt="FoodFlow delivery service"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
              data-ai-hint="delivery service"
            />
          </div>
          <div>
            <h2 className="text-3xl font-bold mb-6 tracking-tight">Our Commitment to You</h2>
            <p className="text-muted-foreground mb-6 text-lg">
              At FoodFlow, we're more than just a grocery delivery service. We're your partners in healthy and convenient living. Our services are designed to simplify your life and bring joy to your kitchen.
            </p>
            <ul className="space-y-3 mb-8">
              {services.map((service, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg">
              <Link href="/service">Learn More About Our Services</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}