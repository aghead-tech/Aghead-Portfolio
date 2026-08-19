/*--====-- Label Component --====--*/
import React from 'react';

interface LabelProps {
  /*--====-- Content Props --====--*/
  htmlFor?: string;
  children: React.ReactNode;
  
  /*--====-- State Props --====--*/
  required?: boolean;
  disabled?: boolean;
  error?: boolean;
  
  /*--====-- Optional Props --====--*/
  helpText?: string;
  errorText?: string;
  
  /*--====-- Style Props --====--*/
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function Label({
  htmlFor,
  children,
  required = false,
  disabled = false,
  error = false,
  helpText,
  errorText,
  size = 'md',
  className = '',
}: LabelProps) {
  /*--====-- Size Styles --====--*/
  const sizeStyles = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
  };

  /*--====-- Base Classes --====--*/
  const baseClasses = `
    block font-medium mb-2
    ${sizeStyles[size]}
    ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
    ${error ? 'text-red-500' : 'text-foreground'}
    ${className}
  `.trim().replace(/\s+/g, ' ');

  return (
    <div className="mb-1">
      <label htmlFor={htmlFor} className={baseClasses}>
        {children}
        {required && (
          <span className="text-red-500 ml-1" aria-label="required">
            *
          </span>
        )}
      </label>
      
      {/*--====-- Help Text --====--*/}
      {helpText && !error && (
        <p className="text-sm text-muted-foreground mt-1">
          {helpText}
        </p>
      )}
      
      {/*--====-- Error Text --====--*/}
      {error && errorText && (
        <p className="text-sm text-red-500 mt-1">
          {errorText}
        </p>
      )}
    </div>
  );
}
