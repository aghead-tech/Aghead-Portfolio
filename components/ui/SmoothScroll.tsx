"use client";

import { useEffect, useRef } from "react";
import type Lenis from "lenis";

export function SmoothScroll() {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    let isMounted = true;
    let cleanup: (() => void) | undefined;

    const initSmoothScroll = async () => {
      const [{ default: Lenis }, { default: gsap }, { ScrollTrigger }] =
        await Promise.all([
          import("lenis"),
          import("gsap"),
          import("gsap/dist/ScrollTrigger"),
        ]);

      if (!isMounted) return;

      const lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        orientation: "vertical",
        gestureOrientation: "vertical",
        smoothWheel: true,
      });

      lenisRef.current = lenis;

      gsap.registerPlugin(ScrollTrigger);

      lenis.on("scroll", ScrollTrigger.update);

      const tickerCallback = (time: number) => {
        lenis.raf(time * 1000);
      };

      gsap.ticker.add(tickerCallback);
      gsap.ticker.lagSmoothing(0);

      cleanup = () => {
        gsap.ticker.remove(tickerCallback);
        lenis.destroy();
        lenisRef.current = null;
      };
    };

    if ("requestIdleCallback" in window) {
      const idleId = window.requestIdleCallback(() => {
        initSmoothScroll();
      });

      return () => {
        isMounted = false;
        window.cancelIdleCallback(idleId);
        cleanup?.();
      };
    }

    const timeoutId = setTimeout(() => {
      initSmoothScroll();
    }, 500);

    return () => {
      isMounted = false;
      window.clearTimeout(timeoutId);
      cleanup?.();
    };
  }, []);

  return null;
}
