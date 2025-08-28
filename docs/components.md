# Components

## LegalDocument

Professional legal document component with automatic theming and typography.

```tsx
import { LegalDocument } from '@amber-ai-ltd/ui-components';

const metadata = {
  title: 'Privacy Policy',
  version: '2.1',
  effectiveDate: 'January 15, 2025',
  lastUpdated: 'August 26, 2025',
  documentType: 'privacy-policy'
};

const companyInfo = {
  legalName: 'AMBER AI LTD',
  businessName: 'AmberAI',
  domain: 'amberai.com'
};

<LegalDocument 
  metadata={metadata}
  companyInfo={companyInfo}
  showTableOfContents={true}
>
  <h2>Section Content</h2>
  <p>Legal document content here.</p>
</LegalDocument>
```

## LegalSidebar

Navigation sidebar for legal document portals.

```tsx
import { LegalSidebar } from '@amber-ai-ltd/ui-components';

const documents = [
  {
    title: 'Privacy Policy',
    href: '/legal/privacy-policy',
    version: '2.1',
    essential: true
  }
];

<LegalSidebar 
  currentDocument="Privacy Policy"
  documents={documents}
/>
```

## Button

Themed button component with brand colors.

```tsx
import { Button } from '@amber-ai-ltd/ui-components';

<Button variant="primary" size="md">
  Click me
</Button>
```
