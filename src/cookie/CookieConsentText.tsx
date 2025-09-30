import React from 'react';
import { CookieIcon } from './CookieIcon';
import type { CookieConsentText } from './cookieConsentContent';

export interface CookieConsentTextProps {
  brandName: string;
  brandColor: string;
  privacyPolicyUrl: string;
  cookiePolicyUrl: string;
  text: CookieConsentText;
}

export const CookieConsentTextContent: React.FC<CookieConsentTextProps> = ({
  brandName,
  brandColor,
  privacyPolicyUrl,
  cookiePolicyUrl,
  text
}) => (
  <div className="cookie-consent-text-section">
    <div className="cookie-consent-header">
      <CookieIcon className="cookie-consent-icon" size={20} />
      <h3 className="cookie-consent-title">
        {text.title}
      </h3>
    </div>
    <p className="cookie-consent-description">
      {brandName} {text.description}
      {' '}
      <a 
        href={privacyPolicyUrl}
        className="cookie-consent-link"
        style={{ color: brandColor }}
      >
        {text.privacyPolicyLinkText}
      </a>
      {text.linkSeparator}
      <a 
        href={cookiePolicyUrl}
        className="cookie-consent-link"
        style={{ color: brandColor }}
      >
        {text.cookiePolicyLinkText}
      </a>
    </p>
  </div>
);