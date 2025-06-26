"use client";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";

export default function HomePage() {
  return (
    <main className=" min-h-screen flex items-center justify-center overflow-hidden px-6 py-20 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0f0f0f] dark:via-[#181818] dark:to-[#1f1f1f] transition-colors duration-500">
      
      <div className="absolute w-[600px] h-[600px] bg-orange-600/20 blur-[160px] rounded-full top-[-10%] right-[-20%] z-0" />
      <div className="absolute w-[400px] h-[400px] bg-pink-500/10 blur-[100px] rounded-full bottom-[0%] left-[-10%] z-0" />

      <section className="relative z-10 w-full max-w-3xl text-center">
        <h2 className="text-base sm:text-lg text-orange-600/90 font-medium mb-3 tracking-wider uppercase">
          Namaste, I am
        </h2>

        <h1 className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-gray-900 dark:text-white mb-4 leading-tight drop-shadow-md">
          Sanjana Bishnoi
        </h1>

        <div className="text-2xl sm:text-3xl font-semibold text-orange-600/90 mb-6">
          <FlipWords
            words={["UI/UX Designer", "Logo Designer", "App Designer"]}
            className="inline-block"
          />
        </div>

        <p className="text-neutral-700 dark:text-neutral-400 text-base sm:text-lg max-w-xl mx-auto mb-8 leading-relaxed">
          I craft thoughtful, intuitive and memorable brand experiences - blending creativity with usability to create results that speak for themselves.
        </p>

        <a
          href="#portfolio"
          className="inline-block px-6 py-3 rounded-full text-white bg-orange-600/90 hover:bg-orange-700 transition-all font-medium shadow-lg backdrop-blur-md hover:scale-105 active:scale-95"
        >
        Explore My Work
        </a>
      </section>
    </main>
  );
}
