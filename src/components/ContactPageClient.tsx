
"use client";

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail } from 'lucide-react';

export function ContactPageClient() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Handle form submission logic here
    console.log("Contact form submitted");
  };

  return (
    <div className="container mx-auto py-8">
      <div className="flex items-center mb-8">
        <Mail className="h-8 w-8 text-primary mr-3" />
        <h1 className="text-3xl font-bold tracking-tight">Contact Us</h1>
      </div>
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Get in Touch</CardTitle>
          <CardDescription>We'd love to hear from you. Fill out the form below or reach out via our contact details.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Doe" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="you@example.com" required />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Regarding my order..." required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="Your message here..." required rows={5} />
            </div>
            <Button type="submit" className="w-full sm:w-auto">Send Message</Button>
          </form>
          <div className="mt-8 pt-6 border-t">
            <h3 className="text-lg font-semibold mb-2">Other ways to reach us:</h3>
            <p className="text-muted-foreground"><strong>Email:</strong> support@foodflow.example.com</p>
            <p className="text-muted-foreground"><strong>Phone:</strong> +1 (234) 567-8900 (Mon-Fri, 9am-5pm)</p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
