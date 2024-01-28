import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand text-white py-1 px-2 rounded-full hover:brightness-110'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
