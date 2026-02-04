"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Code2, Briefcase, FolderGit2, Mail } from "lucide-react";

const navItems = [
  { name: "Tech", href: "/#tech", icon: Code2 },
  { name: "Experience", href: "/#work", icon: Briefcase },
  { name: "Projects", href: "/#projects", icon: FolderGit2 },
  { name: "Contact", href: "mailto:dilukshaupeka@gmail.com", icon: Mail },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed top-6 left-0 right-0 flex justify-center z-50 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`pointer-events-auto px-6 py-3 rounded-full flex items-center gap-8 transition-all duration-500 ease-out border border-white/20 shadow-lg shadow-stone-900/5 ${
          scrolled
            ? "glass-panel scale-90 sm:scale-100"
            : "bg-white/80 dark:bg-stone-900/80 backdrop-blur-md border-transparent scale-100"
        }`}
      >
        <Link href="/" className="font-heading font-bold text-xl mr-4 hover:opacity-70 transition-opacity text-zen-text tracking-tighter">
          UD.
        </Link>
        
        <div className="flex gap-1 sm:gap-2">
           {navItems.map((item) => (
             <Link 
                key={item.href} 
                href={item.href}
                className="relative px-3 py-2 rounded-full text-sm font-medium text-zen-subtext hover:text-zen-text transition-colors group"
             >
                <span className="relative z-10 flex items-center gap-2">
                   <span className="sm:hidden"><item.icon size={18} strokeWidth={2} /></span>
                   <span className="hidden sm:inline-block">{item.name}</span>
                </span>
                
                <span className="absolute inset-0 rounded-full bg-stone-200/50 dark:bg-stone-800/50 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out z-0 origin-center" />
             </Link>
           ))}
        </div>
      </motion.nav>
    </div>
  );
}
