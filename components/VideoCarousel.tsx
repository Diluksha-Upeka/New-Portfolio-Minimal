"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { SHOWCASE_VIDEOS } from "@/lib/data";

export default function VideoCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -450, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 450, behavior: "smooth" });
    }
  };

  return (
    <div className="group relative">
      {/* Left Scroll Button */}
      <button
        onClick={scrollLeft}
        aria-label="Scroll Carousel Left"
        className="absolute -left-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zen-surface bg-zen-paper text-zen-text opacity-0 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-zen-accent hover:text-zen-bg group-hover:opacity-100 md:flex"
      >
        <ChevronLeft size={20} />
      </button>

      {/* Carousel Container */}
      <div
        ref={carouselRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {SHOWCASE_VIDEOS.map((video) => (
          <div
            key={video.id}
            className="relative w-[85vw] shrink-0 snap-center overflow-hidden rounded-xl border border-zen-surface bg-zen-paper p-4 md:w-[450px] lg:w-[500px]"
          >
            <div className="aspect-video w-full overflow-hidden rounded-lg bg-zen-bg">
              <video
                src={video.src}
                className="h-full w-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls
              />
            </div>
            <div className="mt-4 flex items-center justify-between">
              <span className="text-sm font-medium text-zen-text">
                {video.title}
              </span>
              {video.link && (
                <a
                  href={video.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Live Demo for ${video.title}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-zen-surface bg-zen-bg px-4 py-2 text-xs font-semibold text-zen-text transition-colors hover:bg-zen-surface"
                >
                  Live Demo <ArrowUpRight size={14} />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Right Scroll Button */}
      <button
        onClick={scrollRight}
        aria-label="Scroll Carousel Right"
        className="absolute -right-4 top-1/2 z-10 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-zen-surface bg-zen-paper text-zen-text opacity-0 shadow-lg backdrop-blur-md transition-all hover:scale-110 hover:bg-zen-accent hover:text-zen-bg group-hover:opacity-100 md:flex"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
}
