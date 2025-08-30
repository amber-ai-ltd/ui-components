import type { BrandTheme } from './types.js';

export const amberTheme: BrandTheme = {
  colorMode: 'light',
  colors: {
    light: {
      primary: '#f59e0b',
      primaryHover: '#d97706',
      primaryLight: '#fbbf24',
      primaryBorder: '#fed7aa',
      primaryText: '#111827',
      primaryTextLight: '#fef3c7',
    },
    dark: {
      primary: '#fbbf24',
      primaryHover: '#f59e0b',
      primaryLight: '#374151',
      primaryBorder: '#92400e',
      primaryText: '#fbbf24',
      primaryTextLight: '#78350f',
    },
  },
  branding: {
    legalName: 'AMBER AI LTD',
    businessName: 'AmberAI',
    domain: 'amberai.com',
    registrationNumber: '16300282',
    registeredOffice: '104 Whitby Road, Ellesmere Port, United Kingdom, CH65 0AB',
    country: 'United Kingdom',
  },
};
