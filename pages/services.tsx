import { servicesData, servicesPageHeader } from "@/data/servicesData";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { SEO } from "@/components/layout/SEO";

/*--====-- Services Page Component --====--*/
export default function Services() {
  return (
    <>
      <SEO title="Services" description="Professional services I offer." />
      <div className="min-h-screen bg-background text-foreground">
        {/*--====-- Services Section --====--*/}
        <ServicesSection
          badgeText={servicesPageHeader.badgeText}
          watermarkText={servicesPageHeader.watermarkText}
          mainText={servicesPageHeader.mainText}
          highlightText={servicesPageHeader.highlightText}
          description={servicesPageHeader.description}
          services={servicesData}
        />
      </div>
    </>
  );
}
