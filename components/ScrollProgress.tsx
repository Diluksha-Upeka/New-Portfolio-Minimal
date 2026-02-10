"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const sections = [
  { id: "home", label: "Start" },
  { id: "tech", label: "Skills" },
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
];

export default function ScrollProgress() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section.id);
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Check initially
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header
        behavior: "smooth",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="pointer-events-none fixed right-2 top-1/2 z-40 flex -translate-y-1/2 flex-col items-end gap-6 md:right-8 lg:right-12"
    >
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          onClick={(e) => scrollToSection(section.id, e)}
          className="group pointer-events-auto flex items-center gap-2 pl-4 md:gap-4 md:pl-8" // Add padding left to increase hit area without visual clutter
        >
          {/* Label (Slide out on hover or active) */}
          <span
            className={`hidden origin-right text-xs font-bold uppercase tracking-widest transition-all duration-300 md:block ${
              activeSection === section.id
                ? "translate-x-0 text-zen-text opacity-100"
                : "translate-x-4 text-zen-subtext opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
            }`}
          >
            {section.label}
          </span>

          {/* Indicator Line/Dot */}
          <div className="relative flex items-center justify-center">
            {/* Active Backdrop (glow effect mostly invisible but adds depth) */}
            <div
              className={`absolute h-3 w-3 rounded-full bg-zen-surface transition-all duration-500 ${activeSection === section.id ? "scale-100 opacity-0" : "scale-0 opacity-0"}`}
            />

            {/* The Line */}
            <div
              className={`rounded-full transition-all duration-500 ease-out ${
                activeSection === section.id
                  ? "h-1.5 w-1.5 bg-zen-text ring-4 ring-white/50" // Active: Dot
                  : "h-1 w-1 bg-zen-surface group-hover:bg-zen-subtext" // Inactive: Small dot
              }`}
            />

            {/* Connecting line segment if we wanted a continuous bar, but for zen we keep unconnected dots */}
          </div>
        </a>
      ))}

      {/* Decorative vertical line connecting them subtly behind */}
      <div className="absolute bottom-2 right-[2px] top-2 -z-10 w-px bg-gradient-to-b from-transparent via-zen-surface to-transparent" />
    </motion.div>
  );
}
