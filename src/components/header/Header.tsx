"use client";

import React, { useState } from "react";
import { ModeToggle } from "./mode-toggle/mode";

const Header = () => {
  const [showOverlay, setShowOverlay] = useState(false);

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 w-full z-50 bg-white text-black dark:bg-black dark:text-white px-6 py-4 flex items-center justify-between shadow">
        {/* Left: Theme Toggle */}
        <div className="flex items-center gap-4">
          <ModeToggle />
        </div>

        {/* Navigation (always visible) */}
        <nav className="flex space-x-6 text-sm sm:text-base items-center">
          <a href="#" className="hover:underline">About Us</a>
          <a href="#" className="hover:underline">Waitlist</a>
          <a href="/card" className="hover:underline">Cart</a>
          <button
            onClick={() => setShowOverlay(true)}
            className="bg-black text-white dark:bg-white dark:text-black font-semibold py-2 px-4 rounded-md"
          >
            Buy
          </button>
        </nav>
      </header>

      {/* Full Screen Overlay for "Buy" */}
      {showOverlay && (
        <div className="fixed inset-0 z-[100] bg-white dark:bg-black text-black dark:text-white flex flex-col items-center justify-center px-6">
          <h2 className="text-2xl sm:text-3xl font-semibold mb-6">Buy Product</h2>
          <p className="text-center max-w-md mb-8">
            This is where your product purchase content/form goes. You can replace this with a checkout or product detail.
          </p>
          <button
            onClick={() => setShowOverlay(false)}
            className="mt-4 bg-black text-white dark:bg-white dark:text-black px-6 py-2 rounded-md"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
};

export default Header;