import { useState } from 'react';
import { Button } from '../button/Button.js';
import type { ButtonShape } from '../button/types.js';
import { SettingsIcon } from '../icons/index.js';
import { AccessibilityPanel } from './AccessibilityPanel.js';
import { useAccessibilitySettings } from './useAccessibilitySettings.js';

interface AccessibilityControlsProps {
  position?: 'bottom-left' | 'top-right';
  shape?: ButtonShape;
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


export function AccessibilityControls({ 
  position = 'bottom-left',
  shape = 'circle',
  labels = {} 
}: AccessibilityControlsProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { settings, updateSetting, resetSettings } = useAccessibilitySettings();
  
  const positionClasses = {
    'bottom-left': 'bottom-4 left-4',
    'top-right': 'top-4 right-4',
  };

  return (
    <>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        variant="floating"
        shape={shape}
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
