import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface LegalBreadcrumbProps {
  currentTitle: string;
}

export const LegalBreadcrumb: React.FC<LegalBreadcrumbProps> = ({ currentTitle }) => {
  const { theme } = useTheme();
  
  return (
    <nav className="legal-breadcrumb" aria-label="Legal document navigation">
      <ol className="breadcrumb-list">
        <li className="breadcrumb-item">
          <a href="/" className="breadcrumb-link">Home</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">/</li>
        <li className="breadcrumb-item">
          <a href="/legal" className="breadcrumb-link">Legal Centre</a>
        </li>
        <li className="breadcrumb-separator" aria-hidden="true">/</li>
        <li className="breadcrumb-item current" aria-current="page">
          {currentTitle}
        </li>
      </ol>
    </nav>
  );
};
