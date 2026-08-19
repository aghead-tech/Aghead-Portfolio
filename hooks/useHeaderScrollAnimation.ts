/*--====-- Header Scroll Animation Hook --====--*/
import { useRef, useEffect } from "react";
import gsap from "gsap";

export function useHeaderScrollAnimation() {
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    let ticking = false;

    const mm = gsap.matchMedia();

    mm.add(
      {
        isMobile: "(max-width: 767px)",
        isDesktop: "(min-width: 768px)",
      },
      (context) => {
        const { isMobile } = context.conditions!;
        const initialHeight = isMobile ? 70 : 100;
        const scrolledHeight = isMobile ? 60 : 80;

        // Set initial state for mobile - always show bg and blur
        if (isMobile && headerRef.current) {
          gsap.set(headerRef.current, {
            backgroundColor: "color-mix(in srgb, var(--background) 80%, transparent)",
            backdropFilter: "blur(12px)",
          });
        }

        const onScroll = () => {
          const currentScrollY = window.scrollY;

          if (isMobile) {
            // Mobile: always show bg and blur, just adjust height
            const height = currentScrollY <= 0 ? initialHeight : scrolledHeight;
            gsap.to(headerRef.current, {
              y: 0,
              height: height,
              backgroundColor: "color-mix(in srgb, var(--background) 80%, transparent)",
              backdropFilter: "blur(12px)",
              duration: 0.3,
              ease: "power3.out",
            });
          } else {
            // Desktop behavior
            if (currentScrollY <= 0) {
              // At the top - transparent
              gsap.to(headerRef.current, {
                y: 0,
                height: initialHeight,
                backgroundColor: "transparent",
                backdropFilter: "blur(0px)",
                duration: 0.3,
                ease: "power3.out",
              });
            } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
              // Scrolling down - hide header
              gsap.to(headerRef.current, {
                y: -100,
                duration: 0.3,
                ease: "power3.out",
              });
            } else if (currentScrollY < lastScrollY) {
              // Scrolling up - show header with bg and blur
              gsap.to(headerRef.current, {
                y: 0,
                height: scrolledHeight,
                backgroundColor: "color-mix(in srgb, var(--background) 80%, transparent)",
                backdropFilter: "blur(12px)",
                duration: 0.3,
                ease: "power3.out",
              });
            }
          }

          lastScrollY = currentScrollY;
          ticking = false;
        };

        const requestTick = () => {
          if (!ticking) {
            window.requestAnimationFrame(onScroll);
            ticking = true;
          }
        };

        window.addEventListener("scroll", requestTick, { passive: true });
        return () => window.removeEventListener("scroll", requestTick);
      }
    );

    return () => mm.revert();
  }, []);

  return { headerRef };
}
