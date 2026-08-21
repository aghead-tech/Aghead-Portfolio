//--====-- GSAP Stagger Hook --====--//
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreload } from "./usePreloadContext";

gsap.registerPlugin(ScrollTrigger);

interface UseStaggerOptions {
  /**
   * Direction of stagger animation: 'up', 'down', 'left', 'right', or 'none'
   * @default 'left'
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /**
   * Distance to travel during animation (in pixels)
   * @default 20
   */
  distance?: number;
  /**
   * Animation duration in seconds
   * @default 0.6
   */
  duration?: number;
  /**
   * Stagger delay between each child element in seconds
   * @default 0.1
   */
  stagger?: number;
  /**
   * GSAP easing function
   * @default 'power2.out'
   */
  ease?: string;
  /**
   * Enable scroll trigger
   * @default false
   */
  useScrollTrigger?: boolean;
  /**
   * ScrollTrigger start position
   * @default 'top 80%'
   */
  scrollStart?: string;
  /**
   * Initial delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
}

/**
 * Custom hook for GSAP staggered animations on child elements
 * Animates all children of the referenced element with a stagger effect
 * @returns ref to attach to the parent element containing children to animate
 */
export function useGsapStagger<T extends HTMLElement>(
  options: UseStaggerOptions = {}
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

  const containerRef = useRef<T>(null);
  const { isPreloaded } = usePreload();

  useEffect(() => {
    if (!containerRef.current || !containerRef.current.children.length || !isPreloaded) return;

    // Small delay to ensure all refs are mounted
    const timeoutId = setTimeout(() => {
      if (!containerRef.current || !containerRef.current.children.length) return;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        stagger,
        ease,
        delay,
      };

      // Add directional movement
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
          // No directional movement, only opacity
          break;
      }

      // Add ScrollTrigger if enabled
      if (useScrollTrigger) {
        toVars.scrollTrigger = {
          trigger: containerRef.current,
          start: scrollStart,
          toggleActions: "play none none none",
        };
      }

      // Explicitly set initial state before animation
      gsap.set(containerRef.current!.children, fromVars);
      gsap.to(containerRef.current!.children, toVars);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (containerRef.current) {
        gsap.killTweensOf(containerRef.current.children);
      }
    };
  }, [direction, distance, duration, stagger, ease, useScrollTrigger, scrollStart, delay, isPreloaded]);

  return containerRef;
}
