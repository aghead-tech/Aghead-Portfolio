/*--====-- Section Header Component --====--*/
"use client";
import React from "react";
import { Sparkles, LucideIcon } from "lucide-react";
import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

interface SectionHeaderProps {
  showSpan?: boolean;
  spanIcon?: LucideIcon;
  spanText?: string;
  showBadge?: boolean;
  badgeText?: string;
  showH1Watermark?: boolean;
  h1WatermarkText?: string;
  showH2?: boolean;
  h2Text?: string;
  highlightText?: string;
  description?: string;
  // Custom className props for styling
  containerClassName?: string;
  watermarkClassName?: string;
  badgeClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader({
  showBadge = true,
  badgeText = "",
  showH1Watermark = false,
  h1WatermarkText = "",
  showH2 = true,
  h2Text = "",
  highlightText = "",
  description = "",
  containerClassName = "",
  watermarkClassName = "",
  badgeClassName = "",
  headingClassName = "",
  descriptionClassName = "",
}: SectionHeaderProps) {
  // GSAP Animations
  const badgeRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.1,
    useScrollTrigger: true,
  });

  const headingRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 0.8,
    delay: 0.3,
    useScrollTrigger: true,
  });

  const descriptionRef = useGsapFadeIn<HTMLParagraphElement>({
    direction: "up",
    distance: 20,
    duration: 0.8,
    delay: 0.5,
    useScrollTrigger: true,
  });

  return (
    <div className={`relative mb-12 md:mb-16 ${containerClassName}`}>
      {/*--====-- Background Watermark Text (H1) --====--*/}
      {showH1Watermark && h1WatermarkText && (
        <div
          className={`absolute inset-0 flex items-center justify-center pointer-events-none  ${watermarkClassName}`}
        >
          <h1 className="text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold whitespace-nowrap text-acGraylight2">
            {h1WatermarkText}
          </h1>
        </div>
      )}

      <div className="relative z-10">
        {/*--====-- Badge with Icon --====--*/}
        {showBadge && badgeText && (
          <div
            ref={badgeRef}
            className="mb-6 w-fit mx-auto flex justify-center relative overflow-hidden rounded-full"
            style={{ opacity: 0 }}
          >
            <span
              className={` inline-flex text-foreground items-center rounded-full space-x-2 px-4 py-2 border-2 border-theme-start/50  bg-acOp01 backdrop-blur-[9px]  transition-all duration-300 ${badgeClassName}`}
            >
              {/*--====-- Badge Icon (Sparkles default) --====--*/}
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">{badgeText}</span>
            </span>
            <span className="absolute bg-linear-to-r from-theme-start to-theme-end w-[30%] -z-10 h-full left-0"></span>
          </div>
        )}

        {/*--====-- Main Heading (H2) --====--*/}
        {showH2 && (
          <div
            ref={headingRef}
            className="text-center mb-12 md:mb-16"
            style={{ opacity: 0 }}
          >
            <h2
              className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight ${headingClassName}`}
            >
              {highlightText && (
                <span className="gradient-text">{highlightText}</span>
              )}{" "}
              {h2Text}
            </h2>

            {/*--====-- Description Text --====--*/}
            {description && (
              <p
                ref={descriptionRef}
                className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-6 ${descriptionClassName}`}
                style={{ opacity: 0 }}
              >
                {description}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
