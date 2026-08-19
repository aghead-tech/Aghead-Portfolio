/*--====-- Select Component --====--*/
import React from 'react';
import { LucideIcon, ChevronDown } from 'lucide-react';

interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectProps {
  /*--====-- Basic Props --====--*/
  name?: string;
  id?: string;
  value?: string;
  placeholder?: string;
  options: SelectOption[];
  
  /*--====-- State Props --====--*/
  disabled?: boolean;
  required?: boolean;
  error?: boolean;
  errorMessage?: string;
  
  /*--====-- Icon Props --====--*/
  leftIcon?: LucideIcon;
  
  /*--====-- Style Props --====--*/
  size?: 'sm' | 'md' | 'lg';
  fullWidth?: boolean;
  rounded?: 'default' | 'lg' | 'xl' | 'full';
  className?: string;
  
  /*--====-- Event Props --====--*/
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onFocus?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
  
  /*--====-- Additional Props --====--*/
  autoFocus?: boolean;
  ariaLabel?: string;
}

export function Select({
  name,
  id,
  value,
  placeholder,
  options,
  disabled = false,
  required = false,
  error = false,
  errorMessage,
  leftIcon: LeftIcon,
  size = 'md',
  fullWidth = true,
  rounded = 'xl',
  className = '',
  onChange,
  onFocus,
  onBlur,
  autoFocus = false,
  ariaLabel,
}: SelectProps) {
  /*--====-- Size Styles --====--*/
  const sizeStyles = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-4 py-3',
    lg: 'px-5 py-4 text-lg',
  };

  /*--====-- Icon Size Mapping --====--*/
  const iconSizes = {
    sm: 'w-4 h-4',
    md: 'w-5 h-5',
    lg: 'w-6 h-6',
  };

  /*--====-- Rounded Styles --====--*/
  const roundedStyles = {
    default: 'rounded-lg',
    lg: 'rounded-lg',
    xl: 'rounded-xl',
    full: 'rounded-full',
  };

  /*--====-- Combined Classes --====--*/
  const baseClasses = `
    bg-card border transition-all duration-300
    text-foreground
    focus:outline-none focus:ring-2 focus:ring-theme-start/20
    appearance-none cursor-pointer
    ${sizeStyles[size]}
    ${roundedStyles[rounded]}
    ${fullWidth ? 'w-full' : ''}
    ${error ? 'border-red-500 focus:border-red-500' : 'border-border focus:border-theme-start'}
    ${disabled ? 'opacity-50 cursor-not-allowed bg-accent' : ''}
    ${LeftIcon ? 'pl-11' : ''}
    pr-10
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className={fullWidth ? 'w-full' : ''}>
      {/*--====-- Select Wrapper --====--*/}
      <div className="relative">
        {/*--====-- Left Icon --====--*/}
        {LeftIcon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none z-10">
            <LeftIcon className={iconSizes[size]} />
          </div>
        )}

        {/*--====-- Select Field --====--*/}
        <select
          name={name}
          id={id}
          value={value}
          disabled={disabled}
          required={required}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onBlur}
          autoFocus={autoFocus}
          aria-label={ariaLabel}
          aria-invalid={error}
          className={baseClasses}
        >
          {/*--====-- Placeholder Option --====--*/}
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}

          {/*--====-- Options --====--*/}
          {options.map((option) => (
            <option
              key={option.value}
              value={option.value}
              disabled={option.disabled}
            >
              {option.label}
            </option>
          ))}
        </select>

        {/*--====-- Chevron Icon --====--*/}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none">
          <ChevronDown className={iconSizes[size]} />
        </div>
      </div>

      {/*--====-- Error Message --====--*/}
      {error && errorMessage && (
        <p className="text-sm text-red-500 mt-2">
          {errorMessage}
        </p>
      )}
    </div>
  );
}
