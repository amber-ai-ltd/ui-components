export interface CompanyInfo {
  legalName: string;
  businessName?: string;
  registrationNumber?: string;
  registeredOffice?: string;
  country?: string;
  website?: string;
  contactEmail?: string;
}

export interface DocumentMetadata {
  title: string;
  version: string;
  effectiveDate: string;
  lastUpdated: string;
  documentType: DocumentType;
}

export interface LegalDocumentProps {
  metadata: DocumentMetadata;
  companyInfo: CompanyInfo;
  showTableOfContents?: boolean;
  showPrintVersion?: boolean;
  customSections?: Record<string, string>;
}

export type DocumentType = 
  | 'privacy-policy' 
  | 'terms-of-service' 
  | 'cookie-policy' 
  | 'data-processing-agreement'
  | 'accessibility-statement'
  | 'ip-policy';
