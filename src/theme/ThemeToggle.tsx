import { ThemeProvider } from './ThemeContext.js';
import { SunIcon, MoonIcon } from '../icons/index.js';
import { amberTheme } from './amberTheme.js';
import { useThemeToggle } from './useThemeToggle.js';
import { THEME_TOGGLE_SIZES } from './toggle-config.js';
import { 
  getToggleLabelStyles, 
  getSunIconStyles, 
  getMoonIconStyles, 
  getToggleSliderStyles,
  getAriaLabel 
} from './toggle-styles.js';

interface ThemeToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  theme?: any; // Allow custom theme override
  standalone?: boolean; // Force standalone mode with own ThemeProvider
}


function ThemeToggleCore({ className = '', size = 'md' }: Omit<ThemeToggleProps, 'theme' | 'standalone'>) {
  const { isDark, localColorMode, toggleColorMode } = useThemeToggle();
  const config = THEME_TOGGLE_SIZES[size];
  const colors = amberTheme.colors[localColorMode];

  return (
    <div className={`relative inline-block ${className}`}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleColorMode}
        className="opacity-0 absolute"
        id="astro-theme-toggle"
        aria-label={getAriaLabel(isDark)}
      />
      <label
        htmlFor="astro-theme-toggle"
        style={getToggleLabelStyles(colors, config)}
        className="cursor-pointer flex items-center justify-between relative rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <SunIcon 
          className="absolute left-2 z-10 w-4 h-4 transition-all duration-500"
          style={getSunIconStyles(isDark)}
        />

        <MoonIcon 
          className="absolute right-2 z-10 w-4 h-4 transition-all duration-500"
          style={getMoonIconStyles(isDark, colors)}
        />

        <div
          style={getToggleSliderStyles(isDark, colors, config)}
          className="absolute rounded-full transition-all duration-500 ease-out"
        >
          <span className="sr-only">
            {getAriaLabel(isDark)}
          </span>
        </div>
      </label>
    </div>
  );
}

// Bulletproof ThemeToggle that works standalone or within existing ThemeProvider
export function ThemeToggle({ theme = amberTheme, standalone = false, ...props }: ThemeToggleProps) {
  if (standalone) {
    // Always provide own context in standalone mode
    return (
      <ThemeProvider theme={theme}>
        <ThemeToggleCore {...props} />
      </ThemeProvider>
    );
  }
  
  // Default mode - expects existing ThemeProvider context
  return <ThemeToggleCore {...props} />;
}
