"use client";

import { motion } from "framer-motion";
import { Code, Sparkles, Heart, Zap } from "lucide-react";

const values = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable, scalable, and elegant solutions",
  },
  {
    icon: Sparkles,
    title: "Minimalist Design",
    description: "Less is more - focus on what truly matters",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description: "Creating experiences that users love and understand",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Fast, efficient, and optimized applications",
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen px-4 pb-16 pt-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h1 className="text-zen-900 dark:text-zen-50 mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">
            About Me
          </h1>
          <p className="text-zen-600 dark:text-zen-400 text-lg md:text-xl">
            Developer • Designer • Minimalist
          </p>
        </motion.div>

        {/* Bio Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="glass glass-border mb-16 rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-zen-900 dark:text-zen-50 mb-6 text-2xl font-bold md:text-3xl">
            Hi, I&apos;m [Your Name] 👋
          </h2>
          <div className="text-zen-700 dark:text-zen-300 space-y-4 text-lg leading-relaxed">
            <p>
              I&apos;m a full-stack developer with a passion for creating
              beautiful, functional, and user-friendly web applications. My
              approach combines minimalist design principles with modern
              development practices.
            </p>
            <p>
              With expertise in React, Next.js, and TypeScript, I build scalable
              applications that prioritize performance and user experience. I
              believe in the power of clean code and zen-like simplicity in
              design.
            </p>
            <p>
              When I&apos;m not coding, you&apos;ll find me exploring new
              technologies, contributing to open source, or seeking inspiration
              in minimalist design and architecture.
            </p>
          </div>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-zen-900 dark:text-zen-50 mb-8 text-center text-2xl font-bold md:text-3xl">
            What I Value
          </h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.03, y: -5 }}
                  className="glass glass-border rounded-2xl p-6 transition-all duration-300 hover:shadow-xl"
                >
                  <Icon className="text-zen-700 dark:text-zen-300 mb-4 h-10 w-10" />
                  <h3 className="text-zen-900 dark:text-zen-50 mb-2 text-xl font-bold">
                    {value.title}
                  </h3>
                  <p className="text-zen-600 dark:text-zen-400">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Experience/Education - Optional Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass glass-border rounded-3xl p-8 md:p-12"
        >
          <h2 className="text-zen-900 dark:text-zen-50 mb-8 text-2xl font-bold md:text-3xl">
            Journey
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-zen-900 dark:text-zen-50 mb-2 text-xl font-bold">
                Current Focus
              </h3>
              <p className="text-zen-600 dark:text-zen-400">
                Building modern web applications with Next.js, exploring AI
                integration, and contributing to open source projects.
              </p>
            </div>
            <div>
              <h3 className="text-zen-900 dark:text-zen-50 mb-2 text-xl font-bold">
                Learning
              </h3>
              <p className="text-zen-600 dark:text-zen-400">
                Always expanding my knowledge in web performance optimization,
                design systems, and emerging web technologies.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
