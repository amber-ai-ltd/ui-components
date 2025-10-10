import React from 'react';
import './form-styles.css';

interface TextInputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email';
  autoComplete?: string;
  required?: boolean;
  value: string;
  placeholder?: string;
  error?: string;
  touched?: boolean;
  testId?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const TextInputField: React.FC<TextInputFieldProps> = ({
  id,
  name,
  label,
  type = 'text',
  autoComplete,
  required = false,
  value,
  placeholder,
  error,
  touched,
  testId,
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
      <input
        type={type}
        id={id}
        name={name}
        autoComplete={autoComplete}
        required={required}
        aria-required={required}
        aria-describedby={showError ? errorId : undefined}
        aria-invalid={!!showError}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className={`ui-text-input ${showError ? 'ui-text-input--error' : ''}`}
        placeholder={placeholder}
        data-testid={testId}
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
