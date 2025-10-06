import React from 'react';

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
        className="mt-1 w-4 h-4 rounded focus:ring-2"
        style={{
          accentColor: 'var(--theme-accent)',
        }}
      />
      <label htmlFor={id} className="text-sm" style={{ color: 'var(--theme-text)' }}>
        I consent to being contacted about my inquiry via email. View our{' '}
        <a 
          href={privacyPolicyUrl} 
          className="hover:underline" 
          style={{ color: 'var(--theme-accent)' }}
        >
          Privacy Policy
        </a>{' '}
        for details on data handling. {required && '*'}
      </label>
    </div>
  );
};
