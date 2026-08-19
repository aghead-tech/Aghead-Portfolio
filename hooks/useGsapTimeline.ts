//--====-- GSAP Timeline Hook --====--//
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export interface TimelineAnimation {
  /**
   * Ref to the element to animate
   */
  ref: React.RefObject<HTMLElement>;
  /**
   * Starting properties
   */
  from: gsap.TweenVars;
  /**
   * End properties
   */
  to: gsap.TweenVars;
  /**
   * Position parameter for timeline (e.g., "-=0.5" for overlap)
   * @default undefined (plays after previous animation)
   */
  position?: string | number;
}

interface UseTimelineOptions {
  /**
   * Default easing for all animations
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
   * Trigger element ref (container to watch for scroll)
   */
  triggerRef?: React.RefObject<HTMLElement>;
}

/**
 * Custom hook for GSAP timeline animations
 * Creates a sequence of animations that can overlap or play in sequence
 * @param animations - Array of animation configurations
 * @param options - Timeline options
 */
export function useGsapTimeline(
  animations: TimelineAnimation[],
  options: UseTimelineOptions = {}
) {
  const {
    ease = "power2.out",
    useScrollTrigger = false,
    scrollStart = "top 80%",
    triggerRef,
  } = options;

  const isInitialized = useRef(false);

  useEffect(() => {
    // Prevent double initialization in development
    if (isInitialized.current) return;
    isInitialized.current = true;

    const timelineConfig: gsap.TimelineVars = {
      defaults: { ease },
    };

    // Add ScrollTrigger if enabled
    if (useScrollTrigger && triggerRef?.current) {
      timelineConfig.scrollTrigger = {
        trigger: triggerRef.current,
        start: scrollStart,
        toggleActions: "play none none none",
      };
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline(timelineConfig);

      animations.forEach((animation) => {
        if (!animation.ref.current) return;

        tl.fromTo(
          animation.ref.current,
          animation.from,
          animation.to,
          animation.position
        );
      });
    });

    return () => {
      isInitialized.current = false;
      ctx.revert();
    };
  }, [animations, ease, useScrollTrigger, scrollStart, triggerRef]);
}
