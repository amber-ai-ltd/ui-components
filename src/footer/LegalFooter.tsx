import React from 'react';
import { DEFAULT_LABELS } from './constants.js';
import type { CompanyInfo, FooterConfig } from './types.js';

interface LegalFooterProps {
  companyInfo: CompanyInfo;
  legal: FooterConfig['legal'];
  copyright: FooterConfig['copyright'];
}

export const LegalFooter: React.FC<LegalFooterProps> = ({ 
  companyInfo, 
  legal, 
  copyright 
}) => {
  const currentYear = copyright.year || new Date().getFullYear();
  const labels = { ...DEFAULT_LABELS, ...companyInfo.labels };

  return (
    <div className="legal-footer">
      <div className="company-registration">
        <p className="registration-primary">
          <strong>{companyInfo.legalName}</strong>
          {companyInfo.registrationNumber && (
            <> • {labels.COMPANY_NUMBER} {companyInfo.registrationNumber}</>
          )}
          {companyInfo.placeOfRegistration && (
            <> • {labels.REGISTERED_IN} {companyInfo.placeOfRegistration}</>
          )}
        </p>
        
        <p className="registration-address">
          {labels.REGISTERED_OFFICE} {companyInfo.registeredOffice}
        </p>
        
        {companyInfo.businessType && (
          <p className="business-type">{companyInfo.businessType}</p>
        )}
        
        {companyInfo.vatNumber && (
          <p className="vat-number">
            {labels.VAT_NUMBER} {companyInfo.vatNumber}
          </p>
        )}
      </div>

      <div className="legal-links">
        {legal.privacyPolicy && (
          <a href={legal.privacyPolicy} className="legal-link">Privacy Policy</a>
        )}
        {legal.termsOfService && (
          <a href={legal.termsOfService} className="legal-link">Terms of Service</a>
        )}
        {legal.cookiePolicy && (
          <a href={legal.cookiePolicy} className="legal-link">Cookie Policy</a>
        )}
        {legal.accessibilityStatement && (
          <a href={legal.accessibilityStatement} className="legal-link">Accessibility</a>
        )}
      </div>

      <div className="copyright">
        <p className="copyright-text">
          {copyright.text.replace('{year}', currentYear.toString())}
        </p>
      </div>
    </div>
  );
};
