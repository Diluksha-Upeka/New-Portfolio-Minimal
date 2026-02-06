"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";

interface Project {
  name: string;
  description: string;
  learning: string;
  tech: string[];
  link: string;
  image?: string;
}

const projects: Project[] = [
  {
    name: "End-to-End MLOps Pipeline & Deployment",
    description:
      "Architected a full-stack Machine Learning application with a CI/CD pipeline, Docker containerization, and production deployment on Render Cloud, moving beyond static notebooks.",
    learning:
      "Implemented Containerization (Docker), Automation (GitHub Actions), and Deployment for a production-ready ML workflow.",
    tech: ["Python", "Flask", "Docker", "Render", "GitHub Actions"],
    link: "https://salary-prediction-mlops.onrender.com/",
    image: "/projects/mlops.png",
  },
  {
    name: "Resume Optimizer",
    description:
      "A Streamlit dashboard that parses resumes into JSON and gives an ATS score using Llama 3.",
    learning: "Structured Output (JSON) and system prompts.",
    tech: ["Python", "Streamlit", "LangChain", "Llama 3"],
    link: "https://ai-resume-diluksha.streamlit.app/",
    image: "/projects/resume.png",
  },
  {
    name: "EV Charging Station Management Platform",
    description:
      "Built a full-stack system enabling real-time charger availability, booking, and route-aware station selection. Implemented live updates using WebSockets and designed the backend.",
    learning:
      "Designed real-time systems and managed state consistency across clients.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    link: "https://electric-vehicle-booking-system.vercel.app/",
    image: "/projects/ev.png",
  },
  {
    name: "LiveTalk – Secure Real-Time Communication",
    description:
      "Designed a multi-user chat system with message flows, and communication using Socket.io.",
    learning:
      "Explored real-time scalability, message synchronization, and user presence management.",
    tech: ["React", "Socket.io"],
    link: "https://live-talk.onrender.com/",
    image: "/projects/chat.png",
  },
  {
    name: "ContextIQ: RAG Document Assistant",
    description:
      "Built a production-ready Retrieval-Augmented Generation (RAG) application enabling semantic search and Q&A over PDF documents. Integrated Google Gemini for high-dimensional embeddings and generation, with Pinecone managing vector storage.",
    learning:
      "Implemented modern RAG architecture using LangChain, mastered handling vector embeddings (3072-dim), and solved production integration challenges like dynamic dimension resizing and namespace management.",
    tech: ["Python", "Streamlit", "Google Gemini", "Pinecone", "LangChain"],
    link: "https://github.com/Diluksha-Upeka/contextiq-rag",
    image: "/projects/contextiq.png",
  },
];

export default function FeaturedProjects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project) => (
          <motion.div
            layoutId={`card-${project.name}`}
            key={project.name}
            onClick={() => setSelectedProject(project)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-zen-surface bg-white p-6 shadow-sm transition-all duration-300 hover:border-zen-subtext/30 hover:shadow-md md:p-8"
          >
            <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
              <motion.h3
                layoutId={`title-${project.name}`}
                className="flex items-center gap-2 font-heading text-xl font-bold text-zen-text transition-colors group-hover:text-zen-accent md:text-2xl"
              >
                {project.name}
              </motion.h3>
              <div className="flex flex-wrap items-center gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded border border-zen-surface bg-zen-paper px-2.5 py-1 text-xs font-medium text-zen-subtext"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <motion.p
                layoutId={`desc-${project.name}`}
                className="border-l-2 border-zen-surface pl-4 text-base leading-relaxed text-zen-text md:text-lg"
              >
                {project.description}
              </motion.p>
              <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <p className="flex items-center gap-2 text-sm font-medium text-zen-subtext">
                  <span className="h-1 w-1 rounded-full bg-zen-accent"></span>
                  <span className="italic">
                    Key learning: {project.learning}
                  </span>
                </p>
                <button className="inline-flex shrink-0 items-center border-b border-transparent pb-0.5 text-sm font-bold text-zen-subtext transition-colors group-hover:border-zen-accent group-hover:text-zen-accent">
                  View Details <ArrowUpRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-stone-100/60 backdrop-blur-md"
            />
            <motion.div
              layoutId={`card-${selectedProject.name}`}
              className="relative z-10 flex max-h-[85vh] w-full max-w-2xl flex-col rounded-2xl border border-white/50 bg-[#FAFAF9] shadow-2xl shadow-stone-200"
            >
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedProject(null);
                }}
                className="absolute right-4 top-4 z-20 rounded-full bg-white/50 p-1.5 text-zen-text backdrop-blur-md transition-colors duration-200 hover:scale-110 hover:bg-white"
              >
                <X size={20} />
              </button>

              {/* Image Section - Top */}
              <div className="relative flex h-48 shrink-0 items-center justify-center rounded-t-2xl border-b border-zen-surface/50 bg-stone-100 p-4 sm:h-56">
                {selectedProject.image ? (
                  <Image
                    src={selectedProject.image}
                    alt={selectedProject.name}
                    fill
                    className="object-contain p-2"
                  />
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
                        className="rounded-full border border-zen-subtext/20 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zen-subtext"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <div className="space-y-4 text-sm text-zen-text/90">
                  <motion.p
                    layoutId={`desc-${selectedProject.name}`}
                    className="leading-relaxed"
                  >
                    {selectedProject.description}
                  </motion.p>

                  <div className="rounded-lg border border-zen-surface/50 bg-zen-paper/50 p-3">
                    <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zen-subtext">
                      Key Insight
                    </p>
                    <p className="font-medium italic text-zen-text/80">
                      &quot;{selectedProject.learning}&quot;
                    </p>
                  </div>

                  <div className="pt-2">
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      className="flex w-full items-center justify-center gap-2 rounded-lg bg-zen-text py-3 text-sm font-bold text-zen-bg transition-all hover:bg-zen-accent"
                    >
                      Visit Live Site <ArrowUpRight size={16} />
                    </a>
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
