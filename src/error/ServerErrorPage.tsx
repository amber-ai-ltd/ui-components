import { ErrorLayout } from './ErrorLayout.js';
import { ErrorMessage } from './ErrorMessage.js';
import { ErrorActions } from './ErrorActions.js';

interface ServerErrorPageProps {
  title?: string;
  message?: string;
  primaryActionLabel?: string;
  secondaryActionLabel?: string;
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  showTechnicalDetails?: boolean;
  technicalMessage?: string;
  className?: string;
}

export function ServerErrorPage({
  title = "Our Servers Are Taking a Coffee Break",
  message = "They work hard and deserve it! While they recharge, why not explore our other amazing features?",
  primaryActionLabel = "Try Again",
  secondaryActionLabel = "Explore Features",
  onPrimaryAction,
  onSecondaryAction,
  showTechnicalDetails = false,
  technicalMessage = "The server encountered an unexpected condition that prevented it from fulfilling the request.",
  className = ''
}: ServerErrorPageProps) {
  return (
    <ErrorLayout className={className}>
      <ErrorMessage
        title={title}
        message={message}
        showTechnicalDetails={showTechnicalDetails}
        technicalMessage={technicalMessage}
      />
      <ErrorActions
        primaryLabel={primaryActionLabel}
        secondaryLabel={secondaryActionLabel}
        onPrimaryAction={onPrimaryAction}
        onSecondaryAction={onSecondaryAction}
      />
    </ErrorLayout>
  );
}
