import type { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface ErrorLayoutProps {
  children: ReactNode;
  className?: string;
  'data-testid'?: string;
}

export function ErrorLayout({ children, className = '', ...props }: ErrorLayoutProps) {
  const { colorMode } = useTheme();
  
  return (
    <main 
      className={`error-layout ${className}`}
      data-theme={colorMode}
      {...props}
    >
      <div className="error-container">
        {children}
      </div>
    </main>
  );
}
