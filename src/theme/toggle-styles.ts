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

const calculateSliderPosition = (config: any) => {
  const TOGGLE_PADDING = 7.5;
  const sliderSize = config.height;
  const totalToggleWidth = config.width;
  
  const sunIconPosition = -(TOGGLE_PADDING / 2);
  const moonIconPosition = totalToggleWidth - sliderSize - (TOGGLE_PADDING / 2);
  
  return { sunIconPosition, moonIconPosition };
};

export const getToggleSliderStyles = (isDark: boolean, colors: any, config: any) => {
  const { sunIconPosition, moonIconPosition } = calculateSliderPosition(config);
  const currentPosition = isDark ? moonIconPosition : sunIconPosition;
  
  return {
    backgroundColor: colors.accent,
    width: config.height,
    height: config.height,
    transform: `translateX(${currentPosition}px)`
  };
};

export const getAriaLabel = (isDark: boolean) => 
  isDark ? 'Switch to light mode' : 'Switch to dark mode';