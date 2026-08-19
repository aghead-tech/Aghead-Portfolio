/*--====-- Hero Section --====--*/
"use client";
import React from "react";
import Image from "next/image";
import { Button } from "../ui/Button";
import { SocialLinks } from "../ui/SocialLinks";
import { SectionHeader2 } from "../ui/SectionHeader2";
import { contactData } from "../../data/contactData";
import Shape from "@/public/images/icons/Shape";
import ArrowRightIcon from "@/public/images/icons/ArrowRightIcon";
import SendIcon from "@/public/images/icons/SendIcon";
import Send2Icon from "@/public/images/icons/Send2Icon";
import { useGsapStagger } from "../../hooks/useGsapStagger";
import { useGsapFloat } from "../../hooks/useGsapFloat";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";

interface HeroSectionProps {
  availabilityBadgeText: string;
  highlightText: string;
  title1: string;
  title2: string;
  emojiImage: string;
  description: string;
  primaryButtonText: string;
  primaryButtonLink: string;
  secondaryButtonText: string;
  secondaryButtonLink: string;
  profileImageSrc: string;
  profileImageAlt: string;
  floatingBadges?: { text: string; position: string }[];
  rotatingBadgeText?: string;
  socialLinks?: typeof contactData.socialLinks;
}

export function HeroSection({
  availabilityBadgeText,
  highlightText,
  title1,
  title2,
  emojiImage,
  description,
  primaryButtonText,
  primaryButtonLink,
  secondaryButtonText,
  secondaryButtonLink,
  profileImageSrc,
  profileImageAlt,
  floatingBadges = [],
  rotatingBadgeText = "HIRE ME",
  socialLinks = contactData.socialLinks,
}: HeroSectionProps) {
  //_--====-- Fade in animations for hero content (left side) --====--_//
  const titleRef = useGsapFadeIn<HTMLHeadingElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.9,
  });

  const descriptionRef = useGsapFadeIn<HTMLParagraphElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 1.2,
  });

  const ctaButtonsRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 1.3,
  });

  //_--====-- Fade in animations for right side content --====--_//
  const backgroundImageRef = useGsapFadeIn<HTMLImageElement>({
    direction: "none",
    distance: 50,
    duration: 1.2,
    delay: 1.6,
  });

  //_--====-- Fade in animations for right side content --====--_//
  const profileImageRef = useGsapFadeIn<HTMLImageElement>({
    direction: "right",
    distance: 50,
    duration: 1.2,
    delay: 1.9,
  });

  //_--====-- Use stagger animation for badges (triggers after preloader completes) --====--_//
  const badgesContainerRef = useGsapStagger<HTMLDivElement>({
    direction: "none",
    useScrollTrigger: true,
    stagger: 0.15,
    delay: 2.2, // Match preloader duration
  });

  //_--====-- Floating up/down loop animation for E-Commerce badge --====--_//
  const eCommerceBadgeRef = useGsapFloat<HTMLDivElement>({
    distance: 10,
    duration: 2.5,
    delay: 2.6, // Start after stagger animation completes
  });

  //_--====-- Floating up/down loop animation for FinTech badge --====--_//
  const finTechBadgeRef = useGsapFloat<HTMLDivElement>({
    distance: 8,
    duration: 2,
    delay: 2.8, // Slightly offset for natural movement
  });

  return (
    <section className="relative bg-background ">
      <div className="relative flex items-center overflow-hidden ">
        {/*--====-- Background Elements --====--*/}
        <div className="absolute inset-0 bg-grid-pattern opacity-[0.02]"></div>

        {
          //_--====-- Vertical Social Links Sidebar --====--_//
        }
        <div className="absolute left-0 top-0 bottom-0 hidden xl:flex items-center z-20">
          <div className="pl-1 xl:pl-2 2xl:pl-4">
            <SocialLinks
              links={socialLinks}
              variant="acbox1"
              size="md"
              className="flex-col space-y-4 space-x-0 "
              roundedAc="rounded-[10px]"
              textColor="text-foreground "
            />
          </div>
        </div>
        {/*--====-- Animation Hooks --====--*/}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-14 relative overflow-hidden z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/*--====-- Floating Badges --====--*/}
            <div className="space-y-8 lg:space-y-10 mb-10 md:mb-20">
              {
                //_--====-- Section Header with Badge --====--_//
              }
              <SectionHeader2
                showBadge={true}
                badgeText={availabilityBadgeText}
                showWatermark={false}
                mainText=""
                highlightText={highlightText}
                showDescription={false}
                alignment="left"
                showAbstractMarkIcon={true}
                containerClassName="mb-0"
                headingClassName="!text-[36px] md:!text-[68px]"
                abstractMarkClassName="top-[-24px] right-[-50px] scale-70 md:scale-100"
              />

              {
                //_--====-- Job Title and Description Lines --====--_//
              }
              <h3
                ref={titleRef}
                className="opacity-0 text-3xl md:text-4xl lg:text-6xl  font-medium leading-tight"
              >
                {title1}{" "}
                <span className="inline-flex items-center justify-center p-0.5 lg:p-1  bg-linear-to-r from-theme-start to-theme-end rounded-full align-middle mx-1">
                  <Image
                    src={emojiImage}
                    alt="hero icon"
                    width={56}
                    height={70}
                    className="w-12 h-8 md:w-20 md:h-10 lg:w-24 lg:h-14 rounded-full border-2 border-white object-cover"
                  />
                </span>{" "}
                {title2}
              </h3>

              {
                //_--====-- Description --====--_//
              }
              <p
                ref={descriptionRef}
                className="opacity-0 text-base md:text-lg text-acGraylight  max-w-xl leading-relaxed"
              >
                {description}
              </p>

              {
                //_--====-- CTA Buttons --====--_//
              }
              <div
                ref={ctaButtonsRef}
                className="opacity-0 flex flex-wrap gap-4 pt-2"
              >
                <Button
                  asLink
                  to={primaryButtonLink}
                  variant="primary"
                  size="md"
                  rightIcon={<ArrowRightIcon />}
                >
                  {primaryButtonText}
                </Button>
                <Button
                  asLink
                  to={secondaryButtonLink}
                  variant="outline"
                  size="md"
                >
                  {secondaryButtonText}
                </Button>
              </div>
            </div>

            {
              //_--====-- Right Content - Professional Image with Badges --====--_//
            }
            <div className="relative z-10 flex items-center top-0 lg:top-[100px] xl:top-[42px] 2xl:top-[5px] justify-center overflow-hidden lg:overflow-visible">
              {
                //_--====-- Professional Image Container --====--_//
              }
              <div className="relative w-full max-w-[280px]  sm:max-w-sm md:max-w-md lg:max-w-md  mx-auto lg:mx-0">
                <div
                  ref={profileImageRef}
                  className="opacity-0 relative z-10 w-full h-auto"
                >
                  <Image
                    src={profileImageSrc}
                    alt={profileImageAlt}
                    width={600}
                    height={700}
                    priority
                    className="w-full h-auto object-cover"
                  />
                </div>
                {
                  //_--====-- Animated Badges Container --====--_//
                }
                <div ref={badgesContainerRef} className="contents">
                  {
                    //_--====-- Circular Rotating "HIRE ME" Badge --====--_//
                  }
                  <div className="opacity-0 absolute top-[50px] -right-[6px] sm:top-[80px] sm:right-[9px] md:top-[90px] md:-right-[10px] lg:top-[70px] lg:right-[-10px] w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 z-20">
                    <div className="relative w-full h-full flex items-center justify-center">
                      {
                        //_--====-- Outer Black Ring --====--_//
                      }
                      <div className="absolute inset-0 rounded-full border-3 sm:border-4 border-card"></div>

                      {
                        //_--====-- White Background --====--_//
                      }
                      <div className="absolute inset-[3px] sm:inset-1 rounded-full bg-foreground"></div>

                      {
                        //_--====-- Rotating Text with Dots --====--_//
                      }
                      <div className="absolute inset-0 animate-spin-slow">
                        <svg className="w-full h-full" viewBox="0 0 130 130">
                          <defs>
                            <path
                              id="circlePath"
                              d="M 65, 65 m -48, 0 a 48,48 0 1,1 96,0 a 48,48 0 1,1 -96,0"
                            />
                          </defs>
                          {
                            //_--====-- HIRE ME Text 1 (Top) --====--_//
                          }
                          <text
                            fill="var(--background)"
                            fontSize="14"
                            fontWeight="600"
                            letterSpacing="0.2em"
                            dominantBaseline="hanging"
                          >
                            <textPath xlinkHref="#circlePath" startOffset="4%">
                              {rotatingBadgeText}
                            </textPath>
                          </text>
                          {
                            //_--====-- Orange Dot 1 (After Text 1) --====--_//
                          }
                          <circle
                            cx="85"
                            cy="26"
                            r="4.5"
                            className="fill-theme-start"
                          />
                          {
                            //_--====-- HIRE ME Text 2 (Bottom Right) --====--_//
                          }
                          <text
                            fill="var(--background)"
                            fontSize="14"
                            fontWeight="600"
                            letterSpacing="0.2em"
                            dominantBaseline="hanging"
                          >
                            <textPath xlinkHref="#circlePath" startOffset="37%">
                              {rotatingBadgeText}
                            </textPath>
                          </text>
                          {
                            //_--====-- Orange Dot 2 (After Text 2) --====--_//
                          }
                          <circle
                            cx="89"
                            cy="99"
                            r="4.5"
                            className="fill-theme-start"
                          />
                          {
                            //_--====-- HIRE ME Text 3 (Bottom Left) --====--_//
                          }
                          <text
                            fill="var(--background)"
                            fontSize="14"
                            fontWeight="600"
                            letterSpacing="0.2em"
                            dominantBaseline="hanging"
                          >
                            <textPath xlinkHref="#circlePath" startOffset="70%">
                              {rotatingBadgeText}
                            </textPath>
                          </text>
                          {
                            //_--====-- Orange Dot 3 (After Text 3) --====--_//
                          }
                          <circle
                            cx="23"
                            cy="68"
                            r="4.5"
                            className="fill-theme-start"
                          />
                        </svg>
                      </div>

                      {
                        //_--====-- Center Gradient Circle with Arrow --====--_//
                      }
                      <div className="absolute  -rotate-45  md:w-11 md:h-11 w-8 h-8 rounded-full bg-linear-to-br from-theme-start to-theme-end flex items-center justify-center shadow-lg">
                        <ArrowRightIcon width={20} height={20}></ArrowRightIcon>
                      </div>
                    </div>
                  </div>

                  {
                    //_--====-- E-Commerce Badge (Right Side) --====--_//
                  }
                  <div
                    ref={eCommerceBadgeRef}
                    className=" opacity-0 absolute top-[55%] right-[2%] lg:right-[8%] xl:right-[-12%] z-20"
                  >
                    <span className="absolute top-[-40%] left-[-20%]">
                      <Send2Icon className="w-5 h-5 md:w-6 md:h-6"></Send2Icon>
                    </span>

                    <div className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2.5 text-background bg-foreground rounded-full shadow-xl backdrop-blur-sm  transition-all duration-300">
                      <span className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
                        {
                          floatingBadges.find((b) => b.position === "right")
                            ?.text
                        }
                      </span>
                    </div>
                  </div>

                  {
                    //_--====-- FinTech Badge (Left Side) --====--_//
                  }
                  <div
                    ref={finTechBadgeRef}
                    className=" opacity-0 absolute top-[77%] left-[10%]  z-20"
                  >
                    <span className="absolute top-[-40%] left-[-20%]">
                      <SendIcon className="w-5 h-5 md:w-6 md:h-6"></SendIcon>
                    </span>
                    <div className="px-4 sm:px-5 md:px-6 py-1.5 sm:py-2.5  bg-linear-to-r from-theme-start to-theme-end text-white rounded-full shadow-xl">
                      <span className="font-semibold text-xs sm:text-sm md:text-base whitespace-nowrap">
                        {
                          floatingBadges.find((b) => b.position === "left")
                            ?.text
                        }
                      </span>
                    </div>
                  </div>
                </div>
                {
                  //_--====-- Large Orange Circle Background --====--_//
                }
                <div
                  ref={backgroundImageRef}
                  className="opacity-0 absolute overflow-hidden top-1/2 right-1/2 translate-x-1/2 sm:right-[104px] sm:translate-x-1/3 md:right-[60px] md:translate-x-1/4 lg:right-[-100px] lg:translate-x-0 -translate-y-1/2 z-0"
                >
                  <Shape className=" sm:w-[560px] sm:h-[500px] md:w-[660px] md:h-[600px] w-[400px] h-[350px]"></Shape>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*--====-- Bottom Fade Effect --====--*/}
        <div className="z-1 absolute bottom-[-240px] left-[-240px]">
          <span className="w-[380px] h-[380px] blur-[300px]  rounded-full bg-linear-to-r from-theme-start to-theme-end flex"></span>
        </div>
      </div>
      {
        //_--====-- Grid Background (switches based on theme) --====--_//
      }
      <div className="absolute inset-0 top-[-100px] pointer-events-none bg-[url('/images/WhiteGrid.svg')] dark:bg-[url('/images/DarkGrid.svg')] bg-no-repeat bg-cover opacity-50 dark:opacity-60"></div>
    </section>
  );
}
