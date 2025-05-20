
"use client";

import Link from 'next/link';
import { Package2, UserCircle, ListOrderedIcon, LogInIcon, Facebook, Instagram, X, Menu, ShoppingCart } from 'lucide-react';
import { ShoppingCartIcon } from '@/components/ShoppingCartIcon';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Separator } from '@/components/ui/separator';
import React from 'react';

export function Header() {
  // Placeholder for authentication state
  const isAuthenticated = false; // In a real app, this would come from an auth context/hook

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/products", label: "Products" },
    { href: "/about", label: "About" },
    { href: "/service", label: "Service" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { href: "https://facebook.com/foodflow", label: "Facebook", icon: <Facebook className="h-5 w-5" /> },
    { href: "https://instagram.com/foodflow", label: "Instagram", icon: <Instagram className="h-5 w-5" /> },
    { href: "https://x.com/foodflow", label: "X (Twitter)", icon: <X className="h-5 w-5" /> },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="FoodFlow Home">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">FoodFlow</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Button variant="ghost" asChild key={item.href}>
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* Desktop User Auth/Cart and Social Media */}
          <div className="hidden md:flex items-center gap-1 p-0.5 rounded-md hover:bg-accent/10 transition-colors">
            {isAuthenticated ? (
              <>
                <Button variant="ghost" asChild>
                  <Link href="/orders" aria-label="My Orders">
                    <ListOrderedIcon className="h-5 w-5 md:mr-1" />
                    <span className="hidden md:inline">Orders</span>
                  </Link>
                </Button>
                <Button variant="ghost" asChild>
                  <Link href="/profile" aria-label="My Profile">
                    <UserCircle className="h-5 w-5 md:mr-1" />
                    <span className="hidden md:inline">Profile</span>
                  </Link>
                </Button>
              </>
            ) : (
              <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogInIcon className="h-5 w-5 md:mr-1" />
                  <span className="hidden md:inline">Login</span>
                </Link>
              </Button>
            )}
            <ShoppingCartIcon />
          </div>

          <div className="hidden md:flex items-center gap-0.5 p-0.5 rounded-md hover:bg-accent/10 transition-colors">
            {socialLinks.map(social => (
              <Button variant="ghost" size="icon" asChild key={social.href} aria-label={`FoodFlow on ${social.label}`}>
                <Link href={social.href} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </Link>
              </Button>
            ))}
          </div>

          {/* Mobile Menu Trigger & Quick Icons */}
          <div className="flex items-center gap-1 md:hidden">
            {isAuthenticated ? (
              <>
                {/* Quick access profile/orders icons for mobile can be added here if desired, or kept in sheet */}
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/profile" aria-label="My Profile">
                    <UserCircle className="h-5 w-5" />
                  </Link>
                </Button>
              </>
            ) : (
              <Button variant="ghost" size="icon" asChild>
                <Link href="/login" aria-label="Login">
                  <LogInIcon className="h-5 w-5" />
                </Link>
              </Button>
            )}
            <ShoppingCartIcon />
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" aria-label="Open menu">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[280px] sm:w-[320px] p-0 flex flex-col">
                <SheetHeader className="p-4 border-b">
                  <SheetTitle className="flex items-center gap-2 text-left">
                     <Package2 className="h-6 w-6 text-primary" />
                     <span className="text-xl font-bold tracking-tight">FoodFlow</span>
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex-grow p-4 space-y-2 overflow-y-auto">
                  {navItems.map((item) => (
                    <SheetClose asChild key={item.href}>
                      <Button variant="ghost" className="w-full justify-start text-base" asChild>
                        <Link href={item.href}>{item.label}</Link>
                      </Button>
                    </SheetClose>
                  ))}
                  {isAuthenticated && (
                    <>
                     <Separator className="my-2"/>
                      <SheetClose asChild>
                        <Button variant="ghost" className="w-full justify-start text-base" asChild>
                           <Link href="/orders">My Orders</Link>
                        </Button>
                      </SheetClose>
                       <SheetClose asChild>
                        <Button variant="ghost" className="w-full justify-start text-base" asChild>
                           <Link href="/profile">My Profile</Link>
                        </Button>
                      </SheetClose>
                      {/* Add Logout Button here if needed */}
                    </>
                  )}
                </nav>
                <Separator />
                <div className="p-4 mt-auto border-t">
                  <h4 className="mb-2 text-sm font-medium text-muted-foreground text-center">Follow Us</h4>
                  <div className="flex justify-around items-center">
                    {socialLinks.map(social => (
                       <SheetClose asChild key={social.href}>
                        <Button variant="ghost" size="icon" asChild aria-label={`FoodFlow on ${social.label}`}>
                          <Link href={social.href} target="_blank" rel="noopener noreferrer">
                            {React.cloneElement(social.icon, { className: "h-6 w-6" })}
                          </Link>
                        </Button>
                       </SheetClose>
                    ))}
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
