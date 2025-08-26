import { useState, useEffect } from 'react';
import { Button } from '../button/Button.js';
import { SettingsIcon } from '../icons/index.js';
import { AccessibilityPanel, type AccessibilitySettings } from './AccessibilityPanel.js';

interface AccessibilityControlsProps {
  position?: 'bottom-left' | 'top-right';
  labels?: {
    button?: string;
    title?: string;
    close?: string;
    reset?: string;
    reduceMotion?: string;
    highContrast?: string;
    largeText?: string;
    textSpacing?: string;
  };
}

const DEFAULT_SETTINGS: AccessibilitySettings = {
  reduceMotion: false,
  highContrast: false,
  largeText: false,
  textSpacing: false,
};

function loadSettings(): AccessibilitySettings {
  try {
    const saved = localStorage.getItem('accessibility-settings');
    return saved ? { ...DEFAULT_SETTINGS, ...JSON.parse(saved) } : DEFAULT_SETTINGS;
  } catch {
    return DEFAULT_SETTINGS;
  }
}

function saveSettings(settings: AccessibilitySettings): void {
  try {
    localStorage.setItem('accessibility-settings', JSON.stringify(settings));
  } catch {
    console.warn('Failed to save accessibility settings');
  }
}

function applySettings(settings: AccessibilitySettings): void {
  const html = document.documentElement;
  html.classList.toggle('reduce-motion', settings.reduceMotion);
  html.classList.toggle('high-contrast', settings.highContrast);
  html.classList.toggle('large-text', settings.largeText);
  html.classList.toggle('text-spacing', settings.textSpacing);
}

export function AccessibilityControls({ 
  position = 'bottom-left', 
  labels = {} 
}: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [settings, setSettings] = useState<AccessibilitySettings>(DEFAULT_SETTINGS);
  
  const positionClasses = {
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
  };

  useEffect(() => {
    const saved = loadSettings();
    setSettings(saved);
    applySettings(saved);
  }, []);

  const updateSetting = (key: keyof AccessibilitySettings, value: boolean) => {
    const newSettings = { ...settings, [key]: value };
    setSettings(newSettings);
    applySettings(newSettings);
    saveSettings(newSettings);
  };

  const resetSettings = () => {
    setSettings(DEFAULT_SETTINGS);
    applySettings(DEFAULT_SETTINGS);
    saveSettings(DEFAULT_SETTINGS);
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="floating"
        className={positionClasses[position]}
        aria-label={labels.button || 'Accessibility settings'}
        aria-expanded={isOpen}
        aria-controls="accessibility-panel"
      >
        <SettingsIcon aria-hidden />
      </Button>

      {isOpen && (
        <AccessibilityPanel
          settings={settings}
          onSettingChange={updateSetting}
          onReset={resetSettings}
          onClose={() => setIsOpen(false)}
          position={position}
          labels={labels}
        />
      )}
    </>
  );
}
