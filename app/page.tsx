import { ArrowUpRight, Mail, ChevronRight, Download, Github, Linkedin } from "lucide-react";
import Image from "next/image";

export const revalidate = 3600;

export default async function Home() {
  // Featured projects curated for engineering impact
  const featuredProjects = [
    {
      name: "Resume Optimizer",
      description: "A Streamlit dashboard that parses resumes into JSON and gives an ATS score using Llama 3.",
      learning: "Structured Output (JSON) and system prompts.",
      tech: ["Python", "Streamlit", "LangChain", "Llama 3"],
      link: "https://ai-resume-diluksha.streamlit.app/"
    },
    {
      name: "EV Charging Station Management Platform",
      description: "Built a full-stack system enabling real-time charger availability, booking, and route-aware station selection. Implemented live updates using WebSockets and designed the backend.",
      learning: "Designed real-time systems and managed state consistency across clients.",
      tech: ["React", "Node.js", "Socket.io"],
      link: "https://electric-vehicle-booking-system.vercel.app/"
    },
    {
      name: "LiveTalk – Secure Real-Time Communication",
      description: "Designed a multi-user chat system with message flows, and communication using Socket.io.",
      learning: "Explored real-time scalability, message synchronization, and user presence management.",
      tech: ["React", "Socket.io"],
      link: "https://live-talk.onrender.com/"
    }
  ];

  return (
    <div className="space-y-24 md:space-y-32">
      {/* Bio Section */}
      <section className="space-y-8 fade-in">
        <div className="flex flex-col-reverse md:flex-row gap-8 items-center md:items-start justify-between">
          <div className="space-y-2 flex-1">
            <p className="text-zen-subtext font-medium tracking-wide text-sm uppercase">Final-Year Computer Engineering Undergraduate, University of Ruhuna.</p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-zen-text">
              Building production-ready AI systems <br className="hidden md:block" />
              <span className="text-zen-subtext">from models to scalable software.</span>
            </h1>
            <p className="text-xl md:text-2xl text-zen-text font-medium">
              Software Engineer | AI/ML
            </p>
          </div>
          <div className="flex-shrink-0">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zen-surface shadow-sm">
              <Image 
                src="/profile.png" 
                alt="Profile Photo" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        
        {/* Proof Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-6 border-y border-zen-surface">
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-green-500 mt-2.5"></div>
            <p className="text-sm font-medium text-zen-subtext leading-relaxed">
              AI & ML projects deployed end-to-end (training → API → UI)
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2.5"></div>
            <p className="text-sm font-medium text-zen-subtext leading-relaxed">
              Experience with real-time systems, pipelines & model persistence
            </p>
          </div>
          <div className="flex items-start gap-3">
            <div className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-2.5"></div>
            <p className="text-sm font-medium text-zen-subtext leading-relaxed">
              Research-focused: Blockchain + GNNs for vehicular networks
            </p>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 pt-4">
           <a href="mailto:dilukshaupeka@gmail.com" className="inline-flex items-center gap-2 px-6 py-3 bg-zen-text text-zen-bg rounded-lg font-medium hover:bg-zen-accent transition-colors">
             <Mail size={18} /> Contact Me
           </a>
           <a href="/cv.pdf" download className="inline-flex items-center gap-2 px-6 py-3 border border-zen-surface text-zen-text rounded-lg font-medium hover:bg-zen-paper transition-colors">
             <Download size={18} /> Download CV
           </a>
           <a href="#work" className="inline-flex items-center gap-2 px-6 py-3 border border-zen-surface text-zen-text rounded-lg font-medium hover:bg-zen-paper transition-colors">
             View Work
           </a>
           <a href="https://github.com/Diluksha-Upeka" target="_blank" className="inline-flex items-center gap-2 px-6 py-3 border border-zen-surface text-zen-text rounded-lg font-medium hover:bg-zen-paper transition-colors">
             <Github size={18} /> GitHub
           </a>
        </div>
      </section>

      {/* Technical Arsenal - Grid View */}
      <section id="tech" className="space-y-12">
        <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
          <h2 className="font-heading text-2xl font-bold">Technical Arsenal</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           <div className="space-y-4">
             <h4 className="font-heading text-sm font-bold text-zen-subtext uppercase tracking-wider flex items-center gap-2">
               🧠 AI / ML Systems
             </h4>
             <ul className="space-y-3 text-zen-text text-sm font-medium">
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
               <li className="pt-2 flex gap-2 flex-wrap opacity-75">
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">TensorFlow</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">PyTorch</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Python</span>
               </li>
             </ul>
           </div>
           
           <div className="space-y-4">
             <h4 className="font-heading text-sm font-bold text-zen-subtext uppercase tracking-wider flex items-center gap-2">
               🌐 Software Engineering
             </h4>
             <ul className="space-y-3 text-zen-text text-sm font-medium">
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
               <li className="pt-2 flex gap-2 flex-wrap opacity-75">
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">TypeScript</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Node.js</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Next.js</span>
               </li>
             </ul>
           </div>

           <div className="space-y-4">
             <h4 className="font-heading text-sm font-bold text-zen-subtext uppercase tracking-wider flex items-center gap-2">
               ☁️ Dev & Ops
             </h4>
             <ul className="space-y-3 text-zen-text text-sm font-medium">
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
               <li className="pt-2 flex gap-2 flex-wrap opacity-75">
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Docker</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Git</span>
                  <span className="px-2 py-0.5 bg-zen-paper rounded text-xs border border-zen-surface">Linux</span>
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
           <div className="group p-6 md:p-8 bg-white rounded-2xl border border-zen-surface hover:border-zen-subtext/30 transition-all duration-300 shadow-sm hover:shadow-md">
             <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                <div>
                   <h3 className="font-heading text-xl font-bold text-zen-text">Software Engineering Intern</h3>
                   <p className="text-zen-subtext text-sm font-medium">Capricon Solution Pvt Ltd • 6 Months</p>
                </div>
                <div className="flex gap-2">
                   {["PHP", "Laravel", "MySQL", "Enterprise Arch"].map(t => (
                     <span key={t} className="px-2.5 py-1 bg-zen-paper text-zen-subtext text-xs font-medium rounded border border-zen-surface">
                       {t}
                     </span>
                   ))}
                </div>
             </div>
             
             <div className="space-y-4">
               <p className="text-zen-text leading-relaxed text-base md:text-lg border-l-2 border-zen-surface pl-4">
                 Developed and maintained enterprise-level solutions, specifically focusing on a robust Point of Sale (POS) system. Handled backend logic for inventory management, sales tracking, and reporting modules to support business operations.
               </p>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                  <div className="bg-zen-paper/50 p-3 rounded-lg border border-zen-surface/50">
                    <p className="text-xs font-bold text-zen-subtext uppercase tracking-wider mb-1">Business Logic</p>
                    <p className="text-sm text-zen-text font-medium text-zen-text/90">Translated complex business requirements into clean, maintainable code within the MVC architecture.</p>
                  </div>
                  <div className="bg-zen-paper/50 p-3 rounded-lg border border-zen-surface/50">
                    <p className="text-xs font-bold text-zen-subtext uppercase tracking-wider mb-1">Database Design</p>
                    <p className="text-sm text-zen-text font-medium text-zen-text/90">Managed relational databases (MySQL) for high-transaction environments (sales/inventory data).</p>
                  </div>
               </div>
             </div>
           </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section id="projects" className="space-y-12">
        <div className="flex items-baseline justify-between border-b border-zen-surface pb-4">
          <h2 className="font-heading text-2xl font-bold">Featured Projects</h2>
          <span className="text-xs text-zen-subtext font-medium uppercase tracking-widest hidden sm:block">See all</span>
        </div>

        <div className="space-y-16">
          {/* Curated Featured Projects */}
          <div className="grid grid-cols-1 gap-8">
            {featuredProjects.map((project) => (
              <a href={project.link} target="_blank" key={project.name} className="block group p-6 md:p-8 bg-white rounded-2xl border border-zen-surface hover:border-zen-subtext/30 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4 gap-2">
                   <h3 className="font-heading text-xl md:text-2xl font-bold text-zen-text group-hover:text-zen-accent transition-colors flex items-center gap-2">
                      {project.name}
                   </h3>
                   <div className="flex gap-2">
                      {project.tech.map(t => (
                        <span key={t} className="px-2.5 py-1 bg-zen-paper text-zen-subtext text-xs font-medium rounded border border-zen-surface">
                          {t}
                        </span>
                      ))}
                   </div>
                </div>
                <div className="space-y-4">
                  <p className="text-zen-text leading-relaxed text-base md:text-lg border-l-2 border-zen-surface pl-4">
                    {project.description}
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <p className="text-sm text-zen-subtext font-medium flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-zen-accent"></span>
                      <span className="italic">Key learning: {project.learning}</span>
                    </p>
                    <span className="shrink-0 inline-flex items-center text-sm font-bold text-zen-subtext group-hover:text-zen-accent transition-colors border-b border-transparent group-hover:border-zen-accent pb-0.5">
                      View Project <ArrowUpRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Manually Curated "More from GitHub" Section - NO LOADING STATE */}
          <div className="space-y-8">
             <h3 className="font-heading text-lg font-bold text-zen-subtext border-b border-zen-surface pb-2">Engineering Journal & Open Source</h3>
             <div className="space-y-2">
                   {/* Pinned Repo 0 */}
                   <a href="https://github.com/Diluksha-Upeka/learning-journal" target="_blank" className="group flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zen-surface/50 hover:bg-zen-paper/30 transition-colors -mx-4 px-4 rounded-lg">
                     <div>
                       <h4 className="font-bold text-zen-text group-hover:text-zen-accent transition-colors flex items-center gap-2">
                         Engineering Learning Journal <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                       </h4>
                       <p className="text-sm text-zen-subtext mt-1">A comprehensive log of my engineering journey, technical deep dives, and continuous learning.</p>
                     </div>
                     <span className="text-xs font-mono text-zen-subtext mt-2 md:mt-0 bg-zen-paper px-2 py-1 rounded">Markdown / Docs</span>
                   </a>

                   {/* Pinned Repo 1 */}
                   <a href="https://github.com/Diluksha-Upeka/AI-Journal.git" target="_blank" className="group flex flex-col md:flex-row md:items-center justify-between py-4 border-b border-zen-surface/50 hover:bg-zen-paper/30 transition-colors -mx-4 px-4 rounded-lg">
                     <div>
                       <h4 className="font-bold text-zen-text group-hover:text-zen-accent transition-colors flex items-center gap-2">
                         AI Journal (30 Days of AI) <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                       </h4>
                       <p className="text-sm text-zen-subtext mt-1">Building AI systems from scratch daily: LLM, RAG, Agents, Vision and Analysis.</p>
                     </div>
                     <span className="text-xs font-mono text-zen-subtext mt-2 md:mt-0 bg-zen-paper px-2 py-1 rounded">Python / Jupyter</span>
                   </a>
                   
             </div>
          </div>

          {/* Current Focus */}
          <section className="bg-zen-paper/50 rounded-2xl p-8 md:p-10 border border-zen-surface">
            <h3 className="font-heading text-xl font-bold text-zen-text mb-6">Current Focus</h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">Building</p>
                <p className="text-zen-text/90 text-sm leading-relaxed">
                  Production-grade AI apps with clean APIs, observability, and predictable outputs.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">Learning</p>
                <p className="text-zen-text/90 text-sm leading-relaxed">
                  LLM system prompts, structured JSON extraction, and evaluation for reliability.
                </p>
              </div>
              <div className="space-y-2">
                <p className="text-xs font-bold uppercase tracking-widest text-zen-subtext">Open To</p>
                <p className="text-zen-text/90 text-sm leading-relaxed">
                  AI/ML engineering, backend systems, and impactful product collaborations.
                </p>
              </div>
            </div>
          </section>

          {/* Contact / CTA Section */}
          <section className="py-12 border-t border-zen-surface">
            <div className="flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="font-heading text-2xl font-bold text-zen-text">Open to Conversations</h3>
                <p className="text-zen-subtext">Always open to discussing AI systems, backend scaling, or new opportunities.</p>
              </div>
              <a href="https://www.linkedin.com/in/upeka-diluksha" target="_blank" className="group flex items-center gap-2 px-8 py-4 bg-zen-text text-zen-bg rounded-lg font-bold hover:bg-zen-accent transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                 <Linkedin size={18} /> Connect on LinkedIn
              </a>
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}
