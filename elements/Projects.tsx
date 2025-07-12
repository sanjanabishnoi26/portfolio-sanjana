"use client";

import { Tabs } from "../components/ui/tabs";
import { motion } from "framer-motion";
import { IconLayoutGrid, IconBrush, IconRocket, IconCode, IconSparkles } from "@tabler/icons-react";
import Link from "next/link";

export function Project() {
  const tabs = [
  {
    title: "Casestudy",
    value: "case-study",
    icon: <IconLayoutGrid className="w-5 h-5" />,
    content: (
      <ContentBlock title="BhoomiSetu">
        <ProjectContent 
          title="BhoomiSetu – Connecting Farmers with Buyers" 
          description="A clean, responsive platform enabling Indian farmers to directly connect with urban buyers. Designed to cut out middlemen, build trust, and modernize agri-commerce with a touch of cultural sensitivity."
          category="Web Design"
          image="https://i.postimg.cc/nhk0h7jc/Screenshot-2025-05-29-132749.png"
          href="https://www.behance.net/gallery/230121905/Bhoomisetu"
        />
      </ContentBlock>
    ),
  },
  {
    title: "Prototype",
    value: "prototype",
    icon: <IconBrush className="w-5 h-5" />,
    content: (
      <ContentBlock title="Posite – India Post App Redesign">
        <ProjectContent 
          title="Posite – Modernizing Indian Postal Experience" 
          description="An intuitive app redesign for India Post with real-time tracking, dual-mode access for users and staff, and a sleek interface that brings clarity and speed to everyday postal tasks."
          category="App Design"
          image="https://i.postimg.cc/8z9sWXry/Screenshot-2025-05-29-014740.png"
            href="https://www.figma.com/proto/bnciN1bBlvuOZMJ1GGQpj6/POSTIE?page-id=0%3A1&node-id=1-221&p=f&viewport=173%2C275%2C0.15&t=S7TqlbllLHlFW0tp-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A13"
        />
      </ContentBlock>
    ),
  },
  {
    title: "Freelancing",
    value: "freelance",
    icon: <IconRocket className="w-5 h-5" />,
    content: (
      <ContentBlock title="MidCity – Hotel Website Experience">
        <ProjectContent 
          title="MidCity – Premium Hotel Web Experience" 
          description="A visually rich hotel website concept with smooth animations, seamless room booking, and a modern design built to impress and convert visitors into bookings."
          category="Web Design"
          image="https://i.postimg.cc/xdjYXK6s/Screenshot-2025-05-29-014051.png"
            href="https://hotelsonipalace.com/"
        />
      </ContentBlock>
    ),
  },
];


  return (
    <section className="relative min-h-screen  bg-gradient-to-br from-[#fef6f1] via-[#fff] to-[#fdf2e9] dark:from-[#1a1a1a] dark:via-[#121212] dark:to-[#0d0d0d] py-20 px-4 sm:px-6 md:px-10 overflow-hidden">
      
     
      <div className="absolute w-[300px] h-[300px] bg-orange-400/10 blur-[100px] rounded-full top-10 left-[-10%] z-0" />
      <div className="absolute w-[200px] h-[200px] bg-pink-500/10 blur-[100px] rounded-full bottom-[10%] right-[2%] z-0" />

      <div className="absolute top-[16%] left-[2%] w-20 h-20 rounded-full bg-red-400/20 blur-2xl animate-spin z-0" />
      <div className="absolute top-[40%] right-[5%] w-14 h-14 rounded-[1rem] bg-yellow-500/15 rotate-12 backdrop-blur-sm animate-pulse z-0" />
      <div className="absolute bottom-[10%] left-[10%] w-8 h-8 rounded-full bg-purple-400/15 blur-sm animate-bounce z-0" />
      <div className="absolute top-[20%] left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-orange-300/20 to-pink-300/10 rotate-[25deg] clip-path-polygon  z-0" />

      <div className="max-w-6xl md:mt-16 mx-auto text-center mb-10 relative z-10">
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-medium tracking-wider mb-4">
          DESIGN PORTFOLIO
        </div>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
          Selected <span className="text-orange-600">Projects</span>
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          A curated collection of my best design work - from pixel-perfect interfaces to bold brand identities.
        </p>
      </div>

      <div className="h-[40rem] md:h-[60rem]  [perspective:1000px] flex flex-col max-w-6xl mx-auto w-full items-start justify-start relative z-10">
        <Tabs tabs={tabs} />
      </div>
    </section>
  );
}

const ContentBlock = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full h-full rounded-2xl p-6 md:p-10  bg-gradient-to-br from-orange-50 via-white to-orange-100 dark:from-[#0f0f0f] dark:via-[#181818] dark:to-[#1f1f1f] shadow-lg relative border border-gray-100 dark:border-neutral-800 overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 rotate-45 origin-bottom-left bg-orange-500/5 translate-x-1/2 -translate-y-1/2"></div>
      </div>
      
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-orange-600 dark:text-orange-400">
        {title}
      </h2>
      {children}
    </motion.div>
  );
};

const ProjectContent = ({ 
  title, 
  description, 
  category,
  image,
  href = "#"
}: {
  title: string;
  description: string;
  category: string;
  image: string;
    href?: string;
}) => {
  return (
    <div className="mt-4 relative group">
      <div className="absolute -inset-1  rounded-xl transition-opacity duration-300"></div>
      
      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-4">
          <div className="px-3 py-1 rounded-full text-orange-600 dark:text-orange-300 text-xs font-medium">
            {category}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6">{description}</p>
        
        <div className="overflow-hidden rounded-xl border border-gray-100 dark:border-neutral-800 shadow-md">
          <motion.img
            src={image}
            alt={title}
            width="1000"
            height="1000"
            className="object-cover w-full h-auto max-h-[400px] md:max-h-[600px] transition-transform duration-500 group-hover:scale-[1.02]"
            initial={{ opacity: 0.9 }}
            whileHover={{ opacity: 1 }}
          />
        </div>
        
        <div className="mt-6 flex justify-end">
          <Link href={href} className="flex items-center gap-2 text-sm font-medium text-orange-600 dark:text-orange-400 hover:text-orange-700 dark:hover:text-orange-300 transition-colors">
            View Project
            {/* <IconArrowRight className="w-4 h-4" /> */}
          </Link>
        </div>
      </div>
    </div>
  );
};

