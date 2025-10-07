import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import type { Theme, ColorMode, BrandTheme } from './types.js';

interface ThemeContextType {
  theme: Theme;
  colorMode: ColorMode;
  toggleColorMode: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

interface ThemeProviderProps {
  children: ReactNode;
  theme: BrandTheme;
}

function getStoredColorMode(): ColorMode | null {
  if (typeof window === 'undefined') return null;
  try {
    return localStorage.getItem('theme') as ColorMode | null;
  } catch (error) {
    return null;
  }
}

function applyTheme(brandTheme: BrandTheme, colorMode: ColorMode): void {
  if (typeof window === 'undefined') return;
  
  const root = document.documentElement;
  const colors = brandTheme.colors[colorMode];
  
  root.classList.toggle('dark', colorMode === 'dark');
  
  root.style.setProperty('--theme-background', colors.background);
  root.style.setProperty('--theme-surface', colors.surface);
  root.style.setProperty('--theme-border', colors.border);
  root.style.setProperty('--theme-text', colors.text);
  root.style.setProperty('--theme-accent', colors.accent);
  root.style.setProperty('--theme-accent-hover', colorMode === 'dark' ? '#f59e0b' : '#d97706');
}

function getInitialColorMode(): ColorMode {
  if (typeof window === 'undefined') return 'dark';
  const stored = getStoredColorMode();
  if (stored) return stored;
  return 'dark';
}

export function ThemeProvider({ children, theme: brandTheme }: ThemeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>(getInitialColorMode);
  
  const theme = { ...brandTheme, colorMode };

  useEffect(() => {
    applyTheme(brandTheme, colorMode);
    localStorage.setItem('theme', colorMode);
  }, [brandTheme, colorMode]);

  const toggleColorMode = () => {
    setColorMode(current => current === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, colorMode, toggleColorMode }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext);
  
  if (!context) {
    if (typeof window === 'undefined') {
      return {
        theme: { colors: { dark: { background: '#1f2937', surface: '#374151', border: '#4b5563', text: '#f9fafb', accent: '#f59e0b' }, light: { background: '#ffffff', surface: '#f9fafb', border: '#e5e7eb', text: '#111827', accent: '#d97706' } }, branding: { legalName: 'Default Company Ltd', businessName: 'Default', domain: 'example.com' }, colorMode: 'dark' },
        colorMode: 'dark',
        toggleColorMode: () => {}
      };
    }
    throw new Error('useTheme must be used within ThemeProvider');
  }
  
  return context;
}
