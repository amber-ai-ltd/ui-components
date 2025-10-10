import React from 'react';
import './form-styles.css';

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
  return (
    <div className="ui-checkbox-container">
      <input
        type="checkbox"
        id={id}
        name={name}
        required={required}
        aria-required={required}
        aria-describedby="consent-error"
        checked={checked}
        onChange={onChange}
        className="ui-checkbox"
      />
      <label htmlFor={id} className="ui-label">
        I consent to being contacted about my inquiry via email. View our{' '}
        <a 
          href={privacyPolicyUrl} 
          className="hover:underline" 
          style={{ color: 'var(--ui-primary-600)' }}
        >
          Privacy Policy
        </a>{' '}
        for details on data handling. {required && '*'}
      </label>
    </div>
  );
};
