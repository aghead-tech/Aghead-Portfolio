//--====-- GSAP Stagger Hook --====--//

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePreload } from "./usePreloadContext";

interface UseStaggerOptions {
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  duration?: number;
  stagger?: number;
  ease?: string;
  useScrollTrigger?: boolean;
  scrollStart?: string;
  delay?: number;
}

export function useGsapStagger<T extends HTMLElement = HTMLElement>(
  options: UseStaggerOptions = {},
) {
  const {
    direction = "left",
    distance = 20,
    duration = 0.6,
    stagger = 0.1,
    ease = "power2.out",
    useScrollTrigger = false,
    scrollStart = "top 80%",
    delay = 0,
  } = options;

  const containerRef = useRef<T | null>(null);
  const { isPreloaded } = usePreload();

  useEffect(() => {
    if (!containerRef.current || !isPreloaded) return;

    const container = containerRef.current;
    const children = Array.from(container.children);

    if (children.length === 0) return;

    let animation: gsap.core.Tween | null = null;
    let isMounted = true;

    const runAnimation = async () => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
      };

      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        stagger,
        ease,
        delay,
      };

      switch (direction) {
        case "up":
          fromVars.y = distance;
          toVars.y = 0;
          break;

        case "down":
          fromVars.y = -distance;
          toVars.y = 0;
          break;

        case "left":
          fromVars.x = -distance;
          toVars.x = 0;
          break;

        case "right":
          fromVars.x = distance;
          toVars.x = 0;
          break;

        case "none":
          break;
      }

      if (useScrollTrigger) {
        const { ScrollTrigger } = await import(
          "gsap/ScrollTrigger"
        );

        if (!isMounted) return;

        gsap.registerPlugin(ScrollTrigger);

        toVars.scrollTrigger = {
          trigger: container,
          start: scrollStart,
          toggleActions: "play none none none",
        };
      }

      if (!isMounted) return;

      animation = gsap.fromTo(
        children,
        fromVars,
        toVars,
      );
    };

    runAnimation();

    return () => {
      isMounted = false;

      animation?.kill();

      gsap.killTweensOf(children);
    };
  }, [
    direction,
    distance,
    duration,
    stagger,
    ease,
    useScrollTrigger,
    scrollStart,
    delay,
    isPreloaded,
  ]);

  return containerRef;
}