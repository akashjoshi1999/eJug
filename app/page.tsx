// app/page.tsx

import { ProductCard } from "./components/ProductCard";



export default function HomePage() {
  // Sample product data for now
  const products = [
    { id: 1, name: 'Product 1', price: 29.99, imageUrl: '/images/product1.jpg' },
    { id: 2, name: 'Product 2', price: 49.99, imageUrl: '/images/product2.jpg' },
    { id: 3, name: 'Product 3', price: 19.99, imageUrl: '/images/product3.jpg' },
  ];

  return (
    <div>
      <section className="text-center py-12 bg-blue-600 text-white">
        <h1 className="text-4xl font-bold mb-4">Welcome to ShopEasy</h1>
        <p className="text-xl">Your favorite place to shop amazing products</p>
      </section>

      <section className="py-12">
        <h2 className="text-3xl font-semibold text-center mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}
