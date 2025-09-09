import { useTheme } from './ThemeContext';
import { SunIcon, MoonIcon } from '../icons';

interface AstroToggleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

export function AstroToggle({ className = '', size = 'md' }: AstroToggleProps) {
  const { colorMode, toggleColorMode, theme } = useTheme();
  const isDark = colorMode === 'dark';

  const sizeConfig = {
    sm: { width: 53, height: 24, scale: 0.8 },
    md: { width: 66, height: 30, scale: 1.2 },
    lg: { width: 79, height: 36, scale: 1.4 }
  };

  const config = sizeConfig[size];
  const colors = theme.colors[colorMode];

  return (
    <div className={`relative inline-block ${className}`}>
      <input
        type="checkbox"
        checked={isDark}
        onChange={toggleColorMode}
        className="opacity-0 absolute"
        id="astro-theme-toggle"
        aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      />
      <label
        htmlFor="astro-theme-toggle"
        style={{
          backgroundColor: colors.background,
          border: `1px solid ${colors.border}`,
          width: config.width,
          height: config.height,
          transform: `scale(${config.scale})`,
          padding: '7.5px'
        }}
        className="cursor-pointer flex items-center justify-between relative rounded-full transition-all duration-500 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2"
      >
        <SunIcon 
          className="absolute left-2 z-10 w-4 h-4 transition-all duration-500"
          style={{ color: isDark ? '#64748b' : '#ffffff' }}
        />

        <MoonIcon 
          className="absolute right-2 z-10 w-4 h-4 transition-all duration-500"
          style={{ color: isDark ? colors.text : '#94a3b8' }}
        />

        <div
          style={{
            backgroundColor: colors.accent,
            width: config.height,
            height: config.height,
            transform: isDark ? 'translateX(28.5px)' : 'translateX(-7.5px)',
          }}
          className="absolute rounded-full transition-all duration-500 ease-out"
        >
          <span className="sr-only">
            {isDark ? 'Switch to light mode' : 'Switch to dark mode'}
          </span>
        </div>
      </label>
    </div>
  );
}
