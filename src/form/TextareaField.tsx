import React from 'react';

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
        className="block text-sm font-medium mb-2"
        style={{ color: 'var(--theme-text)' }}
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
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
        style={{
          backgroundColor: 'var(--theme-surface)',
          borderColor: showError ? '#ef4444' : 'var(--theme-border)',
          color: 'var(--theme-text)',
        }}
        placeholder={placeholder}
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
