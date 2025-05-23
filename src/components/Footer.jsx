"use client";

import Link from 'next/link';
import { Package2, Mail, Phone, Facebook, Instagram, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Using an inline SVG for X (Twitter) icon as lucide-react's X is generic
const XTwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

export function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    // Add newsletter subscription logic here
    const emailInput = event.currentTarget.elements.namedItem('email');
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
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
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
              <p className="text-xs mt-2">Get the latest updates// filepath: c:\Users\Bigsam\documents\webs\Foodflow\src\components\Footer.jsx
"use client";

import Link from 'next/link';
import { Package2, Mail, Phone, Facebook, Instagram, Send } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

// Using an inline SVG for X (Twitter) icon as lucide-react's X is generic
const XTwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"/>
    <path d="m6 6 12 12"/>
  </svg>
);

export function Footer() {
  const handleNewsletterSubmit = (event) => {
    event.preventDefault();
    // Add newsletter subscription logic here
    const emailInput = event.currentTarget.elements.namedItem('email');
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
              <li><Link href="/products" className="hover:text-primary transition-colors">Products</Link></li>
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
              <p className="text-xs mt-2">Get the latest updates