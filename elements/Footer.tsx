import {
  IconBrandLinkedin,
  IconBrandFigma,
  IconBrandDribbble,
  IconBrandBehance,
  IconPhone,
  IconMail,
  IconCopyright
} from "@tabler/icons-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0f0f0f] dark:via-[#181818] dark:to-[#1f1f1f] px-6 sm:px-8 py-12 border-t border-neutral-200/50 dark:border-neutral-800/50 overflow-hidden">

{/* Decorative elements ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-orange-400 blur-[80px]"></div>
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 rounded-full bg-pink-400 blur-[100px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8">
{/*------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}

{/* Brand section ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="md:col-span-4 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">
            Sanjana <span className="text-orange-600">Bishnoi</span>
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
            Crafting intuitive digital experiences that blend aesthetics with functionality to create meaningful brand connections.
          </p>
          
          <div className="flex items-center gap-4 pt-2">
            <a
              href="https://www.linkedin.com/in/sanjana-bishnoi-72847a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              aria-label="LinkedIn"
            >
              <IconBrandLinkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.behance.net/sanjanabishnoi26"
              target="_blank"
              rel="noopener noreferrer"
              className="text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors"
              aria-label="Behance"
            >
              <IconBrandBehance className="w-5 h-5" />
            </a>
            
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

{/* Contact section --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="md:col-span-4 space-y-4 text-left">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Get in Touch
          </h3>
          <div className="space-y-3">
            <a 
              href="mailto:sanjana22154070@akgec.ac.in" 
              className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
            >
              <IconMail className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <span>sanjana22154070@akgec.ac.in</span>
            </a>
            <a 
              href="tel:+919145989909" 
              className="flex items-start gap-3 text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors group"
            >
              <IconPhone className="w-4 h-4 mt-0.5 flex-shrink-0 text-orange-500 dark:text-orange-400 group-hover:scale-110 transition-transform" />
              <span>+91 91459 89909</span>
            </a>
          </div>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}

{/* Navigation ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
        <div className="md:col-span-4 space-y-4 text-left">
          <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider">
            Quick Links
          </h3>
          <nav className="grid grid-cols-2 gap-3">
            <Link href="/" className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 group">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span>Home</span>
            </Link>
            
            <Link
              href="/about" 
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span>About</span>
            </Link>
            <Link 
              href="/work" 
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span>Work</span>
            </Link>
            <Link
              href="/resume" 
              className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-orange-600 dark:hover:text-orange-400 transition-colors flex items-center gap-2 group"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
              <span>Resume</span>
            </Link>
          </nav>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        
{/* Copyright ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
        <div className="md:col-span-12 pt-8 border-t border-neutral-200/50 dark:border-neutral-800/50 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-neutral-500 dark:text-neutral-500 flex items-center gap-1">
            <IconCopyright className="w-3 h-3" />
            {new Date().getFullYear()} Sanjana Bishnoi. All rights reserved.
          </p>
          <p className="text-xs text-neutral-500 dark:text-neutral-500">
            Crafted with passion by Indian ❤️
          </p>
        </div>
{/* ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ */}
      </div>
    </footer>
  );
}
