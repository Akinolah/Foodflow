"use client";

import { useState, useEffect } from 'react';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { useToast } from "@/hooks/use-toast";
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Truck, CreditCard } from 'lucide-react';

export function CheckoutPageClient() {
  const { cartItems, getCartTotal, clearCart } = useCart();
  const { toast } = useToast();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Redirect if cart is empty
  useEffect(() => {
    if (cartItems.length === 0 && !isSubmitting) { // Prevent redirect during/after submission simulation
      router.push('/cart');
      toast({
        title: "Your cart is empty",
        description: "Please add items to your cart before proceeding to checkout.",
        variant: "destructive",
      });
    }
  }, [cartItems, router, toast, isSubmitting]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Basic validation
    for (const key in formData) {
      if (formData[key].trim() === '') {
        toast({
          title: "Missing Information",
          description: `Please fill in all required fields. ${key} is missing.`,
          variant: "destructive",
        });
        setIsSubmitting(false);
        return;
      }
    }
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log('Order placed:', {
      shippingInfo: formData,
      items: cartItems,
      total: getCartTotal(),
    });

    toast({
      title: "Order Placed Successfully!",
      description: "Thank you for your purchase. Your order is being processed.",
    });
    
    clearCart();
    router.push('/'); // Redirect to homepage after successful order
  };
  
  if (cartItems.length === 0 && !isSubmitting) {
    // This will be caught by useEffect, but good to have a fallback render
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground">Your cart is empty. Redirecting...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold tracking-tight mb-8 text-center">Checkout</h1>
      <form onSubmit={handleSubmit} className="grid md:grid-cols-5 gap-8">
        <div className="md:col-span-3 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><Truck className="mr-2 h-5 w-5 text-primary"/> Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} required />
              </div>
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input id="address" value={formData.address} onChange={handleChange} required />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input id="city" value={formData.city} onChange={handleChange} required />
                </div>
                <div>
                  <Label htmlFor="postalCode">Postal Code</Label>
                  <Input id="postalCode" value={formData.postalCode} onChange={handleChange} required />
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-xl flex items-center"><CreditCard className="mr-2 h-5 w-5 text-primary"/> Payment Details</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Payment processing is currently simulated. No real payment will be taken.</p>
              {/* Placeholder for payment form elements if needed in future */}
              <div className="mt-4 p-4 border border-dashed rounded-md text-center">
                <p>Dummy Payment Section</p>
                <p className="text-sm text-muted-foreground">(e.g. Stripe Elements / PayPal button would go here)</p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="md:col-span-2">
          <Card className="sticky top-24 shadow-lg">
            <CardHeader>
              <CardTitle className="text-xl">Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {cartItems.map(item => (
                <div key={item.id} className="flex items-center justify-between gap-2 text-sm">
                  <div className="flex items-center gap-2">
                    <Image 
                      src={item.imageUrl} 
                      alt={item.name} 
                      width={40} 
                      height={40} 
                      className="rounded" 
                      data-ai-hint={item.imageAiHint || 'product thumbnail'}
                    />
                    <div>
                      <p className="font-medium">{item.name}</p>
                      <p className="text-xs text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <span>${(item.price * item.quantity).toFixed(2)}</span>
                </div>
              ))}
              <Separator />
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Shipping</span>
                <span>Free</span>
              </div>
              <Separator />
              <div className="flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${getCartTotal().toFixed(2)}</span>
              </div>
            </CardContent>
            <CardFooter>
              <Button type="submit" className="w-full" size="lg" disabled={isSubmitting || cartItems.length === 0}>
                {isSubmitting ? 'Processing...' : 'Place Order'}
              </Button>
            </CardFooter>
          </Card>
        </div>
      </form>
    </div>
  );
}