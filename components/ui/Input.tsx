/*--====-- Input Component --====--*/
"use client";
import React, { useState } from "react";
import { LucideIcon, Eye, EyeOff } from "lucide-react";

interface InputProps {
  /*--====-- Basic Props --====--*/
  type?:
    | "text"
    | "email"
    | "password"
    | "number"
    | "tel"
    | "url"
    | "search"
    | "date"
    | "time";
  name?: string;
  id?: string;
  value?: string | number;
  placeholder?: string;

  /*--====-- State Props --====--*/
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;

  /*--====-- Icon Props --====--*/
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;

  /*--====-- Style Props --====--*/
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  rounded?: "default" | "lg" | "xl" | "full";
  className?: string;

  /*--====-- Event Props --====--*/
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /*--====-- Additional Props --====--*/
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
  step?: number | string;
  pattern?: string;
  ariaLabel?: string;
}

export function Input({
  type = "text",
  name,
  id,
  value,
  placeholder,
  disabled = false,
  required = false,
  readOnly = false,
  error = false,
  errorMessage,
  leftIcon: LeftIcon,
  rightIcon: RightIcon,
  size = "md",
  fullWidth = true,
  rounded = "xl",
  className = "",
  onChange,
  onFocus,
  onBlur,
  autoComplete,
  autoFocus = false,
  maxLength,
  min,
  max,
  step,
  pattern,
  ariaLabel,
}: InputProps) {
  /*--====-- Password Toggle State --====--*/
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";
  const inputType = isPasswordType && showPassword ? "text" : type;

  /*--====-- Size Styles --====--*/
  const sizeStyles = {
    sm: "px-3 py-2 text-sm",
    md: "px-4 py-3",
    lg: "px-5 py-4 text-lg",
  };

  /*--====-- Icon Size Mapping --====--*/
  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-5 h-5",
    lg: "w-6 h-6",
  };

  /*--====-- Rounded Styles --====--*/
  const roundedStyles = {
    default: "rounded-lg",
    lg: "rounded-lg",
    xl: "rounded-xl",
    full: "rounded-full",
  };

  /*--====-- Combined Classes --====--*/
  const baseClasses = `
    border-2 border-acDarkGray bg-acGraylight2  transition-all duration-300
    text-foreground placeholder:text-muted-foreground
    focus:outline-none 
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${fullWidth ? "w-full" : ""}
    ${
      error
        ? "border-red-500 focus:border-red-500"
        : "border-acDarkGray focus:border-theme-start"
    }
    ${disabled ? "opacity-50 cursor-not-allowed bg-accent" : ""}
    ${readOnly ? "bg-accent cursor-default" : ""}
    ${LeftIcon ? "pl-11" : ""}
    ${RightIcon || isPasswordType ? "pr-11" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {/*--====-- Input Wrapper --====--*/}
      <div className="relative">
        {/*--====-- Left Icon --====--*/}
        {LeftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <LeftIcon className={iconSizes[size]} />
          </div>
        )}

        {/*--====-- Input Field --====--*/}
        <input
          type={inputType}
          name={name}
          id={id}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          required={required}
          readOnly={readOnly}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoComplete={autoComplete}
          autoFocus={autoFocus}
          maxLength={maxLength}
          min={min}
          max={max}
          step={step}
          pattern={pattern}
          aria-label={ariaLabel}
          aria-invalid={error}
          className={baseClasses}
        />

        {/*--====-- Right Icon or Password Toggle --====--*/}
        {isPasswordType ? (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
            aria-label={showPassword ? "Hide password" : "Show password"}
            tabIndex={-1}
          >
            {showPassword ? (
              <EyeOff className={iconSizes[size]} />
            ) : (
              <Eye className={iconSizes[size]} />
            )}
          </button>
        ) : RightIcon ? (
          <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
            <RightIcon className={iconSizes[size]} />
          </div>
        ) : null}
      </div>

      {/*--====-- Error Message --====--*/}
      {error && errorMessage && (
        <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
