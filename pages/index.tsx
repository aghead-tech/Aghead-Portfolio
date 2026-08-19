import { useState } from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { TechMarqueeSection } from "@/components/sections/TechMarqueeSection";
import { AboutPreviewSection } from "@/components/sections/AboutPreviewSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { ExpertiseSection } from "@/components/sections/ExpertiseSection";
import { ServicesPreviewSection } from "@/components/sections/ServicesPreviewSection";
import { PortfolioPreviewSection } from "@/components/sections/PortfolioPreviewSection";
import { CTASection } from "@/components/sections/CTASection";
import { ContactPreviewSection } from "@/components/sections/ContactPreviewSection";
import { servicesData, servicesPreviewData } from "@/data/servicesData";
import { portfolioData, homePortfolioSection } from "@/data/portfolioData";
import { skillsData } from "@/data/skillsData";
import { aboutData } from "@/data/aboutData";
import { homePageData } from "@/data/homePageData";
import { contactData } from "@/data/contactData";
import { ctaData } from "@/data/ctaData";
import { heroData } from "@/data/heroData";
import { statsData } from "@/data/statsData";
import { SEO } from "@/components/layout/SEO";

/*--====-- Home Page Component --====--*/
export default function Home() {
  //_--====-- Form State Management --====--_//
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
  });

  //_--====-- Handle Form Submission --====--_//
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(contactData.form.successMessage);
    // Reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      country: "",
    });
  };

  //_--====-- Handle Form Field Changes --====--_//
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const servicesHeader = servicesPreviewData;
  const { pageHeader: aboutHeader } = aboutData;
  const { previewSection: contactPreview } = contactData;
  const { expertise: expertiseSection } = homePageData.sections;

  return (
    <>
      <SEO title="Home" description={heroData.description} />

      {/*--====-- Scroll To Top Logic --====--*/}
      <HeroSection
        availabilityBadgeText={heroData.availabilityBadge.text}
        highlightText={heroData.heading.greeting}
        title1={heroData.heading.title1}
        title2={heroData.heading.title2}
        emojiImage={heroData.heading.emojiImage}
        description={heroData.description}
        primaryButtonText={heroData.buttons.primary.text}
        primaryButtonLink={heroData.buttons.primary.link}
        secondaryButtonText={heroData.buttons.secondary.text}
        secondaryButtonLink={heroData.buttons.secondary.link}
        profileImageSrc={heroData.profileImage.src}
        profileImageAlt={heroData.profileImage.alt}
        floatingBadges={heroData.floatingBadges}
        rotatingBadgeText={heroData.rotatingBadge.text}
        socialLinks={contactData.socialLinks}
      />

      {
        //_--====-- Tech Marquee --====--_//
      }
      <TechMarqueeSection items={homePageData.techStack} />

      {/*--====-- About Preview Section --====--*/}
      <AboutPreviewSection
        badgeText={aboutData.heading.badgeText}
        watermarkText={aboutData.heading.watermarkText}
        mainText={aboutData.heading.mainText}
        highlightText={aboutData.heading.highlightText}
        description={aboutData.description}
        stats={aboutData.stats}
        buttonText={aboutHeader.about.primaryButtonText}
        showAbstractMarkIcon={aboutData.heading.showAbstractMarkIcon}
      />

      {/*--====-- Services Preview Section --====--*/}
      <ServicesPreviewSection
        badgeText={servicesHeader.badgeText}
        watermarkText={servicesHeader.watermarkText}
        mainText={servicesHeader.mainText}
        highlightText={servicesHeader.highlightText}
        services={servicesData}
      />

      {
        //_--====-- Stats Section --====--_//
      }
      <StatsSection items={statsData} />

      {
        //_--====-- Expertise Section --====--_//
      }
      <ExpertiseSection
        badgeText={expertiseSection.badgeText}
        watermarkText={expertiseSection.watermarkText}
        mainText={expertiseSection.mainText}
        highlightText={expertiseSection.highlightText}
        skills={skillsData}
      />

      {/*--====-- Portfolio Preview Section --====--*/}
      <PortfolioPreviewSection
        badgeText={homePortfolioSection.badgeText}
        watermarkText={homePortfolioSection.watermarkText}
        mainText={homePortfolioSection.mainText}
        highlightText={homePortfolioSection.highlightText}
        projects={portfolioData.slice(0, 4)}
        buttonText={homePortfolioSection.buttonText}
      />

      {/*--====-- CTA Section --====--*/}
      <CTASection
        heading={ctaData.heading}
        button={ctaData.button}
        technologies={ctaData.technologies}
      />

      {/*--====-- Contact Preview Section --====--*/}
      <ContactPreviewSection
        badgeText={contactPreview.badgeText}
        watermarkText={contactPreview.watermarkText}
        mainText={contactPreview.headingText}
        highlightText={contactPreview.highlightText}
        formFields={contactData.form.fields}
        submitText={contactData.form.submitText}
        socialHeading={contactData.socialHeading}
        socialLinks={contactData.socialLinks}
        socialDescription={contactData.socialDescription}
        formData={formData}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />

      {
        //_--====-- Tech Marquee --====--_//
      }
      <TechMarqueeSection items={homePageData.techStack} />
    </>
  );
}
