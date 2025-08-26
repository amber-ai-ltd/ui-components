import React from 'react';
import { SecurityBadge } from './SecurityBadge.js';
import { ComplianceStandard } from './ComplianceStandard.js';
import { DataProtectionBadge } from './DataProtectionBadge.js';
import type { ComplianceInfo } from './types.js';

interface ComplianceSectionProps {
  compliance?: ComplianceInfo;
}

export const ComplianceSection: React.FC<ComplianceSectionProps> = ({ compliance }) => {
  if (!compliance) return null;

  const hasStandards = compliance.standards.length > 0;
  const hasDataProtection = compliance.dataProtection;
  const hasSecurityBadges = compliance.securityBadges && compliance.securityBadges.length > 0;

  return (
    <div className="compliance-section">
      <h3 className="compliance-title">Security & Compliance</h3>
      
      {hasStandards && (
        <div className="compliance-group">
          <h4 className="compliance-subtitle">Standards</h4>
          <div className="compliance-standards">
            {compliance.standards.map((standard, index) => {
              const name = typeof standard === 'string' ? standard : standard.name;
              const href = typeof standard === 'string' ? undefined : standard.href;
              return (
                <ComplianceStandard key={index} name={name} href={href} />
              );
            })}
          </div>
        </div>
      )}

      {hasDataProtection && (
        <div className="compliance-group">
          <h4 className="compliance-subtitle">Data Protection</h4>
          <div className="compliance-badges">
            <DataProtectionBadge type="gdpr" enabled={hasDataProtection.gdpr} />
            <DataProtectionBadge type="ccpa" enabled={hasDataProtection.ccpa} />
            <DataProtectionBadge type="soc2" enabled={hasDataProtection.soc2} />
            <DataProtectionBadge type="iso27001" enabled={hasDataProtection.iso27001} />
          </div>
        </div>
      )}

      {hasSecurityBadges && (
        <div className="compliance-group">
          <h4 className="compliance-subtitle">Security</h4>
          <div className="security-badges">
            {compliance.securityBadges!.map((badge, index) => (
              <SecurityBadge key={index} {...badge} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
