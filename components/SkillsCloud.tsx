"use client";

import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Sparkles,
  Code2,
  Database,
  Server,
  Layout,
  Network,
  Cpu,
  Layers,
  Workflow,
  Terminal,
} from "lucide-react";

// Infused with AI / ML and Modern Web roles
const skills = [
  {
    name: "Python",
    category: "Core Language",
    icon: Code2,
    color: "text-blue-500",
  },
  {
    name: "LangChain",
    category: "LLM Orchestration",
    icon: Network,
    color: "text-green-500",
  },
  {
    name: "PyTorch",
    category: "Deep Learning",
    icon: Brain,
    color: "text-orange-500",
  },
  {
    name: "OpenAI / LLMs",
    category: "AI Models",
    icon: Sparkles,
    color: "text-teal-400",
  },
  {
    name: "RAG Architecture",
    category: "System Design",
    icon: Layers,
    color: "text-indigo-400",
  },
  {
    name: "HuggingFace",
    category: "Transformers",
    icon: Bot,
    color: "text-yellow-400",
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: Code2,
    color: "text-blue-400",
  },
  {
    name: "Next.js & React",
    category: "Frontend Core",
    icon: Layout,
    color: "text-zinc-300",
  },
  {
    name: "Node.js & Express",
    category: "Backend APIs",
    icon: Server,
    color: "text-green-600",
  },
  {
    name: "Vector DBs",
    category: "Data Storage",
    icon: Database,
    color: "text-purple-500",
  },
  {
    name: "Data Analysis",
    category: "Pandas / Scikit",
    icon: Cpu,
    color: "text-red-400",
  },
  {
    name: "MLOps / Git",
    category: "Deployment",
    icon: Workflow,
    color: "text-orange-600",
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.05 },
  },
};

const item = {
  hidden: { opacity: 0, scale: 0.9 },
  show: { opacity: 1, scale: 1 },
};

export default function SkillsCloud() {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
    >
      {skills.map((skill) => {
        const Icon = skill.icon;
        return (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{ y: -5 }}
            className="hover:border-zen-subtext/30 group flex flex-col items-center justify-center gap-3 rounded-2xl border border-zen-surface bg-zen-paper p-5 text-center transition-colors"
          >
            <div
              className={`bg-zen-surface/30 rounded-full p-3 transition-transform duration-300 group-hover:scale-110 ${skill.color}`}
            >
              <Icon size={24} />
            </div>
            <div>
              <h3 className="text-sm font-bold text-zen-text transition-colors group-hover:text-zen-accent">
                {skill.name}
              </h3>
              <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-zen-subtext">
                {skill.category}
              </p>
            </div>
          </motion.div>
        );
      })}
    </motion.div>
  );
}
