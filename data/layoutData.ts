/*--====-- Layout Data (Header & Footer) --====--*/

import CloudUserIcon from "@/public/images/icons/CloudUserIcon";
import CodeChatIcon from "@/public/images/icons/CodeChatIcon";
import HeartBrokenIcon from "@/public/images/icons/HeartBrokenIcon";
import HomeIcon from "@/public/images/icons/HomeIcon";
import UserCircleIcon from "@/public/images/icons/UserCircleIcon";

import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  MessageCircle,
} from "lucide-react";

import { LucideIcon } from "lucide-react";

/*--====-- Types --====--*/

export interface NavLink {
  name: string;
  path: string;
  icon?: LucideIcon;
}

export interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

export interface ContactInfo {
  icon: LucideIcon;
  type: "address" | "email" | "phone";
  value: string;
  href?: string;
}

export interface FooterLink {
  name: string;
  path: string;
}

/*--====-- Header Data --====--*/

export const headerData = {
  logo: {
    letter: "A",
    name: "Aghead",
  },

  navLinks: [
    { name: "Home", path: "/", icon: HomeIcon },
    { name: "About", path: "/about", icon: UserCircleIcon },
    { name: "Services", path: "/services", icon: HeartBrokenIcon },
    { name: "Portfolio", path: "/portfolio", icon: CloudUserIcon },
    { name: "Contact", path: "/contact", icon: CodeChatIcon },
  ] as NavLink[],

  cta: {
    text: "Start a Project",
    path: "/contact",
    ariaLabel: "Start a Project",
  },
};

/*--====-- Footer Data --====--*/

export const footerData = {
  brand: {
    name: "Aghead Alkoko",
    description:
      "Full-Stack Developer building modern web applications, software solutions, and scalable digital products.",
    followOnText: "Connect With Me:",
  },

  cta: {
    title: {
      text: "Let's ",
      highlight: "Build",
      suffix: " Something Great",
    },

    button: {
      text: "Let's Work Together",
      path: "/contact",
    },
  },

  columnHeadings: {
    navigation: "Navigation",
    contact: "Contact",
  },

  navigationLinks: [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ] as FooterLink[],

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
  ] as SocialLink[],

  contact: [
    {
      icon: MapPin,
      type: "address" as const,
      value: "Vienna, Austria",
    },
    {
      icon: Mail,
      type: "email" as const,
      value: "aghead@atmmtech.com",
      href: "mailto:aghead@atmmtech.com",
    },
    {
      icon: Phone,
      type: "phone" as const,
      value: "+43 676 6996630",
      href: "tel:+436766996630",
    },
  ] as ContactInfo[],

  newsletter: {
    title: "Get In Touch",
    placeholder: "Email Address",
    buttonLabel: "Contact Me",
  },

  copyright: {
    text: "Aghead Alkoko. All rights reserved.",
  },

  legalLinks: [] as FooterLink[],
};