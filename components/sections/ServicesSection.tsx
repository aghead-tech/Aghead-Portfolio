/*--====-- Services Section Component --====--*/
"use client";

import React from "react";
import {
  Code,
  Smartphone,
  Database,
  Network,
  Zap,
  Headphones,
} from "lucide-react";
import { ServiceCard } from "../ui/ServiceCard";
import { SectionHeader2 } from "../ui/SectionHeader2";
import { useGsapStagger } from "../../hooks/useGsapStagger";

/*--====-- Icon Mapping --====--*/
const iconMap: Record<string, React.ComponentType<any>> = {
  Code,
  Smartphone,
  Database,
  Network,
  Zap,
  Headphones,
};

interface Service {
  id: number;
  title: string;
  description: string;
  icon: string | React.ComponentType<any>;
}

interface ServicesSectionProps {
  badgeText: string;
  watermarkText: string;
  mainText: string;
  highlightText: string;
  description: string;
  services: Service[];
}

export function ServicesSection({
  badgeText,
  watermarkText,
  mainText,
  highlightText,
  description,
  services,
}: ServicesSectionProps) {
  // Stagger animation for service cards - one by one with scroll trigger
  const servicesGridRef = useGsapStagger<HTMLDivElement>({
    direction: "up",
    distance: 40,
    duration: 0.8,
    stagger: 0.15,
    delay: 1.2,
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
          showDescription={true}
          description={description}
          alignment="center"
          headingLayout="right"
          descriptionClassName="mx-auto"
        />

        {/*--====-- Services Grid --====--*/}
        <div
          ref={servicesGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-7xl mx-auto *:opacity-0"
        >
          {services.map((service) => {
            // Handle both string (iconMap lookup) and direct component icons
            const Icon =
              typeof service.icon === "string"
                ? iconMap[service.icon]
                : service.icon;
            return (
              <ServiceCard
                key={service.id}
                icon={Icon}
                title={service.title}
                description={service.description}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
