import React from 'react';
import './form-styles.css';

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
        className="ui-label"
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
        className="ui-select"
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
