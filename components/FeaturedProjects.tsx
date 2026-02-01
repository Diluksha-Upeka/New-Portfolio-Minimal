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
    description: "Architected a full-stack Machine Learning application with a CI/CD pipeline, Docker containerization, and production deployment on Render Cloud, moving beyond static notebooks.",
    learning: "Implemented Containerization (Docker), Automation (GitHub Actions), and Deployment for a production-ready ML workflow.",
    tech: ["Python", "Flask", "Docker", "Render", "GitHub Actions"],
    link: "https://salary-prediction-mlops.onrender.com/",
    image: "/projects/mlops.png"
  },
  {
    name: "Resume Optimizer",
    description: "A Streamlit dashboard that parses resumes into JSON and gives an ATS score using Llama 3.",
    learning: "Structured Output (JSON) and system prompts.",
    tech: ["Python", "Streamlit", "LangChain", "Llama 3"],
    link: "https://ai-resume-diluksha.streamlit.app/",
    image: "/projects/resume.png"
  },
  {
    name: "EV Charging Station Management Platform",
    description: "Built a full-stack system enabling real-time charger availability, booking, and route-aware station selection. Implemented live updates using WebSockets and designed the backend.",
    learning: "Designed real-time systems and managed state consistency across clients.",
    tech: ["React", "Express", "MongoDB", "Node.js"],
    link: "https://electric-vehicle-booking-system.vercel.app/",
    image: "/projects/ev.png"
  },
  {
    name: "LiveTalk – Secure Real-Time Communication",
    description: "Designed a multi-user chat system with message flows, and communication using Socket.io.",
    learning: "Explored real-time scalability, message synchronization, and user presence management.",
    tech: ["React", "Socket.io"],
    link: "https://live-talk.onrender.com/",
    image: "/projects/chat.png"
  }
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
            className="cursor-pointer group p-6 md:p-8 bg-white rounded-2xl border border-zen-surface hover:border-zen-subtext/30 transition-all duration-300 shadow-sm hover:shadow-md relative overflow-hidden"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
              <motion.h3 
                layoutId={`title-${project.name}`}
                className="font-heading text-xl md:text-2xl font-bold text-zen-text group-hover:text-zen-accent transition-colors flex items-center gap-2"
              >
                {project.name}
              </motion.h3>
              <div className="flex gap-2 flex-wrap items-center">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 bg-zen-paper text-zen-subtext text-xs font-medium rounded border border-zen-surface"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <motion.p 
                layoutId={`desc-${project.name}`}
                className="text-zen-text leading-relaxed text-base md:text-lg border-l-2 border-zen-surface pl-4"
              >
                {project.description}
              </motion.p>
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                <p className="text-sm text-zen-subtext font-medium flex items-center gap-2">
                  <span className="w-1 h-1 rounded-full bg-zen-accent"></span>
                  <span className="italic">Key learning: {project.learning}</span>
                </p>
                <button
                  className="shrink-0 inline-flex items-center text-sm font-bold text-zen-subtext group-hover:text-zen-accent transition-colors border-b border-transparent group-hover:border-zen-accent pb-0.5"
                >
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
              className="w-full max-w-2xl bg-[#FAFAF9] rounded-2xl shadow-2xl shadow-stone-200 relative z-10 border border-white/50 flex flex-col max-h-[85vh]"
            >
              <button
                onClick={(e) => {
                   e.stopPropagation();
                   setSelectedProject(null);
                }}
                className="absolute top-4 right-4 p-1.5 bg-white/50 hover:bg-white backdrop-blur-md rounded-full transition-colors z-20 text-zen-text hover:scale-110 duration-200"
              >
                <X size={20} />
              </button>

              {/* Image Section - Top */}
              <div className="relative h-48 sm:h-56 shrink-0 bg-stone-100 flex items-center justify-center p-4 rounded-t-2xl border-b border-zen-surface/50">
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
              <div className="p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
                <motion.div 
                    layoutId={`title-${selectedProject.name}`}
                    className="mb-4"
                >
                    <h3 className="font-heading text-2xl font-bold text-zen-text leading-tight mb-3">
                        {selectedProject.name}
                    </h3>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.tech.map((t) => (
                        <span
                            key={t}
                            className="px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-zen-subtext border border-zen-subtext/20 rounded-full"
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
                    
                    <div className="bg-zen-paper/50 p-3 rounded-lg border border-zen-surface/50">
                         <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext mb-1">Key Insight</p>
                         <p className="italic font-medium text-zen-text/80">"{selectedProject.learning}"</p>
                    </div>

                    <div className="pt-2">
                        <a 
                            href={selectedProject.link} 
                            target="_blank" 
                            className="w-full flex items-center justify-center gap-2 py-3 bg-zen-text text-zen-bg rounded-lg font-bold hover:bg-zen-accent transition-all text-sm"
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
