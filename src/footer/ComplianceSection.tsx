import React from 'react';
import { SecurityBadge } from './SecurityBadge.js';
import { BADGE_TYPES } from './constants.js';
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
            {compliance.standards.map((standard, index) => (
              <span key={index} className="compliance-standard">
                {standard}
              </span>
            ))}
          </div>
        </div>
      )}

      {hasDataProtection && (
        <div className="compliance-group">
          <h4 className="compliance-subtitle">Data Protection</h4>
          <div className="compliance-badges">
            {hasDataProtection.gdpr && (
              <span className="compliance-badge compliance-badge--gdpr">GDPR Compliant</span>
            )}
            {hasDataProtection.ccpa && (
              <span className="compliance-badge compliance-badge--ccpa">CCPA Compliant</span>
            )}
            {hasDataProtection.soc2 && (
              <span className="compliance-badge compliance-badge--soc2">SOC 2 Type II</span>
            )}
            {hasDataProtection.iso27001 && (
              <span className="compliance-badge compliance-badge--iso27001">ISO 27001</span>
            )}
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
