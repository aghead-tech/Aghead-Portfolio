/*--====-- Call to Action Section --====--*/
"use client";
import { Button } from "../ui/Button";
import { PhysicsBadges } from "../ui/PhysicsBadges";
import ArrowRightIcon from "@/public/images/icons/ArrowRightIcon";
import { useGsapFadeIn } from "../../hooks/useGsapFadeIn";

interface CTASectionProps {
  heading: {
    beforeText: string;
    highlightText: string;
    afterText: string;
  };
  button: {
    text: string;
    link: string;
  };
  technologies: string[][];
}

export function CTASection({ heading, button, technologies }: CTASectionProps) {
  // Fade in animation for heading
  const headingRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.2, // Trigger slightly after section enters or immediately
    useScrollTrigger: true,
  });

  // Fade in animation for button
  const buttonRef = useGsapFadeIn<HTMLDivElement>({
    direction: "up",
    distance: 30,
    duration: 1,
    delay: 0.4,
    useScrollTrigger: true,
  });

  return (
    <section className="pt-20  mb-5 bg-acGraylight2 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative ">
        <div className="absolute top-0 left-0 right-0 z-10 pointer-events-none">
          {/*--====-- Main Heading --====--*/}
          <div ref={headingRef} className="text-center mb-12 opacity-0">
            <h2 className="text-3xl  md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
              {heading.beforeText}{" "}
              <span className="gradient-text">{heading.highlightText}</span>
              <br />
              {heading.afterText}
            </h2>
          </div>

          {/*--====-- CTA Button --====--*/}
          <div
            ref={buttonRef}
            className="text-center pointer-events-auto opacity-0"
          >
            <Button
              asLink
              href={button.link}
              variant="primary"
              size="md"
              rightIcon={<ArrowRightIcon />}
            >
              {button.text}
            </Button>
          </div>
        </div>
      </div>

      <div className="relative h-[560px]  md:h-[600px] z-1">
        {/*--====-- Technology Badges Matter JS --====--*/}
        <div className="block h-full px-2 mx-auto text-center">
          <PhysicsBadges technologies={technologies} />
        </div>
      </div>
    </section>
  );
}
