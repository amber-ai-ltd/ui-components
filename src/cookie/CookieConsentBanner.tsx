import React, { useState, useEffect } from 'react';
import { CookieConsentTextContent } from './CookieConsentText';
import { CookieConsentActions } from './CookieConsentActions';
import { getCookieConsentText, type CookieConsentText } from './cookieConsentContent';
import { saveConsentChoice, hasValidConsent, type ConsentStatus } from './cookieConsentStorage';

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

  const positionClasses = position === 'top' 
    ? 'top-0 border-b' 
    : 'bottom-0 border-t';

  const animationClasses = isAnimating 
    ? 'translate-y-0 opacity-100' 
    : position === 'top' 
      ? '-translate-y-full opacity-0' 
      : 'translate-y-full opacity-0';

  const bannerClasses = `fixed left-0 right-0 ${positionClasses} bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${animationClasses}`;

  return (
    <div 
      className={bannerClasses}
      role="banner"
      aria-label="Cookie consent banner"
    >
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-4">
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