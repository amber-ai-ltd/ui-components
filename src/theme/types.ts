export type ColorMode = 'light' | 'dark';

export interface BrandColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryBorder: string;
  primaryText: string;
  primaryTextLight: string;
}

export interface CompanyBranding {
  legalName: string;
  businessName: string;
  domain: string;
  registrationNumber?: string;
  registeredOffice?: string;
  country?: string;
}

export interface BrandTheme {
  colorMode: ColorMode;
  colors: {
    light: BrandColors;
    dark: BrandColors;
  };
  branding: CompanyBranding;
}

export type Theme = BrandTheme;
