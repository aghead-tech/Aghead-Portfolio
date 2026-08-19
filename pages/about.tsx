import { aboutData } from "@/data/aboutData";
import { SEO } from "@/components/layout/SEO";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";

/*--====-- About Page Component --====--*/
export default function About() {
  return (
    <>
      <SEO
        title="About Me"
        description="Learn more about my background and experience."
      />
      <div className="min-h-screen bg-background text-foreground">
        {/*--====-- About Preview Section --====--*/}
        <AboutPreviewSection
          badgeText={aboutData.heading.badgeText}
          watermarkText={aboutData.heading.watermarkText}
          mainText={aboutData.heading.mainText}
          highlightText={aboutData.heading.highlightText}
          description={aboutData.description}
          stats={aboutData.stats}
          buttonText={aboutData.pageHeader.about.primaryButtonText}
          showAbstractMarkIcon={aboutData.heading.showAbstractMarkIcon}
        />
      </div>
    </>
  );
}
