import React from 'react';

interface CookieIconProps {
  className?: string;
  size?: number;
}

export const CookieIcon: React.FC<CookieIconProps> = ({ 
  className = '', 
  size = 20 
}) => (
  <svg 
    width={size}
    height={size}
    className={className}
    fill="currentColor" 
    viewBox="0 0 20 20"
    role="img"
    aria-label="Cookie preferences"
  >
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
  </svg>
);