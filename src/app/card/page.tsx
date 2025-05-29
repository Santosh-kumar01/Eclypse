import React from 'react';
import CheckoutCard from '@/components/card/Card';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

const CardPage = () => {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <header className="px-4 py-20">
        <Link href="/">
          <button className="flex items-center space-x-1 text-black dark:text-white hover:underline mb-4">
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </button>
        </Link>
        <h1 className="text-4xl mt-12 text-black dark:text-white font-medium">Shipping Address</h1>
      </header>
      <CheckoutCard />
    </main>
  );
};

export default CardPage;