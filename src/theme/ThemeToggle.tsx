import { useTheme, ThemeProvider } from './ThemeContext.js';
import { SunIcon, MoonIcon } from '../icons/index.js';
import { amberTheme } from './amberTheme.js';
import { useEffect, useState } from 'react';
import type { ColorMode } from './types.js';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: any; // Allow custom theme override
  standalone?: boolean; // Force standalone mode with own ThemeProvider
}

// Global theme state functions that work across component boundaries
function getGlobalColorMode(): ColorMode {
  if (typeof window === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
}

function setGlobalColorMode(mode: ColorMode) {
  if (typeof window === 'undefined') return;
  
  document.documentElement.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('colorMode', mode);
  
  // Dispatch custom event to sync all ThemeToggle components
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { colorMode: mode } }));
}

function ThemeToggleCore({ className = '', size = 'md' }: Omit<ThemeToggleProps, 'theme' | 'standalone'>) {
  const [localColorMode, setLocalColorMode] = useState<ColorMode>(getGlobalColorMode);
  const isDark = localColorMode === 'dark';
  
  // Sync with global theme changes
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ colorMode: ColorMode }>) => {
      setLocalColorMode(event.detail.colorMode);
    };
    
    window.addEventListener('theme-change', handleThemeChange as EventListener);
    
    // Initial sync
    setLocalColorMode(getGlobalColorMode());
    
    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);
  
  const toggleColorMode = () => {
    const newMode = isDark ? 'light' : 'dark';
    setGlobalColorMode(newMode);
  };

  const sizeConfig = {
    sm: { width: 53, height: 24, scale: 0.8 },
    md: { width: 66, height: 30, scale: 1.2 },
    lg: { width: 79, height: 36, scale: 1.4 }
  };

  const config = sizeConfig[size];
  const colors = amberTheme.colors[localColorMode];

  return (
    <div className={`relative inline-block ${className}`}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleColorMode}
        className="opacity-0 absolute"
        id="astro-theme-toggle"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <label
        htmlFor="astro-theme-toggle"
        style={{
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
          width: config.width,
          height: config.height,
          transform: `scale(${config.scale})`,
          padding: '7.5px'
        }}
        className="cursor-pointer flex items-center justify-between relative rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <SunIcon 
          className="absolute left-2 z-10 w-4 h-4 transition-all duration-500"
          style={{ color: isDark ? '#64748b' : '#ffffff' }}
        />

        <MoonIcon 
          className="absolute right-2 z-10 w-4 h-4 transition-all duration-500"
          style={{ color: isDark ? colors.text : '#94a3b8' }}
        />

        <div
          style={{
            backgroundColor: colors.accent,
            width: config.height,
            height: config.height,
            transform: isDark ? 'translateX(28.5px)' : 'translateX(-7.5px)',
          }}
          className="absolute rounded-full transition-all duration-500 ease-out"
        >
          <span className="sr-only">
            {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          </span>
        </div>
      </label>
    </div>
  );
}

// Bulletproof ThemeToggle that works standalone or within existing ThemeProvider
export function ThemeToggle({ theme = amberTheme, standalone = false, ...props }: ThemeToggleProps) {
  if (standalone) {
    // Always provide own context in standalone mode
    return (
      <ThemeProvider theme={theme}>
        <ThemeToggleCore {...props} />
      </ThemeProvider>
    );
  }
  
  // Default mode - expects existing ThemeProvider context
  return <ThemeToggleCore {...props} />;
}
