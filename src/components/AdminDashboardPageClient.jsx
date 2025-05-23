"use client";

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LayoutDashboard, ShoppingBag, ListOrdered, Users } from 'lucide-react';

export function AdminDashboardPageClient() {
  // Placeholder for admin specific data or actions
  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <LayoutDashboard className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Admin Dashboard</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <ShoppingBag className="mr-2 h-5 w-5 text-primary" />
              Manage Products
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">Add, edit, or remove products from the store.</p>
            <Button asChild>
              <Link href="/admin/products">Go to Products</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
              <ListOrdered className="mr-2 h-5 w-5 text-primary" />
              Manage Orders
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">View and manage customer orders.</p>
            <Button asChild>
              <Link href="/admin/orders">Go to Orders</Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-xl">
             <Users className="mr-2 h-5 w-5 text-primary" />
              Manage Users
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">View and manage user accounts.</p>
            {/* Link to user management page if created */}
            <Button disabled>Coming Soon</Button> 
          </CardContent>
        </Card>
      </div>
    </div>
  );
}