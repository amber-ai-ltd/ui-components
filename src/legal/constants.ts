export const DOCUMENT_CLASSES = {
  CONTAINER: 'legal-document',
  HEADER: 'legal-document-header',
  METADATA: 'legal-document-metadata',
  TOC: 'legal-document-toc',
  CONTENT: 'legal-document-content',
  SECTION: 'legal-document-section',
  SUBSECTION: 'legal-document-subsection',
  FOOTER: 'legal-document-footer',
} as const;

export const HEADING_LEVELS = {
  TITLE: 1,
  SECTION: 2,
  SUBSECTION: 3,
  ITEM: 4,
} as const;

export const DOCUMENT_CONFIG = {
  MAX_TOC_DEPTH: 3,
  SCROLL_OFFSET: 80,
  DATE_FORMAT: 'MMMM d, yyyy',
} as const;

export const DOCUMENT_TITLES = {
  'privacy-policy': 'Privacy Policy',
  'terms-of-service': 'Terms of Service',
  'cookie-policy': 'Cookie Policy',
  'data-processing-agreement': 'Data Processing Agreement',
  'accessibility-statement': 'Accessibility Statement',
  'ip-policy': 'Intellectual Property Policy',
} as const;
