import React from 'react';
import { DOCUMENT_CLASSES } from './constants.js';
import type { DocumentMetadata, CompanyInfo } from './types.js';

interface DocumentHeaderProps {
  metadata: DocumentMetadata;
  companyInfo: CompanyInfo;
}

export const DocumentHeader: React.FC<DocumentHeaderProps> = ({ 
  metadata, 
  companyInfo 
}) => {
  return (
    <header className={DOCUMENT_CLASSES.HEADER}>
      <div className="document-header-content">
        <h1 className="document-title">{metadata.title}</h1>
        <div className="company-name">{companyInfo.legalName}</div>
      </div>
      
      <div className={DOCUMENT_CLASSES.METADATA}>
        <div className="metadata-grid">
          <div className="metadata-item">
            <span className="metadata-label">Version</span>
            <span className="metadata-value">{metadata.version}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Effective Date</span>
            <span className="metadata-value">{metadata.effectiveDate}</span>
          </div>
          <div className="metadata-item">
            <span className="metadata-label">Last Updated</span>
            <span className="metadata-value">{metadata.lastUpdated}</span>
          </div>
        </div>
      </div>
    </header>
  );
};
