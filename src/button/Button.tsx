import { forwardRef } from 'react';
import type { ButtonProps } from './types.js';
import { BUTTON_VARIANTS, BUTTON_SIZES, SHAPE_STYLES } from './constants.js';
import './hexagon.css';

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
    
    const isFloating = variant === 'floating';
    const shapeClasses = isFloating ? SHAPE_STYLES[shape] : 'rounded-md';
    
    const baseClasses = `inline-flex items-center justify-center ${shapeClasses} border font-medium transition-all focus:outline-none focus:ring-2 focus:ring-[var(--ui-primary-500)] focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed ${fullWidth ? 'w-full' : ''}`;
    const variantClasses = BUTTON_VARIANTS[variant];
    const sizeClasses = isFloating ? '' : BUTTON_SIZES[size];
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
