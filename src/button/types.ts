import type { ButtonHTMLAttributes, AnchorHTMLAttributes, ReactNode } from 'react';

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