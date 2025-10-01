import { useState, useEffect } from 'react';
import type { AccessibilitySettings } from './types.js';
import { loadAccessibilitySettings, saveAccessibilitySettings, DEFAULT_ACCESSIBILITY_SETTINGS } from './storage.js';
import { applyAccessibilitySettings } from './dom.js';

export const useAccessibilitySettings = () => {
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_ACCESSIBILITY_SETTINGS);
  
  useEffect(() => {
    const saved = loadAccessibilitySettings();
    setSettings(saved);
    applyAccessibilitySettings(saved);
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applyAccessibilitySettings(newSettings);
    saveAccessibilitySettings(newSettings);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_ACCESSIBILITY_SETTINGS);
    applyAccessibilitySettings(DEFAULT_ACCESSIBILITY_SETTINGS);
    saveAccessibilitySettings(DEFAULT_ACCESSIBILITY_SETTINGS);
  };

  return {
    settings,
    updateSetting,
    resetSettings
  };
};