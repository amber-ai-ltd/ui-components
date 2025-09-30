import React, { useState, useEffect } from 'react';
import { CookieConsentTextContent } from './CookieConsentText';
import { CookieConsentActions } from './CookieConsentActions';
import { getCookieConsentText, type CookieConsentText } from './cookieConsentContent';
import { saveConsentChoice, hasValidConsent, type ConsentStatus } from './cookieConsentStorage';
import './cookieConsent.css';

export interface CookieConsentBannerProps {
  brandName: string;
  brandColor: string;
  privacyPolicyUrl?: string;
  cookiePolicyUrl?: string;
  position?: 'bottom' | 'top';
  locale?: string;
  customText?: Partial<CookieConsentText>;
  delayMs?: number;
  onAccept?: () => void;
  onDecline?: () => void;
  onCustomize?: () => void;
}

export const CookieConsentBanner: React.FC<CookieConsentBannerProps> = ({
  brandName,
  brandColor,
  privacyPolicyUrl = '/legal/privacy-policy',
  cookiePolicyUrl = '/legal/cookie-policy',
  position = 'bottom',
  locale,
  customText,
  delayMs = 1000,
  onAccept,
  onDecline,
  onCustomize
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const text = { ...getCookieConsentText(locale), ...customText };

  useEffect(() => {
    if (hasValidConsent()) return;
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleConsentAction = (choice: ConsentStatus) => {
    saveConsentChoice(choice);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  const bannerClasses = [
    'cookie-consent-banner',
    `cookie-consent-banner--${position}`,
    isAnimating 
      ? 'cookie-consent-banner--visible'
      : `cookie-consent-banner--hidden-${position}`
  ].join(' ');

  return (
    <div 
      className={bannerClasses}
      role="banner"
      aria-label="Cookie consent banner"
    >
      <div className="cookie-consent-container">
        <div className="cookie-consent-content">
          <CookieConsentTextContent
            brandName={brandName}
            brandColor={brandColor}
            privacyPolicyUrl={privacyPolicyUrl}
            cookiePolicyUrl={cookiePolicyUrl}
            text={text}
          />
          
          <CookieConsentActions
            text={text}
            brandColor={brandColor}
            onAction={handleConsentAction}
            onAccept={onAccept}
            onDecline={onDecline}
            onCustomize={onCustomize}
          />
        </div>
      </div>
    </div>
  );
};