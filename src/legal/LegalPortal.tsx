import React, { ReactNode } from 'react';
import { useTheme } from '../theme/ThemeContext.js';
import { LegalSidebar } from './LegalSidebar.js';
import { LegalBreadcrumb } from './LegalBreadcrumb.js';

interface LegalDocument {
  title: string;
  href: string;
  description: string;
  version: string;
  lastUpdated: string;
  essential: boolean;
}

interface LegalPortalProps {
  currentDocument: string;
  documents: LegalDocument[];
  children: ReactNode;
}

export const LegalPortal: React.FC<LegalPortalProps> = ({ 
  currentDocument, 
  documents, 
  children 
}) => {
  const { theme } = useTheme();
  
  return (
    <div className="legal-portal">
      <div className="legal-breadcrumb-container">
        <LegalBreadcrumb currentTitle={currentDocument} />
      </div>
      
      <div className="legal-layout">
        <aside className="legal-sidebar">
          <LegalSidebar currentDocument={currentDocument} documents={documents} />
        </aside>
        
        <main className="legal-content">
          <div className="document-container">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
};
