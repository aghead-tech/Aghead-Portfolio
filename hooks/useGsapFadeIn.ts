//--====-- GSAP Fade In Hook --====--//
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { usePreload } from "./usePreloadContext";

gsap.registerPlugin(ScrollTrigger);

interface UseFadeInOptions {
  /**
   * Direction of fade in: 'up', 'down', 'left', 'right', or 'none'
   * @default 'up'
   */
  direction?: "up" | "down" | "left" | "right" | "none";
  /**
   * Distance to travel during animation (in pixels)
   * @default 20
   */
  distance?: number;
  /**
   * Animation duration in seconds
   * @default 0.8
   */
  duration?: number;
  /**
   * Delay before animation starts in seconds
   * @default 0
   */
  delay?: number;
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
   * Custom trigger element ref (if different from animated element)
   */
  triggerRef?: React.RefObject<HTMLElement>;
}

/**
 * Custom hook for GSAP fade-in animations with optional scroll trigger
 * @returns ref to attach to the element you want to animate
 */
export function useGsapFadeIn<T extends HTMLElement>(
  options: UseFadeInOptions = {}
) {
  const {
    direction = "up",
    distance = 20,
    duration = 0.8,
    delay = 0,
    ease = "power2.out",
    useScrollTrigger = false,
    scrollStart = "top 80%",
    triggerRef,
  } = options;

  const elementRef = useRef<T>(null);
  const { isPreloaded } = usePreload();

  useEffect(() => {
    if (!elementRef.current || !isPreloaded) return;

    // Small delay to ensure all refs are mounted
    const timeoutId = setTimeout(() => {
      if (!elementRef.current) return;

      const fromVars: gsap.TweenVars = { opacity: 0 };
      const toVars: gsap.TweenVars = { opacity: 1, duration, delay, ease };

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
          fromVars.x = distance;
          toVars.x = 0;
          break;
        case "right":
          fromVars.x = -distance;
          toVars.x = 0;
          break;
        case "none":
          // No directional movement, only opacity
          break;
      }

      // Add ScrollTrigger if enabled
      if (useScrollTrigger) {
        const trigger = triggerRef?.current || elementRef.current;
        if (trigger) {
          toVars.scrollTrigger = {
            trigger,
            start: scrollStart,
            toggleActions: "play none none none",
          };
        }
      }

      // Explicitly set initial state before animation
      gsap.set(elementRef.current, fromVars);
      gsap.to(elementRef.current, toVars);
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (elementRef.current) {
        gsap.killTweensOf(elementRef.current);
      }
    };
  }, [direction, distance, duration, delay, ease, useScrollTrigger, scrollStart, triggerRef, isPreloaded]);

  return elementRef;
}
