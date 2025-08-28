import React, { ReactNode } from 'react';
import { DocumentHeader } from './DocumentHeader.js';
import { TableOfContents } from './TableOfContents.js';
import { DOCUMENT_CLASSES } from './constants.js';
import type { LegalDocumentProps, Section } from './types.js';
import './styles/documentContainer.css';
import './styles/documentHeader.css';
import './styles/tableOfContents.css';
import './styles/documentContent.css';
import './styles/contentElements.css';

interface LegalDocumentComponentProps extends LegalDocumentProps {
  children: ReactNode;
}

export const LegalDocument: React.FC<LegalDocumentComponentProps> = ({
  metadata,
  companyInfo,
  showTableOfContents = false,
  sections: explicitSections,
  children,
}) => {
  const extractSections = (content: ReactNode) => {
    const sections: Array<{ id: string; title: string; level: number }> = [];
    
    React.Children.forEach(content, (child) => {
      if (React.isValidElement(child)) {
        const { type, props } = child;
        const tagName = typeof type === 'string' ? type : '';
        
        if (['h2', 'h3', 'h4'].includes(tagName) && props.id && props.children) {
          const level = parseInt(tagName.charAt(1));
          const title = typeof props.children === 'string' 
            ? props.children 
            : 'Section';
            
          sections.push({ id: props.id, title, level });
        }
      }
    });
    
    return sections;
  };

  const sections = showTableOfContents 
    ? (explicitSections || extractSections(children))
    : [];

  return (
    <div className="document-container">
      <article className={DOCUMENT_CLASSES.CONTAINER}>
        <DocumentHeader metadata={metadata} companyInfo={companyInfo} />
        
        {showTableOfContents && sections.length > 0 && (
          <TableOfContents sections={sections} />
        )}
        
        <div className={DOCUMENT_CLASSES.CONTENT}>
          {children}
        </div>
      </article>
    </div>
  );
};
