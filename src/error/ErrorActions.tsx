import { Button } from '../button/Button.js';

interface ErrorActionsProps {
  onPrimaryAction?: () => void;
  onSecondaryAction?: () => void;
  primaryLabel: string;
  secondaryLabel: string;
  className?: string;
}

export function ErrorActions({
  onPrimaryAction,
  onSecondaryAction,
  primaryLabel,
  secondaryLabel,
  className = ''
}: ErrorActionsProps) {
  const handlePrimaryClick = () => {
    if (onPrimaryAction) {
      onPrimaryAction();
    }
  };

  const handleSecondaryClick = () => {
    if (onSecondaryAction) {
      onSecondaryAction();
    }
  };

  return (
    <div className={`error-actions ${className}`}>
      <Button
        variant="primary"
        size="lg"
        onClick={handlePrimaryClick}
        className="action-primary"
      >
        {primaryLabel}
      </Button>
      
      <Button
        variant="outline"
        size="lg"
        onClick={handleSecondaryClick}
        className="action-secondary"
      >
        {secondaryLabel}
      </Button>
    </div>
  );
}
