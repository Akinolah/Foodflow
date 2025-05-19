
import Link from 'next/link';
import { Package2, UserCircle, ListOrderedIcon, LogInIcon, Facebook, Instagram, Twitter } from 'lucide-react';
import { ShoppingCartIcon } from '@/components/ShoppingCartIcon';
import { Button } from '@/components/ui/button';

export function Header() {
  // Placeholder for authentication state
  const isAuthenticated = false; // In a real app, this would come from an auth context/hook

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="FoodFlow Home">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">FoodFlow</span>
        </Link>
        <nav className="flex items-center gap-1 md:gap-2">
          <Button variant="ghost" asChild>
            <Link href="/">Products</Link>
          </Button>
          
          {isAuthenticated && (
            <>
              <Button variant="ghost" asChild>
                <Link href="/orders" aria-label="My Orders">
                  <ListOrderedIcon className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline">Orders</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/profile" aria-label="My Profile">
                  <UserCircle className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline">Profile</span>
                </Link>
              </Button>
            </>
          )}
          {!isAuthenticated && (
             <Button variant="ghost" asChild>
                <Link href="/login">
                  <LogInIcon className="h-5 w-5 md:mr-2" />
                   <span className="hidden md:inline">Login</span>
                </Link>
              </Button>
          )}
          
          <ShoppingCartIcon />

          {/* Social Media Links */}
          <div className="ml-2 flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on Facebook">
              <Link href="https://facebook.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on Instagram">
              <Link href="https://instagram.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on X (Twitter)">
              <Link href="https://x.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-5 w-5" />
              </Link>
            </Button>
          </div>
           
           {/* Admin link - consider moving to a dropdown or footer for actual admins */}
           {/* <Button variant="ghost" asChild>
            <Link href="/admin">Admin</Link>
          </Button> */}
        </nav>
      </div>
    </header>
  );
}
