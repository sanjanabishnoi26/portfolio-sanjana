"use client";
import React from "react";
import { FlipWords } from "../components/ui/flip-words";
import { Achievements } from "@/elements/Achievements";


export default function HomePage() {
  return (
    <main className="w-screen overflow-x-hidden overflow-y-auto scroll-smooth snap-y snap-mandatory">
{/*Hero Section-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      <section className="snap-start min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0f0f0f] dark:via-[#181818] dark:to-[#1f1f1f] relative overflow-hidden">
        <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-600/20 blur-[120px] rounded-full top-[-10%] right-[-20%] z-0" />
        <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-pink-500/10 blur-[100px] rounded-full bottom-[0%] left-[-10%] z-0" />

        <div className="absolute top-1/4 left-1/4 w-8 h-8 rounded-full bg-orange-400/20 animate-float1" />
        <div className="absolute bottom-1/3 right-1/4 w-12 h-12 rounded-lg bg-pink-400/15 rotate-45 animate-float2" />
        <div className="absolute top-1/3 right-1/3 w-6 h-6 rounded-full bg-amber-400/15 animate-float3" />

        <div className="relative z-10 w-full max-w-4xl mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-12">
          <div className="relative group w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-orange-400 to-pink-400 opacity-70 blur-md group-hover:opacity-90 transition-all duration-300"></div>
            <div className="relative w-full h-full rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-xl">
              <img 
                src="https://i.postimg.cc/yYMbSSHC/Whats-App-Image-2025-06-28-at-02-12-52-d2881d12.jpg" 
                alt="Sanjana Bishnoi"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            <div className="absolute -bottom-4 -left-4 w-8 h-8 rounded-full bg-orange-400/30 dark:bg-orange-600/30"></div>
            <div className="absolute -top-4 -right-4 w-6 h-6 rounded-full bg-pink-400/30 dark:bg-pink-600/30"></div>
          </div>

          <div className="text-center md:text-left max-w-xl">
            <div className="mb-1 inline-block px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 text-xs font-medium tracking-wider">
              CREATIVE DESIGNER
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              Sanjana <span className="text-orange-600">Bishnoi</span>
            </h1>

            <div className="text-xl sm:text-2xl md:text-3xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
              <FlipWords
                words={["UI/UX Designer", "App Designer", "Logo Designer", ]}
                className="inline-block"
              />
            </div>

            <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg mb-6 leading-relaxed">
              I transform ideas into visually stunning and functional designs that create meaningful connections between brands and their audiences.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <a
                href="#portfolio"
                className="px-6 py-3 rounded-full text-white bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 transition-all font-medium shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95"
              >
                View My Work
              </a>
              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-orange-600 dark:text-orange-400 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-[#121212] dark:to-[#1e1e1e] p-6  border  dark:border-gray-800 border-orange-200  hover:bg-orange-50 dark:hover:bg-gray-700 transition-all font-medium shadow-sm hover:shadow-md"
              >
                Let's Collaborate
              </a>
            </div>
          </div>
        </div>

        <div className="absolute md:bottom-8 bottom-2   left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-orange-500 flex justify-center p-1">
            <div className="w-1 h-2 bg-orange-500 rounded-full animate-scroll"></div>
          </div>
        </div>
      </section>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* Achievements Section ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <section
  id="achievements"
  className="snap-start scroll-mt-28 min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-10 py-16 bg-gradient-to-br from-[#fef6f1] via-[#fff] to-[#fdf2e9] dark:from-[#1a1a1a] dark:via-[#121212] dark:to-[#0d0d0d] relative overflow-hidden"
>

  <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-500/10 blur-[120px] rounded-full top-[10%] left-[-20%] z-0" />
  <div className="absolute w-[250px] h-[250px] sm:w-[400px] sm:h-[400px] bg-purple-500/10 blur-[100px] rounded-full bottom-[10%] right-[-10%] z-0" />
        
         <div className="absolute top-1/4 right-1/4 w-8 h-8 rounded-full bg-orange-400/20 animate-float1" />
  <div className="absolute bottom-1/3 left-1/4 w-12 h-12 rounded-lg bg-pink-400/15 rotate-45 animate-float2" />
  <div className="absolute top-1/3 left-1/3 w-6 h-6 rounded-full bg-amber-400/15 animate-float3" />

  <div className="relative z-10 w-full max-w-6xl mx-auto px-4">
    <div className="text-center mb-4">
      <div className="inline-block px-4 py-1 rounded-full bg-orange-100 dark:bg-orange-900/50 text-orange-600 dark:text-orange-300 text-xs font-medium tracking-wider mb-4">
        PROFESSIONAL JOURNEY
      </div>
      
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-3">
        My <span className="text-orange-600">Achievements</span>
      </h2>
      
      <p className="text-neutral-600 dark:text-neutral-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
        Celebrating milestones that mark my growth as a designer - each award, feature, and recognition fuels my passion for creating exceptional work.
      </p>
    </div>
          <div className="w-full flex flex-wrap justify-center gap-6">
            <Achievements />
          </div>
        </div>
      </section>
{/* --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    </main>
  );
}