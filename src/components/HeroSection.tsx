
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-r from-primary/10 via-background to-background h-[calc(100vh-4rem)] min-h-[500px] md:min-h-[600px] flex items-center">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="https://placehold.co/1920x1080.png"
          alt="Fresh groceries background"
          layout="fill"
          objectFit="cover"
          priority
          data-ai-hint="groceries food background"
        />
      </div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 items-center gap-8">
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
              Fresh Groceries, <span className="text-primary">Delivered Fast.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto md:mx-0">
              Experience the convenience of FoodFlow. Quality ingredients, straight to your kitchen, with just a few clicks.
            </p>
            <Button size="lg" asChild className="group">
              <Link href="/">
                Shop All Products
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
          </div>
          <div className="hidden md:block">
            {/* Optional: A smaller, more focused image here or a graphic */}
             <Image
              src="https://placehold.co/600x400.png"
              alt="Happy customer with groceries"
              width={600}
              height={400}
              className="rounded-lg shadow-xl"
              data-ai-hint="shopping groceries"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
