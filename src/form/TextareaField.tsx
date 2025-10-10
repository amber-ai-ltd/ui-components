import React from 'react';
import './form-styles.css';

interface TextareaFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  rows?: number;
  value: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
}

export const TextareaField: React.FC<TextareaFieldProps> = ({
  id,
  name,
  label,
  required = false,
  rows = 6,
  value,
  placeholder,
  error,
  touched,
  onChange,
  onBlur,
}) => {
  const showError = error && touched;
  const errorId = `${id}-error`;

  return (
    <div>
      <label 
        htmlFor={id} 
        className="ui-label"
      >
        {label} {required && '*'}
      </label>
      <textarea
        id={id}
        name={name}
        required={required}
        rows={rows}
        aria-required={required}
        aria-describedby={showError ? errorId : undefined}
        aria-invalid={!!showError}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`ui-textarea ${showError ? 'ui-textarea--error' : ''}`}
        placeholder={placeholder}
      />
      {showError && (
        <div 
          id={errorId} 
          className="ui-error-message"
          role="alert" 
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};
