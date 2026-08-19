/*--====-- ScrollToTop Component --====--*/
"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

/*--====-- Rocket Icon Component --====--*/
const RocketIcon = ({ className = "" }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
  </svg>
);

export function ScrollToTop() {
  /*--====-- State and Refs --====--*/
  const [visible, setVisible] = useState(false);
  const circleRef = useRef<SVGPathElement>(null);
  const rocketRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  /*--====-- Handle Scroll Progress --====--*/
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const scrollHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrollProgress = (scrollTop / scrollHeight) * 100;

      /*--====-- Update Visibility --====--*/
      setVisible(scrollTop > 100);

      /*--====-- Update Circle Progress --====--*/
      if (circleRef.current) {
        const pathLength = circleRef.current.getTotalLength();
        const drawLength = (pathLength * scrollProgress) / 100;
        circleRef.current.style.strokeDasharray = `${pathLength}`;
        circleRef.current.style.strokeDashoffset = `${pathLength - drawLength}`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initialize on mount

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /*--====-- Scroll to Top with Rocket Animation --====--*/
  const scrollToTop = () => {
    if (!rocketRef.current || !containerRef.current) return;

    /*--====-- Shake Animation --====--*/
    const timeline = gsap.timeline({
      onComplete: () => {
        /*--====-- Fly Up Animation --====--*/
        gsap.to(containerRef.current, {
          y: -window.innerHeight,
          opacity: 0,
          duration: 0.8,
          ease: "power2.in",
          onComplete: () => {
            /*--====-- Reset Position and Clear Inline Styles --====--*/
            if (containerRef.current && rocketRef.current) {
              gsap.set(containerRef.current, { clearProps: "all" });
              gsap.set(rocketRef.current, { clearProps: "all" });
            }
          },
        });
      },
    });

    /*--====-- Shake Effect --====--*/
    timeline.to(rocketRef.current, {
      rotation: -15,
      duration: 0.1,
      ease: "power1.inOut",
    });
    timeline.to(rocketRef.current, {
      rotation: 15,
      duration: 0.1,
      ease: "power1.inOut",
    });
    timeline.to(rocketRef.current, {
      rotation: -10,
      duration: 0.1,
      ease: "power1.inOut",
    });
    timeline.to(rocketRef.current, {
      rotation: 10,
      duration: 0.1,
      ease: "power1.inOut",
    });
    timeline.to(rocketRef.current, {
      rotation: 0,
      duration: 0.1,
      ease: "power1.inOut",
    });

    /*--====-- Smooth Scroll to Top --====--*/
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  /*--====-- Render Component --====--*/
  return (
    <div
      ref={containerRef}
      onClick={scrollToTop}
      style={{ display: visible ? "block" : "none" }}
      className={`fixed bottom-32 md:bottom-16 right-6 z-50 cursor-pointer transition-opacity duration-300 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <div className="circle-container w-14 h-14 rounded-full bg-linear-to-br from-theme-start to-theme-end flex items-center justify-center relative shadow-lg hover:shadow-xl transition-shadow duration-300">
        {/*--====-- Circular Progress SVG --====--*/}
        <svg
          className="circle-progress absolute inset-0 w-full h-full -rotate-90"
          viewBox="0 0 100 100"
        >
          <path
            ref={circleRef}
            d="M50,10 a40,40 0 0,1 0,80 a40,40 0 0,1 0,-80"
            stroke="#171717"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
        </svg>

        {/*--====-- Rocket Icon --====--*/}
        <div ref={rocketRef} className="relative z-10">
          <RocketIcon className="w-6 h-6 text-acDark rotate-[315deg]" />
        </div>
      </div>
    </div>
  );
}
