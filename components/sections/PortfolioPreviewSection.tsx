/*--====-- Portfolio Preview Section --====--*/
"use client";
import React from "react";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/Button";
import { SectionHeader2 } from "../ui/SectionHeader2";
import { ProjectCard } from "../ui/ProjectCard";
import { useGsapStagger } from "../../hooks/useGsapStagger";

interface Project {
  id: number;
  title: string;
  image: string;
  technologies: string[];
}

interface PortfolioPreviewSectionProps {
  badgeIcon?: any; // LucideIcon - now optional
  badgeText: string;
  watermarkText: string;
  mainText: string;
  highlightText: string;
  projects: Project[];
  buttonText: string;
}

export function PortfolioPreviewSection({
  badgeText,
  watermarkText,
  mainText,
  highlightText,
  projects,
  buttonText,
}: PortfolioPreviewSectionProps) {
  // Stagger animation for project cards
  const projectsGridRef = useGsapStagger<HTMLDivElement>({
    direction: "none",
    duration: 1,
    stagger: 0.2,
    delay: 0.4,
    ease: "power3.out",
    useScrollTrigger: true,
  });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/*--====-- Header Row: Section Header (Left) + View All Button (Right) --====--*/}
        <div className="flex">
          {/*--====-- Left: Section Header --====--*/}
          <div className="block w-[60%]">
            <SectionHeader2
              showBadge={true}
              badgeText={badgeText}
              showWatermark={true}
              watermarkText={watermarkText}
              mainText={mainText}
              highlightText={highlightText}
              showDescription={false}
              alignment="left"
              headingClassName="w-auto md:w-[60%]"
            />
          </div>
        </div>

        {/*--====-- Project Cards Grid --====--*/}
        <div
          ref={projectsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-7xl mx-auto"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              image={project.image}
              technologies={project.technologies}
            />
          ))}
        </div>

        {/*--====-- View All Button (Mobile) --====--*/}
        <div className="text-center mt-12">
          <Button
            asLink
            to="/projects"
            variant="primary"
            size="md"
            rightIcon={ArrowRight}
          >
            {buttonText}
          </Button>
        </div>
      </div>
    </section>
  );
}
