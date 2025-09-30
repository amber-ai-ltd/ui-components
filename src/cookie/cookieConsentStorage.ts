export type ConsentStatus = 'accepted' | 'declined' | 'customized';

export interface ConsentData {
  status: ConsentStatus;
  timestamp: number;
}

const COOKIE_CONSENT_KEY = 'cookie-consent-status';
const CONSENT_EXPIRY_DAYS = 365;

export const saveConsentChoice = (choice: ConsentStatus): void => {
  const consentData: ConsentData = {
    status: choice,
    timestamp: Date.now()
  };
  localStorage.setItem(COOKIE_CONSENT_KEY, JSON.stringify(consentData));
};

export const getConsentStatus = (): ConsentData | null => {
  try {
    const stored = localStorage.getItem(COOKIE_CONSENT_KEY);
    if (!stored) return null;
    
    const consentData: ConsentData = JSON.parse(stored);
    const expiryTime = consentData.timestamp + (CONSENT_EXPIRY_DAYS * 24 * 60 * 60 * 1000);
    
    if (Date.now() > expiryTime) {
      clearConsentStatus();
      return null;
    }
    
    return consentData;
  } catch {
    clearConsentStatus();
    return null;
  }
};

export const clearConsentStatus = (): void => {
  localStorage.removeItem(COOKIE_CONSENT_KEY);
};

export const hasValidConsent = (): boolean => {
  return getConsentStatus() !== null;
};