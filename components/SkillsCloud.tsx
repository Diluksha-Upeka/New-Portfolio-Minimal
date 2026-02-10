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
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="text-zen-900 dark:text-zen-50 mb-4 text-4xl font-bold md:text-5xl">
            Skills & Technologies
          </h2>
          <p className="text-zen-600 dark:text-zen-400 mx-auto max-w-2xl text-lg">
            Tools and technologies I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={item}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass glass-border cursor-default rounded-2xl p-6 text-center transition-shadow duration-300 hover:shadow-xl"
            >
              <h3 className="text-zen-900 dark:text-zen-100 mb-1 font-semibold">
                {skill.name}
              </h3>
              <p className="text-zen-500 dark:text-zen-500 text-xs">
                {skill.category}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
