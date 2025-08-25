export type Theme = 'light' | 'dark';

export function applyTheme(theme: Theme): void {
  document.documentElement.classList.toggle('dark', theme === 'dark');
}

export function saveThemePreference(theme: Theme): void {
  try {
    localStorage.setItem('theme', theme);
  } catch (error) {
    console.warn('Theme preference could not be saved:', error);
  }
}

export function getSavedTheme(): Theme | null {
  try {
    const saved = localStorage.getItem('theme');
    return saved === 'light' || saved === 'dark' ? saved : null;
  } catch (error) {
    console.warn('Theme preference could not be retrieved:', error);
    return null;
  }
}

export function getOppositeTheme(currentTheme: Theme): Theme {
  return currentTheme === 'light' ? 'dark' : 'light';
}

export function getSystemTheme(): Theme {
  if (typeof window === 'undefined') return 'light';
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export function initializeTheme(): Theme {
  const saved = getSavedTheme();
  if (saved) {
    applyTheme(saved);
    return saved;
  }
  
  const system = getSystemTheme();
  applyTheme(system);
  return system;
}

export function toggleTheme(currentTheme: Theme): Theme {
  const newTheme = getOppositeTheme(currentTheme);
  applyTheme(newTheme);
  saveThemePreference(newTheme);
  return newTheme;
}
