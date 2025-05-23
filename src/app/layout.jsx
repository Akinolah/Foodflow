import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { CartProvider } from '@/contexts/CartContext';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Toaster } from "@/components/ui/toaster";
import { BackToTopButton } from '@/components/BackToTopButton';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata = {
  title: 'FoodFlow - Fresh Groceries Delivered',
  description: 'Order fresh groceries online with FoodFlow. Quick delivery to your doorstep.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen`}>
        <CartProvider>
          <Header />
          <main className="flex-grow container py-8">
            {children}
          </main>
          <Footer />
          <Toaster />
          <BackToTopButton />
        </CartProvider>
      </body>
    </html>
  );
}