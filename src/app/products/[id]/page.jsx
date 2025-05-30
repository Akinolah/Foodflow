import { mockProducts } from '@/data/products';
import { ProductDetailPageClient } from '@/components/ProductDetailPageClient';
import { notFound } from 'next/navigation';

// Helper function to find a product by ID
// In a real application, this would fetch from a database or API
function getProductById(id) {
  return mockProducts.find(p => p.id === id);
}

export async function generateMetadata({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    return {
      title: 'Product Not Found - FoodFlow',
      description: 'The product you are looking for does not exist.',
    };
  }

  return {
    title: `${product.name} - FoodFlow`,
    description: `Details for ${product.name}: ${product.description.substring(0, 150)}...`,
    openGraph: {
      title: `${product.name} - FoodFlow`,
      description: product.description,
      images: [
        {
          url: product.imageUrl,
          width: 600,
          height: 400,
          alt: product.name,
        },
      ],
    },
  };
}

export default function ProductPage({ params }) {
  const product = getProductById(params.id);

  if (!product) {
    notFound(); // This will render the nearest not-found.tsx or a default Next.js 404 page
  }

  return <ProductDetailPageClient product={product} />;
}