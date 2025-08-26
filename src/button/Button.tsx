import { forwardRef, type ButtonHTMLAttributes, type AnchorHTMLAttributes, type ReactNode } from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'destructive' | 'floating';
export type ButtonSize = 'sm' | 'md' | 'lg';

type BaseButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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
  base: 'fixed rounded-full shadow-lg z-50 w-12 h-12 !p-0 transition-colors focus:ring-4',
  colors: 'bg-primary-600 hover:bg-primary-700 text-white border-primary-600 focus:ring-primary-300'
};

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

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { 
      variant = 'primary', 
      size = 'md', 
      className = '', 
      children, 
      fullWidth = false, 
      leftIcon, 
      rightIcon, 
      href,
      ...restProps 
    } = props;
    
    const baseClasses = `inline-flex items-center justify-center rounded-md border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''}`;
    const variantClasses = buttonVariants[variant];
    const sizeClasses = buttonSizes[size];
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
