import { portfolioData, portfolioPageHeader } from "@/data/portfolioData";
import { SEO } from "@/components/layout/SEO";
import { PortfolioSection } from "@/components/sections/PortfolioSection";

/*--====-- Portfolio Page Component --====--*/
export default function Projects() {
  return (
    <>
      <SEO
        title="Projects"
        description="Check out my latest projects and case studies."
      />
      <div className="min-h-screen bg-background text-foreground">
        <PortfolioSection
          badgeText={portfolioPageHeader.badgeText}
          watermarkText={portfolioPageHeader.watermarkText}
          mainText={portfolioPageHeader.mainText}
          highlightText={portfolioPageHeader.highlightText}
          description={portfolioPageHeader.description}
          projects={portfolioData}
          buttonText="See mone Projects"
        />
      </div>
    </>
  );
}
