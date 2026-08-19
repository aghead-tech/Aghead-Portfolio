/*--====-- Section Header 2 Component --====--*/
"use client";
import React from "react";
import { Sparkles, LucideIcon } from "lucide-react";
import AbstractMarkIcon from "@/public/images/icons/AbstractMarkIcon";
import { useGsapFadeIn } from "@/hooks/useGsapFadeIn";

interface SectionHeader2Props {
  showBadge?: boolean;
  badgeIcon?: LucideIcon;
  badgeText?: string;
  showWatermark?: boolean;
  watermarkText?: string;
  mainText?: string;
  highlightText?: string;
  headingLayout?: "left" | "right";
  showDescription?: boolean;
  description?: string;
  alignment?: "left" | "center" | "right";
  // AbstractMarkIcon props
  showAbstractMarkIcon?: boolean;
  abstractMarkColorMode?: "white" | "dark" | "theme";
  abstractMarkClassName?: string;
  // Custom className props for styling
  containerClassName?: string;
  watermarkClassName?: string;
  badgeClassName?: string;
  headingClassName?: string;
  descriptionClassName?: string;
}

export function SectionHeader2({
  showBadge = true,

  badgeText = "",
  showWatermark = true,
  watermarkText = "",
  mainText = "",
  highlightText = "",
  headingLayout = "left",
  showDescription = false,
  description = "",
  alignment = "left",
  showAbstractMarkIcon = false,
  abstractMarkClassName = "top-0 right-0",
  containerClassName = "mb-12 md:mb-16",
  watermarkClassName = "",
  badgeClassName = "",
  headingClassName = "",
  descriptionClassName = "",
}: SectionHeader2Props) {
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

  const alignmentClasses = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  // Variant styles for alignment-based positioning
  const variantStyles = {
    watermark: {
      left: "justify-start",
      center: "justify-center",
      right: "justify-end",
    },
    badge: {
      left: "",
      center: "flex justify-center mx-auto",
      right: "flex justify-end",
    },
    heading: {
      left: "",
      center: "mx-auto",
      right: "ml-auto",
    },
  };

  return (
    <div
      className={`relative  ${alignmentClasses[alignment]} ${containerClassName}`}
    >
      {/*--====-- Background Watermark Text --====--*/}
      {showWatermark && watermarkText && (
        <div
          className={`absolute inset-0 flex items-center ${variantStyles.watermark[alignment]} pointer-events-none -z-10 ${watermarkClassName}`}
        >
          <h1 className="uppercase text-[15vw] md:text-[12vw] lg:text-[10vw] font-bold whitespace-nowrap text-acGraylight2 opacity-90 dark:opacity-85">
            {watermarkText}
          </h1>
        </div>
      )}

      <div className="relative z-10">
        {/*--====-- Badge with Icon --====--*/}
        {showBadge && badgeText && (
          <div
            ref={badgeRef}
            className={`mb-6 relative overflow-hidden rounded-full w-fit ${variantStyles.badge[alignment]} ${badgeClassName}`}
            style={{ opacity: 0 }}
          >
            <span
              className={` inline-flex text-foreground items-center rounded-full space-x-2 px-4 py-2 border-2 border-theme-start  bg-acOp01 backdrop-blur-[10px]  transition-all duration-300 ${badgeClassName}`}
            >
              {/*--====-- Badge Icon (Sparkles default) --====--*/}
              <Sparkles className="w-4 h-4" />
              <span className="font-medium text-sm">{badgeText}</span>
            </span>
            <span className="absolute bg-linear-to-r from-theme-start to-theme-end w-[24%] -z-10 h-full left-0 opacity-30 dark:opacity-100"></span>
          </div>
        )}

        {/*--====-- Main Heading with Gradient Highlight --====--*/}
        <div
          ref={headingRef}
          className={`mb-6 relative w-fit ${variantStyles.heading[alignment]}`}
          style={{ opacity: 0 }}
        >
          <h2
            className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-foreground ${headingClassName}`}
          >
            {headingLayout === "left" ? (
              <>
                {mainText}{" "}
                {highlightText && (
                  <span className="gradient-text">{highlightText}</span>
                )}
              </>
            ) : (
              <>
                {highlightText && (
                  <span className="gradient-text">{highlightText}</span>
                )}{" "}
                {mainText}
              </>
            )}
          </h2>

          {showAbstractMarkIcon && (
            <div className={`absolute ${abstractMarkClassName}`}>
              <AbstractMarkIcon useGradient={true} className="text-white" />
            </div>
          )}
        </div>

        {/*--====-- Description Text --====--*/}
        {showDescription && description && (
          <p
            ref={descriptionRef}
            className={`text-base md:text-lg text-muted-foreground max-w-3xl leading-relaxed ${descriptionClassName}`}
            style={{ opacity: 0 }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
