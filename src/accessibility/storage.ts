import type { AccessibilitySettings } from './types.js';

export const DEFAULT_ACCESSIBILITY_SETTINGS: AccessibilitySettings = {
  reduceMotion: false,
  highContrast: false,
  largeText: false,
  textSpacing: false,
};

export const loadAccessibilitySettings = (): AccessibilitySettings => {
  try {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? { ...DEFAULT_ACCESSIBILITY_SETTINGS, ...JSON.parse(saved) } : DEFAULT_ACCESSIBILITY_SETTINGS;
  } catch {
    return DEFAULT_ACCESSIBILITY_SETTINGS;
  }
};

export const saveAccessibilitySettings = (settings: AccessibilitySettings): void => {
  try {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  } catch {
    console.warn('Failed to save accessibility settings');
  }
};