import { useEffect, useState } from "react";

import { ContactSection } from "@/components/sections/ContactSection";
import { contactData } from "@/data/contactData";
import { SEO } from "@/components/layout/SEO";
import { emailService } from "@/services/emailService";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    country: "",
    website: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const [statusMessage, setStatusMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  useEffect(() => {
    if (!statusMessage) return;

    const timer = setTimeout(() => {
      setStatusMessage(null);
    }, 5000);

    return () => clearTimeout(timer);
  }, [statusMessage]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) return;

    try {
      setIsSubmitting(true);
      setStatusMessage(null);

      await emailService.send(formData);

      setStatusMessage({
        type: "success",
        text: "Message sent successfully. Thanks for reaching out — I’ll get back to you shortly.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        country: "",
        website: "",
      });
    } catch (error) {
      console.error("Failed to send message:", error);

      setStatusMessage({
        type: "error",
        text: "Your message could not be sent. Please try again or contact me directly at aghead@atmmtech.com.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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

      <div className="relative">
        {statusMessage && (
          <div
            className={`
              fixed
              top-6
              left-1/2
              -translate-x-1/2
              z-[9999]
              w-[90%]
              max-w-xl
              rounded-2xl
              border
              px-5
              py-4
              shadow-2xl
              backdrop-blur-xl
              transition-all
              duration-300
              ${
                statusMessage.type === "success"
                  ? "border-theme-start/60 bg-black/90 text-white"
                  : "border-red-500/60 bg-black/90 text-white"
              }
            `}
          >
            <div className="flex items-start gap-3">
              <div
                className={`
                  flex
                  h-10
                  w-10
                  shrink-0
                  items-center
                  justify-center
                  rounded-full
                  text-lg
                  font-bold
                  ${
                    statusMessage.type === "success"
                      ? "bg-theme-start text-black"
                      : "bg-red-500 text-white"
                  }
                `}
              >
                {statusMessage.type === "success" ? "✓" : "!"}
              </div>

              <div className="flex-1">
                <p className="font-semibold">
                  {statusMessage.type === "success"
                    ? "Message Sent"
                    : "Message Failed"}
                </p>

                <p className="mt-1 text-sm text-white/70">
                  {statusMessage.text}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setStatusMessage(null)}
                className="ml-2 text-xl text-white/60 transition hover:text-white"
                aria-label="Close message"
              >
                ×
              </button>
            </div>
          </div>
        )}

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
      </div>
    </>
  );
}