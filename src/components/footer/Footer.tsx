"use client";

import { ArrowUp } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-black dark:bg-black dark:text-white py-12 px-6 md:px-20 relative transition-colors duration-300">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 md:gap-0">
        {/* Left Section */}
        <div className="space-y-6">
          <Link href="#" className="text-2xl font-light inline-flex items-center">
            Eclypse <sup className="ml-1 text-sm">↗</sup>
          </Link>

          <nav className="text-sm space-y-1">
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="#">Home</Link>
              <span>/</span>
              <Link href="#">About</Link>
              <span>/</span>
              <Link href="#">Buy</Link>
            </div>
            <div className="flex flex-wrap gap-x-4 gap-y-1">
              <Link href="#">Our Customers</Link>
              <span>/</span>
              <Link href="#">Contacts</Link>
            </div>
          </nav>
        </div>

        {/* Right Section: Contact & Email side by side */}
        <div className="flex flex-col md:flex-row gap-y-6 md:gap-y-0 md:gap-x-12 text-sm">
          {/* Contact Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs mb-1">Contact</p>
            <p className="text-lg font-medium">+91 123-456-7890</p>
          </div>

          {/* Email Info */}
          <div>
            <p className="text-gray-600 dark:text-gray-400 uppercase tracking-widest text-xs mb-1">Email</p>
            <p>eclypse@gmail.com</p>
          </div>
        </div>
      </div>

      {/* Scroll to top */}
      <button
        className="absolute top-6 right-6 md:top-6 md:right-20 bg-black text-white dark:bg-white dark:text-black p-2 rounded-full shadow-md hover:scale-105 transition"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        aria-label="Scroll to top"
      >
        <ArrowUp size={18} />
      </button>

      {/* Copyright */}
      <p className="text-xs text-gray-500 dark:text-gray-400 absolute bottom-4 right-6 md:right-20">
        © Eclypse 2025
      </p>
    </footer>
  );
}