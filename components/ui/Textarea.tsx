/*--====-- Textarea Component --====--*/
import React from "react";

interface TextareaProps {
  /*--====-- Basic Props --====--*/
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;

  /*--====-- State Props --====--*/
  disabled?: boolean;
  required?: boolean;
  readOnly?: boolean;
  error?: boolean;
  errorMessage?: string;

  /*--====-- Style Props --====--*/
  rows?: number;
  cols?: number;
  resize?: "none" | "vertical" | "horizontal" | "both";
  fullWidth?: boolean;
  rounded?: "default" | "lg" | "xl";
  className?: string;

  /*--====-- Event Props --====--*/
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;

  /*--====-- Additional Props --====--*/
  autoComplete?: string;
  autoFocus?: boolean;
  maxLength?: number;
  ariaLabel?: string;
}

export function Textarea({
  name,
  id,
  value,
  placeholder,
  disabled = false,
  required = false,
  readOnly = false,
  error = false,
  errorMessage,
  rows = 4,
  cols,
  resize = "vertical",
  fullWidth = true,
  rounded = "xl",
  className = "",
  onChange,
  onFocus,
  onBlur,
  autoComplete,
  autoFocus = false,
  maxLength,
  ariaLabel,
}: TextareaProps) {
  /*--====-- Resize Styles --====--*/
  const resizeStyles = {
    none: "resize-none",
    vertical: "resize-y",
    horizontal: "resize-x",
    both: "resize",
  };

  /*--====-- Rounded Styles --====--*/
  const roundedStyles = {
    default: "rounded-lg",
    lg: "rounded-lg",
    xl: "rounded-xl",
  };

  /*--====-- Combined Classes --====--*/
  const baseClasses = `
    border-2 border-acDarkGray bg-acGraylight2  transition-all duration-300
    text-foreground placeholder:text-muted-foreground
    px-4 py-3
    focus:outline-none 
    ${roundedStyles[rounded]}
    ${resizeStyles[resize]}
    ${fullWidth ? "w-full" : ""}
    ${
      error
        ? "border-red-500 focus:border-red-500"
        : "border-acDarkGray focus:border-theme-start"
    }
    ${disabled ? "opacity-50 cursor-not-allowed bg-accent" : ""}
    ${readOnly ? "bg-accent cursor-default" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <div className={fullWidth ? "w-full" : ""}>
      {/*--====-- Textarea Field --====--*/}
      <textarea
        name={name}
        id={id}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        required={required}
        readOnly={readOnly}
        rows={rows}
        cols={cols}
        onChange={onChange}
        onFocus={onFocus}
        onBlur={onBlur}
        autoComplete={autoComplete}
        autoFocus={autoFocus}
        maxLength={maxLength}
        aria-label={ariaLabel}
        aria-invalid={error}
        className={baseClasses}
      />

      {/*--====-- Error Message --====--*/}
      {error && errorMessage && (
        <p className="text-sm text-red-500 mt-2">{errorMessage}</p>
      )}
    </div>
  );
}
