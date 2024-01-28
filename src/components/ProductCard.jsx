import React from 'react';

export default function ProductCard({
  product: { id, image, title, category, price },
}) {

   // 한국 원(KRW) 형식으로 숫자를 포맷하는 함수
   const formatPrice = (price) => {
    return new Intl.NumberFormat('ko-KR', {
      style: 'currency',
      currency: 'KRW',
    }).format(price);
  };

  return (
    <li className='rounded-lg shadow-md overflow-hidden cursor-pointer'>
      <img className='w-full' src={image} alt={title} />
      <div className='mt-2 px-2 text-lg flex justify-between items-center'>
        <h3 className='truncate'>{title}</h3>
     
        <p>{formatPrice(price)}</p>
      </div>
      <p className='mb-2 px-2 text-gray-600'>{category}</p>
    </li>
  );
}
