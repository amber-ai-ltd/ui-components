import React from 'react';

interface SecurityBadgeProps {
  name: string;
  icon?: string;
  href?: string;
}

export const SecurityBadge: React.FC<SecurityBadgeProps> = ({ name, icon, href }) => {
  const content = (
    <div className="security-badge">
      {icon && <span className="security-badge-icon">{icon}</span>}
      <span className="security-badge-text">{name}</span>
    </div>
  );

  if (href) {
    return (
      <a 
        href={href} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="security-badge-link"
      >
        {content}
      </a>
    );
  }

  return content;
};
