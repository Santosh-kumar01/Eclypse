import React from 'react';
import CheckoutCard from '@/components/card/Card';

const CardPage = () => {
  return (
    <main className="bg-white dark:bg-black min-h-screen transition-colors duration-300">
      <header className="px-4 py-6">
        <h1 className="text-2xl text-black dark:text-white font-medium">Shipping Address</h1>
      </header>
      <CheckoutCard />
    </main>
  );
};

export default CardPage;