
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { UserCircle } from 'lucide-react';

export function ProfilePageClient() {
  // Placeholder for profile data and update logic
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
  };

  const handleProfileUpdate = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Profile update attempt");
    // Implement profile update logic
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <UserCircle className="h-10 w-10 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Your Profile</h1>
      </div>
      
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Account Information</CardTitle>
          <CardDescription>View and update your personal details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleProfileUpdate} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" defaultValue={user.name} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" defaultValue={user.email} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="current-password">Current Password (optional)</Label>
              <Input id="current-password" type="password" placeholder="Enter to change password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="new-password">New Password (optional)</Label>
              <Input id="new-password" type="password" />
            </div>
            <Button type="submit">Update Profile</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
