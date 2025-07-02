"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
 
  IconExchange,
  IconHome,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandFigma,
  IconBrandBehance,
  
} from "@tabler/icons-react";
import { User } from "@deemlol/next-icons";
import { Briefcase } from "@deemlol/next-icons";
import { FileText } from "@deemlol/next-icons";


export function Header() {
  const links = [
    {
      title: "Home",
      icon: (
        <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/",
    },

    {
      title: "About Me",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/about",
    },
    {
      title: "My Work",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "/work",
    },
    
    {
      title: "Resume",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://drive.google.com/file/d/1bOEMu8Qi_r0zEjT_ho4OnCh90N2yRsjj/view?usp=drivesdk",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sanjana-bishnoi-72847a277?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
    },
    {
      title: "Behance",
      icon: (
        <IconBrandBehance className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.behance.net/sanjanabishnoi26",
    },
  ];
  return (
    <div className="flex items-center justify-center  w-full">
      <FloatingDock
        mobileClassName="bottom-4 right-4" 
        items={links}
      />
    </div>
  );
}
