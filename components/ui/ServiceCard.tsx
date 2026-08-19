/*--====-- Service Card UI Component --====--*/
import React from "react";
import { LucideIcon } from "lucide-react";
import ArrowRightIcon from "@/public/images/icons/ArrowRightIcon";

interface ServiceCardProps {
  icon?:
    | LucideIcon
    | React.ComponentType<{
        className?: string;
        width?: number;
        height?: number;
      }>;
  title: string;
  description: string;
  linkText?: string;
  linkHref?: string;
}

export function ServiceCard({
  icon: Icon,
  title,
  description,
  linkText = "Learn More",
  linkHref = "#",
}: ServiceCardProps) {
  // Check if Icon is a Lucide icon (has strokeWidth support) or custom component
  const isLucideIcon =
    (Icon && (Icon as any).displayName?.includes?.("Lucide")) ||
    (Icon as any).$$typeof;

  return (
    <div className="relative">
      <div className=" p-6 sm:p-7 bg-acGraylight2/94 backdrop-blur-[20px] z-10 rounded-3xl border-2 border-acDarkGray hover:border-theme-start transition-all duration-300 group">
        {/*--====-- Icon in Box --====--*/}
        <div className="mb-6">
          <div className="w-16 h-16 rounded-full bg-acWD flex items-center justify-center ">
            {Icon && (
              <Icon
                className="w-8 h-8 text-foreground"
                width={32}
                height={32}
              />
            )}
          </div>
        </div>

        <div>
          {/*--====-- Service Title --====--*/}
          <h3 className="text-xl xl:text-2xl font-semibold mb-3 text-foreground line-clamp-none sm:line-clamp-1">
            {title}
          </h3>

          {/*--====-- Description Text --====--*/}
          <p className="text-muted-foreground mb-2 line-clamp-none sm:line-clamp-3 leading-relaxed text-base sm:text-lg">
            {description}
          </p>

          {/*--====-- Learn More Link --====--*/}
          <a
            href={linkHref}
            className="inline-flex items-center gradient-text font-medium hover:opacity-80 transition-opacity duration-300 group"
          >
            {linkText}
            <ArrowRightIcon
              className="ml-2 group-hover:translate-x-1 transition-transform duration-300"
              useGradient
            />
          </a>
        </div>
      </div>
      {/*--====-- Thick Gradient Left Accent Line --====--*/}
      <div className="absolute left-[-7px] z-[-1] top-8 bottom-8 w-[70px] h-[70px] bg-linear-to-b from-theme-start to-theme-end rounded-[8px] shadow-[0_0_1px_1px_var(--color-theme-start)]/10 blur-[1px]"></div>
    </div>
  );
}
