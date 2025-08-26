import { Button } from '../button/Button.js';
import { Toggle } from '../toggle/Toggle.js';
import { CloseIcon } from '../icons/index.js';

export interface AccessibilitySettings {
  reduceMotion: boolean;
  highContrast: boolean;
  largeText: boolean;
  textSpacing: boolean;
}

interface AccessibilityPanelProps {
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

const DEFAULT_LABELS = {
  title: 'Accessibility Settings',
  close: 'Close accessibility settings',
  reset: 'Reset to Defaults',
  reduceMotion: 'Reduce Motion',
  highContrast: 'High Contrast',
  largeText: 'Large Text',
  textSpacing: 'Text Spacing',
};

const SETTING_DESCRIPTIONS = {
  reduceMotion: 'Minimize animations and transitions',
  highContrast: 'Increase color contrast for better visibility',
  largeText: 'Increase text size for better readability',
  textSpacing: 'Increase line height and letter spacing',
};

const PANEL_STYLES = {
  base: 'fixed z-40 w-80 max-w-[calc(100vw-2rem)] rounded-lg shadow-xl p-6',
  colors: 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600',
  overlay: 'fixed inset-0 z-30 bg-black bg-opacity-25',
  header: 'flex items-center justify-between mb-4',
  title: 'text-lg font-semibold text-gray-900 dark:text-gray-100',
  content: 'space-y-4',
  settingRow: 'flex items-center justify-between',
  label: 'text-sm font-medium text-gray-700 dark:text-gray-300',
  description: 'text-xs text-gray-500 dark:text-gray-400 mt-1',
  footer: 'mt-6 pt-4 border-t border-gray-200 dark:border-gray-600'
};

export function AccessibilityPanel({
  settings,
  onSettingChange,
  onReset,
  onClose,
  position = 'bottom-left',
  labels = {}
}: AccessibilityPanelProps) {
  const finalLabels = { ...DEFAULT_LABELS, ...labels };
  
  const panelClasses = {
    'bottom-left': 'bottom-20 left-4',
    'top-right': 'top-20 right-4',
  };

  const settingItems = [
    { key: 'reduceMotion' as const, label: finalLabels.reduceMotion },
    { key: 'highContrast' as const, label: finalLabels.highContrast },
    { key: 'largeText' as const, label: finalLabels.largeText },
    { key: 'textSpacing' as const, label: finalLabels.textSpacing }
  ];

  return (
    <>
      <div
        className={`${PANEL_STYLES.base} ${PANEL_STYLES.colors} ${panelClasses[position]}`}
        role="dialog"
        aria-labelledby="accessibility-title"
      >
        <div className={PANEL_STYLES.header}>
          <h2 id="accessibility-title" className={PANEL_STYLES.title}>
            {finalLabels.title}
          </h2>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="!p-1"
            aria-label={finalLabels.close}
          >
            <CloseIcon />
          </Button>
        </div>

        <div className={PANEL_STYLES.content}>
          {settingItems.map(({ key, label }) => (
            <div key={key} className={PANEL_STYLES.settingRow}>
              <label htmlFor={key} className={PANEL_STYLES.label}>
                {label}
                <div className={PANEL_STYLES.description}>
                  {SETTING_DESCRIPTIONS[key]}
                </div>
              </label>
              <Toggle
                id={key}
                checked={settings[key]}
                onChange={(checked) => onSettingChange(key, checked)}
                aria-label={label}
              />
            </div>
          ))}
        </div>

        <div className={PANEL_STYLES.footer}>
          <Button onClick={onReset} variant="outline" size="sm" fullWidth>
            {finalLabels.reset}
          </Button>
        </div>
      </div>

      <div
        className={PANEL_STYLES.overlay}
        onClick={onClose}
        aria-hidden="true"
      />
    </>
  );
}
