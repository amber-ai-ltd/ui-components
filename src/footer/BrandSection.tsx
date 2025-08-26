import React from 'react';
import type { FooterConfig } from './types.js';

interface BrandSectionProps {
  brand: FooterConfig['brand'];
  contact?: FooterConfig['contact'];
}

export const BrandSection: React.FC<BrandSectionProps> = ({ brand, contact }) => {
  return (
    <div className="brand-section">
      <div className="brand-info">
        {brand.logo ? (
          <img 
            src={brand.logo.src} 
            alt={brand.logo.alt}
            className="brand-logo"
          />
        ) : (
          <h2 className="brand-name">{brand.name}</h2>
        )}
        
        {brand.tagline && (
          <p className="brand-tagline">{brand.tagline}</p>
        )}
        
        <p className="brand-description">{brand.description}</p>
      </div>

      {contact && (
        <div className="contact-info">
          {contact.email && (
            <div className="contact-item">
              <span className="contact-icon">✉️</span>
              <a href={`mailto:${contact.email}`} className="contact-link">
                {contact.email}
              </a>
            </div>
          )}
          {contact.phone && (
            <div className="contact-item">
              <span className="contact-icon">📞</span>
              <a href={`tel:${contact.phone}`} className="contact-link">
                {contact.phone}
              </a>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
