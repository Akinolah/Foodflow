
import Link from 'next/link';
import { Package2 } from 'lucide-react';
import { ShoppingCartIcon } from '@/components/ShoppingCartIcon';
import { Button } from '@/components/ui/button';

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2" aria-label="FoodFlow Home">
          <Package2 className="h-6 w-6 text-primary" />
          <span className="text-xl font-bold tracking-tight">FoodFlow</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Button variant="ghost" asChild>
            <Link href="/">Products</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/cart">Cart</Link>
          </Button>
          <ShoppingCartIcon />
        </nav>
      </div>
    </header>
  );
}
