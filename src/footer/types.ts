export interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface CompanyInfo {
  legalName: string;
  registrationNumber: string;
  registeredOffice: string;
  placeOfRegistration: string;
  businessType?: string;
  vatNumber?: string;
  labels?: {
    companyNumber?: string;
    registeredIn?: string;
    registeredOffice?: string;
    vatNumber?: string;
  };
}

export interface Certification {
  name: string;
  icon?: string;
  href?: string;
  description?: string;
}


export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface ComplianceInfo {
  standards: string[];
  certifications: Certification[];
  dataProtection?: {
    gdpr?: boolean;
    ccpa?: boolean;
    soc2?: boolean;
    iso27001?: boolean;
  };
  securityBadges?: Array<{
    name: string;
    icon?: string;
    href?: string;
  }>;
}

export interface ContactInfo {
  email?: string;
  phone?: string;
  address?: string;
}

export interface FooterConfig {
  brand: {
    name: string;
    tagline?: string;
    description: string;
    logo?: {
      src: string;
      alt: string;
    };
  };
  sections: FooterSection[];
  companyInfo: CompanyInfo;
  compliance?: ComplianceInfo;
  contact?: ContactInfo;
  socialLinks?: SocialLink[];
  legal: {
    privacyPolicy?: string;
    termsOfService?: string;
    cookiePolicy?: string;
    accessibilityStatement?: string;
  };
  copyright: {
    text: string;
    year?: number;
  };
  theme?: 'light' | 'dark' | 'auto';
}

export type FooterVariant = 'minimal' | 'standard' | 'corporate' | 'enterprise';
