# AmberAI UI Components

Battle-tested React UI components for AmberAI websites and client projects.

## Features

- TypeScript support with strict typing
- Theme system with dark/light mode
- Security-compliant dependencies with exact LTS versions
- Comprehensive testing with Vitest

## Components

- `Button` - Versatile button component with variants
- `ThemeProvider` - Context provider for theme management
- `useTheme` - Hook for accessing theme state

## Installation

```bash
pnpm install @amber-ai/ui-components
```

## Usage

```tsx
import { ThemeProvider, Button, useTheme } from '@amber-ai/ui-components';

function App() {
  return (
    <ThemeProvider>
      <Button variant="primary">Click me</Button>
    </ThemeProvider>
  );
}
```
