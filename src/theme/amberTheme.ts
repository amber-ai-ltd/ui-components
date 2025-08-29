import type { BrandTheme } from './types.js';

export const amberTheme: BrandTheme = {
  colorMode: 'light',
  colors: {
    light: {
      primary: '#f59e0b',
      primaryHover: '#d97706',
      primaryLight: '#fffbeb',
      primaryBorder: '#fed7aa',
      primaryText: '#92400e',
      primaryTextLight: '#fef3c7',
    },
    dark: {
      primary: '#fbbf24',
      primaryHover: '#f59e0b',
      primaryLight: 'rgba(251, 191, 36, 0.1)',
      primaryBorder: '#92400e',
      primaryText: '#fef3c7',
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
