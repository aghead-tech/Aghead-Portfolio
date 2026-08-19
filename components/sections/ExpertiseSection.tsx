/*--====-- Expertise Section --====--*/
import React from "react";
import { LucideIcon } from "lucide-react";
import { SectionHeader2 } from "../ui/SectionHeader2";
import { useGsapStagger } from "../../hooks/useGsapStagger";

interface SkillCategory {
  id: number;
  category: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
  skills: string[];
}

interface ExpertiseSectionProps {
  badgeIcon?: any;
  badgeText: string;
  watermarkText: string;
  mainText: string;
  highlightText?: string;
  skills: SkillCategory[];
}

export function ExpertiseSection({
  badgeText,
  watermarkText,
  mainText,
  highlightText,
  skills,
}: ExpertiseSectionProps) {
  // Stagger animation for skill cards
  const skillsGridRef = useGsapStagger<HTMLDivElement>({
    direction: "up",
    distance: 40,
    duration: 0.8,
    stagger: 0.2,
    delay: 0.5,
    useScrollTrigger: true,
  });

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/*--====-- Section Header Component --====--*/}
        <SectionHeader2
          badgeText={badgeText}
          showWatermark={true}
          watermarkText={watermarkText}
          mainText={mainText}
          highlightText={highlightText}
          alignment="center"
          headingLayout="right"
        />
        {/*--====-- content --====--*/}
        <div
          ref={skillsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto"
        >
          {skills.map((skillCategory) => {
            const IconComponent = skillCategory.icon;

            return (
              <div key={skillCategory.id} className="relative">
                <div className=" p-6 sm:p-7 bg-acGraylight2/94 backdrop-blur-[20px] z-10 rounded-3xl border-2 border-acDarkGray hover:border-theme-start transition-all duration-300 group">
                  {/*--====-- Icon in Box --====--*/}
                  <div className="mb-6">
                    <div className="w-16 h-16 rounded-full bg-acWD flex items-center justify-center ">
                      {IconComponent && (
                        <IconComponent
                          className="w-8 h-8 text-foreground"
                          width={32}
                          height={32}
                        />
                      )}
                    </div>
                  </div>

                  {/*--====-- Category Title --====--*/}
                  <h3 className="text-xl xl:text-2xl font-semibold mb-3 text-foreground line-clamp-none sm:line-clamp-1">
                    {skillCategory.category}
                  </h3>

                  {/*--====-- Skills as Pill Badges --====--*/}
                  <div className="flex flex-wrap gap-2">
                    {skillCategory.skills.map((skill, index) => {
                      return (
                        <span
                          key={index}
                          className="px-4 py-2 border-2 border-acDarkGray rounded-[14px] text-sm font-medium transition-all duration-300 bg-muted text-muted-foreground hover:bg-linear-to-r hover:from-theme-start hover:to-theme-end hover:text-white  hover:shadow-theme-start/30 cursor-default"
                        >
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
                {/*--====-- Thick Gradient Left Accent Line --====--*/}
                <div className="absolute left-[-7px] z-[-1] top-8 bottom-8 w-[70px] h-[70px] bg-linear-to-b from-theme-start to-theme-end rounded-[8px] shadow-[0_0_1px_1px_var(--color-theme-start)]/10 blur-[1px]"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
