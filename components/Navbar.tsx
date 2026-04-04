"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase, FolderGit2, Mail } from "lucide-react";
import ThemeToggle from "./ThemeToggle";

const navItems = [
  { name: "Tech", href: "/#tech", icon: Code2 },
  { name: "Experience", href: "/#work", icon: Briefcase },
  { name: "Projects", href: "/#projects", icon: FolderGit2 },
  { name: "Contact", href: "mailto:dilukshaupeka@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems
        .map((item) => {
          if (item.href.includes("#")) {
            return item.href.split("#")[1];
          }
          return null;
        })
        .filter(Boolean) as string[];

      let current = "";
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 300 && rect.bottom >= 300) {
            current = section;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed left-0 right-0 top-6 z-50 flex justify-center">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto flex items-center gap-8 rounded-full border border-white/20 px-6 py-3 shadow-lg shadow-stone-900/5 transition-all duration-500 ease-out ${
          scrolled
            ? "glass-panel scale-90 sm:scale-100"
            : "scale-100 border-transparent bg-white/80 backdrop-blur-md dark:bg-stone-900/80"
        }`}
      >
        <div className="mr-4 flex items-center gap-4">
          <Link
            href="/"
            className="font-heading text-xl font-bold tracking-tighter text-zen-text transition-opacity hover:opacity-70"
            onClick={() => setActiveSection("")}
          >
            UD.
          </Link>
          <ThemeToggle />
        </div>

        <div className="flex gap-1 sm:gap-2">
          {navItems.map((item) => {
            const isExternal = item.href.startsWith("mailto:");
            const sectionId = item.href.includes("#")
              ? item.href.split("#")[1]
              : "";
            const isActive = activeSection === sectionId && !isExternal;

            return (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.name}
                className={`group relative rounded-full px-3 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "text-zen-text"
                    : "text-zen-subtext hover:text-zen-text"
                }`}
                onClick={() => setActiveSection(sectionId)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="sm:hidden">
                    <item.icon size={18} strokeWidth={2} />
                  </span>
                  <span className="hidden sm:inline-block">{item.name}</span>
                </span>

                {isActive && (
                  <motion.span
                    layoutId="active-pill"
                    className="absolute inset-0 z-0 rounded-full bg-stone-200/60 dark:bg-stone-700/60"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                {!isActive && (
                  <span className="absolute inset-0 z-0 origin-center scale-0 rounded-full bg-stone-200/50 transition-transform duration-300 ease-out group-hover:scale-100 dark:bg-stone-800/50" />
                )}
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </div>
  );
}
