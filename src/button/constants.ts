import type { ButtonVariant, ButtonSize, ButtonShape } from './types.js';

export const FLOATING_BUTTON_STYLES = {
  base: 'fixed shadow-lg z-50 w-12 h-12 !p-0 transition-colors focus:ring-4',
  colors: 'bg-[var(--ui-primary-600)] hover:bg-[var(--ui-primary-700)] text-white border-[var(--ui-primary-600)] focus:ring-[var(--ui-primary-300)]'
};

export const SHAPE_STYLES: Record<ButtonShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-lg',
  hexagon: 'hexagon-shape'
};

export const BUTTON_VARIANTS: Record<ButtonVariant, string> = {
  primary: 'bg-[var(--ui-primary-600)] hover:bg-[var(--ui-primary-700)] text-white border-[var(--ui-primary-600)]',
  secondary: 'bg-[var(--ui-secondary-600)] hover:bg-[var(--ui-secondary-700)] text-white border-[var(--ui-secondary-600)]',
  outline: 'bg-transparent hover:bg-[var(--ui-primary-50)] dark:hover:bg-[var(--ui-primary-900)] text-[var(--ui-primary-600)] border-[var(--ui-primary-600)]',
  ghost: 'bg-transparent hover:bg-[var(--ui-gray-100)] dark:hover:bg-[var(--ui-gray-800)] text-[var(--ui-gray-700)] dark:text-[var(--ui-gray-300)] border-transparent',
  destructive: 'bg-[var(--ui-error-600)] hover:bg-[var(--ui-error-700)] text-white border-[var(--ui-error-600)]',
  floating: `${FLOATING_BUTTON_STYLES.base} ${FLOATING_BUTTON_STYLES.colors}`
};

export const BUTTON_SIZES: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};
