import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface SelectOption {
  value: string;
  label: string;
}

interface SelectFieldProps {
  id: string;
  name: string;
  label: string;
  required?: boolean;
  value: string;
  options: readonly SelectOption[];
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLSelectElement>) => void;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  id,
  name,
  label,
  required = false,
  value,
  options,
  onChange,
  onBlur,
}) => {
  const { theme, colorMode } = useTheme();
  const colors = theme.colors[colorMode];

  const labelStyle = {
    color: colors.text,
  };

  const selectStyle = {
    backgroundColor: colors.surface,
    borderColor: colors.border,
    color: colors.text,
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
      <select
        id={id}
        name={name}
        required={required}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-opacity-50 transition-colors"
        style={{
          ...selectStyle,
          '--tw-ring-color': colors.accent,
        } as React.CSSProperties}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
