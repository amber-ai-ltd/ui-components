import { Button } from '../button/Button.js';
import { Toggle } from '../toggle/Toggle.js';
import { CloseIcon } from '../icons/index.js';
import type { AccessibilityPanelProps } from './types.js';
import {
  DEFAULT_ACCESSIBILITY_LABELS,
  ACCESSIBILITY_SETTING_DESCRIPTIONS,
  ACCESSIBILITY_PANEL_STYLES,
  ACCESSIBILITY_PANEL_POSITIONS
} from './constants.js';

export function AccessibilityPanel({
  settings,
  onSettingChange,
  onReset,
  onClose,
  position = 'bottom-left',
  labels = {}
}: AccessibilityPanelProps) {
  const finalLabels = { ...DEFAULT_ACCESSIBILITY_LABELS, ...labels };

  const settingItems = [
    { key: 'reduceMotion' as const, label: finalLabels.reduceMotion },
    { key: 'highContrast' as const, label: finalLabels.highContrast },
    { key: 'largeText' as const, label: finalLabels.largeText },
    { key: 'textSpacing' as const, label: finalLabels.textSpacing }
  ];

  return (
    <>
      <div
        className={`${ACCESSIBILITY_PANEL_STYLES.base} ${ACCESSIBILITY_PANEL_STYLES.colors} ${ACCESSIBILITY_PANEL_POSITIONS[position]}`}
        role="dialog"
        aria-labelledby="accessibility-title"
      >
        <div className={ACCESSIBILITY_PANEL_STYLES.header}>
          <h2 id="accessibility-title" className={ACCESSIBILITY_PANEL_STYLES.title}>
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

        <div className={ACCESSIBILITY_PANEL_STYLES.content}>
          {settingItems.map(({ key, label }) => (
            <div key={key} className={ACCESSIBILITY_PANEL_STYLES.settingRow}>
              <label htmlFor={key} className={ACCESSIBILITY_PANEL_STYLES.label}>
                {label}
                <div className={ACCESSIBILITY_PANEL_STYLES.description}>
                  {ACCESSIBILITY_SETTING_DESCRIPTIONS[key]}
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

        <div className={ACCESSIBILITY_PANEL_STYLES.footer}>
          <Button onClick={onReset} variant="outline" size="sm" fullWidth>
            {finalLabels.reset}
          </Button>
        </div>
      </div>

      <div
        className={ACCESSIBILITY_PANEL_STYLES.overlay}
        onClick={onClose}
        aria-hidden
      />
    </>
  );
}
