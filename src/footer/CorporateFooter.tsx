import React from 'react';
import { BrandSection } from './BrandSection.js';
import { NavigationSection } from './NavigationSection.js';
import { ComplianceSection } from './ComplianceSection.js';
import { LegalFooter } from './LegalFooter.js';
import { FOOTER_SECTIONS } from './constants.js';
import type { FooterConfig, FooterVariant } from './types.js';

interface CorporateFooterProps {
  config: FooterConfig;
  variant?: FooterVariant;
  className?: string;
}

export const CorporateFooter: React.FC<CorporateFooterProps> = ({ 
  config, 
  variant = 'enterprise',
  className = '' 
}) => {
  const showCompliance = variant === 'corporate' || variant === 'enterprise';

  return (
    <footer className={`footer footer--${variant} ${className}`}>
      <div className="footer-container">
        <div className="footer-content">
          
          <div className="footer-brand">
            <BrandSection 
              brand={config.brand} 
              contact={config.contact} 
            />
          </div>

          <div className="footer-navigation">
            <NavigationSection sections={config.sections} />
          </div>

          {showCompliance && config.compliance && (
            <div className="footer-compliance">
              <ComplianceSection compliance={config.compliance} />
            </div>
          )}
        </div>

        <div className="footer-legal">
          <LegalFooter 
            companyInfo={config.companyInfo}
            legal={config.legal}
            copyright={config.copyright}
          />
        </div>
      </div>
    </footer>
  );
};

export default CorporateFooter;
