
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Eye, Truck, CheckCircle } from 'lucide-react';
// Placeholder: In a real app, fetch orders from a backend
const mockOrders = [
  { id: 'ORD001', customer: 'Alice Smith', date: '2024-07-28', total: 45.99, status: 'Processing' },
  { id: 'ORD002', customer: 'Bob Johnson', date: '2024-07-27', total: 120.50, status: 'Shipped' },
  { id: 'ORD003', customer: 'Carol Williams', date: '2024-07-26', total: 15.75, status: 'Delivered' },
];

export function ManageOrdersPageClient() {
  // Placeholder for order management logic

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8 tracking-tight">Manage Orders</h1>

      {mockOrders.length === 0 ? (
         <Card className="text-center py-12">
          <CardHeader>
            <ListOrdered className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
            <CardTitle className="text-2xl font-semibold">No Orders Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">There are currently no orders to display.</p>
          </CardContent>
        </Card>
      ) : (
      <div className="space-y-6">
        {mockOrders.map(order => (
          <Card key={order.id}>
            <CardHeader>
              <CardTitle className="text-xl">Order #{order.id}</CardTitle>
              <CardDescription>
                Customer: {order.customer} | Date: {order.date} | Status: <span className={`font-semibold ${
                  order.status === 'Delivered' ? 'text-green-600' : order.status === 'Shipped' ? 'text-blue-600' : 'text-yellow-600'
                }`}>{order.status}</span>
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-between items-center">
              <p className="text-lg font-semibold">Total: ${order.total.toFixed(2)}</p>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">
                  <Eye className="mr-2 h-4 w-4" /> View Details
                </Button>
                {order.status === 'Processing' && (
                  <Button variant="default" size="sm">
                    <Truck className="mr-2 h-4 w-4" /> Mark as Shipped
                  </Button>
                )}
                 {order.status === 'Shipped' && (
                  <Button variant="secondary" size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                    <CheckCircle className="mr-2 h-4 w-4" /> Mark as Delivered
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      )}
    </div>
  );
}
