'use client';

// app/products/[slug]/page.tsx
import Image from 'next/image';
import { use } from 'react';

type ProductPageProps = {
  params: Promise<{ slug: string }>;
};

type Product = {
  id: number;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
};

export default function ProductPage({ params }: ProductPageProps) {
  const { slug } = use(params);  // ✅ Future-safe unwrapping

  const product: Product = {
    id: 1,
    name: `Product ${slug}`,
    description: 'This is a detailed description of the product.',
    price: 29.99,
    imageUrl: `/images/jug_${slug}.jpg`,
  };

  return (
    <div className="py-12 px-6 max-w-4xl mx-auto">
      <div className="flex flex-col lg:flex-row">
        <Image
          src={product.imageUrl}
          alt={product.name}
          className="w-full lg:w-1/2 h-80 object-cover mb-6 lg:mb-0"
          width={512}
          height={512}
        />
        <div className="lg:ml-8">
          <h1 className="text-3xl font-bold mb-4 text-black">{product.name}</h1>
          <p className="text-lg text-gray-600 mb-4">{product.description}</p>
          <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
          <button className="mt-6 px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-700">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}
