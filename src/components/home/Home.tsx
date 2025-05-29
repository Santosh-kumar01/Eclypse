"use client";

import React from "react";

const Home: React.FC = () => {
  return (
    <header className="bg-white text-black dark:bg-black dark:text-white min-h-screen flex flex-col ">
      {/* Top Branding */}
      <div className="w-full px-6 mt-20 sm:pt-20 ">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-serif tracking-tight leading-none">
            Eclypse<sup className="text-base sm:text-xl align-super">®</sup>
          </h1>
          <span className="text-xs sm:text-sm mt-1">© 2025</span>
        </div>
      </div>

      {/* Hero Video with Tagline */}
      <div className="flex-grow flex items-center justify-center px-4 sm:px-10 pb-8 sm:pb-16">
        <div className="relative w-full max-w-[1400px] h-[60vh] sm:h-[70vh] lg:h-[600px] rounded overflow-hidden">
          <video
            src="/5099638-uhd_3840_2160_30fps.mp4"
            className="w-full h-full object-cover object-center"
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute bottom-4 right-4 sm:bottom-10 sm:right-10">
            <p className="text-white text-sm sm:text-lg lg:text-2xl font-light bg-black/60 px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg">
              A silhouette worth remembering
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Home;