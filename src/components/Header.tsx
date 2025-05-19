
import Link from 'next/link';
import { Package2, UserCircle, ListOrderedIcon, LogInIcon } from 'lucide-react';
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
        <nav className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Products</Link>
          </Button>
          
          {isAuthenticated && (
            <>
              <Button variant="ghost" asChild>
                <Link href="/orders">
                  <ListOrderedIcon className="h-5 w-5 md:mr-2" />
                  <span className="hidden md:inline">Orders</span>
                </Link>
              </Button>
              <Button variant="ghost" asChild>
                <Link href="/profile">
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
           {/* Admin link - consider moving to a dropdown or footer for actual admins */}
           {/* <Button variant="ghost" asChild>
            <Link href="/admin">Admin</Link>
          </Button> */}
        </nav>
      </div>
    </header>
  );
}
