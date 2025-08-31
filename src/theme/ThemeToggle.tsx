import { Button } from '../button/Button.js';
import { SunIcon, MoonIcon } from '../icons/index.js';
import { useTheme } from './ThemeContext.js';

interface ThemeToggleProps {
  className?: string;
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { colorMode, toggleColorMode } = useTheme();
  const isDark = colorMode === 'dark';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleColorMode}
      className={className}
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} mode`}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
}
