/*--====-- Contact Page Data --====--*/

import {
  Github,
  Linkedin,
  MessageCircle,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";

export const contactData = {
  /*--====-- Main Contact Data --====--*/
  email: "aghead@atmmtech.com",
  phone: "+43 676 6996630",
  location: "Vienna, Austria",
  website: "https://www.agheadalkoko.com",

  /*--====-- Contact Page Header --====--*/
  pageHeader: {
    badgeText: "Contact Me",
    watermarkText: "CONTACT",
    headingText: "Let's Talk About",
    highlightText: "Your Next Project",
    description:
      "Have a project in mind or want to collaborate? Get in touch and let's discuss how we can build the right solution together.",
  },

  /*--====-- Home Page Contact Preview --====--*/
  previewSection: {
    watermarkText: "CONTACT",
    badgeText: "Contact Me",
    headingText: "Let's Talk About",
    highlightText: "Your Next Project",
  },

  /*--====-- Contact Cards Headings --====--*/
  cardHeadings: {
    address: "Location",
    contact: "Contact",
    stayConnected: "Stay Connected",
  },

  /*--====-- Contact Information --====--*/
  address: {
    line1: "Vienna",
    line2: "Austria",
  },

  contact: {
    phone: "+43 676 6996630",
    email: "aghead@atmmtech.com",
    phoneLabel: "Phone:",
    emailLabel: "Email:",
  },

  /*--====-- Contact Info for Home Page Preview --====--*/
  contactInfo: [
    {
      icon: MapPin,
      title: "Location",
      value: "Vienna, Austria",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+43 676 6996630",
      link: "tel:+436766996630",
    },
    {
      icon: Mail,
      title: "Email",
      value: "aghead@atmmtech.com",
      link: "mailto:aghead@atmmtech.com",
    },
  ],

  /*--====-- Social Media Links --====--*/
  socialLinks: [
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/aghead-alkoko/",
      label: "LinkedIn",
    },
    {
      icon: Github,
      url: "https://github.com/aghead-tech",
      label: "GitHub",
    },
    {
      icon: MessageCircle,
      url: "https://wa.me/436766996630",
      label: "WhatsApp",
    },
  ],

  /*--====-- Social Section Text --====--*/
  socialHeading: "Stay Connected",

  socialDescription:
    "Connect with me for projects, collaborations, and development opportunities.",

  /*--====-- Availability --====--*/
  availability: {
    status: "Available",
    message: "Currently available for freelance and development projects",
  },

  /*--====-- Form Configuration --====--*/
  form: {
    namePlaceholder: "Your Name",
    emailPlaceholder: "your@email.com",
    subjectPlaceholder: "Project Inquiry",
    countryPlaceholder: "Select Your Country",
    messagePlaceholder: "Tell me about your project...",

    successMessage:
      "Thank you for reaching out! I will get back to you shortly.",

    submitText: "Send Message",

    fields: {
      name: {
        label: "Your Name",
        placeholder: "Your Name",
      },

      email: {
        label: "Email Address",
        placeholder: "your@email.com",
      },

      subject: {
        label: "Subject",
        placeholder: "Project Inquiry",
      },

      country: {
        label: "Country",
        placeholder: "Select Your Country",
      },

      message: {
        label: "Message",
        placeholder: "Tell me about your project...",
      },
    },
  },
};