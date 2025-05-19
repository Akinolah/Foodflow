
"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, MessageSquareText, Facebook, Instagram, X as XIcon, Linkedin } from 'lucide-react';

export function ContactPageClient() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Mail className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle>Send Us a Message</CardTitle>
            <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" placeholder="John Doe" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Regarding my order..." required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="Your message here..." required rows={5} />
              </div>
              <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
            </form>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Other Ways to Reach Us</CardTitle>
            <CardDescription>Connect with us through various channels.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Email</h4>
                  <a href="mailto:support@foodflow.example.com" className="text-muted-foreground hover:text-primary transition-colors">support@foodflow.example.com</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Phone className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Phone</h4>
                  <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-8900</a>
                  <p className="text-xs text-muted-foreground">(Mon-Fri, 9am-5pm)</p>
                </div>
              </div>
               <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Our Office</h4>
                  <p className="text-muted-foreground">123 Fresh St, Food City, FC 54321</p>
                  {/* You could add a link to Google Maps here */}
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageSquareText className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold">Live Chat</h4>
                  <p className="text-muted-foreground">
                    <Link href="#" className="hover:text-primary transition-colors">Chat with a support agent</Link> (Coming Soon)
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t">
              <h4 className="font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-3">
                <Button variant="outline" size="icon" asChild aria-label="FoodFlow on Facebook">
                  <Link href="https://facebook.com/foodflow" target="_blank" rel="noopener noreferrer">
                    <Facebook className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild aria-label="FoodFlow on Instagram">
                  <Link href="https://instagram.com/foodflow" target="_blank" rel="noopener noreferrer">
                    <Instagram className="h-5 w-5" />
                  </Link>
                </Button>
                 <Button variant="outline" size="icon" asChild aria-label="FoodFlow on X (Twitter)">
                  <Link href="https://x.com/foodflow" target="_blank" rel="noopener noreferrer">
                    <XIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="outline" size="icon" asChild aria-label="FoodFlow on LinkedIn">
                  <Link href="https://linkedin.com/company/foodflow" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
