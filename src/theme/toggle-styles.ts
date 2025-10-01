import type { ColorMode } from './types.js';

export const getToggleLabelStyles = (colors: any, config: any) => ({
  backgroundColor: colors.background,
  border: `1px solid ${colors.border}`,
  width: config.width,
  height: config.height,
  transform: `scale(${config.scale})`,
  padding: '7.5px'
});

export const getSunIconStyles = (isDark: boolean) => ({
  color: isDark ? 'var(--ui-gray-500)' : '#ffffff'
});

export const getMoonIconStyles = (isDark: boolean, colors: any) => ({
  color: isDark ? colors.text : 'var(--ui-gray-400)'
});

export const getToggleSliderStyles = (isDark: boolean, colors: any, config: any) => ({
  backgroundColor: colors.accent,
  width: config.height,
  height: config.height,
  transform: isDark ? 'translateX(28.5px)' : 'translateX(-7.5px)'
});

export const getAriaLabel = (isDark: boolean) => 
  isDark ? 'Switch to light mode' : 'Switch to dark mode';