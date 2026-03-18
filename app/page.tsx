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

export const revalidate = 3600;

export default async function Home() {
  return (
    <>
      <ScrollProgress />
      <div className="relative space-y-24 md:space-y-32">
        {/* Bio Section */}
        <section id="home" className="fade-in scroll-mt-32 space-y-8">
          <div className="flex flex-col-reverse items-center justify-between gap-8 md:flex-row md:items-start">
            <div className="flex-1 space-y-2">
              <p className="text-sm font-medium uppercase tracking-wide text-zen-subtext">
                Final-Year Computer Engineering Undergraduate, University of
                Ruhuna.
              </p>
              <h1 className="font-heading text-4xl font-bold leading-tight text-zen-text md:text-5xl lg:text-6xl">
                Building production-ready AI systems{" "}
                <br className="hidden md:block" />
                <span className="text-zen-subtext">
                  from models to scalable software.
                </span>
              </h1>
              <p className="text-xl font-medium text-zen-text md:text-2xl">
                Software Engineer • AI/ML • Agentic AI • RAG
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="group relative h-40 w-40 overflow-hidden rounded-full border-2 border-zen-surface shadow-sm md:h-56 md:w-56">
                <Image
                  src="/profile.png"
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
            <div className="flex items-start gap-3">
              <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-green-500"></div>
              <p className="text-sm font-medium leading-relaxed text-zen-subtext">
                AI & ML projects deployed end-to-end (training → API → UI)
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-blue-500"></div>
              <p className="text-sm font-medium leading-relaxed text-zen-subtext">
                Experience with real-time systems, pipelines & model persistence
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="mt-2.5 h-1.5 w-1.5 rounded-full bg-purple-500"></div>
              <p className="text-sm font-medium leading-relaxed text-zen-subtext">
                Research-focused: Blockchain + GNNs for vehicular networks
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-4">
            <a
              href="mailto:dilukshaupeka@gmail.com"
              className="inline-flex items-center gap-2 rounded-lg bg-zen-text px-6 py-3 font-medium text-zen-bg transition-colors hover:bg-zen-accent"
            >
              <Mail size={18} /> Contact Me
            </a>
            <a
              href="/cv.pdf"
              download
              className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
            >
              <Download size={18} /> Download CV
            </a>
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
            >
              View Work
            </a>
            <a
              href="https://github.com/Diluksha-Upeka"
              target="_blank"
              className="inline-flex items-center gap-2 rounded-lg border border-zen-surface px-6 py-3 font-medium text-zen-text transition-colors hover:bg-zen-paper"
            >
              <Github size={18} /> GitHub
            </a>
          </div>
        </section>

        {/* Technical Arsenal - Grid View */}
        <section id="tech" className="space-y-12">
          <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
            <h2 className="font-heading text-2xl font-bold">
              Technical Arsenal
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-zen-subtext">
                🧠 AI / ML Systems
              </h4>
              <ul className="space-y-3 text-sm font-medium text-zen-text">
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Model training, evaluation & persistence</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Pipelines (scikit-learn, custom preprocessing)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Computer Vision (OpenCV, real-time inference)</span>
                </li>
                <li className="flex flex-wrap gap-2 pt-2 opacity-75">
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    TensorFlow
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    PyTorch
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Python
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-zen-subtext">
                🌐 Software Engineering
              </h4>
              <ul className="space-y-3 text-sm font-medium text-zen-text">
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>REST & real-time APIs (Node.js, Socket.io)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Frontend systems (React, Next.js, React Native)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Authentication, state management, scalability</span>
                </li>
                <li className="flex flex-wrap gap-2 pt-2 opacity-75">
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    TypeScript
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Node.js
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Next.js
                  </span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="flex items-center gap-2 font-heading text-sm font-bold uppercase tracking-wider text-zen-subtext">
                ☁️ Dev & Ops
              </h4>
              <ul className="space-y-3 text-sm font-medium text-zen-text">
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Dockerized services & containers</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>AWS deployment basics</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-zen-subtext/60 mt-1">•</span>
                  <span>Git-based collaboration & CI mindset</span>
                </li>
                <li className="flex flex-wrap gap-2 pt-2 opacity-75">
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Docker
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Git
                  </span>
                  <span className="rounded border border-zen-surface bg-zen-paper px-2 py-0.5 text-xs">
                    Linux
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Work Experience Section */}
        <section id="work" className="space-y-12">
          <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
            <h2 className="font-heading text-2xl font-bold">Work Experience</h2>
          </div>

          <div className="space-y-8">
            {/* Capricon Entry */}
            <div className="hover:border-zen-subtext/30 group rounded-2xl border border-zen-surface bg-zen-paper p-6 shadow-sm transition-all duration-300 hover:shadow-md md:p-8">
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
                <p className="border-l-2 border-zen-surface pl-4 text-base leading-relaxed text-zen-text md:text-lg">
                  Developed and maintained enterprise-level solutions,
                  specifically focusing on a robust Point of Sale (POS) system.
                  Handled backend logic for inventory management, sales
                  tracking, and reporting modules to support business
                  operations.
                </p>

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
                      Managed relational databases (MySQL) for high-transaction
                      environments (sales/inventory data).
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
            <span className="hidden text-xs font-medium uppercase tracking-widest text-zen-subtext sm:block">
              See all
            </span>
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
                  className="border-zen-surface/50 hover:bg-zen-paper/30 group -mx-4 flex flex-col justify-between rounded-lg border-b px-4 py-4 transition-colors md:flex-row md:items-center"
                >
                  <div>
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
                  className="border-zen-surface/50 hover:bg-zen-paper/30 group -mx-4 flex flex-col justify-between rounded-lg border-b px-4 py-4 transition-colors md:flex-row md:items-center"
                >
                  <div>
                    <h4 className="flex items-center gap-2 font-bold text-zen-text transition-colors group-hover:text-zen-accent">
                      AI Journal (30 Days of AI){" "}
                      <ArrowUpRight
                        size={14}
                        className="opacity-0 transition-opacity group-hover:opacity-100"
                      />
                    </h4>
                    <p className="mt-1 text-sm text-zen-subtext">
                      Building AI systems from scratch daily: LLM, RAG, Agents,
                      Vision and Analysis.
                    </p>
                  </div>
                  <span className="mt-2 rounded bg-zen-paper px-2 py-1 font-mono text-xs text-zen-subtext md:mt-0">
                    Python / Jupyter
                  </span>
                </a>
              </div>
            </div>

            {/* Current Focus */}
            <section className="bg-zen-paper/50 rounded-2xl border border-zen-surface p-8 md:p-10">
              <h3 className="mb-6 font-heading text-xl font-bold text-zen-text">
                Current Focus
              </h3>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">
                    Building
                  </p>
                  <p className="text-zen-text/90 text-sm leading-relaxed">
                    Production-grade AI apps with clean APIs, observability, and
                    predictable outputs.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">
                    Learning
                  </p>
                  <p className="text-zen-text/90 text-sm leading-relaxed">
                    LLM system prompts, structured JSON extraction, and
                    evaluation for reliability.
                  </p>
                </div>
                <div className="space-y-2">
                  <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">
                    Open To
                  </p>
                  <p className="text-zen-text/90 text-sm leading-relaxed">
                    AI/ML engineering, backend systems, and impactful product
                    collaborations.
                  </p>
                </div>
              </div>
            </section>

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
    </>
  );
}
