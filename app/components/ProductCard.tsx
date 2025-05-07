// components/ProductCard.tsx

import Image from 'next/image';
import Link from 'next/link';

type Product = {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
};

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all">
      <Image
        src={product.imageUrl}
        alt={product.name}
        className="w-full h-64 object-cover"
        width={256}
        height={256}
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{product.name}</h3>
        <p className="text-xl font-bold text-blue-600">${product.price.toFixed(2)}</p>
        <Link href={`/products/${product.id}`} className="text-blue-600 hover:underline mt-4 inline-block">
          View Details
        </Link>
      </div>
    </div>
  );
};
