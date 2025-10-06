import React from 'react';

interface TextInputFieldProps {
  id: string;
  name: string;
  label: string;
  type?: 'text' | 'email';
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
        className="block text-sm font-medium mb-2"
        style={{ color: 'var(--theme-text)' }}
      >
        {label} {required && '*'}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-describedby={showError ? errorId : undefined}
        aria-invalid={!!showError}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
        style={{
          backgroundColor: 'var(--theme-surface)',
          borderColor: showError ? '#ef4444' : 'var(--theme-border)',
          color: 'var(--theme-text)',
        }}
        placeholder={placeholder}
        data-testid={testId}
      />
      {showError && (
        <div 
          id={errorId} 
          className="mt-1 text-sm" 
          style={{ color: '#ef4444' }}
          role="alert" 
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};
