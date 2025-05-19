
"use client";

import Link from 'next/link';
import { Package2, Mail, Phone, Facebook, Instagram, X as XIcon, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export function Footer() {
  const handleNewsletterSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Add newsletter subscription logic here
    const emailInput = event.currentTarget.elements.namedItem('email') as HTMLInputElement;
    console.log('Newsletter subscription for:', emailInput.value);
    alert(`Thank you for subscribing with ${emailInput.value}! (This is a demo)`);
    event.currentTarget.reset();
  };

  return (
    <footer className="border-t bg-background text-muted-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Column 1: Brand and Tagline */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 text-foreground" aria-label="FoodFlow Home">
              <Package2 className="h-7 w-7 text-primary" />
              <span className="text-2xl font-bold tracking-tight">FoodFlow</span>
            </Link>
            <p className="text-sm">
              Delivering fresh groceries and quality ingredients straight to your doorstep. Experience convenience and taste the difference.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-2">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
              <li><Link href="/" className="hover:text-primary transition-colors">Products</Link></li>
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/service" className="hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div className="space-y-3">
            <h4 className="font-semibold text-foreground mb-2">Get in Touch</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:support@foodflow.example" className="hover:text-primary transition-colors">support@foodflow.example</a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+12345678900" className="hover:text-primary transition-colors">+1 (234) 567-8900</a>
              </li>
              {/* You can add address here if needed 
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span>123 Fresh St, Food City, FC 54321</span>
              </li>
              */}
            </ul>
          </div>

          {/* Column 4: Newsletter & Social Media */}
          <div className="space-y-6">
            <div>
              <h4 className="font-semibold text-foreground mb-2">Stay Updated</h4>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-2">
                <Input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  aria-label="Email for newsletter"
                  required
                  className="bg-input flex-grow"
                />
                <Button type="submit" aria-label="Subscribe to newsletter">
                  <Send className="h-4 w-4 sm:mr-2" />
                  <span className="hidden sm:inline">Subscribe</span>
                </Button>
              </form>
              <p className="text-xs mt-2">Get the latest updates on new products and promotions.</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-2">Follow Us</h4>
              <div className="flex space-x-3">
                <Link href="https://facebook.com/foodflow" target="_blank" rel="noopener noreferrer" aria-label="FoodFlow on Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="https://instagram.com/foodflow" target="_blank" rel="noopener noreferrer" aria-label="FoodFlow on Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                  <Instagram className="h-6 w-6" />
                </Link>
                <Link href="https://x.com/foodflow" target="_blank" rel="noopener noreferrer" aria-label="FoodFlow on X" className="text-muted-foreground hover:text-primary transition-colors">
                  <XIcon className="h-6 w-6" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} FoodFlow. All rights reserved.</p>
          <p className="mt-1">A Project by Firebase Studio.</p>
        </div>
      </div>
    </footer>
  );
}
