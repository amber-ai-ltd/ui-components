import React from 'react';

interface DataProtectionBadgeProps {
  type: 'gdpr' | 'ccpa' | 'soc2' | 'iso27001';
  enabled?: boolean | { href?: string };
}

const BADGE_CONFIG = {
  gdpr: { label: 'GDPR Compliant', class: 'compliance-badge--gdpr' },
  ccpa: { label: 'CCPA Compliant', class: 'compliance-badge--ccpa' },
  soc2: { label: 'SOC 2 Type II', class: 'compliance-badge--soc2' },
  iso27001: { label: 'ISO 27001', class: 'compliance-badge--iso27001' },
};

export const DataProtectionBadge: React.FC<DataProtectionBadgeProps> = ({ type, enabled }) => {
  if (!enabled) return null;

  const config = BADGE_CONFIG[type];
  const className = `compliance-badge ${config.class}`;
  const href = typeof enabled === 'object' ? enabled.href : undefined;

  if (href) {
    return (
      <a 
        href={href}
        className={className}
        target="_blank"
        rel="noopener noreferrer"
      >
        {config.label}
      </a>
    );
  }

  return (
    <span className={className}>
      {config.label}
    </span>
  );
};
