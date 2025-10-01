export const DEFAULT_ACCESSIBILITY_LABELS = {
  title: 'Accessibility Settings',
  close: 'Close accessibility settings',
  reset: 'Reset to Defaults',
  reduceMotion: 'Reduce Motion',
  highContrast: 'High Contrast',
  largeText: 'Large Text',
  textSpacing: 'Text Spacing',
};

export const ACCESSIBILITY_SETTING_DESCRIPTIONS = {
  reduceMotion: 'Minimize animations and transitions',
  highContrast: 'Increase color contrast for better visibility',
  largeText: 'Increase text size for better readability',
  textSpacing: 'Increase line height and letter spacing',
};

export const ACCESSIBILITY_PANEL_STYLES = {
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

export const ACCESSIBILITY_PANEL_POSITIONS = {
  'bottom-left': 'bottom-20 left-4',
  'top-right': 'top-20 right-4',
};