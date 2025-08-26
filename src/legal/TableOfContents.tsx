import React from 'react';
import { DOCUMENT_CLASSES, DOCUMENT_CONFIG } from './constants.js';

interface TocSection {
  id: string;
  title: string;
  level: number;
}

interface TableOfContentsProps {
  sections: TocSection[];
  maxDepth?: number;
}

export const TableOfContents: React.FC<TableOfContentsProps> = ({ 
  sections, 
  maxDepth = DOCUMENT_CONFIG.MAX_TOC_DEPTH 
}) => {
  const visibleSections = sections.filter(section => section.level <= maxDepth);

  const getLevelClass = (level: number): string => {
    const levelMap = {
      2: 'toc-section',
      3: 'toc-subsection',
      4: 'toc-item',
    };
    return levelMap[level as keyof typeof levelMap] || 'toc-item';
  };

  return (
    <nav className={DOCUMENT_CLASSES.TOC}>
      <h2 className="toc-title">Table of Contents</h2>
      <ol className="toc-list">
        {visibleSections.map((section) => (
          <li key={section.id} className={getLevelClass(section.level)}>
            <a href={`#${section.id}`} className="toc-link">
              {section.title}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};
