import React from 'react';

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
  return (
    <div>
      <label 
        htmlFor={id} 
        className="block text-sm font-medium mb-2"
        style={{ color: 'var(--theme-text)' }}
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
        className="w-full px-4 py-3 border rounded-lg focus:ring-2 transition-colors"
        style={{
          backgroundColor: 'var(--theme-surface)',
          borderColor: 'var(--theme-border)',
          color: 'var(--theme-text)',
        }}
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
