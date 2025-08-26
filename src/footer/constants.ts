export const FOOTER_GRID_COLS = {
  MOBILE: 1,
  TABLET: 2,
  DESKTOP: 12,
} as const;

export const FOOTER_SECTIONS = {
  BRAND_SPAN: 4,
  NAVIGATION_SPAN: 4,
  ENTERPRISE_SPAN: 4,
} as const;

export const BADGE_TYPES = {
  GDPR: 'gdpr',
  CCPA: 'ccpa',
  SOC2: 'soc2',
  ISO27001: 'iso27001',
} as const;

export const EXTERNAL_LINK_INDICATOR = '↗';

export const DEFAULT_LABELS = {
  COMPANY_NUMBER: 'Company No.',
  REGISTERED_IN: 'Registered in',
  REGISTERED_OFFICE: 'Registered Office:',
  VAT_NUMBER: 'VAT No.',
} as const;
