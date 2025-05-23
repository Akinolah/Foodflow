"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function AboutSectionHome() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <h2 className="text-3xl font-bold mb-6 tracking-tight">About FoodFlow</h2>
            <p className="text-muted-foreground mb-4 text-lg">
              FoodFlow was born from a passion for fresh, quality food and the desire to make it accessible to everyone. We connect you with the best local producers and trusted brands, all while simplifying your shopping experience.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              Our mission is to nourish our community by providing a convenient, reliable, and delightful way to shop for groceries. We believe in sustainability, supporting local economies, and putting our customers first.
            </p>
            <Button asChild size="lg">
              <Link href="/about">Discover Our Story</Link>
            </Button>
          </div>
          <div className="order-1 md:order-2">
            <Image
              src="https://placehold.co/600x450.png"
              alt="FoodFlow team or farm"
              width={600}
              height={450}
              className="rounded-lg shadow-xl"
              data-ai-hint="team farm market"
            />
          </div>
        </div>
      </div>
    </section>
  );
}