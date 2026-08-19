/*--====-- Contact Section --====--*/
"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader2 } from "../ui/SectionHeader2";
import { SocialLinks } from "../ui/SocialLinks";
import { SocialLink } from "../../data/layoutData";
import { CountrySelect } from "../ui/CountrySelect";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import { Textarea } from "../ui/Textarea";
import { Button } from "../ui/Button";
import { countries } from "../../data/countries";
import { contactData } from "../../data/contactData";
import LocationIcon from "@/public/images/icons/LocationIcon";
import ProfileCardIcon from "@/public/images/icons/ProfileCardIcon";
import CurvedArrowIcon from "@/public/images/icons/CurvedArrowIcon";
import { useGsapStagger } from "@/hooks/useGsapStagger";
import { usePreload } from "@/hooks/usePreloadContext";

interface FormField {
  label: string;
  placeholder: string;
}

interface ContactSectionProps {
  badgeIcon?: any;
  badgeText: string;
  watermarkText: string;
  mainText: string;
  highlightText: string;
  description?: string;
  formData: {
    name: string;
    email: string;
    subject: string;
    message: string;
    country?: string;
    website?: string;
  };
  formFields: {
    name: FormField;
    email: FormField;
    subject: FormField;
    country: FormField;
    message: FormField;
  };
  submitText: string;
  socialHeading: string;
  socialLinks: SocialLink[];
  socialDescription: string;
  uiText?: {
    cardHeadings: {
      address: string;
      contact: string;
      stayConnected: string;
    };
    contactLabels: {
      phoneLabel: string;
      emailLabel: string;
    };
    addressLines: {
      line1: string;
      line2: string;
    };
    contactDetails: {
      phone: string;
      email: string;
    };
  };
  onSubmit: (e: React.FormEvent) => void;
  onChange: (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
}

export function ContactSection({
  badgeText = contactData.pageHeader.badgeText,
  watermarkText = contactData.pageHeader.watermarkText,
  mainText = contactData.pageHeader.headingText,
  highlightText = contactData.pageHeader.highlightText,
  description = contactData.pageHeader.description,
  formData,
  formFields,
  submitText,
  socialHeading,
  socialLinks,
  uiText = {
    cardHeadings: contactData.cardHeadings,
    contactLabels: {
      phoneLabel: contactData.contact.phoneLabel,
      emailLabel: contactData.contact.emailLabel,
    },
    addressLines: {
      line1: contactData.address.line1,
      line2: contactData.address.line2,
    },
    contactDetails: {
      phone: contactData.contact.phone,
      email: contactData.contact.email,
    },
  },
  onSubmit,
  onChange,
}: ContactSectionProps) {
  const blurInfoRef = useRef<HTMLDivElement>(null);
  const { isPreloaded } = usePreload();

  // Stagger animation for form fields
  const formRef = useGsapStagger<HTMLFormElement>({
    direction: "up",
    distance: 30,
    duration: 0.8,
    stagger: 0.1,
    delay: 0.4,
    useScrollTrigger: true,
  });

  // Blur-in animation for contact info cards - waits for preload to complete
  useEffect(() => {
    if (!blurInfoRef.current || !isPreloaded) return;

    const items = blurInfoRef.current.children;

    gsap.fromTo(
      items,
      {
        opacity: 0,
        filter: "blur(10px)", // start blurred
      },
      {
        opacity: 1,
        filter: "blur(0px)", // end clear
        duration: 1,
        stagger: 0.2,
        delay: 0.5,
        ease: "power3.out",
        scrollTrigger: {
          trigger: blurInfoRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [isPreloaded]);

  return (
    <section className="py-12 md:py-20 bg-background relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/*--====-- Section Header Component --====--*/}
        <SectionHeader2
          showBadge={true}
          badgeText={badgeText}
          showWatermark={true}
          watermarkText={watermarkText}
          mainText={mainText}
          highlightText={highlightText}
          alignment="center"
          showDescription={true}
          description={description}
          descriptionClassName="mx-auto"
          headingClassName="w-auto mx-auto"
        />

        <div className="flex md:flex-row flex-col gap-6 lg:gap-8 max-w-7xl mx-auto">
          <div className="space-y-6 w-full lg:w-[70%]">
            <form
              ref={formRef}
              onSubmit={onSubmit}
              className="space-y-5 *:opacity-0"
            >
              {/* Anti-spam honeypot - hidden from real users */}
              <div
                aria-hidden="true"
                style={{
                  position: "absolute",
                  left: "-9999px",
                  width: "1px",
                  height: "1px",
                  overflow: "hidden",
                }}
              >
                <label htmlFor="website">Website</label>

                <input
                  type="text"
                  id="website"
                  name="website"
                  value={formData.website || ""}
                  onChange={onChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-5">
                {/*--====-- Your Name --====--*/}
                <div>
                  <Label htmlFor="name" className="block mb-2 text-foreground">
                    {formFields.name.label}
                  </Label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={onChange}
                    placeholder={formFields.name.placeholder}
                    required
                  />
                </div>

                {/*--====-- Email Address --====--*/}
                <div>
                  <Label htmlFor="email" className="block mb-2 text-foreground">
                    {formFields.email.label}
                  </Label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={onChange}
                    placeholder={formFields.email.placeholder}
                    required
                  />
                </div>
              </div>

              {/* Subject and Country Row */}
              <div className="grid md:grid-cols-2 gap-5 relative z-20">
                {/*--====-- Subject --====--*/}
                <div>
                  <Label
                    htmlFor="subject"
                    className="block mb-2 text-foreground"
                  >
                    {formFields.subject.label}
                  </Label>
                  <Input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={onChange}
                    placeholder={formFields.subject.placeholder}
                    required
                  />
                </div>

                {/*--====-- Country --====--*/}
                <div className="relative z-20">
                  <Label
                    htmlFor="country"
                    className="block mb-2 text-foreground"
                  >
                    {formFields.country.label}
                  </Label>
                  <CountrySelect
                    value={formData.country || ""}
                    onChange={(value) => {
                      // Create a synthetic event for the parent component
                      const syntheticEvent = {
                        target: { name: "country", value },
                      } as React.ChangeEvent<HTMLSelectElement>;
                      onChange(syntheticEvent);
                    }}
                    countries={countries}
                    placeholder={formFields.country.placeholder}
                    required
                  />
                </div>
              </div>

              {/*--====-- Message --====--*/}
              <div className="relative z-0">
                <Label htmlFor="message" className="block mb-2 text-foreground">
                  {formFields.message.label}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={onChange}
                  rows={6}
                  resize="none"
                  placeholder={formFields.message.placeholder}
                  required
                />
              </div>

              {/*--====-- Submit Button --====--*/}
              <Button
                type="submit"
                variant="primary"
                size="md"
                rightIcon={<CurvedArrowIcon className="w-5 h-5 rotate-45" />}
              >
                {submitText}
              </Button>
            </form>
          </div>

          {/*--====-- Contact Information Cards (Right Side - 2 columns out of 5) --====--*/}
          {/*--====-- Contact Information Cards - Hidden until GSAP animation starts --====--*/}
          <div
            ref={blurInfoRef}
            className="block w-full lg:w-[30%] *:opacity-0"
          >
            <div className="p-6 sm:p-7 bg-acGraylight2 z-10 rounded-t-3xl border-2 border-acDarkGray">
              {/*--====-- Address Card --====--*/}
              <div className="mb-10">
                <div className="flex items-center space-x-2 mb-3">
                  <LocationIcon useGradient={true} />
                  <h3 className="font-semibold text-lg md:text-2xl gradient-text">
                    {uiText.cardHeadings.address}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground ">
                  {uiText.addressLines.line1}
                </p>
                <p className="text-base text-muted-foreground ">
                  {uiText.addressLines.line2}
                </p>
              </div>

              {/*--====-- Contact Card --====--*/}
              <div className="relative overflow-hidden">
                <div className="flex items-center space-x-2 mb-3">
                  <ProfileCardIcon useGradient={true} />
                  <h3 className="font-semibold text-lg md:text-2xl gradient-text">
                    {uiText.cardHeadings.contact}
                  </h3>
                </div>
                <p className="text-base text-muted-foreground">
                  {uiText.contactLabels.phoneLabel}{" "}
                  {uiText.contactDetails.phone}
                </p>
                <p className="text-base text-muted-foreground">
                  {uiText.contactLabels.emailLabel}{" "}
                  {uiText.contactDetails.email}
                </p>
              </div>
            </div>

            {/*--====-- Stay Connected Card --====--*/}
            <div className="p-6 relative overflow-hidden  bg-linear-to-br rounded-b-3xl from-theme-start to-theme-end">
              <h3 className="relative z-10 font-semibold text-lg md:text-2xl text-acDark mb-5 text-start">
                {socialHeading}
              </h3>
              <SocialLinks
                links={socialLinks}
                variant="card"
                className="justify-start relative z-10"
                textColor="gradient-text "
              />
              <div className="absolute top-0 left-0 w-full h-full bg-[url('/images/wave.svg')]"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
