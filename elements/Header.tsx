"use client";
import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
 
  IconExchange,
  IconHome,
  IconTerminal2,
  IconBrandLinkedin,
  IconBrandFigma,
  
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
      href: "#",
    },

    {
      title: "About Me",
      icon: (
        <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "My Work",
      icon: (
        <Briefcase className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    
    {
      title: "Resume",
      icon: (
        <FileText className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },

    {
      title: "Linkedin",
      icon: (
        <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
    {
      title: "Figma",
      icon: (
        <IconBrandFigma className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "#",
    },
  ];
  return (
    <div className="flex items-center justify-center h-[35rem] w-full">
      <FloatingDock
        mobileClassName="translate-y-20" 
        items={links}
      />
    </div>
  );
}
