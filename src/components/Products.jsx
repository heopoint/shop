import React from 'react';
import { useQuery } from '@tanstack/react-query';
import { getProducts } from '../api/firebase';
import ProductCard from './ProductCard';

export default function Products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery({queryKey: ['products'], queryFn: getProducts, staleTime: 1000 * 60 });
  return (
    <>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className='max-w-1260 mx-auto'>
        <h2 class="border-l-8 border-black pl-2 text-4xl  mt-4">BEST</h2>
        <ul className=' grid grid-cols-1 md:grid-cols-4 lg-grid-cols-5 gap-6 p-6'>
          {products &&
            products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </ul>
      </div>

    </>
  );
}
