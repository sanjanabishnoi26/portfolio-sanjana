"use client";
import React from "react";
import { motion } from "framer-motion";
import { IconSchool, IconBook, IconCertificate, IconRibbonHealth } from "@tabler/icons-react";
import {
  IconTool,
  IconLayoutDashboard,
  IconCode,
  IconPuzzle,
} from "@tabler/icons-react";
export function EducationTimeline() {
  const educationData = [
    {
      year: "2022 - Present",
      institution: "Ajay Kumar Garg Engineering College",
      degree: "Bachelor of Technology",
      field: "Computer Science & Engineering - DS",
      board: "AKTU",
      icon: <IconSchool className="w-5 h-5" />,
      highlights: [
        "Specialization in UI/UX Design",
        "Frontend Development Focus",
        "Design Thinking Curriculum"
      ]
    },
    {
      year: "2019 - 2021",
      institution: "R.K Paradise Academy ",
      degree: "Higher Secondary",
      field: "Science with Computer",
      board: "RBSE",
      icon: <IconBook className="w-5 h-5" />,
      highlights: [
        "Drawing and sketching competition winner",
        "Active in all competition ",
        "Topper in Maths "
      ]
    },
    {
      year: "2018 - 2019",
      institution: "Prince Academy , Sikar",
      degree: "Secondary Education",
      field: "General Studies",
      board: "RBSE",
      icon: <IconCertificate className="w-5 h-5" />,
      highlights: [
        "Hosted a program ",
        "Early Interest in Digital Design",
        "Creative Writing Honors"
      ]
    }
];

  return (
    <section className="relative py-20 px-4 sm:px-6 md:px-10 bg-gradient-to-br from-[#fef6f1] via-white to-[#fdf2e9] dark:from-[#0a0a0a] dark:via-[#111111] dark:to-[#1a1a1a] overflow-hidden">
     
      <div className="absolute w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] bg-orange-400/10 blur-[120px] rounded-full top-10 left-[-10%] z-0" />
      <div className="absolute w-[250px] h-[250px] bg-pink-500/15 blur-[110px] rounded-full bottom-[20%] right-[-10%] z-0" />
      <div className="absolute w-[180px] h-[180px] bg-purple-500/10 blur-[90px] rounded-full top-1/3 right-[15%] z-0" />
      <div className="absolute w-[220px] h-[220px] bg-amber-400/10 blur-[80px] rounded-full bottom-1/4 left-[20%] z-0" />
      
      <div className="absolute top-1/4 right-[5%] w-32 h-32 bg-blue-500/5 rounded-full blur-[60px] z-0" />
      <div className="absolute bottom-1/3 left-[10%] w-40 h-40 bg-green-500/5 rounded-lg blur-[70px] rotate-45 z-0" />
      <div className="absolute top-[15%] right-[25%] w-24 h-24 bg-rose-500/5 rounded-lg blur-[50px] rotate-12 z-0" />

      <div className="max-w-6xl mt-1 md:mt-16  mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-300 text-xs font-medium tracking-wider mb-4">
            LEARNING JOURNEY
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Design<span className="text-orange-600"> Evolution </span>
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            The foundation of my design expertise through formal education and creative exploration
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-10 relative">
{/* Timeline line --------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-orange-500/20 to-transparent dark:from-orange-500/10 dark:to-transparent z-0" />
              
              {educationData.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative z-10"
                >
                  <div className="flex gap-6">
                    {/* Timeline dot with year */}
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center shadow-lg">
                        <div className="text-white">
                          {item.icon}
                        </div>
                      </div>
                      <span className="mt-2 text-sm font-medium text-orange-600 dark:text-orange-400">
                        {item.year.split(' ')[0]}
                      </span>
                    </div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}

{/* Education card -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
                    <div className="flex-1 c">
                      <div className="flex flex-wrap items-baseline gap-2 mb-1">
                        <span className="text-xs font-medium text-gray-500 dark:text-gray-400">
                          {item.board}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                        {item.institution}
                      </h3>
                      <div className="flex flex-wrap gap-3 text-sm text-gray-600 dark:text-gray-300 mb-4">
                        <span className="font-medium">{item.degree}</span>
                        <span className="text-gray-400 dark:text-gray-500">•</span>
                        <span>{item.field}</span>
                      </div>
                      
                      <div className="space-y-2">
                        {item.highlights.map((highlight, i) => (
                          <div key={i} className="flex items-start gap-2">
                            <span className="text-orange-500 dark:text-orange-400 mt-0.5">
                              <IconRibbonHealth className="w-4 h-4" />
                            </span>
                            <span className="text-sm text-gray-600 dark:text-gray-400">
                              {highlight}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

{/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------  */}

{/* Skill Side -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
    
           <div className="lg:col-span-2">

  {/* 🔹 Small screens (<sm): Two separate stacked boxes */}
  <div className="flex flex-col gap-6 sm:hidden">

    {/* Box 1: Design Tools + UX Skills */}
    <div className="p-6 bg-white/10 dark:bg-[#1a1a1a]/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-orange-900/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="text-orange-600">Tool</span> Mastery
      </h3>

      <div className="grid grid-cols-1 gap-5 text-sm text-gray-700 dark:text-gray-300 mb-4">
        {/* Design Tools */}
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-orange-600 dark:text-orange-400 mb-1">
            <IconTool className="w-4 h-4" />
            Design Tools
          </div>
          <ul className="space-y-1">
            <li>Figma</li>
            <li>Adobe XD</li>
            <li>Illustrator</li>
            <li>Photoshop</li>
          </ul>
        </div>

        {/* UX Skills */}
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-orange-600 dark:text-orange-400 mb-1">
            <IconLayoutDashboard className="w-4 h-4" />
            UX Skills
          </div>
          <ul className="space-y-1">
            <li>Wireframing</li>
            <li>Prototyping</li>
            <li>User Journey Mapping</li>
            <li>Heuristic Evaluation</li>
          </ul>
        </div>
      </div>
    </div>

    {/* Box 2: UI Skills + Dev Handoff */}
    <div className="p-6 bg-white/10 dark:bg-[#1a1a1a]/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-orange-900/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
        <span className="text-orange-600">UI</span> & Dev Handoff
      </h3>

      <div className="grid grid-cols-1 gap-5 text-sm text-gray-700 dark:text-gray-300 mb-4">
        {/* UI Skills */}
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-orange-600 dark:text-orange-400 mb-1">
            <IconLayoutDashboard className="w-4 h-4" />
            UI Skills
          </div>
          <ul className="space-y-1">
            <li>Typography</li>
            <li>Grids & Layout</li>
            <li>Design Systems</li>
            <li>Color Theory</li>
          </ul>
        </div>

        {/* Dev Handoff */}
        <div>
          <div className="flex items-center gap-2 text-base font-semibold text-orange-600 dark:text-orange-400 mb-1">
            <IconCode className="w-4 h-4" />
            Dev Handoff
          </div>
          <ul className="space-y-1">
            <li>Zeplin</li>
            <li>Figma Dev Mode</li>
            <li>Design Tokens</li>
          </ul>
        </div>
      </div>
    </div>
  </div>

  {/* 🔹 Medium+ screens: Unified box */}
  <div className="hidden sm:block">
    
   <div className="p-6 bg-white/10 dark:bg-[#1a1a1a]/20 backdrop-blur-lg rounded-xl border border-white/20 dark:border-orange-900/40 shadow-[0_8px_30px_rgba(0,0,0,0.12)] relative overflow-hidden">
  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
        <span className="text-orange-600">Designer</span> Skill Toolkit
      </h3>

      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-sm text-gray-700 dark:text-gray-300 mb-4">
        {/* Design Tools */}
        <div className="col-span-1 font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 mb-1">
          <IconTool className="w-4 h-4" />
          Design Tools
        </div>
        <div className="col-span-2 space-y-1">
          <span className="block">Figma</span>
          <span className="block">Adobe XD</span>
          <span className="block">Illustrator</span>
          <span className="block">Photoshop</span>
        </div>

        {/* UX Skills */}
        <div className="col-span-1 font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 mb-1">
          <IconLayoutDashboard className="w-4 h-4" />
          UX Skills
        </div>
        <div className="col-span-2 space-y-1">
          <span className="block">Wireframing</span>
          <span className="block">Prototyping</span>
          <span className="block">User Journey Mapping</span>
          <span className="block">Heuristic Evaluation</span>
        </div>

        {/* UI Skills */}
        <div className="col-span-1 font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 mb-1">
          <IconLayoutDashboard className="w-4 h-4" />
          UI Skills
        </div>
        <div className="col-span-2 space-y-1">
          <span className="block">Typography</span>
          <span className="block">Grids & Layout</span>
          <span className="block">Design Systems</span>
          <span className="block">Color Theory</span>
        </div>

        {/* Dev Handoff */}
        <div className="col-span-1 font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-2 mb-1">
          <IconCode className="w-4 h-4" />
          Dev Handoff
        </div>
        <div className="col-span-2 space-y-1">
          <span className="block">Zeplin</span>
          <span className="block">Figma Dev Mode</span>
          <span className="block">Design Tokens</span>
        </div>
      </div>

      <div className="text-xs text-gray-500 dark:text-gray-400 italic">
        Designed to build confidence from sketching ideas to delivering dev-ready designs.
      </div>

      {/* Decorative Shapes */}
      <div className="absolute w-20 h-20 bg-pink-300/10 border border-pink-400/20 backdrop-blur-sm rotate-45 rounded-lg top-[-10%] right-[-10%] z-0 animate-pulse" />
      <div className="absolute w-12 h-12 bg-orange-300/10 border border-orange-400/20 rounded-full bottom-[-5%] left-[-5%] z-0 animate-bounce" />
      <div className="absolute w-40 h-40 border-2 border-dashed border-purple-500/20 rounded-full bottom-[30%] right-[10%] z-0 animate-spin" />
    </div>
  </div>
</div>
{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */}
      
      </div>
      </div>
    </section>
  );
}