import React from 'react';
import { CookieConsentTextContent } from './CookieConsentText.js';
import { CookieConsentActions } from './CookieConsentActions.js';
import { getCookieConsentText, type CookieConsentText } from './cookieConsentContent.js';
import { useCookieConsent } from './useCookieConsent.js';
import { getCookieBannerClasses } from './animation.js';
import type { ConsentStatus } from './cookieConsentStorage.js';

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
  const { isVisible, isAnimating, handleConsentAction } = useCookieConsent(delayMs);
  const text = { ...getCookieConsentText(locale), ...customText };

  if (!isVisible) return null;

  const bannerClasses = getCookieBannerClasses(isVisible, isAnimating, position);
  
  const onConsentAction = (choice: ConsentStatus) => {
    handleConsentAction(choice, { onAccept, onDecline, onCustomize });
  };

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
            onAction={onConsentAction}
            onAccept={onAccept}
            onDecline={onDecline}
            onCustomize={onCustomize}
          />
        </div>
      </div>
    </div>
  );
};