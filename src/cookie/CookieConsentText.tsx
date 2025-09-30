import React from 'react';
import { CookieIcon } from './CookieIcon.js';
import type { CookieConsentText } from './cookieConsentContent.js';

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
  <div className="flex-1">
    <div className="flex items-center gap-2 mb-2">
      <CookieIcon className="text-gray-600 dark:text-gray-400 flex-shrink-0" size={20} />
      <h3 className="text-sm font-semibold text-gray-900 dark:text-gray-100">
        {text.title}
      </h3>
    </div>
    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
      {brandName} {text.description}
      {' '}
      <a 
        href={privacyPolicyUrl}
        className="underline hover:no-underline transition-colors"
        style={{ color: brandColor }}
      >
        {text.privacyPolicyLinkText}
      </a>
      {text.linkSeparator}
      <a 
        href={cookiePolicyUrl}
        className="underline hover:no-underline transition-colors"
        style={{ color: brandColor }}
      >
        {text.cookiePolicyLinkText}
      </a>
    </p>
  </div>
);