"use client";

import Link from 'next/link';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';

export function ShoppingCartIcon() {
  const { getItemCount } = useCart();
  const itemCount = getItemCount();

  return (
    <Button variant="ghost" size="icon" className="relative" asChild>
      <Link href="/cart" aria-label="Shopping Cart">
        <ShoppingCart className="h-6 w-6" />
        {itemCount > 0 && (
          <span className="absolute -top-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
            {itemCount}
          </span>
        )}
      </Link>
    </Button>
  );
}