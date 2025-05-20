
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, MessageSquareText } from 'lucide-react';

// Using an inline SVG for X (Twitter) icon as lucide-react's X is generic
const XTwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

const WhatsAppIcon = () => (
 <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor">
    <path d="m22.143 19.226-2.142-1.071a1.071 1.071 0 0 0-1.231.299l-.911.983a.536.536 0 0 1-.785.089c-1.339-.786-2.839-2.089-3.839-3.339a.536.536 0 0 1 .089-.785l.911-.983a1.071 1.071 0 0 0 .286-1.231l-1.071-2.142a1.071 1.071 0 0 0-1.196-.607l-2.054.214a.536.536 0 0 0-.464.536c0 .536.018 2.161 2.089 4.232 2.071 2.071 3.696 2.089 4.232 2.089a.536.536 0 0 0 .536-.464l.214-2.054a1.071 1.071 0 0 0-.607-1.196z"/>
    <path d="M16 3C8.832 3 3 8.832 3 16s5.832 13 13 13 13-5.832 13-13S23.168 3 16 3zm0 2c6.087 0 11 4.913 11 11s-4.913 11-11 11S5 22.087 5 16 9.913 5 16 5z"/>
  </svg>
);

// Replace with your actual WhatsApp number
const WHATSAPP_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890";

export function ContactPageClient() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
    // Consider using useToast hook for feedback
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-gradient-to-r from-primary/10 via-background to-background text-center">
        <div className="container mx-auto px-4">
          <Mail className="mx-auto h-16 w-16 text-primary mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            We're here to help and answer any question you might have. We look forward to hearing from you!
          </p>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 gap-8">
          <Card className="md:col-span-3 shadow-lg">
            <CardHeader>
              <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              <CardDescription>Fill out the form below and we'll get back to you as soon as possible.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" required />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" type="email" placeholder="you@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number (Optional)</Label>
                    <Input id="phone" type="tel" placeholder="(123) 456-7890" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="Regarding my order, feedback, etc." required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Your message here..." required rows={5} />
                </div>
                <Button type="submit" className="w-full sm:w-auto" size="lg">Send Message</Button>
              </form>
            </CardContent>
          </Card>

          <div className="md:col-span-2 space-y-6">
            <Card className="shadow-lg">
              <CardHeader>
                <CardTitle className="text-2xl">Other Ways to Reach Us</CardTitle>
                <CardDescription>Connect with us through various channels.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors">
                  <Mail className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <a href="mailto:support@foodflow.example.com" className="text-muted-foreground hover:text-primary transition-colors">support@foodflow.example.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors">
                  <Phone className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <a href="tel:+12345678900" className="text-muted-foreground hover:text-primary transition-colors">+1 (234) 567-8900</a>
                    <p className="text-xs text-muted-foreground">(Mon-Fri, 9am-5pm)</p>
                  </div>
                </div>
                 <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors">
                  <WhatsAppIcon />
                  <div>
                    <h4 className="font-semibold">WhatsApp</h4>
                    <a href={`https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent("Hello FoodFlow, I have a question.")}`} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">Chat with us</a>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-3 rounded-md hover:bg-accent/50 transition-colors">
                  <MessageSquareText className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Live Chat</h4>
                    <p className="text-muted-foreground">
                      <Link href="#" className="hover:text-primary transition-colors">Chat with a support agent</Link> (Coming Soon)
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-lg">
              <CardHeader>
                 <CardTitle className="text-xl">Our Office</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="h-6 w-6 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <p className="text-muted-foreground">123 Fresh St, Food City, FC 54321</p>
                  </div>
                </div>
                <div className="mt-2 rounded-md overflow-hidden border shadow-sm">
                  <Image
                    src="https://placehold.co/600x350.png" 
                    alt="Map showing FoodFlow location"
                    width={600}
                    height={350}
                    className="w-full object-cover"
                    data-ai-hint="map city location"
                  />
                </div>
              </CardContent>
            </Card>
            
            <Card className="shadow-lg">
              <CardHeader>
                 <CardTitle className="text-xl">Follow Us</CardTitle>
              </CardHeader>
              <CardContent>
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
                      <XTwitterIcon />
                    </Link>
                  </Button>
                  <Button variant="outline" size="icon" asChild aria-label="FoodFlow on LinkedIn">
                    <Link href="https://linkedin.com/company/foodflow" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="h-5 w-5" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

    