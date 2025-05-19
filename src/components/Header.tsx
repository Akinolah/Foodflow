
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
        
        <nav className="hidden md:flex items-center gap-1">
          <Button variant="ghost" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            {/* Assuming product listing is at root or a dedicated /products page */}
            <Link href="/">Products</Link> 
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/service">Service</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
        </nav>

        <div className="flex items-center gap-2 md:gap-3">
          {/* User Auth and Cart */}
          <div className="flex items-center gap-1 p-0.5 rounded-md hover:bg-accent/10 transition-colors">
            {isAuthenticated && (
              <>
                <Button variant="ghost" size="icon" asChild className="md:hidden">
                  <Link href="/orders" aria-label="My Orders">
                    <ListOrderedIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="hidden md:flex">
                  <Link href="/orders" aria-label="My Orders">
                    <ListOrderedIcon className="h-5 w-5 md:mr-1" /> {/* Adjusted margin */}
                    <span className="hidden md:inline">Orders</span>
                  </Link>
                </Button>

                <Button variant="ghost" size="icon" asChild className="md:hidden">
                  <Link href="/profile" aria-label="My Profile">
                    <UserCircle className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="hidden md:flex">
                  <Link href="/profile" aria-label="My Profile">
                    <UserCircle className="h-5 w-5 md:mr-1" /> {/* Adjusted margin */}
                    <span className="hidden md:inline">Profile</span>
                  </Link>
                </Button>
              </>
            )}
            {!isAuthenticated && (
              <>
                <Button variant="ghost" size="icon" asChild className="md:hidden">
                  <Link href="/login" aria-label="Login">
                    <LogInIcon className="h-5 w-5" />
                  </Link>
                </Button>
                <Button variant="ghost" asChild className="hidden md:flex">
                  <Link href="/login">
                    <LogInIcon className="h-5 w-5 md:mr-1" /> {/* Adjusted margin */}
                    <span className="hidden md:inline">Login</span>
                  </Link>
                </Button>
              </>
            )}
            <ShoppingCartIcon />
          </div>

          {/* Social Media Links */}
          <div className="hidden md:flex items-center gap-0.5 p-0.5 rounded-md hover:bg-accent/10 transition-colors">
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
        </div>
        
      </div>
      {/* Mobile navigation */}
      <div className="md:hidden flex flex-wrap justify-center items-center gap-1 px-2 pb-2 border-t">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Home</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/">Products</Link> 
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/about">About</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/service">Service</Link>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <Link href="/contact">Contact</Link>
          </Button>
           {/* Mobile Social Media Links */}
          <div className="flex items-center gap-1">
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on Facebook">
              <Link href="https://facebook.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Facebook className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on Instagram">
              <Link href="https://instagram.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Instagram className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild aria-label="FoodFlow on X (Twitter)">
              <Link href="https://x.com/foodflow" target="_blank" rel="noopener noreferrer">
                <Twitter className="h-4 w-4" />
              </Link>
            </Button>
          </div>
      </div>
    </header>
  );
}
