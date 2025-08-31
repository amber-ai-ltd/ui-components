import { render, screen } from '@testing-library/react';
import { DataProtectionBadge } from '../DataProtectionBadge.js';
import { SecurityBadge } from '../SecurityBadge.js';

describe('Compliance badges accessibility', () => {
  it('creates accessible links to compliance information', () => {
    render(
      <DataProtectionBadge 
        type="gdpr" 
        enabled={{ href: '/privacy/gdpr-compliance' }}
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/privacy/gdpr-compliance');
    expect(link).toHaveAttribute('target', '_blank');
    expect(link).toHaveAttribute('rel', 'noopener noreferrer');
    expect(link).toHaveAccessibleName('GDPR Compliant');
  });

  it('provides different compliance types for legal requirements', () => {
    const { rerender } = render(
      <DataProtectionBadge type="ccpa" enabled={{ href: '/ccpa' }} />
    );
    expect(screen.getByRole('link')).toHaveAccessibleName('CCPA Compliant');
    
    rerender(<DataProtectionBadge type="soc2" enabled={{ href: '/soc2' }} />);
    expect(screen.getByRole('link')).toHaveAccessibleName('SOC 2 Type II');
    
    rerender(<DataProtectionBadge type="iso27001" enabled={{ href: '/iso' }} />);
    expect(screen.getByRole('link')).toHaveAccessibleName('ISO 27001');
  });

  it('shows static badge when no link provided', () => {
    render(<DataProtectionBadge type="gdpr" enabled />);
    
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('GDPR Compliant')).toBeInTheDocument();
  });

  it('hides badge when disabled', () => {
    render(<DataProtectionBadge type="gdpr" enabled={false} />);
    expect(screen.queryByText('GDPR Compliant')).not.toBeInTheDocument();
  });

  it('creates accessible security badges with proper links', () => {
    render(
      <SecurityBadge 
        name="SSL Certificate" 
        icon="🔒" 
        href="/security/ssl-info"
      />
    );
    
    const link = screen.getByRole('link');
    expect(link).toHaveAttribute('href', '/security/ssl-info');
    expect(link).toHaveAccessibleName('SSL Certificate');
    expect(screen.getByText('🔒')).toBeInTheDocument();
  });

  it('works as static display without links', () => {
    render(<SecurityBadge name="Enterprise Security" icon="🛡️" />);
    
    expect(screen.queryByRole('link')).not.toBeInTheDocument();
    expect(screen.getByText('Enterprise Security')).toBeInTheDocument();
    expect(screen.getByText('🛡️')).toBeInTheDocument();
  });
});
