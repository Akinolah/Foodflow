"use client";

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { LogIn, Facebook } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25C22.56 11.47 22.49 10.72 22.36 10H12.27V14.2H18.1C17.82 15.84 16.91 17.12 15.45 18.02V20.73H18.99C21.14 18.73 22.56 15.79 22.56 12.25Z" fill="#4285F4"/>
    <path d="M12.27 22.96C15.31 22.96 17.85 21.95 18.99 20.73L15.45 18.02C14.44 18.69 13.46 19.07 12.27 19.07C9.36 19.07 6.83 17.15 5.82 14.5H2.22V17.3C3.77 20.62 7.7 22.96 12.27 22.96Z" fill="#34A853"/>
    <path d="M5.82 14.5C5.58 13.81 5.45 13.08 5.45 12.27C5.45 11.46 5.58 10.73 5.82 10.04V7.24H2.22C1.26 9.14 0.67 11.12 0.67 13.27C0.67 15.42 1.26 17.4 2.22 19.29L5.82 16.53V14.5Z" fill="#FBBC05"/>
    <path d="M12.27 5.48C13.72 5.48 14.95 5.99 15.86 6.85L19.07 3.64C17.85 2.51 15.31 1.58 12.27 1.58C7.7 1.58 3.77 3.92 2.22 7.24L5.82 10.04C6.83 7.39 9.36 5.48 12.27 5.48Z" fill="#EA4335"/>
  </svg>
);

export function LoginPageClient() {
  const handleLogin = (event) => {
    event.preventDefault();
    // Implement actual login logic here
    console.log("Login attempt with email/password");
  };

  const handleSocialSignIn = (provider) => {
    // Implement social sign-in logic here
    console.log(`Sign in attempt with ${provider}`);
  };

  return (
    <div className="flex justify-center items-center py-12 px-4">
      <Card className="w-full max-w-md shadow-xl">
        <CardHeader className="text-center">
          <LogIn className="mx-auto h-10 w-10 text-primary mb-2" />
          <CardTitle className="text-2xl font-bold tracking-tight">Welcome Back!</CardTitle>
          <CardDescription>Sign in to continue to FoodFlow.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="you@example.com" required />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" required />
            </div>
            <div className="flex items-center justify-between text-sm">
              {/* Placeholder for "Remember me" if needed */}
              {/* <div className="flex items-center gap-2">
                <Checkbox id="remember-me" />
                <Label htmlFor="remember-me">Remember me</Label>
              </div> */}
              <Button variant="link" asChild className="p-0 h-auto text-primary">
                <Link href="/forgot-password">Forgot password?</Link>
              </Button>
            </div>
            <Button type="submit" className="w-full" size="lg">
              Sign In
            </Button>
          </form>

          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-background px-2 text-muted-foreground">
                Or sign in with
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <Button variant="outline" className="w-full" size="lg" onClick={() => handleSocialSignIn('Google')}>
              <GoogleIcon />
              Sign in with Google
            </Button>
            <Button variant="outline" className="w-full" size="lg" onClick={() => handleSocialSignIn('Facebook')}>
              <Facebook className="text-[#1877F2]" />
              Sign in with Facebook
            </Button>
             {/* Placeholder for more social logins */}
            {/* <Button variant="outline" className="w-full" size="lg" onClick={() => handleSocialSignIn('Apple')}>
              <AppleIcon /> Sign in with Apple
            </Button> */}
          </div>
        </CardContent>
        <CardFooter className="text-center text-sm">
          <p className="text-muted-foreground">
            Don't have an account?{' '}
            <Button variant="link" asChild className="p-0 h-auto font-semibold">
              <Link href="/register">Sign up now</Link>
            </Button>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
}