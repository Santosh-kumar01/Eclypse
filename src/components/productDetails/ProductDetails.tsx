"use client";

import Image from 'next/image';
import { useState } from 'react';

export default function ProductDetails() {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  const thumbnails = [
    "/2.jpeg",
    "/3.jpeg",
    "/4.jpeg",
  ];

  const sizes = ['XS', 'S', 'M', 'L', 'XL'];

  return (
    <div className="min-h-screen bg-white text-black dark:bg-black dark:text-white p-4 md:p-10 grid md:grid-cols-2 gap-8 transition-colors duration-300">
      
      {/* Left side - Main Image (inherits light/dark) */}
      <div className="relative w-full h-[600px]">
        <Image
          src="/1.png"
          alt="Model wearing red suit"
          fill
          className="object-cover rounded"
        />
      </div>

      {/* Right side - Product Info (forced light mode) */}
      <div className="flex flex-col gap-6 bg-white text-black p-4 rounded shadow-md">
        
        {/* Paragraph Description */}
        <div className="bg-white bg-opacity-80 p-4 max-w-sm rounded shadow text-black">
          <p className="text-sm">
            <strong>A tailored composition in motion.</strong> Cut from structured wool with a sculpted shoulder and softened hem, this piece captures presence without force. Worn here in the stillness of a city in motion.
          </p>
        </div>

        {/* Thumbnails */}
        <div className="grid grid-cols-3 gap-4">
          {thumbnails.map((src, index) => (
            <div key={index} className="aspect-[3/4] relative">
              <Image
                src={src}
                alt={`Red suit view ${index + 1}`}
                fill
                className="object-cover rounded"
              />
            </div>
          ))}
        </div>

        {/* Price */}
        <div>
          <p className="text-2xl font-semibold">₹ 7,999</p>
          <p className="text-xs text-gray-500">MRP incl. of all taxes</p>
        </div>

        {/* Size selection */}
        <div>
          <p className="mb-2">
            Please select a size
            <span className="text-blue-600 underline cursor-pointer ml-4">Size chart</span>
          </p>
          <div className="flex gap-12 flex-wrap">
            {sizes.map(size => (
              <button
                key={size}
                className={`px-4 py-2 border rounded transition-colors duration-200 ${
                  selectedSize === size
                    ? 'bg-black text-white'
                    : 'bg-gray-100 text-black'
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Action buttons */}
        <div className="flex gap-4 mt-4">
          <button className="flex-1 border border-black py-2 rounded hover:bg-gray-100 transition-colors duration-200">
            Add to Cart
          </button>
          <button className="flex-1 bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors duration-200">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}