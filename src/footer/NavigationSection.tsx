import React from 'react';
import { EXTERNAL_LINK_INDICATOR } from './constants.js';
import type { FooterSection } from './types.js';

interface NavigationSectionProps {
  sections: FooterSection[];
}

export const NavigationSection: React.FC<NavigationSectionProps> = ({ sections }) => {
  return (
    <div className="navigation-sections">
      {sections.map((section, index) => (
        <div key={index} className="navigation-section">
          <h3 className="navigation-title">{section.title}</h3>
          <ul className="navigation-links">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex}>
                <a 
                  href={link.href}
                  target={link.external ? '_blank' : undefined}
                  rel={link.external ? 'noopener noreferrer' : undefined}
                  className="navigation-link"
                >
                  {link.name}
                  {link.external && <span className="external-indicator">{EXTERNAL_LINK_INDICATOR}</span>}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};
