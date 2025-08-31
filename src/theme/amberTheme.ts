import type { BrandTheme } from './types.js';

export const amberTheme: BrandTheme = {
  colorMode: 'dark',
  colors: {
    light: {
      background: '#ffffff',
      surface: '#f8fafc',
      border: '#e2e8f0',
      text: '#0f172a',
      accent: '#f59e0b',
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      border: '#475569',
      text: '#f8fafc',
      accent: '#fbb041',
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
