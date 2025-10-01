import { useState, useEffect } from 'react';
import { saveConsentChoice, hasValidConsent, type ConsentStatus } from './cookieConsentStorage.js';

export const useCookieConsent = (delayMs: number = 1000) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (hasValidConsent()) return;
    
    const timer = setTimeout(() => {
      setIsVisible(true);
      setIsAnimating(true);
    }, delayMs);

    return () => clearTimeout(timer);
  }, [delayMs]);

  const handleConsentAction = (choice: ConsentStatus, callbacks?: {
    onAccept?: () => void;
    onDecline?: () => void;
    onCustomize?: () => void;
  }) => {
    console.log('Cookie consent choice:', choice);
    saveConsentChoice(choice);
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
    
    if (choice === 'accepted') callbacks?.onAccept?.();
    else if (choice === 'declined') callbacks?.onDecline?.();
    else if (choice === 'customized') callbacks?.onCustomize?.();
  };

  return {
    isVisible,
    isAnimating,
    handleConsentAction
  };
};