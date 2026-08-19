import { useState } from "react";

import { ContactSection } from "@/components/sections/ContactSection";
import { contactData } from "@/data/contactData";
import { SEO } from "@/components/layout/SEO";
import { emailService } from "@/services/emailService";

/*--====-- Contact Page Component --====--*/

export default function Contact() {
  /*--====-- Form State Management --====--*/

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  /*--====-- Handle Form Submission --====--*/

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);

      await emailService.send(formData);

      alert(contactData.form.successMessage);

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        country: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);

      alert(
        "Sorry, your message could not be sent. Please try again or contact me directly at aghead@atmmtech.com.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  /*--====-- Handle Form Field Changes --====--*/

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

  return (
    <>
      <SEO
        title="Contact"
        description="Get in touch with Aghead Alkoko for web development, software projects, collaborations, and full-stack development opportunities."
        keywords={[
          "Aghead Alkoko",
          "Full-Stack Developer",
          "Web Developer Vienna",
          "Software Developer Vienna",
          "Next.js Developer",
          "Contact Developer",
        ]}
      />

      {/*--====-- Contact Me Section --====--*/}

      <ContactSection
        badgeText={contactData.pageHeader.badgeText}
        watermarkText={contactData.pageHeader.watermarkText}
        mainText={contactData.pageHeader.headingText}
        highlightText={contactData.pageHeader.highlightText}
        description={contactData.pageHeader.description}
        formData={formData}
        formFields={contactData.form.fields}
        submitText={
          isSubmitting ? "Sending..." : contactData.form.submitText
        }
        socialHeading={contactData.socialHeading}
        socialLinks={contactData.socialLinks}
        socialDescription={contactData.socialDescription}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </>
  );
}