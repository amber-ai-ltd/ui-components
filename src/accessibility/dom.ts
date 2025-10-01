import type { AccessibilitySettings } from './types.js';

export const applyAccessibilitySettings = (settings: AccessibilitySettings): void => {
  const html = document.documentElement;
  html.classList.toggle('reduce-motion', settings.reduceMotion);
  html.classList.toggle('high-contrast', settings.highContrast);
  html.classList.toggle('large-text', settings.largeText);
  html.classList.toggle('text-spacing', settings.textSpacing);
};