import React from 'react';

interface ComplianceStandardProps {
  name: string;
  href?: string;
}

export const ComplianceStandard: React.FC<ComplianceStandardProps> = ({ name, href }) => {
  if (href) {
    return (
      <a 
        href={href}
        className="compliance-standard"
        target="_blank"
        rel="noopener noreferrer"
      >
        {name}
      </a>
    );
  }
  
  return (
    <span className="compliance-standard">
      {name}
    </span>
  );
};
