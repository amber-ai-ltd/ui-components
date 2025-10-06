import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

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
  const { theme, colorMode } = useTheme();
  const showError = error && touched;
  const errorId = `${id}-error`;
  const colors = theme.colors[colorMode];

  const labelStyle = {
    color: colors.text,
  };

  const textareaStyle = {
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
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors placeholder-opacity-60"
        style={{
          ...textareaStyle,
          focusRingColor: colors.accent,
          borderColor: showError ? '#ef4444' : colors.border,
          '--tw-ring-color': colors.accent,
        } as React.CSSProperties}
        placeholder={placeholder}
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
