import { ProductList } from '@/components/ProductList';
import { mockProducts } from '@/data/products';

export default function HomePage() {
  // In a real app, products would be fetched from an API
  // For now, we use mock data directly.
  // This page can remain a Server Component if product fetching is done here.
  // ProductList itself is a client component for interactivity.
  return (
    <section className="py-2">
      <h1 className="text-3xl font-bold mb-8 text-center tracking-tight">Explore Our Products</h1>
      <ProductList products={mockProducts} />
    </section>
  );
}
