import { forwardRef, type ButtonHTMLAttributes } from 'react';

export type ToggleSize = 'sm' | 'md' | 'lg';

interface ToggleProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onChange'> {
  checked: boolean;
  onChange: (checked: boolean) => void;
  size?: ToggleSize;
}

const toggleSizes: Record<ToggleSize, { track: string; thumb: string; translate: string }> = {
  sm: { track: 'h-4 w-7', thumb: 'h-3 w-3', translate: 'translate-x-3.5' },
  md: { track: 'h-6 w-11', thumb: 'h-4 w-4', translate: 'translate-x-6' },
  lg: { track: 'h-8 w-14', thumb: 'h-6 w-6', translate: 'translate-x-7' }
};

export const Toggle = forwardRef<HTMLButtonElement, ToggleProps>(
  ({ checked, onChange, size = 'md', disabled, className = '', ...props }, ref) => {
    const { track, thumb, translate } = toggleSizes[size];
    
    const baseClasses = 'relative inline-flex items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed';
    const stateClasses = checked ? 'bg-blue-600' : 'bg-gray-200 dark:bg-gray-600';
    const thumbClasses = `inline-block transform rounded-full bg-white transition-transform ${thumb}`;
    const thumbPosition = checked ? translate : 'translate-x-0.5';
    
    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        disabled={disabled}
        onClick={() => !disabled && onChange(!checked)}
        className={`${baseClasses} ${track} ${stateClasses} ${className}`}
        {...props}
      >
        <span className={`${thumbClasses} ${thumbPosition}`} />
      </button>
    );
  }
);

Toggle.displayName = 'Toggle';
