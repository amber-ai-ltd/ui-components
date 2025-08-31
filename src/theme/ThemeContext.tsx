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
    return localStorage.getItem('colorMode') as ColorMode | null;
  } catch (error) {
    return null;
  }
}

function applyTheme(brandTheme: BrandTheme, colorMode: ColorMode): void {
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

export function ThemeProvider({ children, theme: brandTheme }: ThemeProviderProps) {
  const [colorMode, setColorMode] = useState<ColorMode>('dark');
  const [isHydrated, setIsHydrated] = useState(false);
  
  const theme = { ...brandTheme, colorMode };

  useEffect(() => {
    const stored = getStoredColorMode();
    const initialMode = stored || 'dark';
    setColorMode(initialMode);
    setIsHydrated(true);
    applyTheme(brandTheme, initialMode);
  }, [brandTheme]);

  useEffect(() => {
    if (isHydrated) {
      applyTheme(brandTheme, colorMode);
      localStorage.setItem('colorMode', colorMode);
    }
  }, [brandTheme, colorMode, isHydrated]);

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
