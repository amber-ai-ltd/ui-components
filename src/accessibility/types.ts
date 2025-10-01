export interface AccessibilitySettings {
  reduceMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  textSpacing: boolean;
}

export interface AccessibilityPanelProps {
  settings: AccessibilitySettings;
  onSettingChange: (key: keyof AccessibilitySettings, value: boolean) => void;
  onReset: () => void;
  onClose: () => void;
  position?: 'bottom-left' | 'top-right';
  labels?: {
    title?: string;
    close?: string;
    reset?: string;
    reduceMotion?: string;
    highContrast?: string;
    largeText?: string;
    textSpacing?: string;
  };
}

export type AccessibilityPanelPosition = 'bottom-left' | 'top-right';