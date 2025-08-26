import { render, screen } from '@testing-library/react';
import { CorporateFooter } from '../CorporateFooter';

const config = {
  brand: {
    name: 'AmberAI',
    description: 'AI consultancy services',
  },
  sections: [
    {
      title: 'Services',
      links: [
        { name: 'AI Consulting', href: '/ai' },
        { name: 'External Link', href: 'https://example.com', external: true },
      ],
    },
  ],
  companyInfo: {
    legalName: 'AMBER AI LTD',
    registrationNumber: '16300282',
    registeredOffice: '104 Whitby Road, UK',
    placeOfRegistration: 'England & Wales',
  },
  legal: {
    privacyPolicy: '/privacy',
  },
  copyright: {
    text: '© {year} AMBER AI LTD',
  },
};

describe('CorporateFooter', () => {
  it('shows company name and description', () => {
    render(<CorporateFooter config={config} />);
    
    expect(screen.getByText('AmberAI')).toBeInTheDocument();
    expect(screen.getByText('AI consultancy services')).toBeInTheDocument();
  });

  it('displays legal company registration', () => {
    render(<CorporateFooter config={config} />);
    
    expect(screen.getByText(/16300282/)).toBeInTheDocument();
    expect(screen.getByText(/England & Wales/)).toBeInTheDocument();
  });

  it('renders current year in copyright', () => {
    render(<CorporateFooter config={config} />);
    
    const currentYear = new Date().getFullYear().toString();
    expect(screen.getByText(new RegExp(currentYear))).toBeInTheDocument();
  });

  it('marks external links', () => {
    render(<CorporateFooter config={config} />);
    
    const externalLink = screen.getByText('External Link');
    expect(externalLink.closest('a')).toHaveAttribute('target', '_blank');
  });

  it('shows compliance for enterprise variant', () => {
    const enterpriseConfig = {
      ...config,
      compliance: {
        standards: ['GDPR'],
        certifications: [],
      },
    };

    render(<CorporateFooter config={enterpriseConfig} variant="enterprise" />);
    
    expect(screen.getByText('Security & Compliance')).toBeInTheDocument();
  });
});
