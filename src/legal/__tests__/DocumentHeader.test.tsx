import { render, screen } from '@testing-library/react';
import { DocumentHeader } from '../DocumentHeader';

const amberAIMetadata = {
  title: 'Privacy Policy',
  version: '2.1',
  effectiveDate: 'January 15, 2025',
  lastUpdated: 'August 26, 2025',
  documentType: 'privacy-policy' as const,
};

const amberAICompany = {
  legalName: 'AMBER AI LTD',
  businessName: 'AmberAI',
  registrationNumber: '16300282',
  country: 'United Kingdom',
  website: 'amberai.io',
};

describe('DocumentHeader', () => {
  it('shows document title and company name', () => {
    render(<DocumentHeader metadata={amberAIMetadata} companyInfo={amberAICompany} />);
    
    expect(screen.getByText('Privacy Policy')).toBeInTheDocument();
    expect(screen.getByText('AMBER AI LTD')).toBeInTheDocument();
  });

  it('displays document version and dates', () => {
    render(<DocumentHeader metadata={amberAIMetadata} companyInfo={amberAICompany} />);
    
    expect(screen.getByText('2.1')).toBeInTheDocument();
    expect(screen.getByText('January 15, 2025')).toBeInTheDocument();
    expect(screen.getByText('August 26, 2025')).toBeInTheDocument();
  });

  it('shows metadata labels', () => {
    render(<DocumentHeader metadata={amberAIMetadata} companyInfo={amberAICompany} />);
    
    expect(screen.getByText('Version')).toBeInTheDocument();
    expect(screen.getByText('Effective Date')).toBeInTheDocument();
    expect(screen.getByText('Last Updated')).toBeInTheDocument();
  });
});
