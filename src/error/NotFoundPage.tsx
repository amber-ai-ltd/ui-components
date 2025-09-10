import { ErrorLayout } from './ErrorLayout.js';
import { ErrorMessage } from './ErrorMessage.js';
import { ErrorActions } from './ErrorActions.js';

interface NotFoundPageProps {
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

export function NotFoundPage({
  title = "Oops! This Page is Playing Hide and Seek",
  message = "Don't worry, even our best developers get lost sometimes. Let's get you back on track!",
  primaryActionLabel = "Take Me Home",
  secondaryActionLabel = "Go Back",
  onPrimaryAction,
  onSecondaryAction,
  showTechnicalDetails = false,
  technicalMessage = "The requested resource could not be located on this server.",
  className = ''
}: NotFoundPageProps) {
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
