import type { ColorMode } from './types.js';

export const getGlobalColorMode = (): ColorMode => {
  if (typeof window === 'undefined') return 'dark';
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
};

export const setGlobalColorMode = (mode: ColorMode) => {
  if (typeof window === 'undefined') return;
  
  document.documentElement.classList.toggle('dark', mode === 'dark');
  localStorage.setItem('colorMode', mode);
  
  window.dispatchEvent(new CustomEvent('theme-change', { detail: { colorMode: mode } }));
};