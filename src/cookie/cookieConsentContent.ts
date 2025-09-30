export interface CookieConsentText {
  title: string;
  description: string;
  privacyPolicyLinkText: string;
  cookiePolicyLinkText: string;
  acceptAllButton: string;
  declineAllButton: string;
  customizeButton: string;
  linkSeparator: string;
}

export const DEFAULT_COOKIE_CONSENT_TEXT: CookieConsentText = {
  title: 'Cookie Preferences',
  description: 'uses essential cookies to ensure our website functions properly and analytics cookies to help us improve your experience.',
  privacyPolicyLinkText: 'Privacy Policy',
  cookiePolicyLinkText: 'Cookie Policy',
  acceptAllButton: 'Accept All',
  declineAllButton: 'Decline All',
  customizeButton: 'Customize',
  linkSeparator: ' | '
};

export const getCookieConsentText = (locale?: string): CookieConsentText => {
  switch (locale) {
    default:
      return DEFAULT_COOKIE_CONSENT_TEXT;
  }
};