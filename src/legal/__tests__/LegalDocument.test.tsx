import { render, screen } from '@testing-library/react';
import { LegalDocument } from '../LegalDocument';

const amberAILegalDoc = {
  metadata: {
    title: 'Privacy Policy',
    version: '2.1',
    effectiveDate: 'January 15, 2025',
    lastUpdated: 'August 26, 2025',
    documentType: 'privacy-policy' as const,
  },
  companyInfo: {
    legalName: 'AMBER AI LTD',
    registrationNumber: '16300282',
    country: 'United Kingdom',
    website: 'amberai.com',
  },
};

describe('LegalDocument', () => {
  it('renders document header with metadata', () => {
    render(<LegalDocument {...amberAILegalDoc}>Test content</LegalDocument>);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('AMBER AI LTD')).toBeInTheDocument();
    expect(screen.getByText('2.1')).toBeInTheDocument();
  });

  it('shows table of contents when enabled', () => {
    render(
      <LegalDocument {...amberAILegalDoc} showTableOfContents>
        <h2 id="section-1">Data Collection</h2>
        <h3 id="personal-data">Personal Data</h3>
      </LegalDocument>
    );
    
    expect(screen.getByText('Table of Contents')).toBeInTheDocument();
  });

  it('renders child content', () => {
    render(
      <LegalDocument {...amberAILegalDoc}>
        <p>We collect information to provide better services.</p>
      </LegalDocument>
    );
    
    expect(screen.getByText('We collect information to provide better services.')).toBeInTheDocument();
  });
});
