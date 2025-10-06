import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface ConsentCheckboxFieldProps {
  id: string;
  name: string;
  checked: boolean;
  required?: boolean;
  privacyPolicyUrl?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const ConsentCheckboxField: React.FC<ConsentCheckboxFieldProps> = ({
  id,
  name,
  checked,
  required = false,
  privacyPolicyUrl = '/legal/privacy-policy',
  onChange,
}) => {
  const { theme, colorMode } = useTheme();
  const colors = theme.colors[colorMode];

  const checkboxStyle = {
    accentColor: colors.accent,
    backgroundColor: colors.surface,
    borderColor: colors.border,
  };

  const labelStyle = {
    color: colors.text,
  };

  const linkStyle = {
    color: colors.accent,
  };

  return (
    <div className="flex items-start space-x-3">
      <input
        type="checkbox"
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-describedby="consent-error"
        checked={checked}
        onChange={onChange}
        className="mt-1 w-4 h-4 rounded focus:ring-2 focus:ring-opacity-50"
        style={{
          ...checkboxStyle,
          '--tw-ring-color': colors.accent,
        } as React.CSSProperties}
      />
      <label htmlFor={id} className="text-sm" style={labelStyle}>
        I consent to being contacted about my inquiry via email. View our{' '}
        <a 
          href={privacyPolicyUrl} 
          className="hover:underline" 
          style={linkStyle}
        >
          Privacy Policy
        </a>{' '}
        for details on data handling. {required && '*'}
      </label>
    </div>
  );
};
