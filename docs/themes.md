# Theme System

## Overview

Professional white-label theme system supporting multiple brands with consistent design patterns.

## Theme Structure

```typescript
interface BrandTheme {
  colorMode: 'light' | 'dark';
  colors: {
    light: BrandColors;
    dark: BrandColors;
  };
  branding: CompanyBranding;
}
```

## Brand Colors

```typescript
interface BrandColors {
  primary: string;
  primaryHover: string;
  primaryLight: string;
  primaryBorder: string;
  primaryText: string;
  primaryTextLight: string;
}
```

## Company Branding

```typescript
interface CompanyBranding {
  legalName: string;
  businessName: string;
  domain: string;
  registrationNumber?: string;
  registeredOffice?: string;
  country?: string;
}
```

## Usage

```tsx
import { ThemeProvider, amberTheme } from '@amber-ai-ltd/ui-components';

function App() {
  return (
    <ThemeProvider theme={amberTheme}>
      {children}
    </ThemeProvider>
  );
}
```

## Creating Custom Themes

```typescript
const customTheme: BrandTheme = {
  colorMode: 'light',
  colors: {
    light: {
      primary: '#your-brand-color',
      primaryHover: '#hover-color',
      // ... other colors
    },
    dark: {
      // ... dark mode colors
    }
  },
  branding: {
    legalName: 'Your Company Ltd',
    businessName: 'YourBrand',
    domain: 'yourdomain.com'
  }
};
```
