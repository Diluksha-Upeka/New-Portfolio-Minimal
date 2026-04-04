"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Github } from "lucide-react";
import {
  FEATURED_PROJECTS,
  type Project,
  type ProjectCategory,
} from "@/lib/data";

const categoryStyles: Record<
  ProjectCategory,
  {
    label: string;
    chipClass: string;
    stripClass: string;
  }
> = {
  "ai-ml": {
    label: "AI / ML",
    chipClass:
      "border-emerald-500/40 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300",
    stripClass: "bg-emerald-500/60",
  },
  "full-stack": {
    label: "Full-Stack",
    chipClass:
      "border-blue-500/40 bg-blue-500/10 text-blue-700 dark:text-blue-300",
    stripClass: "bg-blue-500/60",
  },
  "real-time": {
    label: "Real-Time",
    chipClass:
      "border-cyan-500/40 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300",
    stripClass: "bg-cyan-500/60",
  },
  "mlops-infra": {
    label: "MLOps / Infra",
    chipClass:
      "border-amber-500/40 bg-amber-500/10 text-amber-700 dark:text-amber-300",
    stripClass: "bg-amber-500/60",
  },
};

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {FEATURED_PROJECTS.map((project) => {
          const style = categoryStyles[project.category];

          return (
            <motion.div
              layoutId={`card-${project.name}`}
              key={project.name}
              onClick={() => setSelectedProject(project)}
              className="hover:border-zen-subtext/30 group relative cursor-pointer overflow-hidden rounded-2xl border border-zen-surface bg-zen-paper p-5 shadow-sm transition-all duration-300 hover:shadow-md md:p-6"
            >
              <span
                className={`absolute inset-y-0 left-0 w-1 ${style.stripClass}`}
                aria-hidden="true"
              />

              <div className="mb-4 flex flex-col items-start justify-between gap-3 md:flex-row md:items-start">
                <div className="space-y-1.5">
                  <motion.h3
                    layoutId={`title-${project.name}`}
                    className="font-heading text-lg font-bold text-zen-text transition-colors group-hover:text-zen-accent md:text-xl"
                  >
                    {project.name}
                  </motion.h3>
                  <span
                    className={`inline-flex rounded-full border px-2.5 py-1 text-[10px] font-semibold uppercase tracking-widest ${style.chipClass}`}
                  >
                    {style.label}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-1.5">
                  {project.tech.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="rounded border border-zen-surface bg-zen-paper px-2.5 py-1 text-[10px] font-medium text-zen-subtext sm:text-xs"
                    >
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="text-zen-subtext/70 rounded border border-transparent px-1 py-1 text-[10px] font-medium sm:text-xs">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>
              </div>

              <motion.p
                layoutId={`desc-${project.name}`}
                className="border-l-2 border-zen-surface pl-4 text-sm leading-relaxed text-zen-text md:text-base"
              >
                {project.description}
              </motion.p>

              <div className="pt-4">
                <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
                  <p className="flex items-center gap-2 text-xs font-medium text-zen-subtext md:text-sm">
                    <span className="h-1 w-1 rounded-full bg-zen-accent"></span>
                    <span className="line-clamp-1 max-w-[200px] italic md:max-w-xs xl:max-w-sm">
                      Key learning: {project.learning}
                    </span>
                  </p>
                  <button className="inline-flex shrink-0 items-center border-b border-transparent pb-0.5 text-xs font-bold text-zen-subtext transition-colors group-hover:border-zen-accent group-hover:text-zen-accent md:text-sm">
                    View Details <ArrowUpRight size={16} className="ml-1" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-stone-100/60 backdrop-blur-md dark:bg-black/60"
            />
            <motion.div
              layoutId={`card-${selectedProject.name}`}
              className="border-zen-surface/50 relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border bg-zen-bg shadow-2xl shadow-stone-200 dark:shadow-black"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="bg-zen-surface/50 absolute right-4 top-4 z-20 rounded-full p-1.5 text-zen-text backdrop-blur-md transition-colors duration-200 hover:scale-110 hover:bg-zen-paper"
              >
                <X size={20} />
              </button>

              {/* Image Section - Top */}
              <div className="border-zen-surface/50 relative flex h-48 shrink-0 items-center justify-center overflow-hidden rounded-t-2xl border-b bg-zen-surface sm:h-56">
                {selectedProject.image ? (
                  <>
                    <Image
                      src={selectedProject.image}
                      alt=""
                      fill
                      className="object-cover opacity-30 blur-md"
                    />
                    <Image
                      src={selectedProject.image}
                      alt={selectedProject.name}
                      fill
                      className="z-10 object-contain p-4 transition-transform duration-500 hover:scale-105"
                    />
                  </>
                ) : (
                  <div className="text-4xl opacity-20">🖼️</div>
                )}
              </div>

              {/* Content Section - Bottom */}
              <div className="custom-scrollbar flex flex-col overflow-y-auto p-6 md:p-8">
                <motion.div
                  layoutId={`title-${selectedProject.name}`}
                  className="mb-4"
                >
                  <h3 className="mb-3 font-heading text-2xl font-bold leading-tight text-zen-text">
                    {selectedProject.name}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((t) => (
                      <span
                        key={t}
                        className="border-zen-subtext/20 rounded-full border px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zen-subtext"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <div className="text-zen-text/90 space-y-4 text-sm">
                  <motion.p
                    layoutId={`desc-${selectedProject.name}`}
                    className="leading-relaxed"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <div className="border-zen-surface/50 bg-zen-paper/50 rounded-lg border p-3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zen-subtext">
                      Key Insight
                    </p>
                    <p className="text-zen-text/80 font-medium italic">
                      &quot;{selectedProject.learning}&quot;
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex flex-col gap-3 sm:flex-row">
                      {selectedProject.liveUrl && (
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-zen-text py-3 text-sm font-bold text-zen-bg transition-all hover:bg-zen-accent"
                        >
                          Visit Live Site <ArrowUpRight size={16} />
                        </a>
                      )}
                      {selectedProject.githubUrl && (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex flex-1 items-center justify-center gap-2 rounded-lg border border-zen-surface bg-zen-paper py-3 text-sm font-bold text-zen-text transition-all hover:bg-zen-surface hover:text-zen-accent"
                        >
                          View Source <Github size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
