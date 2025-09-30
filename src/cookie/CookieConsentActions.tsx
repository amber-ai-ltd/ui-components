import React from 'react';
import { Button } from '../button/Button.js';
import type { CookieConsentText } from './cookieConsentContent.js';
import type { ConsentStatus } from './cookieConsentStorage.js';

export interface CookieConsentActionsProps {
  text: CookieConsentText;
  brandColor: string;
  onAction: (choice: ConsentStatus) => void;
  onCustomize?: () => void;
  onDecline?: () => void;
  onAccept?: () => void;
}

export const CookieConsentActions: React.FC<CookieConsentActionsProps> = ({
  text,
  brandColor,
  onAction,
  onCustomize,
  onDecline,
  onAccept
}) => {
  const handleCustomize = () => {
    onAction('customized');
    onCustomize?.();
  };

  const handleDecline = () => {
    onAction('declined');
    onDecline?.();
  };

  const handleAccept = () => {
    onAction('accepted');
    onAccept?.();
  };

  return (
    <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
      <Button
        variant="outline"
        size="sm"
        onClick={handleDecline}
        className="w-full sm:w-auto"
      >
        {text.declineAllButton}
      </Button>
      
      <Button
        variant="primary"
        size="sm"
        onClick={handleAccept}
        className="w-full sm:w-auto px-6"
        style={{ backgroundColor: brandColor }}
      >
        {text.acceptAllButton}
      </Button>
    </div>
  );
};