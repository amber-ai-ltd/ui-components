import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface LegalDocument {
  title: string;
  href: string;
  description: string;
  version: string;
  lastUpdated: string;
  essential: boolean;
}

interface LegalSidebarProps {
  currentDocument: string;
  documents: LegalDocument[];
}

const isCurrentDoc = (title: string, current: string) => 
  title.toLowerCase() === current.toLowerCase();

export const LegalSidebar: React.FC<LegalSidebarProps> = ({ 
  currentDocument, 
  documents 
}) => {
  const { theme } = useTheme();
  const essentialDocs = documents.filter(doc => doc.essential);
  const additionalDocs = documents.filter(doc => !doc.essential);

  return (
    <nav className="sidebar-nav" aria-label="Legal documents navigation">
      <div className="sidebar-header">
        <h2 className="sidebar-title">Legal Centre</h2>
        <p className="sidebar-subtitle">{theme.branding.legalName}</p>
      </div>

      <div className="nav-section">
        <h3 className="section-title">Essential Documents</h3>
        <ul className="nav-list">
          {essentialDocs.map(doc => (
            <li key={doc.href} className="nav-item">
              <a 
                href={doc.href} 
                className={`nav-link ${isCurrentDoc(doc.title, currentDocument) ? 'active' : ''}`}
                aria-current={isCurrentDoc(doc.title, currentDocument) ? 'page' : undefined}
              >
                <span className="nav-title">{doc.title}</span>
                <span className="nav-version">v{doc.version}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="nav-section">
        <h3 className="section-title">Additional Documents</h3>
        <ul className="nav-list">
          {additionalDocs.map(doc => (
            <li key={doc.href} className="nav-item">
              <a 
                href={doc.href} 
                className={`nav-link ${isCurrentDoc(doc.title, currentDocument) ? 'active' : ''}`}
                aria-current={isCurrentDoc(doc.title, currentDocument) ? 'page' : undefined}
              >
                <span className="nav-title">{doc.title}</span>
                <span className="nav-version">v{doc.version}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-footer">
        <p className="footer-text">Need help with legal matters?</p>
        <a href="#contact" className="contact-link">Contact Legal Team</a>
      </div>
    </nav>
  );
};
