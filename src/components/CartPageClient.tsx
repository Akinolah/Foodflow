
"use client";

import Image from 'next/image';
import Link from 'next/link';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Trash2, Plus, Minus, MessageSquareText, CreditCard } from 'lucide-react';
import { ShoppingCartIcon } from '@/components/ShoppingCartIcon'; // Added import

// Replace with your actual WhatsApp number
const WHATSAPP_PHONE_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "1234567890"; // Example, use an env var

export function CartPageClient() {
  const { cartItems, removeFromCart, updateQuantity, getCartTotal, clearCart } = useCart();

  const handleQuantityChange = (productId: string, currentQuantity: number, change: number) => {
    const newQuantity = currentQuantity + change;
    if (newQuantity >= 0) { // Allow 0 to trigger removal in updateQuantity logic
      updateQuantity(productId, newQuantity);
    }
  };
  
  const handleInputChange = (productId: string, value: string) => {
    const newQuantity = parseInt(value, 10);
    if (!isNaN(newQuantity) && newQuantity >= 0) {
      updateQuantity(productId, newQuantity);
    } else if (value === '') {
      // Allow empty input, maybe to be followed by a valid number
      // Or set to 1 if you prefer immediate validation
    }
  };

  const handleWhatsAppCheckout = () => {
    if (cartItems.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    let message = "Hello FoodFlow, I'd like to place an order:\n\n";
    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}\n`;
    });
    message += `\nTotal: $${getCartTotal().toFixed(2)}\n\n`;
    message += "Please confirm my order and provide payment/delivery details.";

    const whatsappUrl = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (cartItems.length === 0) {
    return (
      <div className="text-center py-12">
        <ShoppingCartIcon className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-semibold mb-2">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-6">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
          <Link href="/">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid md:grid-cols-3 gap-8">
      <div className="md:col-span-2 space-y-6">
        <h1 className="text-3xl font-bold tracking-tight">Your Shopping Cart</h1>
        {cartItems.map(item => (
          <Card key={item.id} className="overflow-hidden flex flex-col sm:flex-row">
            <div className="sm:w-1/4 aspect-video sm:aspect-square relative">
               <Image
                src={item.imageUrl}
                alt={item.name}
                layout="fill"
                objectFit="cover"
                data-ai-hint={item.imageAiHint || 'product image'}
              />
            </div>
            <div className="p-4 sm:p-6 flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-sm text-muted-foreground">{item.category}</p>
                <p className="text-lg font-bold text-primary mt-1">${item.price.toFixed(2)}</p>
              </div>
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, -1)} aria-label="Decrease quantity">
                    <Minus className="h-4 w-4" />
                  </Button>
                  <Input
                    type="number"
                    value={item.quantity.toString()} // Controlled input
                    onChange={(e) => handleInputChange(item.id, e.target.value)}
                    className="w-16 text-center"
                    min="0"
                    aria-label={`Quantity for ${item.name}`}
                  />
                  <Button variant="outline" size="icon" onClick={() => handleQuantityChange(item.id, item.quantity, 1)} aria-label="Increase quantity">
                    <Plus className="h-4 w-4" />
                  </Button>
                </div>
                <Button variant="ghost" size="icon" onClick={() => removeFromCart(item.id)} className="text-destructive hover:text-destructive/80" aria-label={`Remove ${item.name} from cart`}>
                  <Trash2 className="h-5 w-5" />
                </Button>
              </div>
            </div>
          </Card>
        ))}
        <Button variant="outline" onClick={clearCart} className="text-destructive border-destructive hover:bg-destructive/10">
          Clear Cart
        </Button>
      </div>

      <div className="md:col-span-1">
        <Card className="sticky top-24 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Order Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Free</span>
            </div>
            <Separator />
            <div className="flex justify-between font-bold text-xl">
              <span>Total</span>
              <span>${getCartTotal().toFixed(2)}</span>
            </div>
          </CardContent>
          <CardFooter className="flex flex-col gap-3">
            <Button asChild className="w-full" size="lg">
              <Link href="/checkout">
                <CreditCard className="mr-2 h-5 w-5" /> Proceed to Checkout
              </Link>
            </Button>
            <Button onClick={handleWhatsAppCheckout} variant="outline" className="w-full" size="lg">
              <MessageSquareText className="mr-2 h-5 w-5 text-green-600" /> WhatsApp Checkout
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
}
