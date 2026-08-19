//--====-- GSAP Float Hook --====--//
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface UseFloatOptions {
  /**
   * Distance to float up/down (in pixels)
   * @default 10
   */
  distance?: number;
  /**
   * Animation duration in seconds
   * @default 2.5
   */
  duration?: number;
  /**
   * GSAP easing function
   * @default 'sine.inOut'
   */
  ease?: string;
  /**
   * Initial delay before animation starts (in seconds)
   * @default 0
   */
  delay?: number;
}

/**
 * Custom hook for GSAP floating up/down loop animation
 * Creates a continuous, smooth floating effect on an element
 * @returns ref to attach to the element to animate
 */
export function useGsapFloat<T extends HTMLElement>(
  options: UseFloatOptions = {}
) {
  const {
    distance = 10,
    duration = 2.5,
    ease = "sine.inOut",
    delay = 0,
  } = options;

  const elementRef = useRef<T>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        y: -distance,
        duration,
        ease,
        repeat: -1,
        yoyo: true,
        delay,
      });
    });

    return () => ctx.revert();
  }, [distance, duration, ease, delay]);

  return elementRef;
}
