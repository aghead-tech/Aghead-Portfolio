//--====-- GSAP Fade In Hook --====--//

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { usePreload } from "./usePreloadContext";

interface UseFadeInOptions {
  /**
   * Direction of fade in
   * @default "up"
   */
  direction?: "up" | "down" | "left" | "right" | "none";

  /**
   * Distance to travel during animation
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
   * @default "power2.out"
   */
  ease?: string;

  /**
   * Enable ScrollTrigger
   * @default false
   */
  useScrollTrigger?: boolean;

  /**
   * ScrollTrigger start position
   * @default "top 80%"
   */
  scrollStart?: string;

  /**
   * Custom trigger element ref
   */
  triggerRef?: React.RefObject<HTMLElement | null>;
}

/**
 * Custom hook for GSAP fade-in animations.
 */
export function useGsapFadeIn<T extends HTMLElement = HTMLElement>(
  options: UseFadeInOptions = {},
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

  const elementRef = useRef<T | null>(null);
  const { isPreloaded } = usePreload();

  useEffect(() => {
    if (!elementRef.current || !isPreloaded) return;

    const element = elementRef.current;

    let animation: gsap.core.Tween | null = null;
    let isMounted = true;

    const runAnimation = async () => {
      const fromVars: gsap.TweenVars = {
        opacity: 0,
      };

      const toVars: gsap.TweenVars = {
        opacity: 1,
        duration,
        delay,
        ease,
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
          fromVars.x = distance;
          toVars.x = 0;
          break;

        case "right":
          fromVars.x = -distance;
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

        const trigger =
          triggerRef?.current || element;

        toVars.scrollTrigger = {
          trigger,
          start: scrollStart,
          toggleActions: "play none none none",
        };
      }

      if (!isMounted) return;

      animation = gsap.fromTo(
        element,
        fromVars,
        toVars,
      );
    };

    runAnimation();

    return () => {
      isMounted = false;

      animation?.kill();

      gsap.killTweensOf(element);
    };
  }, [
    direction,
    distance,
    duration,
    delay,
    ease,
    useScrollTrigger,
    scrollStart,
    triggerRef,
    isPreloaded,
  ]);

  return elementRef;
}