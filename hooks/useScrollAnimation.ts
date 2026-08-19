import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

// Make sure ScrollTrigger is registered
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface UseScrollAnimationOptions {
  trigger?: React.RefObject<HTMLElement | null>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  animationType?: "fade-up" | "fade-in" | "slide-left" | "slide-right" | "scale-up";
  delay?: number;
  duration?: number;
  stagger?: number;
  threshold?: number;
  toggleActions?: string;
}

export function useScrollAnimation(options: UseScrollAnimationOptions = {}) {
  const elementRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const element = elementRef.current;
    const trigger = options.trigger?.current || element;

    if (!element || !trigger) return;

    // Default settings
    const {
      start = "top 85%",
      end = "bottom 20%",
      animationType = "fade-up",
      delay = 0,
      duration = 0.8,
      stagger = 0,
      toggleActions = "play none none reverse", // play on enter, reverse on leave back
    } = options;

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger,
        start: start,
        end: end,
        toggleActions: toggleActions,
        markers: options.markers || false,
      },
    });

    // Initial state setup based on animation type
    // We use fromTo to ensure proper resetting if we want replay ability
    
    switch (animationType) {
      case "fade-up":
        tl.fromTo(
          element,
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration, delay, ease: "power3.out", stagger }
        );
        break;
      case "fade-in":
        tl.fromTo(
          element,
          { opacity: 0 },
          { opacity: 1, duration, delay, ease: "power2.out", stagger }
        );
        break;
      case "slide-left":
        tl.fromTo(
          element,
          { opacity: 0, x: -50 },
          { opacity: 1, x: 0, duration, delay, ease: "power3.out", stagger }
        );
        break;
      case "slide-right":
        tl.fromTo(
          element,
          { opacity: 0, x: 50 },
          { opacity: 1, x: 0, duration, delay, ease: "power3.out", stagger }
        );
        break;
      case "scale-up":
        tl.fromTo(
          element,
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration, delay, ease: "back.out(1.7)", stagger }
        );
        break;
    }

    return () => {
      tl.kill();
      // ScrollTrigger instance is killed automatically when timeline is killed
    };
  }, [options]);

  return elementRef;
}
