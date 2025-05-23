"use client";

import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const testimonials = [
  {
    name: 'Sarah L.',
    avatarFallback: 'SL',
    avatarUrl: 'https://placehold.co/100x100.png?text=SL',
    imageAiHint: 'woman portrait',
    quote: "FoodFlow has revolutionized my weekly grocery shopping! The produce is always fresh, and the delivery is incredibly fast. Highly recommend!",
    rating: 5,
  },
  {
    name: 'John B.',
    avatarFallback: 'JB',
    avatarUrl: 'https://placehold.co/100x100.png?text=JB',
    imageAiHint: 'man portrait',
    quote: "I love the wide variety of organic options available. The website is easy to use, and customer service is top-notch. A fantastic service.",
    rating: 5,
  },
  {
    name: 'Maria K.',
    avatarFallback: 'MK',
    avatarUrl: 'https://placehold.co/100x100.png?text=MK',
    imageAiHint: 'person smiling',
    quote: "As a busy mom, FoodFlow is a lifesaver. I save so much time, and the quality is consistently great. My kids love the fresh fruits!",
    rating: 4,
  },
  {
    name: 'David R.',
    avatarFallback: 'DR',
    avatarUrl: 'https://placehold.co/100x100.png?text=DR',
    imageAiHint: 'man glasses',
    quote: "The customer support team was incredibly helpful when I had a query about my order. It's refreshing to see such dedicated service.",
    rating: 5,
  },
  {
    name: 'Linda P.',
    avatarFallback: 'LP',
    avatarUrl: 'https://placehold.co/100x100.png?text=LP',
    imageAiHint: 'woman happy',
    quote: "Finally, a grocery delivery service that gets it right! Fair prices, great selection, and always on time. I'm a loyal customer now.",
    rating: 5,
  },
  {
    name: 'Kevin S.',
    avatarFallback: 'KS',
    avatarUrl: 'https://placehold.co/100x100.png?text=KS',
    imageAiHint: 'man thinking',
    quote: "The quality of meat and seafood is exceptional. Much better than what I find at my local supermarket. Keep up the great work, FoodFlow!",
    rating: 4,
  },
];

export function TestimonialSection() {
  return (
    <section className="py-12 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10 tracking-tight">What Our Customers Say</h2>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
                    <CardContent className="p-6 flex-grow flex flex-col">
                      <div className="flex items-center mb-4">
                        <Avatar className="h-12 w-12 mr-4">
                          <AvatarImage src={testimonial.avatarUrl} alt={testimonial.name} data-ai-hint={testimonial.imageAiHint} />
                          <AvatarFallback>{testimonial.avatarFallback}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <div className="flex text-primary">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className={`h-4 w-4 ${i < testimonial.rating ? 'fill-current' : 'text-muted-foreground/50'}`} />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground italic flex-grow">&ldquo;{testimonial.quote}&rdquo;</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}