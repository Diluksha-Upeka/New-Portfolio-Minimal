"use client";

import { motion } from "framer-motion";

const skills = [
  { name: "React", category: "Frontend" },
  { name: "Next.js", category: "Framework" },
  { name: "TypeScript", category: "Language" },
  { name: "Tailwind CSS", category: "Styling" },
  { name: "Node.js", category: "Backend" },
  { name: "PostgreSQL", category: "Database" },
  { name: "MongoDB", category: "Database" },
  { name: "Git", category: "Tools" },
  { name: "Framer Motion", category: "Animation" },
  { name: "Prisma", category: "ORM" },
  { name: "Express", category: "Backend" },
  { name: "REST API", category: "Architecture" },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.8 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsCloud() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-zen-900 dark:text-zen-50">
            Skills & Technologies
          </h2>
          <p className="text-lg text-zen-600 dark:text-zen-400 max-w-2xl mx-auto">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-border rounded-2xl p-6 text-center hover:shadow-xl transition-shadow duration-300 cursor-default"
            >
              <h3 className="font-semibold text-zen-900 dark:text-zen-100 mb-1">
                {skill.name}
              </h3>
              <p className="text-xs text-zen-500 dark:text-zen-500">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
