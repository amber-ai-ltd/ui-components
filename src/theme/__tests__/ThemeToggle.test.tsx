import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext.js';
import { ThemeToggle } from '../ThemeToggle.js';
import type { BrandTheme } from '../types.js';

const testTheme: BrandTheme = {
  colorMode: 'dark',
  colors: {
    light: {
      background: '#ffffff',
      surface: '#f1f5f9',
      border: '#e2e8f0',
      text: '#1e293b',
      accent: '#3b82f6',
    },
    dark: {
      background: '#0f172a',
      surface: '#1e293b',
      border: '#334155',
      text: '#f1f5f9',
      accent: '#60a5fa',
    },
  },
  branding: {
    legalName: 'Test Corp',
    businessName: 'TestCorp',
    domain: 'test.com',
  },
};

beforeEach(() => {
  localStorage.removeItem('colorMode');
  document.documentElement.classList.remove('dark');
  document.documentElement.removeAttribute('style');
});

describe('ThemeToggle', () => {
  it('starts in dark mode by default', () => {
    render(
      <ThemeProvider theme={testTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(localStorage.getItem('colorMode')).toBe('dark');
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  it('applies exactly 5 theme colors to DOM', () => {
    render(
      <ThemeProvider theme={testTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    const root = document.documentElement;
    expect(root.style.getPropertyValue('--theme-background')).toBe('#0f172a');
    expect(root.style.getPropertyValue('--theme-surface')).toBe('#1e293b');
    expect(root.style.getPropertyValue('--theme-border')).toBe('#334155');
    expect(root.style.getPropertyValue('--theme-text')).toBe('#f1f5f9');
    expect(root.style.getPropertyValue('--theme-accent')).toBe('#60a5fa');
  });

  it('switches to light theme when clicked', () => {
    render(
      <ThemeProvider theme={testTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(localStorage.getItem('colorMode')).toBe('light');
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('persists theme choice on reload', () => {
    localStorage.setItem('colorMode', 'light');
    
    render(
      <ThemeProvider theme={testTheme}>
        <ThemeToggle />
      </ThemeProvider>
    );
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });
});
