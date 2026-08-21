/*--====-- About Preview Section --====--*/
"use client";
import React from "react";
import Image from "next/image";

import { Button } from "../ui/Button";
import { SectionHeader2 } from "../ui/SectionHeader2";
import VerifiedBadgeIcon from "@/public/images/icons/VerifiedBadgeIcon";
import DownloadIcon from "@/public/images/icons/DownloadIcon";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";

interface AboutPreviewSectionProps {
  badgeIcon?: any; // LucideIcon type - now optional
  badgeText: string;
  watermarkText?: string;
  mainText: string;
  highlightText: string;
  description: string;
  stats: { label: string }[];
  buttonText: string;
  showAbstractMarkIcon?: boolean;
}

export function AboutPreviewSection({
  badgeText,
  watermarkText,
  mainText,
  highlightText,
  description,
  stats,
  buttonText,
  showAbstractMarkIcon = true,
}: AboutPreviewSectionProps) {
  const image = "/images/hero/Img.png";

  /*--====-- Fade in animation for profile image --====--*/
  const profileImageRef = useGsapFadeIn<HTMLDivElement>({
    direction: "left",
    distance: 50,
    duration: 1.2,
    delay: 0.2,
    useScrollTrigger: true,
  });

  /*--====-- Fade in animations for right side content --====--*/
  const descriptionRef = useGsapFadeIn<HTMLParagraphElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.4,
    useScrollTrigger: true,
  });

  const statsRef = useGsapFadeIn<HTMLUListElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.6,
    useScrollTrigger: true,
  });

  const buttonRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.8,
    useScrollTrigger: true,
  });

  return (
    <section className="py-30 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex lg:flex-row flex-col gap-12  items-center md:items-end">
          {/*--====-- Left Side: Profile Image --====--*/}
          <div className="relative flex items-center mx-auto overflow-hidden px-5  w-[280px] sm:w-sm lg:w-7xl xl:w-3xl">
            <div className="flex w-full">
              <div
                ref={profileImageRef}
                className="opacity-0 relative sm:scale-100 scale-95 bottom-[-11px] sm:bottom-0 z-10 w-full h-auto"
              >
                <Image
                  src={image}
                  alt="Aghead - Full-Stack Developer"
                  width={600}
                  height={700}
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 500px"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="absolute bottom-0 w-full left-0 h-[75%]  overflow-hidden  rounded-t-[200px] ">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wave.svg')]"></div>
              <span className="bg-linear-to-br from-theme-start to-theme-end block w-full h-full"></span>
            </div>
          </div>

          {/*--====-- Right Side: About Content --====--*/}
          <div className="space-y-6">
            <SectionHeader2
              showBadge={true}
              badgeText={badgeText}
              showWatermark={true}
              watermarkText={watermarkText}
              mainText={mainText}
              highlightText={highlightText}
              showDescription={false}
              alignment="left"
              showAbstractMarkIcon={showAbstractMarkIcon}
              abstractMarkClassName="top-[-24px] right-[-50px] scale-75 md:scale-100"
            />

            <p
              ref={descriptionRef}
              className="text-lg text-muted-foreground opacity-0"
            >
              {description}
            </p>

            <ul ref={statsRef} className="space-y-3 opacity-0">
              {stats.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <VerifiedBadgeIcon />
                  <span className="text-base md:text-lg text-muted-foreground">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>

            <div ref={buttonRef} className="opacity-0">
              <Button
                asLink
                to="/about"
                variant="primary"
                size="md"
                rounded="lg"
                rightIcon={DownloadIcon}
              >
                {buttonText}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
