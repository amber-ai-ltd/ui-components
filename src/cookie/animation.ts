export const getCookieBannerClasses = (
  isVisible: boolean,
  isAnimating: boolean,
  position: 'bottom' | 'top'
) => {
  const positionClasses = position === 'top' 
    ? 'top-0 border-b' 
    : 'bottom-0 border-t';

  const animationClasses = isAnimating 
    ? 'translate-y-0 opacity-100' 
    : position === 'top' 
      ? '-translate-y-full opacity-0' 
      : 'translate-y-full opacity-0';

  return `fixed left-0 right-0 ${positionClasses} bg-white dark:bg-gray-900 border-gray-200 dark:border-gray-700 shadow-lg z-50 transform transition-all duration-300 ease-in-out ${animationClasses}`;
};