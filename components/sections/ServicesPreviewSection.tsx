/*--====-- Services Preview Section --====--*/
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
import { SectionHeader2 } from "../ui/SectionHeader2";
import { ServiceCard } from "../ui/ServiceCard";
import CodeMonitorIcon from "@/public/images/icons/CodeMonitorIcon";
import { useGsapStagger } from "../../hooks/useGsapStagger";

const iconMap: Record<string, any> = {
  Code,
  Smartphone,
  Database,
  Network,
  Zap,
  Headphones,
  CodeMonitorIcon,
};

interface Service {
  id: string | number;
  icon: string | React.ComponentType<any>;
  title: string;
  description: string;
}

interface ServicesPreviewSectionProps {
  badgeText: string;
  watermarkText: string;
  mainText: string;
  highlightText: string;
  services: Service[];
}

export function ServicesPreviewSection({
  badgeText,
  watermarkText,
  mainText,
  highlightText,
  services,
}: ServicesPreviewSectionProps) {
  // Stagger animation for service cards - one by one with scroll trigger
  const servicesGridRef = useGsapStagger<HTMLDivElement>({
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

        {/*--====-- Services Grid --====--*/}
        <div
          ref={servicesGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 max-w-7xl mx-auto"
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
