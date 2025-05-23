"use client";

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Cog, Truck, ShoppingBasket, Smile, Clock, Gift, Users, ShieldCheck } from 'lucide-react';
import { WhyChooseUsSection } from '@/components/WhyChooseUsSection';
import Image from 'next/image';

const servicesList = [
  {
    icon: <Truck className="h-6 w-6 text-primary mb-2" />,
    title: "Fast & Reliable Delivery",
    description: "Get your groceries delivered to your doorstep quickly and reliably, with flexible scheduling options to fit your busy life."
  },
  {
    icon: <ShoppingBasket className="h-6 w-6 text-primary mb-2" />,
    title: "Wide Product Selection",
    description: "Explore a vast range of fresh produce, pantry staples, organic items, gourmet treats, and household essentials."
  },
  {
    icon: <Smile className="h-6 w-6 text-primary mb-2" />,
    title: "Exceptional Customer Support",
    description: "Our friendly and responsive customer support team is always ready to assist you with any queries or concerns."
  },
  {
    icon: <Clock className="h-6 w-6 text-primary mb-2" />,
    title: "Time-Saving Convenience",
    description: "Skip the queues and shop from the comfort of your home. We handle the shopping so you can focus on what matters."
  },
  {
    icon: <Gift className="h-6 w-6 text-primary mb-2" />,
    title: "Personalized Recommendations",
    description: "Discover new products and get personalized suggestions based on your shopping history and preferences (Coming Soon!)."
  },
  {
    icon: <Users className="h-6 w-6 text-primary mb-2" />,
    title: "Community & Local Sourcing",
    description: "We partner with local farmers and producers to bring you the freshest ingredients while supporting the community."
  },
  {
    icon: <ShieldCheck className="h-6 w-6 text-primary mb-2" />,
    title: "Quality & Freshness Guaranteed",
    description: "We are committed to providing only the highest quality and freshest products. Your satisfaction is our priority."
  }
];

export function ServicePageClient() {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-background to-background text-center">
        <div className="container mx-auto px-4">
          <Truck className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Services Tailored For You
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            At FoodFlow, we're dedicated to making your grocery shopping experience seamless, convenient, and enjoyable. Discover how we cater to your needs.
          </p>
        </div>
      </section>

      {/* Main Services Content */}
      <section className="container mx-auto px-4">
        <Card className="shadow-lg">
          <CardHeader>
            <CardTitle className="text-3xl text-center tracking-tight">What We Offer</CardTitle>
            <CardDescription className="text-lg text-muted-foreground text-center max-w-2xl mx-auto">
              FoodFlow is more than just a delivery service; we're your partner in convenient and healthy living. Our services are designed with you in mind.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
              {servicesList.map((service, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex justify-center items-center mb-4">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm">{service.description}</p>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </section>
      
      {/* Image section (Optional visual break) */}
      <section className="container mx-auto px-4">
         <div className="bg-card p-6 rounded-lg shadow-md">
            <Image
                src="https://placehold.co/1200x400.png"
                alt="FoodFlow service collage"
                width={1200}
                height={400}
                className="rounded-lg object-cover w-full"
                data-ai-hint="delivery groceries people"
            />
         </div>
      </section>

      {/* Related Section */}
      <WhyChooseUsSection />
    </div>
  );
}