import { render, screen } from '@testing-library/react';
import { TableOfContents } from '../TableOfContents';

const privacyPolicySections = [
  { id: 'information-collection', title: 'Information We Collect', level: 2 },
  { id: 'personal-data', title: 'Personal Data', level: 3 },
  { id: 'technical-data', title: 'Technical Data', level: 3 },
  { id: 'data-usage', title: 'How We Use Your Information', level: 2 },
  { id: 'legal-basis', title: 'Legal Basis for Processing', level: 3 },
  { id: 'data-sharing', title: 'Data Sharing and Disclosure', level: 2 },
  { id: 'your-rights', title: 'Your Rights Under GDPR', level: 2 },
];

describe('TableOfContents', () => {
  it('renders section links', () => {
    render(<TableOfContents sections={privacyPolicySections} />);
    
    expect(screen.getByText('Information We Collect')).toBeInTheDocument();
    expect(screen.getByText('Data Sharing and Disclosure')).toBeInTheDocument();
    expect(screen.getByText('Your Rights Under GDPR')).toBeInTheDocument();
  });

  it('creates proper anchor links', () => {
    render(<TableOfContents sections={privacyPolicySections} />);
    
    const link = screen.getByText('Information We Collect');
    expect(link.closest('a')).toHaveAttribute('href', '#information-collection');
  });

  it('shows subsections with proper nesting', () => {
    render(<TableOfContents sections={privacyPolicySections} />);
    
    expect(screen.getByText('Personal Data')).toBeInTheDocument();
    expect(screen.getByText('Technical Data')).toBeInTheDocument();
    expect(screen.getByText('Legal Basis for Processing')).toBeInTheDocument();
  });
});
