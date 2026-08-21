/*--====-- Footer Component --====--*/
"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useGsapFadeIn, useGsapStagger, useGsapTimeline } from "@/hooks";
import { SocialLinks } from "../ui/SocialLinks";
import { Button } from "../ui/Button";
import {
  footerData,
  SocialLink,
  ContactInfo,
  FooterLink,
} from "../../data/layoutData";
import { FlameIcon } from "@/public/images/icons/FlameIcon";
import DoubleArrowRightIcon from "@/public/images/icons/DoubleArrowRightIcon";
import CurvedArrowIcon from "@/public/images/icons/CurvedArrowIcon";

interface FooterProps {
  brand?: typeof footerData.brand;
  cta?: typeof footerData.cta;
  columnHeadings?: typeof footerData.columnHeadings;
  navigationLinks?: FooterLink[];
  socialLinks?: SocialLink[];
  contact?: ContactInfo[];
  newsletter?: typeof footerData.newsletter;
  copyright?: typeof footerData.copyright;
  legalLinks?: FooterLink[];
}

export function Footer({
  brand = footerData.brand,
  cta = footerData.cta,
  columnHeadings = footerData.columnHeadings,
  navigationLinks = footerData.navigationLinks,
  socialLinks = footerData.socialLinks,
  contact = footerData.contact,
  newsletter = footerData.newsletter,
  copyright = footerData.copyright,
  legalLinks = footerData.legalLinks,
}: FooterProps = {}) {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState("");

  // GSAP Animation Hooks
  const footerRef = useGsapFadeIn<HTMLDivElement>({
    direction: "none",
    useScrollTrigger: false,
  });
  const brandNameRef = useGsapFadeIn<HTMLSpanElement>({
    direction: "up",
    useScrollTrigger: true,
    triggerRef: footerRef as any,
    duration: 0.8,
  });
  const descriptionRef = useGsapFadeIn<HTMLParagraphElement>({
    direction: "up",
    useScrollTrigger: true,
    triggerRef: footerRef as any,
    duration: 0.8,
    delay: 0.3,
  });
  const socialLinksRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    useScrollTrigger: true,
    triggerRef: footerRef as any,
    duration: 0.8,
    delay: 0.6,
  });
  const navLinksRef = useGsapStagger<HTMLUListElement>({
    direction: "left",
    useScrollTrigger: true,
  });
  const contactLinksRef = useGsapStagger<HTMLUListElement>({
    direction: "left",
    useScrollTrigger: true,
  });
  const newsletterFormRef = useGsapStagger<HTMLFormElement>({
    direction: "none",
    useScrollTrigger: true,
    stagger: 0.15,
  });

  // CTA Section Animations
  const ctaTitleRef = useGsapFadeIn<HTMLHeadingElement>({
    direction: "left",
    distance: 30,
    duration: 0.8,
    useScrollTrigger: true,
  });
  const ctaButtonRef = useGsapFadeIn<HTMLDivElement>({
    direction: "right",
    distance: 30,
    duration: 0.8,
    useScrollTrigger: true,
  });

  /*--====-- Handle Newsletter Subscription --====--*/
  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email);
    setEmail("");
  };

  return (
    <footer className="bg-background">
      {/*--====-- CTA Section --====--*/}
      <div className="bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 border-b border-border pb-10 md:pb-12">
            <h2
              ref={ctaTitleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-bold"
            >
              {cta.title.text}
              <span className="gradient-text">{cta.title.highlight}</span>
              {cta.title.suffix}
            </h2>
            <div ref={ctaButtonRef}>
              <Button asLink to={cta.button.path} variant="primary" size="lg">
                {cta.button.text}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/*--====-- Main Footer Content --====--*/}
      <div ref={footerRef} className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <div className="grid grid-cols-1 md:grid-cols-2  gap-12 lg:flex justify-between">
            {/*--====-- Brand Column --====--*/}
            <div className="space-y-6 w-auto lg:w-[25%]">
              {/* Logo + Brand Name */}
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 flex items-center justify-center">
                  <FlameIcon />
                </div>
                <span
                  ref={brandNameRef}
                  className="text-2xl font-bold gradient-text"
                >
                  {brand.name}
                </span>
              </div>

              {/* Description */}
              <p
                ref={descriptionRef}
                className="text-acGraylight leading-relaxed text-lg font-normal"
              >
                {brand.description}
              </p>

              {/* Social Media Icons */}
              <div ref={socialLinksRef} className="space-y-4 ">
                <p className="font-medium ">
                  <span className="text-foreground">{brand.followOnText}</span>
                </p>
                <SocialLinks links={socialLinks} size="md" />
              </div>
            </div>

            {/*--====-- Navigation Column --====--*/}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="font-semibold text-xl gradient-text">
                  {columnHeadings.navigation}
                </h3>
                <div className="relative w-full h-[2px] bg-aclight2 top-2 rounded-full">
                  <span className="absolute left-0 top-0  rounded-full  w-[44%] h-[3px] bg-theme-start"></span>
                </div>
              </div>

              <ul ref={navLinksRef} className="space-y-3">
                {navigationLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={link.path}
                      className="text-acGraylight transition-colors flex items-center space-x-2 group"
                    >
                      <DoubleArrowRightIcon className="w-4 h-4 text-theme-start" />
                      <span className="group-hover:translate-x-1 text-base transition-transform group-hover:text-theme-start">
                        {link.name}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/*--====-- Contact Column --====--*/}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="font-semibold text-xl gradient-text">
                  {columnHeadings.contact}
                </h3>
                <div className="relative w-full h-[2px] bg-aclight2 top-2 rounded-full">
                  <span className="absolute left-0 top-0  rounded-full  w-[44%] h-[3px] bg-theme-start"></span>
                </div>
              </div>

              <ul ref={contactLinksRef} className="space-y-4">
                {contact.map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <item.icon className="w-5 h-5 text-theme-start mt-0.5" />
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-acGraylight hover:text-theme-start transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <span className="text-acGraylight cursor-pointer hover:text-theme-start transition-colors">
                        {item.value}
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/*--====-- Newsletter Column --====--*/}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="font-semibold text-xl gradient-text">
                  {newsletter.title}
                </h3>
                <div className="relative w-full h-[2px] bg-aclight2 top-2 rounded-full">
                  <span className="absolute left-0 top-0  rounded-full  w-[44%] h-[3px] bg-theme-start"></span>
                </div>
              </div>

              <form
                ref={newsletterFormRef}
                onSubmit={handleNewsletterSubmit}
                className="flex flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={newsletter.placeholder}
                  className="flex-1 px-4 py-3 bg-acGraylight2 border-2 border-acDarkGray rounded-lg focus:outline-none focus:border-theme-start transition-colors text-base font-medium"
                  required
                />
                <Button
                  type="submit"
                  variant="primary"
                  rounded="lg"
                  ariaLabel={newsletter.buttonLabel}
                  className="w-[50px] h-[50px] p-0 flex-none"
                >
                  <CurvedArrowIcon className="w-5 h-5" />
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/*--====-- Bottom Bar (Copyright Area) --====--*/}
        <div className="relative overflow-hidden bg-linear-to-r from-theme-start to-theme-end mb-28 md:mb-auto">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wave.svg')]"></div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-5 relative z-10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-white">
              <p className="text-base text-acDark text-center md:text-left cursor-pointer">
                © {currentYear}
                <span className="font-semibold ml-1">{copyright.text}</span>
              </p>
              <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                {legalLinks.map((link, index) => (
                  <Link
                    key={index}
                    href={link.path}
                    className="text-base text-acDark  hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
