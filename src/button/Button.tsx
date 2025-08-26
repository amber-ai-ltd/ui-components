import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'floating';
export type ButtonSize = 'sm' | 'md' | 'lg';
export type ButtonShape = 'circle' | 'square' | 'hexagon';

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  shape?: ButtonShape;
  children: ReactNode;
  className?: string;
  fullWidth?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
};

type ButtonAsButton = BaseButtonProps & ButtonHTMLAttributes<HTMLButtonElement> & {
  href?: never;
};

type ButtonAsLink = BaseButtonProps & AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

const FLOATING_BUTTON_STYLES = {
  base: 'fixed shadow-lg z-50 w-12 h-12 !p-0 transition-colors focus:ring-4',
  colors: 'bg-primary-600 hover:bg-primary-700 text-white border-primary-600 focus:ring-primary-300'
};

const SHAPE_STYLES: Record<ButtonShape, string> = {
  circle: 'rounded-full',
  square: 'rounded-lg',
  hexagon: 'hexagon-shape'
};

// Hexagon CSS-only shape using clip-path
const HEXAGON_STYLES = `
  .hexagon-shape {
    clip-path: polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%);
    transition: all 0.3s ease;
  }
  
  .hexagon-shape:hover {
    transform: scale(1.05);
  }
  
  .hexagon-shape:active {
    transform: scale(0.95);
  }
`;

const buttonVariants: Record<ButtonVariant, string> = {
  primary: 'bg-primary-600 hover:bg-primary-700 text-white border-primary-600',
  secondary: 'bg-secondary-600 hover:bg-secondary-700 text-white border-secondary-600',
  outline: 'bg-transparent hover:bg-primary-50 dark:hover:bg-primary-900 text-primary-600 border-primary-600',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300 border-transparent',
  destructive: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
  floating: `${FLOATING_BUTTON_STYLES.base} ${FLOATING_BUTTON_STYLES.colors}`
};

const buttonSizes: Record<ButtonSize, string> = {
  sm: 'px-3 py-2 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-6 py-3 text-lg'
};

// Inject hexagon styles into the document head if not already present
if (typeof document !== 'undefined' && !document.querySelector('#hexagon-styles')) {
  const style = document.createElement('style');
  style.id = 'hexagon-styles';
  style.textContent = HEXAGON_STYLES;
  document.head.appendChild(style);
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { 
      variant = 'primary', 
      size = 'md', 
      shape = 'circle',
      className = '', 
      children, 
      fullWidth = false, 
      leftIcon, 
      rightIcon, 
      href,
      ...restProps 
    } = props;
    
    // Special handling for floating buttons with shapes
    const isFloating = variant === 'floating';
    const shapeClasses = isFloating ? SHAPE_STYLES[shape] : 'rounded-md';
    
    const baseClasses = `inline-flex items-center justify-center ${shapeClasses} border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''}`;
    const variantClasses = buttonVariants[variant];
    const sizeClasses = isFloating ? '' : buttonSizes[size]; // Floating buttons have fixed size
    const combinedClassName = `${baseClasses} ${variantClasses} ${sizeClasses} ${className}`;
    
    const content = (
      <>
        {leftIcon && <span className="mr-2">{leftIcon}</span>}
        {children}
        {rightIcon && <span className="ml-2">{rightIcon}</span>}
      </>
    );
    
    if (href) {
      return (
        <a
          ref={ref as any}
          href={href}
          className={combinedClassName}
          {...(restProps as any)}
        >
          {content}
        </a>
      );
    }
    
    return (
      <button
        ref={ref}
        className={combinedClassName}
        {...(restProps as any)}
      >
        {content}
      </button>
    );
  }
);

Button.displayName = 'Button';
