import {
  ArrowUpRight,
  Mail,
  ChevronRight,
  Download,
  Github,
  Linkedin,
} from "lucide-react";
import Image from "next/image";
import ScrollProgress from "@/components/ScrollProgress";
import FeaturedProjects from "@/components/FeaturedProjects";
import VideoCarousel from "@/components/VideoCarousel";
import BentoFocus from "@/components/BentoFocus";
import ConsoleGreeting from "@/components/ConsoleGreeting";
import SkillsCloud from "@/components/SkillsCloud";
import { HERO_DATA, PROOF_BAR_DATA } from "@/lib/data";

export const revalidate = 3600;

export default async function Home() {
  return (
    <>
      <ConsoleGreeting />
      <ScrollProgress />
      <div className="relative z-0">
        {/* Ambient Tech Grid & Background Glow */}
        <div className="pointer-events-none absolute inset-0 -z-20 overflow-hidden [mask-image:radial-gradient(ellipse_at_center_top,black,transparent_70%)]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#888_1px,transparent_1px),linear-gradient(to_bottom,#888_1px,transparent_1px)] bg-[size:32px_32px] opacity-[0.04]" />
        </div>
        <div className="bg-zen-text/5 pointer-events-none absolute -top-20 right-10 -z-10 h-[300px] w-[300px] rounded-full blur-[100px] md:h-[500px] md:w-[500px]" />

        {/* Floating AI Node */}
        <div className="pointer-events-none absolute right-[5%] top-32 -z-10 opacity-30 md:right-20 md:top-40">
          <div className="h-32 w-32 animate-[spin_12s_linear_infinite] xl:h-48 xl:w-48">
            <div className="absolute -left-2 top-1/2 h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_12px_rgba(59,130,246,0.8)]" />
            <div className="absolute -top-2 left-1/2 h-2 w-2 rounded-full bg-purple-500 shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
            <div className="absolute -right-2 top-1/2 h-2 w-2 rounded-full bg-green-500 shadow-[0_0_12px_rgba(34,197,94,0.8)]" />
            <div className="absolute -bottom-2 left-1/2 h-2 w-2 rounded-full bg-orange-500 shadow-[0_0_12px_rgba(249,115,22,0.8)]" />
            <svg
              className="h-full w-full text-zen-surface"
              viewBox="0 0 100 100"
            >
              <polygon
                points="50,0 100,50 50,100 0,50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1"
              />
              <circle
                cx="50"
                cy="50"
                r="30"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                strokeDasharray="4 4"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-24 md:space-y-32">
          {/* Bio Section */}
          <section id="home" className="fade-in scroll-mt-32 space-y-8">
            <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:items-start">
              <div className="flex-1 space-y-2">
                <p className="text-sm font-medium uppercase tracking-wide text-zen-subtext">
                  {HERO_DATA.subtitle}
                </p>
                <h1 className="font-heading text-4xl font-bold leading-tight text-zen-text md:text-5xl lg:text-6xl">
                  {HERO_DATA.title}
                  <br className="hidden md:block" />
                  <span className="text-zen-subtext">
                    {HERO_DATA.titleHighlight}
                  </span>
                </h1>
                <p className="text-xl font-medium text-zen-text md:text-2xl">
                  {HERO_DATA.status}
                </p>
              </div>
              <div className="animate-float flex-shrink-0">
                <div className="group relative h-40 w-40 overflow-hidden rounded-full border-2 border-zen-surface shadow-sm md:h-56 md:w-56">
                  <Image
                    src={HERO_DATA.image}
                    alt="Profile Photo"
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Proof Bar */}
            <div className="grid grid-cols-1 gap-4 border-y border-zen-surface py-6 md:grid-cols-3">
              {PROOF_BAR_DATA.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div
                    className={`mt-2.5 h-1.5 w-1.5 rounded-full ${item.color}`}
                  ></div>
                  <p className="text-sm font-medium leading-relaxed text-zen-subtext">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={`mailto:${HERO_DATA.email}`}
                className="inline-flex items-center gap-2 rounded-lg bg-zen-text px-6 py-3 font-medium text-zen-bg transition-colors hover:bg-zen-accent"
              >
                <Mail size={18} /> Contact Me
              </a>
              <a
                href={HERO_DATA.cv}
                download
                className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
              >
                <Download size={18} /> Download CV
              </a>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
              >
                View Work
              </a>
              <a
                href={HERO_DATA.github}
                target="_blank"
                className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
              >
                <Github size={18} /> GitHub
              </a>
            </div>
          </section>

          {/* Video Showcase Carousel */}
          <section id="showcase" className="space-y-8">
            <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
              <h2 className="font-heading text-2xl font-bold">
                Product Showcase
              </h2>
            </div>
            <VideoCarousel />
          </section>

          {/* Technical Arsenal - Interactive Cloud */}
          <section id="tech" className="space-y-12">
            <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
              <h2 className="font-heading text-2xl font-bold">
                Technical Arsenal
              </h2>
            </div>

            <SkillsCloud />
          </section>

          {/* Work Experience Section */}
          <section id="work" className="space-y-12">
            <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
              <h2 className="font-heading text-2xl font-bold">
                Work Experience
              </h2>
            </div>

            <div className="group/list space-y-8">
              {/* Capricon Entry */}
              <div className="hover:border-zen-subtext/30 group rounded-2xl border border-zen-surface bg-zen-paper p-6 shadow-sm transition-all duration-500 hover:!opacity-100 hover:shadow-md group-hover/list:opacity-40 md:p-8">
                <div className="mb-4 flex flex-col items-start justify-between gap-2 md:flex-row md:items-center">
                  <div>
                    <h3 className="font-heading text-xl font-bold text-zen-text">
                      Software Engineering Intern
                    </h3>
                    <p className="text-sm font-medium text-zen-subtext">
                      Capricon Solution Pvt Ltd • 6 Months
                    </p>
                  </div>
                  <div className="flex gap-2">
                    {["PHP", "Laravel", "MySQL", "Enterprise Arch"].map((t) => (
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
                  {/* Animated Data Pipeline Border */}
                  <div className="relative pl-6">
                    <div className="bg-zen-surface/30 absolute bottom-0 left-0 top-0 w-[2px] overflow-hidden rounded-full">
                      <div className="absolute right-0 top-0 h-1/2 w-full animate-pulse bg-gradient-to-b from-transparent via-blue-500 to-transparent blur-[1px]"></div>
                      <div className="absolute top-1/4 h-1/3 w-full animate-pulse bg-gradient-to-b from-transparent via-purple-500 to-transparent blur-[1px] [animation-delay:1s]"></div>
                    </div>
                    <p className="text-base leading-relaxed text-zen-text md:text-lg">
                      Developed and maintained enterprise-level solutions,
                      specifically focusing on a robust Point of Sale (POS)
                      system. Handled backend logic for inventory management,
                      sales tracking, and reporting modules to support business
                      operations.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 gap-4 pt-2 md:grid-cols-2">
                    <div className="border-zen-surface/50 bg-zen-paper/50 rounded-lg border p-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zen-subtext">
                        Business Logic
                      </p>
                      <p className="text-zen-text/90 text-sm font-medium text-zen-text">
                        Translated complex business requirements into clean,
                        maintainable code within the MVC architecture.
                      </p>
                    </div>
                    <div className="border-zen-surface/50 bg-zen-paper/50 rounded-lg border p-3">
                      <p className="mb-1 text-xs font-bold uppercase tracking-wider text-zen-subtext">
                        Database Design
                      </p>
                      <p className="text-zen-text/90 text-sm font-medium text-zen-text">
                        Managed relational databases (MySQL) for
                        high-transaction environments (sales/inventory data).
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Projects Section */}
          <section id="projects" className="space-y-12">
            <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
              <h2 className="font-heading text-2xl font-bold">
                Featured Projects
              </h2>
              <a
                href="/projects"
                className="zen-underline group flex items-center gap-1 text-sm font-medium text-zen-subtext transition-colors hover:text-zen-text"
              >
                View all projects
                <ArrowUpRight
                  size={14}
                  className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </div>

            <div className="space-y-16">
              <FeaturedProjects />

              {/* Manually Curated "More from GitHub" Section */}
              <div className="space-y-8">
                <h3 className="border-b border-zen-surface pb-2 font-heading text-lg font-bold text-zen-subtext">
                  Engineering Journal & Open Source
                </h3>
                <div className="space-y-2">
                  {/* Pinned Repo 0 */}
                  <a
                    href="https://github.com/Diluksha-Upeka/learning-journal"
                    target="_blank"
                    className="border-zen-surface/50 hover:bg-zen-paper/30 group relative -mx-4 flex flex-col justify-between overflow-hidden rounded-lg border-b px-4 py-4 transition-all duration-300 hover:shadow-[inset_3px_0_0_0_rgba(74,222,128,0.8)] md:flex-row md:items-center"
                  >
                    {/* Hover Trace Effect */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-48 translate-x-full bg-gradient-to-l from-green-500/10 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <h4 className="flex items-center gap-2 font-bold text-zen-text transition-colors group-hover:text-zen-accent">
                        Engineering Learning Journal{" "}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </h4>
                      <p className="mt-1 text-sm text-zen-subtext">
                        A comprehensive log of my engineering journey, technical
                        deep dives, and continuous learning.
                      </p>
                    </div>
                    <span className="mt-2 rounded bg-zen-paper px-2 py-1 font-mono text-xs text-zen-subtext md:mt-0">
                      Markdown / Docs
                    </span>
                  </a>

                  {/* Pinned Repo 1 */}
                  <a
                    href="https://github.com/Diluksha-Upeka/AI-Journal.git"
                    target="_blank"
                    className="border-zen-surface/50 hover:bg-zen-paper/30 group relative -mx-4 flex flex-col justify-between overflow-hidden rounded-lg border-b px-4 py-4 transition-all duration-300 hover:shadow-[inset_3px_0_0_0_rgba(59,130,246,0.8)] md:flex-row md:items-center"
                  >
                    {/* Hover Trace Effect */}
                    <div className="pointer-events-none absolute right-0 top-0 h-full w-48 translate-x-full bg-gradient-to-l from-blue-500/10 to-transparent opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100" />

                    <div className="relative z-10">
                      <h4 className="flex items-center gap-2 font-bold text-zen-text transition-colors group-hover:text-zen-accent">
                        AI Journal (30 Days of AI){" "}
                        <ArrowUpRight
                          size={14}
                          className="opacity-0 transition-opacity group-hover:opacity-100"
                        />
                      </h4>
                      <p className="mt-1 text-sm text-zen-subtext">
                        Building AI systems from scratch daily: LLM, RAG,
                        Agents, Vision and Analysis.
                      </p>
                    </div>
                    <span className="mt-2 rounded bg-zen-paper px-2 py-1 font-mono text-xs text-zen-subtext md:mt-0">
                      Python / Jupyter
                    </span>
                  </a>
                </div>
              </div>

              {/* Current Focus (Bento Style) */}
              <BentoFocus />

              {/* Contact / CTA Section */}
              <section className="border-t border-zen-surface py-12">
                <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                  <div className="space-y-2 text-center md:text-left">
                    <h3 className="font-heading text-2xl font-bold text-zen-text">
                      Open to Conversations
                    </h3>
                    <p className="text-zen-subtext">
                      Always open to discussing AI systems, backend scaling, or
                      new opportunities.
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/upeka-diluksha"
                    target="_blank"
                    className="group flex items-center gap-2 rounded-lg bg-zen-text px-8 py-4 font-bold text-zen-bg shadow-lg transition-all hover:-translate-y-1 hover:bg-zen-accent hover:shadow-xl"
                  >
                    <Linkedin size={18} /> Connect on LinkedIn
                  </a>
                </div>
              </section>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
