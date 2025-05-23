"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Mail, Phone } from 'lucide-react';

export function ContactSectionHome() {
  return (
    <section className="py-12 bg-gradient-to-r from-primary/10 to-background">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto text-center shadow-xl">
          <CardHeader>
            <Mail className="mx-auto h-12 w-12 text-primary mb-4" />
            <CardTitle className="text-3xl font-bold tracking-tight">Have Questions or Feedback?</CardTitle>
            <CardDescription className="text-lg text-muted-foreground mt-2">
              We're here to help! Reach out to our friendly support team for any inquiries.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <Button size="lg" asChild>
                <Link href="/contact">
                  Send Us a Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+12345678900">
                  <Phone className="mr-2 h-5 w-5" /> Call Us Now
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground">
              Or visit our <Link href="/contact" className="text-primary hover:underline">Contact Page</Link> for more options.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}