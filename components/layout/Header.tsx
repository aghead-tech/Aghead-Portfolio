/*--====-- Header Component --====--*/
"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button } from "../ui/Button";
import { headerData, NavLink } from "../../data/layoutData";
import { FlameIcon } from "../../public/images/icons/FlameIcon";
import ArrowRightIcon from "../../public/images/icons/ArrowRightIcon";
import { useHeaderScrollAnimation } from "../../hooks/useHeaderScrollAnimation";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";
import { useGsapStagger } from "../../hooks/useGsapStagger";

interface HeaderProps {
  logo?: typeof headerData.logo;
  navLinks?: NavLink[];
  cta?: typeof headerData.cta;
}

export function Header({
  logo = headerData.logo,
  navLinks = headerData.navLinks,
  cta = headerData.cta,
}: HeaderProps = {}) {
  const router = useRouter();
  const isActive = (path: string) => router.pathname === path;
  const { headerRef } = useHeaderScrollAnimation();

  /*--====-- Animations --====--*/
  const logoRef = useGsapFadeIn<HTMLDivElement>({
    direction: "down",
    distance: 20,
    delay: 0.4,
  });

  const navRef = useGsapStagger<HTMLElement>({
    direction: "down",
    distance: 20,
    stagger: 0.1,
    delay: 0.6,
  });

  const ctaRef = useGsapFadeIn<HTMLDivElement>({
    direction: "down",
    distance: 20,
    delay: 1.2,
  });

  return (
    <header ref={headerRef} className="sticky top-0 z-50 h-[70px] md:h-[100px]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-center md:justify-between h-full">
          {/*--====-- Logo --====--*/}
          <Link href="/" className="flex items-center space-x-2">
            <div
              ref={logoRef}
              className="flex items-center space-x-2 opacity-0"
              style={{ opacity: 0 }}
            >
              <div className="w-10 h-10 from-theme-start to-theme-end flex items-center justify-center">
                <FlameIcon />
              </div>
              <span className="text-xl font-bold gradient-text">
                {logo.name}
              </span>
            </div>
          </Link>

          {/*--====-- Desktop Navigation --====--*/}
          <nav ref={navRef} className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`opacity-0 relative text-lg md:px-1.5 lg:px-4 py-2 rounded-lg acTransition font-medium ${
                  isActive(link.path)
                    ? "text-transparent bg-clip-text acTransition bg-linear-to-r from-theme-start to-theme-end after:w-full"
                    : "text-foreground hover:text-transparent hover:bg-clip-text hover:bg-linear-to-r hover:from-theme-start hover:to-theme-end hover:after:w-full after:w-0"
                } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-linear-to-r after:from-theme-start after:to-theme-end after:transition-all after:duration-300`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/*--====-- Right Actions --====--*/}
          <div className="flex items-center space-x-2">
            {/*--====-- Desktop CTA Button --====--*/}
            <div
              ref={ctaRef}
              className="hidden md:block opacity-0"
              style={{ opacity: 0 }}
            >
              <Button
                asLink
                to={cta.path}
                variant="primary"
                size="md"
                rounded="full"
                className="group"
              >
                <span className="flex items-center gap-2">
                  {cta.text}
                  <ArrowRightIcon className="hidden lg:block transition-transform group-hover:translate-x-1" />
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
