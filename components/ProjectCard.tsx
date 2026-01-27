"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Star, GitFork } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

interface ProjectCardProps {
  project: GitHubRepo;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ scale: 1.02, y: -5 }}
      className="glass glass-border rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 flex flex-col h-full"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-4">
        <h3 className="text-xl font-bold text-zen-900 dark:text-zen-50 flex-1">
          {project.name.replace(/-/g, " ")}
        </h3>
        <div className="flex gap-2">
          <a
            href={project.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg hover:bg-zen-100 dark:hover:bg-zen-800 transition-colors"
            aria-label="View on GitHub"
          >
            <Github size={20} />
          </a>
          {project.homepage && (
            <a
              href={project.homepage}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg hover:bg-zen-100 dark:hover:bg-zen-800 transition-colors"
              aria-label="View live demo"
            >
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      {/* Description */}
      <p className="text-zen-600 dark:text-zen-400 mb-4 flex-1">
        {project.description || "No description available"}
      </p>

      {/* Topics/Tags */}
      {project.topics && project.topics.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {project.topics.slice(0, 4).map((topic) => (
            <span
              key={topic}
              className="px-3 py-1 text-xs font-medium bg-zen-100 dark:bg-zen-800 text-zen-700 dark:text-zen-300 rounded-full"
            >
              {topic}
            </span>
          ))}
        </div>
      )}

      {/* Footer Stats */}
      <div className="flex items-center gap-4 text-sm text-zen-600 dark:text-zen-400 pt-4 border-t border-zen-200 dark:border-zen-700">
        {project.language && (
          <span className="flex items-center gap-1">
            <span
              className="w-3 h-3 rounded-full"
              style={{
                backgroundColor: getLanguageColor(project.language),
              }}
            />
            {project.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={16} />
          {project.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={16} />
          {project.forks_count}
        </span>
      </div>
    </motion.div>
  );
}

// Helper function to get language colors
function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: "#f1e05a",
    TypeScript: "#3178c6",
    Python: "#3572A5",
    Java: "#b07219",
    HTML: "#e34c26",
    CSS: "#563d7c",
    React: "#61dafb",
    Vue: "#42b883",
    Go: "#00ADD8",
    Rust: "#dea584",
  };
  return colors[language] || "#8b949e";
}
