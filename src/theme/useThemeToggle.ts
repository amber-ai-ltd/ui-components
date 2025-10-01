import { useEffect, useState } from 'react';
import type { ColorMode } from './types.js';
import { getGlobalColorMode, setGlobalColorMode } from './global-theme.js';

export const useThemeToggle = () => {
  const [localColorMode, setLocalColorMode] = useState<ColorMode>(getGlobalColorMode);
  const isDark = localColorMode === 'dark';
  
  useEffect(() => {
    const handleThemeChange = (event: CustomEvent<{ colorMode: ColorMode }>) => {
      setLocalColorMode(event.detail.colorMode);
    };
    
    window.addEventListener('theme-change', handleThemeChange as EventListener);
    setLocalColorMode(getGlobalColorMode());
    
    return () => {
      window.removeEventListener('theme-change', handleThemeChange as EventListener);
    };
  }, []);
  
  const toggleColorMode = () => {
    const newMode = isDark ? 'light' : 'dark';
    setGlobalColorMode(newMode);
  };

  return {
    isDark,
    localColorMode,
    toggleColorMode
  };
};