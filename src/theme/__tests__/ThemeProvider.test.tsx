import { render } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext.js';
import { ThemeToggle } from '../ThemeToggle.js';
import type { BrandTheme } from '../types.js';

const greenTheme: BrandTheme = {
  colorMode: 'dark',
  colors: {
    light: { background: '#ffffff', surface: '#f0fdf4', border: '#bbf7d0', text: '#14532d', accent: '#16a34a' },
    dark: { background: '#0c0a09', surface: '#1c1917', border: '#44403c', text: '#fafaf9', accent: '#4ade80' },
  },
  branding: { legalName: 'Green Corp', businessName: 'Green', domain: 'green.com' },
};

const purpleTheme: BrandTheme = {
  colorMode: 'dark',
  colors: {
    light: { background: '#ffffff', surface: '#faf5ff', border: '#e9d5ff', text: '#581c87', accent: '#9333ea' },
    dark: { background: '#18181b', surface: '#27272a', border: '#52525b', text: '#f4f4f5', accent: '#a855f7' },
  },
  branding: { legalName: 'Purple Inc', businessName: 'Purple', domain: 'purple.com' },
};

beforeEach(() => {
  document.documentElement.removeAttribute('style');
});

describe('ThemeProvider white-label support', () => {
  it('applies green brand colors correctly', () => {
    render(
      <ThemeProvider theme={greenTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--theme-accent')).toBe('#4ade80');
    expect(root.style.getPropertyValue('--theme-background')).toBe('#0c0a09');
  });

  it('applies purple brand colors correctly', () => {
    render(
      <ThemeProvider theme={purpleTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--theme-accent')).toBe('#a855f7');
    expect(root.style.getPropertyValue('--theme-background')).toBe('#18181b');
  });

  it('switches between different brand themes', () => {
    const { rerender } = render(
      <ThemeProvider theme={greenTheme}>
        <div />
      </ThemeProvider>
    );
    
    expect(document.documentElement.style.getPropertyValue('--theme-accent')).toBe('#4ade80');
    
    rerender(
      <ThemeProvider theme={purpleTheme}>
        <div />
      </ThemeProvider>
    );
    
    expect(document.documentElement.style.getPropertyValue('--theme-accent')).toBe('#a855f7');
  });
});
