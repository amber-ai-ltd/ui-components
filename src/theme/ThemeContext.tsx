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
  try {
    localStorage.removeItem('colorMode');
    return null;
  } catch (error) {
    return null;
  }
}

function getSystemColorMode(): ColorMode {
  if (typeof window === 'undefined') return 'dark';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(brandTheme: BrandTheme, colorMode: ColorMode): void {
  const root = document.documentElement;
  const colors = brandTheme.colors[colorMode];
  
  root.classList.toggle('dark', colorMode === 'dark');
  
  root.style.setProperty('--theme-primary', colors.primary);
  root.style.setProperty('--theme-primary-hover', colors.primaryHover);
  root.style.setProperty('--theme-primary-light', colors.primaryLight);
  root.style.setProperty('--theme-primary-border', colors.primaryBorder);
  root.style.setProperty('--theme-primary-text', colors.primaryText);
  root.style.setProperty('--theme-primary-text-light', colors.primaryTextLight);
}

export function ThemeProvider({ children, theme: brandTheme }: ThemeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>(() => {
    return getStoredColorMode() || 'dark';
  });
  
  const theme = { ...brandTheme, colorMode };

  useEffect(() => {
    applyTheme(brandTheme, colorMode);
    localStorage.setItem('colorMode', colorMode);
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
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}
