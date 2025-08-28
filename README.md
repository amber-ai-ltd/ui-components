# AmberAI UI Components

Professional white-label UI components for AmberAI and client projects.

## Features

- White-label theme system with brand customization
- Dark/light mode with automatic system detection
- TypeScript support with strict typing
- Framework-agnostic CSS architecture
- Comprehensive testing with Vitest

## Components

- `Button` - Themed button with brand colors
- `LegalDocument` - Professional legal page system
- `LegalSidebar` - Branded navigation component
- `ThemeProvider` - Brand theme management
- `CorporateFooter` - Company-branded footer

## Installation

```bash
pnpm install @amber-ai-ltd/ui-components
```

## Publishing

This package is published to **GitHub Package Registry**, not npm.

1. Commit all changes to git
2. Update version in package.json
3. Build: `pnpm build`
4. Publish: `pnpm publish`

Websites will automatically get updates when version is bumped.

## Theme System

```tsx
import { ThemeProvider, LegalDocument, amberTheme } from '@amber-ai-ltd/ui-components';

function App() {
  return (
    <ThemeProvider theme={amberTheme}>
      <LegalDocument metadata={metadata} companyInfo={companyInfo} />
    </ThemeProvider>
  );
}
```
