/*--====-- FormField Component (Combined Label + Input/Select/Textarea) --====--*/
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { Label } from './Label';
import { Input } from './Input';
import { Select } from './Select';
import { Textarea } from './Textarea';

interface BaseFormFieldProps {
  /*--====-- Label Props --====--*/
  label: string;
  htmlFor?: string;
  required?: boolean;
  helpText?: string;
  
  /*--====-- Common Input Props --====--*/
  name?: string;
  id?: string;
  disabled?: boolean;
  error?: boolean;
  errorMessage?: string;
  className?: string;
}

interface InputFormFieldProps extends BaseFormFieldProps {
  fieldType: 'input';
  type?: 'text' | 'email' | 'password' | 'number' | 'tel' | 'url' | 'search' | 'date' | 'time';
  value?: string | number;
  placeholder?: string;
  leftIcon?: LucideIcon;
  rightIcon?: LucideIcon;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength?: number;
  min?: number | string;
  max?: number | string;
}

interface SelectFormFieldProps extends BaseFormFieldProps {
  fieldType: 'select';
  value?: string;
  placeholder?: string;
  options: Array<{ value: string; label: string; disabled?: boolean }>;
  leftIcon?: LucideIcon;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

interface TextareaFormFieldProps extends BaseFormFieldProps {
  fieldType: 'textarea';
  value?: string;
  placeholder?: string;
  rows?: number;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  maxLength?: number;
}

type FormFieldProps = InputFormFieldProps | SelectFormFieldProps | TextareaFormFieldProps;

export function FormField(props: FormFieldProps) {
  const {
    label,
    htmlFor,
    required = false,
    helpText,
    name,
    id,
    disabled = false,
    error = false,
    errorMessage,
    className = '',
    fieldType,
  } = props;

  return (
    <div className={className}>
      {/*--====-- Label --====--*/}
      <Label
        htmlFor={htmlFor || id}
        required={required}
        disabled={disabled}
        error={error}
        helpText={helpText}
        errorText={errorMessage}
      >
        {label}
      </Label>

      {/*--====-- Input Field --====--*/}
      {fieldType === 'input' && (
        <Input
          type={props.type}
          name={name}
          id={id}
          value={props.value}
          placeholder={props.placeholder}
          disabled={disabled}
          required={required}
          error={error}
          errorMessage={errorMessage}
          leftIcon={props.leftIcon}
          rightIcon={props.rightIcon}
          onChange={props.onChange}
          maxLength={props.maxLength}
          min={props.min}
          max={props.max}
        />
      )}

      {/*--====-- Select Field --====--*/}
      {fieldType === 'select' && (
        <Select
          name={name}
          id={id}
          value={props.value}
          placeholder={props.placeholder}
          options={props.options}
          disabled={disabled}
          required={required}
          error={error}
          errorMessage={errorMessage}
          leftIcon={props.leftIcon}
          onChange={props.onChange}
        />
      )}

      {/*--====-- Textarea Field --====--*/}
      {fieldType === 'textarea' && (
        <Textarea
          name={name}
          id={id}
          value={props.value}
          placeholder={props.placeholder}
          rows={props.rows}
          disabled={disabled}
          required={required}
          error={error}
          errorMessage={errorMessage}
          onChange={props.onChange}
          maxLength={props.maxLength}
        />
      )}
    </div>
  );
}
