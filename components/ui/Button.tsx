/*--====-- Button Component --====--*/

"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";
import { useButtonGsapEffects } from "../../hooks/useButtonGsapEffects";

interface ButtonProps {
  /*--====-- Content Props --====--*/
  children: React.ReactNode;
  leftIcon?: LucideIcon | React.ReactNode;
  rightIcon?: LucideIcon | React.ReactNode;

  /*--====-- Variant & Style Props --====--*/
  variant?: "primary" | "secondary" | "outline" | "ghost" | "text";
  size?: "sm" | "md" | "lg" | "xl";
  rounded?: "default" | "full" | "lg" | "xl";

  /*--====-- Behavior Props --====--*/
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  fullWidth?: boolean;

  /*--====-- Link Props --====--*/
  asLink?: boolean;
  to?: string;
  href?: string;

  /*--====-- Event & Custom Props --====--*/
  onClick?: (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => void;

  className?: string;
  ariaLabel?: string;
}

export function Button({
  children,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  variant = "primary",
  size = "md",
  rounded = "full",
  type = "button",
  disabled = false,
  loading = false,
  fullWidth = false,
  asLink = false,
  to = "",
  href = "",
  onClick,
  className = "",
  ariaLabel,
}: ButtonProps) {
  /*--====-- Helper Function to Render Icons --====--*/
  const renderIcon = (
    icon: LucideIcon | React.ReactNode,
    iconClassName: string,
  ) => {
    if (React.isValidElement(icon)) {
      return icon;
    }

    const IconComponent = icon as LucideIcon;

    return <IconComponent className={iconClassName} />;
  };

  /*--====-- GSAP Effects Hook --====--*/
  const {
    buttonRef,
    circleRef,
    ripples,
    handleMouseEnter: hookHandleMouseEnter,
    handleMouseLeave: hookHandleMouseLeave,
    handleClick: hookHandleClick,
    rippleRefCallback,
  } = useButtonGsapEffects();

  /*--====-- Variant Styles --====--*/
  const variantStyles = {
    primary:
      "bg-linear-to-r from-theme-start to-theme-end text-acDark",
    secondary:
      "bg-background border-2 border-border",
    outline:
      "border-2 border-theme-start text-theme-start",
    ghost:
      "bg-transparent",
    text:
      "text-foreground",
  };

  /*--====-- Size Styles --====--*/
  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 md:py-3 text-lg",
    lg: "px-8 py-4 text-base md:text-lg",
    xl: "px-10 py-5 text-lg",
  };

  /*--====-- Rounded Styles --====--*/
  const roundedStyles = {
    default: "rounded-lg",
    full: "rounded-full",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  /*--====-- Icon Size Mapping --====--*/
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-5 h-5",
    xl: "w-6 h-6",
  };

  /*--====-- Combined Classes --====--*/
  const baseClasses = `
    inline-flex
    items-center
    justify-center
    gap-2
    font-semibold
    transition-colors
    duration-300
    relative
    overflow-hidden
    ${variantStyles[variant]}
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${fullWidth ? "w-full" : ""}
    ${
      disabled || loading
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer"
    }
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  /*--====-- Event Handlers --====--*/
  const handleMouseEnter = (e: React.MouseEvent) => {
    hookHandleMouseEnter(e, disabled, loading);
  };

  const handleMouseLeave = (e: React.MouseEvent) => {
    hookHandleMouseLeave(e, disabled, loading);
  };

  const handleClick = (
    e: React.MouseEvent<HTMLButtonElement | HTMLAnchorElement>,
  ) => {
    hookHandleClick(e, disabled, loading, onClick);
  };

  /*--====-- Button Content --====--*/
  const buttonContent = (
    <>
      {/*--====-- Hover Bubble Circle --====--*/}
      <div
        ref={circleRef}
        className="absolute w-32 h-32 -ml-16 -mt-16 rounded-full bg-white/40 pointer-events-none"
        style={{ opacity: 0 }}
      />

      {/*--====-- Click Ripples --====--*/}
      {ripples.map((ripple) => (
        <span
          key={ripple.id}
          ref={(el) => rippleRefCallback(el, ripple)}
          className="absolute w-5 h-5 rounded-full bg-white pointer-events-none"
          style={{
            left: ripple.x,
            top: ripple.y,
            transform: "translate(-50%, -50%)",
          }}
        />
      ))}

      {/*--====-- Button Inner Content --====--*/}
      <span className="relative z-10 inline-flex items-center justify-center gap-2">
        {loading && (
          <svg
            className={`animate-spin ${iconSizes[size]}`}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />

            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            />
          </svg>
        )}

        {!loading &&
          LeftIcon &&
          renderIcon(LeftIcon, iconSizes[size])}

        <span>{children}</span>

        {!loading &&
          RightIcon &&
          renderIcon(RightIcon, iconSizes[size])}
      </span>
    </>
  );

  /*--====-- Render as Next.js Link --====--*/
  if (asLink && to) {
    return (
      <Link
        href={to}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
      >
        {buttonContent}
      </Link>
    );
  }

  /*--====-- Render as External Anchor --====--*/
  if (asLink && href) {
    return (
      <a
        href={href}
        ref={buttonRef as React.Ref<HTMLAnchorElement>}
        className={baseClasses}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        aria-label={ariaLabel}
        target="_blank"
        rel="noopener noreferrer"
      >
        {buttonContent}
      </a>
    );
  }

  /*--====-- Render as Button --====--*/
  return (
    <button
      type={type}
      ref={buttonRef as React.Ref<HTMLButtonElement>}
      className={baseClasses}
      disabled={disabled || loading}
      onClick={handleClick}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-label={ariaLabel}
      aria-busy={loading || undefined}
    >
      {buttonContent}
    </button>
  );
}