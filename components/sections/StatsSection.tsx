/*--====-- Stats Section --====--*/
"use client";
import React, { useEffect, useRef, useState } from "react";
import { LucideIcon } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  value: string;
  label: string;
  icon:
    | LucideIcon
    | React.ComponentType<{
        className?: string;
        width?: number;
        height?: number;
      }>;
}

interface StatsSectionProps {
  items: Stat[];
}

export function StatsSection({ items }: StatsSectionProps) {
  /*--====-- Refs for animation --====--*/
  const sectionRef = useRef<HTMLElement>(null);
  const numberRefs = useRef<(HTMLDivElement | null)[]>([]);

  /*--====-- Parse numeric value from stat string (e.g., "500+" => 500) --====--*/
  const parseValue = (value: string): number => {
    const numericValue = parseInt(value.replace(/\D/g, ""), 10);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  /*--====-- Extract suffix from stat value (e.g., "500+" => "+") --====--*/
  const getSuffix = (value: string): string => {
    const match = value.match(/\d+(.*)$/);
    return match ? match[1] : "";
  };

  /*--====-- GSAP digit roll-up animation on scroll --====--*/
  useEffect(() => {
    if (!sectionRef.current) return;

    // Use a small timeout to ensure DOM is ready, similar to other hooks
    const ctx = gsap.context(() => {
      numberRefs.current.forEach((numberEl, statIndex) => {
        if (!numberEl) return;
        const digitElements = numberEl.querySelectorAll(".digit-column");

        digitElements.forEach((digitEl, digitIndex) => {
          const targetDigit = parseInt(
            digitEl.getAttribute("data-target") || "0",
          );

          gsap.to(digitEl, {
            y: `-${(targetDigit + 10) * 100}%`,
            duration: 1.5 + digitIndex * 0.15,
            ease: "power2.out",
            delay: statIndex * 0.1 + digitIndex * 0.05,
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [items]);

  /*--====-- Generate digit rollers for odometer effect --====--*/
  const renderOdometerDigits = (targetValue: number, statIndex: number) => {
    const targetString = targetValue.toLocaleString();
    const characters = targetString.split("");

    return (
      <div
        ref={(el) => {
          numberRefs.current[statIndex] = el;
        }}
        className="inline-flex items-center justify-center"
      >
        {characters.map((char, charIndex) => {
          {
            /*--====-- Handle comma separators --====--*/
          }
          if (char === ",") {
            return (
              <span key={`comma-${charIndex}`} className="inline-block px-0.5">
                ,
              </span>
            );
          }

          const targetDigit = parseInt(char);

          {
            /*--====-- Create 0-9 sequence twice for seamless rolling --====--*/
          }
          const digits = [
            0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
          ];

          return (
            <span
              key={charIndex}
              className="inline-block relative overflow-hidden"
              style={{
                width: "0.6em",
                height: "1em",
                lineHeight: "1em",
              }}
            >
              <span
                className="digit-column absolute inset-0 flex flex-col items-center"
                data-target={targetDigit}
                style={{
                  transform: "translateY(0%)",
                }}
              >
                {digits.map((digit, idx) => (
                  <span
                    key={idx}
                    className="flex items-center justify-center"
                    style={{
                      width: "100%",
                      height: "1em",
                      lineHeight: "1em",
                    }}
                  >
                    {digit}
                  </span>
                ))}
              </span>
            </span>
          );
        })}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="py-6 my-5 md:py-12 relative overflow-hidden bg-linear-to-r from-theme-start to-theme-end"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 lg:gap-12">
          {items.map((stat, index) => {
            const IconComponent = stat.icon;
            const suffix = getSuffix(stat.value);
            const targetValue = parseValue(stat.value);

            return (
              <div
                key={index}
                className="flex flex-col gap-3 sm:gap-1 md:flex-row items-center md:space-x-2 lg:space-x-4 text-center md:text-left"
              >
                {/*--====-- Circular Black Icon with Theme-Colored Icon Inside --====--*/}
                <div className="relative border-dashed border-black border-2 rounded-full bg-transparent p-1">
                  <div className="w-12 relative  h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 rounded-full bg-black flex items-center justify-center  ">
                    <IconComponent className=" text-foreground" />
                  </div>
                </div>

                {/*--====-- Stat Content with GSAP Odometer Animation --====--*/}
                <div className="flex-1">
                  <div className="text-2xl flex lg:text-3xl xl:text-4xl font-bold text-black leading-tight  items-center justify-center md:justify-start">
                    {renderOdometerDigits(targetValue, index)}
                    <span className="ml-1">{suffix}</span>
                  </div>
                  <div className="text-xs md:text-sm lg:text-base text-black font-medium leading-tight mt-1">
                    {stat.label}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div
        className=" z-1 
          absolute top-0 left-0 w-full h-full
          bg-[url('/images/starArea.png')] bg-cover bg-no-repeat
          bg-center
          mix-blend-plus-lighter
        "
      ></div>
    </section>
  );
}
