/*--====-- Tech Marquee Section --====--*/
"use client";
import StarIcon from "@/public/images/icons/StarIcon";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";

interface TechMarqueeSectionProps {
  title?: string;
  items: string[];
}

export function TechMarqueeSection({ title, items }: TechMarqueeSectionProps) {
  const marqueeRef = useRef<HTMLDivElement>(null);
  const marqueeInnerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const marqueeInner = marqueeInnerRef.current;

    if (!marquee || !marqueeInner) return;

    // Get the width of half the content (since we duplicate items)
    const children = marqueeInner.children;
    const singleSetWidth = Array.from(children)
      .slice(0, children.length / 2)
      .reduce((acc, child) => acc + (child as HTMLElement).offsetWidth, 0);

    // Set initial position
    gsap.set(marqueeInner, { x: 0 });

    // Create the infinite marquee animation with seamless loop
    const tl = gsap.to(marqueeInner, {
      x: -singleSetWidth,
      duration: 40, // Slow default speed
      ease: "none",
      repeat: -1,
      modifiers: {
        x: gsap.utils.unitize((x) => parseFloat(x) % singleSetWidth),
      },
    });

    return () => {
      tl.kill();
    };
  }, [items]);

  // Duplicate items for seamless loop (need at least 2 sets)
  const duplicatedItems = [...items, ...items, ...items, ...items];

  return (
    <section
      ref={marqueeRef}
      className="z-10 relative py-4 md:py-5 bg-linear-to-r from-theme-start to-theme-end overflow-hidden"
    >
      <div className="absolute inset-0 w-full h-full bg-[url('/images/wave.svg')] bg-cover bg-center bg-no-repeat"></div>
      <div ref={marqueeInnerRef} className="flex whitespace-nowrap">
        {duplicatedItems.map((tech, index) => (
          <div key={index} className="flex items-center shrink-0">
            <span className="text-acDark font-semibold text-xl md:text-2xl lg:text-3xl px-4 md:px-6">
              {tech}
            </span>
            <span className="text-acDark">
              <StarIcon></StarIcon>
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
