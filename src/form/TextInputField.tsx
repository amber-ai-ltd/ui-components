import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

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
  const { theme, colorMode } = useTheme();
  const showError = error && touched;
  const errorId = `${id}-error`;
  const colors = theme.colors[colorMode];

  const labelStyle = {
    color: colors.text,
  };

  const inputStyle = {
    backgroundColor: colors.surface,
    borderColor: showError ? '#ef4444' : colors.border,
    color: colors.text,
  };

  const errorStyle = {
    color: '#ef4444',
  };

  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium mb-2"
        style={labelStyle}
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
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-opacity-60"
        style={{
          ...inputStyle,
          focusRingColor: colors.accent,
          borderColor: showError ? '#ef4444' : colors.border,
          '--tw-ring-color': colors.accent,
        } as React.CSSProperties}
        placeholder={placeholder}
        data-testid={testId}
      />
      {showError && (
        <div 
          id={errorId} 
          className="mt-1 text-sm" 
          style={errorStyle}
          role="alert" 
          aria-live="polite"
        >
          {error}
        </div>
      )}
    </div>
  );
};
