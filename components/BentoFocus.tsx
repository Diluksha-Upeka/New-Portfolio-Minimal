import React from "react";
import { Terminal, Lightbulb, Target } from "lucide-react";

export default function BentoFocus() {
  return (
    <section>
      <h3 className="mb-6 font-heading text-xl font-bold text-zen-text">
        Current Focus
      </h3>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:grid-rows-2">
        {/* Large Feature Box: Span 2 columns and 2 rows */}
        <div className="hover:border-zen-subtext/30 group relative col-span-1 flex flex-col justify-end overflow-hidden rounded-2xl border border-zen-surface bg-zen-paper p-6 transition-colors md:col-span-2 md:row-span-2 md:p-8">
          {/* Subtle gradient overlay on hover for that sleek look */}
          <div className="from-zen-surface/20 absolute inset-0 bg-gradient-to-br to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          <div className="relative z-10 mb-4 flex items-center justify-between">
            <Terminal className="h-8 w-8 text-zen-subtext transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-110" />
            {/* Live Status Indicator */}
            <div className="bg-zen-bg/50 flex items-center gap-2 rounded-full border border-zen-surface px-3 py-1 shadow-sm backdrop-blur-sm">
              <div className="h-2 w-2 animate-pulse rounded-full bg-green-500" />
              <span className="text-[10px] font-bold uppercase tracking-wider text-zen-subtext">
                Active
              </span>
            </div>
          </div>

          {/* Glowing Mock Terminal / Code Editor - Fills the empty space creatively */}
          <div className="relative z-10 my-auto flex w-full flex-col justify-center py-6 opacity-60 transition-opacity duration-500 group-hover:opacity-100">
            <div className="border-zen-surface/30 bg-zen-bg/40 w-full overflow-hidden rounded-xl border font-mono text-xs shadow-inner backdrop-blur-sm md:text-sm">
              <div className="border-zen-surface/30 bg-zen-surface/10 flex items-center gap-1.5 border-b px-3 py-2">
                <div className="h-2 w-2 rounded-full bg-red-500/80" />
                <div className="h-2 w-2 rounded-full bg-yellow-500/80" />
                <div className="h-2 w-2 rounded-full bg-green-500/80" />
                <span className="text-zen-subtext/70 ml-2 text-[10px]">
                  agent.py
                </span>
              </div>
              <div className="p-4 text-zen-subtext">
                <p>
                  <span className="text-pink-400">from</span> langchain.agents{" "}
                  <span className="text-pink-400">import</span>{" "}
                  <span className="text-amber-300">AgentExecutor</span>
                </p>
                <p className="mt-2">
                  <span className="text-blue-400">async def</span>{" "}
                  <span className="text-green-300">run_inference</span>
                  (payload):
                </p>
                <p className="pl-4">
                  <span className="text-zinc-500">
                    # Orchestrating LLM workflow
                  </span>
                </p>
                <p className="pl-4">engine = AgentExecutor(</p>
                <p className="pl-8 text-sky-300">llm=model,</p>
                <p className="pl-8 text-sky-300">
                  tools=[rag_search, web_fetch],
                </p>
                <p className="pl-8 text-sky-300">
                  verbose=<span className="text-amber-500">True</span>
                </p>
                <p className="pl-4">)</p>
                <p className="mt-2 animate-pulse border-l-2 border-green-500/50 bg-gradient-to-r from-green-500/10 to-transparent pl-2 text-zen-text">
                  ✓ System ready. Latency: 42ms
                </p>
              </div>
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="mb-2 text-xs font-bold uppercase tracking-widest text-zen-subtext">
              Building
            </p>
            <p className="text-lg font-medium leading-relaxed text-zen-text md:text-2xl">
              Production-grade AI apps with clean APIs, observability, and
              predictable outputs.
            </p>
          </div>
        </div>

        {/* Small Box 1 */}
        <div className="hover:border-zen-subtext/30 group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zen-surface bg-zen-paper p-6 transition-colors">
          <div className="from-zen-surface/10 absolute inset-0 bg-gradient-to-tr to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <Lightbulb className="relative z-10 mb-4 h-6 w-6 text-zen-subtext transition-colors duration-500 group-hover:text-amber-400" />

          {/* Mock LLM Chat Extraction UI */}
          <div className="relative z-10 mb-4 flex w-full flex-col gap-2 opacity-40 transition-opacity duration-500 group-hover:opacity-100">
            <div className="bg-zen-surface/40 text-zen-text/80 self-end rounded-xl rounded-tr-none px-3 py-1.5 text-[10px] shadow-sm backdrop-blur-sm">
              Extract schema from document
            </div>
            <div className="self-start rounded-xl rounded-tl-none border border-green-500/20 bg-green-500/10 px-3 py-1.5 text-[10px] text-green-400 shadow-sm backdrop-blur-sm">
              <span className="mr-1 animate-pulse text-green-500">●</span>
              {`{ "schema": "validated" }`}
            </div>
          </div>

          <div className="relative z-10 mt-auto">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zen-subtext">
              Learning
            </p>
            <p className="text-zen-text/90 text-sm leading-relaxed">
              LLM system prompts, structured JSON extraction, and evaluation for
              reliability.
            </p>
          </div>
        </div>

        {/* Small Box 2 */}
        <div className="hover:border-zen-subtext/30 group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-zen-surface bg-zen-paper p-6 transition-colors">
          <div className="from-zen-surface/10 absolute inset-0 bg-gradient-to-bl to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

          {/* Abstract Neural Nodes Background */}
          <div className="absolute right-4 top-4 z-0 h-24 w-24 opacity-30 transition-all duration-700 group-hover:rotate-6 group-hover:scale-110 group-hover:opacity-60">
            <div className="absolute left-1/2 top-0 h-1.5 w-1.5 animate-pulse rounded-full bg-blue-400 shadow-[0_0_8px_rgba(96,165,250,0.8)]" />
            <div
              className="absolute left-0 top-1/2 h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
              style={{ animationDelay: "0.5s" }}
            />
            <div
              className="absolute bottom-4 right-0 h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-400 shadow-[0_0_8px_rgba(129,140,248,0.8)]"
              style={{ animationDelay: "1s" }}
            />
            <svg
              className="absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
            >
              <path
                d="M50 0 L0 50 L80 80 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="0.5"
                className="text-zen-surface/60"
              />
            </svg>
          </div>

          <Target className="relative z-10 mb-4 h-6 w-6 text-zen-subtext transition-colors duration-500 group-hover:text-blue-400" />
          <div className="relative z-10 mt-auto">
            <p className="mb-1 text-xs font-bold uppercase tracking-widest text-zen-subtext">
              Open To
            </p>
            <p className="text-zen-text/90 text-sm leading-relaxed">
              AI/ML engineering, backend systems, and impactful product
              collaborations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
