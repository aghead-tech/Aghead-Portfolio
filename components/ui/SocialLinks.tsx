/*--====-- Social Links Component --====--*/
import React from "react";
import { LucideIcon } from "lucide-react";

interface SocialLink {
  icon: LucideIcon;
  url: string;
  label: string;
}

interface SocialLinksProps {
  links: SocialLink[];
  variant?: "gradient" | "card" | "transparent" | "acbox1";
  size?: "sm" | "md" | "lg";
  className?: string;
  roundedAc?: string;
  textColor?: string;
}

export function SocialLinks({
  links,
  variant = "gradient",
  size = "md",
  className = "",
  roundedAc = "rounded-full",
  textColor = "text-acDark",
}: SocialLinksProps) {
  /*--====-- Size Classes --====--*/
  const sizeClasses = {
    sm: "w-9 h-9",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  const iconSizeClasses = {
    sm: "w-3.5 h-3.5",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  /*--====-- Variant Classes --====--*/
  const variantClasses = {
    gradient: "bg-linear-to-r from-theme-start to-theme-end hover:scale-110 ",
    acbox1:
      "bg-acGraylight2 border border-acDarkGray hover:bg-linear-to-r from-theme-start to-theme-end",
    card: "bg-acDark ",
    transparent:
      "bg-card border border-border hover:bg-linear-to-r hover:from-theme-start hover:to-theme-end",
  };

  return (
    <div className={`flex space-x-3 ${className}`}>
      {links.map((social, index) => (
        <a
          key={index}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`group ${sizeClasses[size]} flex-none cursor-pointer ${roundedAc} ${variantClasses[variant]} transition-all duration-300 flex items-center justify-center`}
          aria-label={social.label || `Visit ${social.url}`}
        >
          <social.icon
            className={`${iconSizeClasses[size]} ${
              textColor.includes("gradient-text")
                ? "text-theme-start dark:text-theme-mid"
                : textColor
            } group-hover:text-white dark:group-hover:text-white transition-colors duration-300`}
          />
        </a>
      ))}
    </div>
  );
}
