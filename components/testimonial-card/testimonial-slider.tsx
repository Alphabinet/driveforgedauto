"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { TestimonialCard } from "./testimonial-card";
import type { Testimonial } from "@/data/testimonials";

export function TestimonialSlider({ testimonials }: { testimonials: Testimonial[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Sync active dot with manual scrolling/swiping
  const handleScroll = useCallback(() => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const scrollPosition = container.scrollLeft;
    const itemWidth = container.children[0]?.clientWidth || 0;
    const gap = 24; // gap-6 = 24px
    
    // Calculate which card is currently closest to the left edge
    const index = Math.round(scrollPosition / (itemWidth + gap));
    setActiveIndex(index);
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container || isHovered) return;

    const interval = setInterval(() => {
      // Calculate maximum scrollable width
      const maxScroll = container.scrollWidth - container.clientWidth;
      
      // If we hit the end (with a 10px buffer for sub-pixel rendering), rewind to start
      if (container.scrollLeft >= maxScroll - 10) {
        container.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        // Scroll forward by the width of one card + the 24px gap (gap-6)
        const itemWidth = container.children[0]?.clientWidth || 0;
        container.scrollBy({ left: itemWidth + 24, behavior: "smooth" });
      }
    }, 2000);

    return () => clearInterval(interval);
  }, [isHovered]);

  // Handle dot clicks
  const scrollTo = (index: number) => {
    if (!scrollRef.current) return;
    const container = scrollRef.current;
    const itemWidth = container.children[0]?.clientWidth || 0;
    const gap = 24;
    container.scrollTo({ left: index * (itemWidth + gap), behavior: "smooth" });
    setActiveIndex(index);
  };

  if (!testimonials || testimonials.length === 0) return null;

  return (
    <div 
      className="relative w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={() => setIsHovered(true)}
      onTouchEnd={() => setIsHovered(false)}
    >
      {/* 
        Snap container.
        Hides the scrollbar cross-browser while keeping scroll functionality. 
      */}
      <div 
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-4 pt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {testimonials.map((t, i) => (
          <div 
            key={i} 
            // 1 item mobile, 2 items tablet, 3 items desktop
            className="w-full shrink-0 snap-start sm:w-[calc(50%-12px)] md:w-[calc(33.333333%-16px)]"
          >
            <TestimonialCard t={t} />
          </div>
        ))}
      </div>
      
      {/* Navigation Dots - Premium stretched pill style for active state */}
      <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
        {testimonials.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to testimonial ${i + 1}`}
            aria-current={activeIndex === i}
            className={`h-2.5 rounded-full transition-all duration-300 ease-out ${
              activeIndex === i 
                ? "w-8 bg-brand shadow-[0_0_8px_rgba(var(--brand),0.6)]" 
                : "w-2.5 bg-line hover:bg-brand/50"
            }`}
          />
        ))}
      </div>
    </div>
  );
}