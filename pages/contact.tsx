import { useState } from "react";
import { ContactSection } from "@/components/sections/ContactSection";
import { contactData } from "@/data/contactData";
import { SEO } from "@/components/layout/SEO";

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

  /*--====-- Handle Form Submission --====--*/
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert(contactData.form.successMessage);
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      country: "",
    });
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
      <SEO title="Contact" description="Get in touch with me." />
      <div className="min-h-screen bg-background text-foreground">
        {/*--====-- Contact Me Section --====--*/}
        <ContactSection
          badgeText={contactData.pageHeader.badgeText}
          watermarkText={contactData.pageHeader.watermarkText}
          mainText={contactData.pageHeader.headingText}
          highlightText={contactData.pageHeader.highlightText}
          description={contactData.pageHeader.description}
          formData={formData}
          formFields={contactData.form.fields}
          submitText={contactData.form.submitText}
          socialHeading={contactData.socialHeading}
          socialLinks={contactData.socialLinks}
          socialDescription={contactData.socialDescription}
          onSubmit={handleSubmit}
          onChange={handleChange}
        />
      </div>
    </>
  );
}
