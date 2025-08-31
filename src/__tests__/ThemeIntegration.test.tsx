import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../theme/ThemeContext.js';
import { ThemeToggle } from '../theme/ThemeToggle.js';
import { Button } from '../button/Button.js';
import { amberTheme } from '../theme/amberTheme.js';

function ThemeAwareApp() {
  return (
    <ThemeProvider theme={amberTheme}>
      <div>
        <ThemeToggle />
        <Button>Themed Button</Button>
      </div>
    </ThemeProvider>
  );
}

beforeEach(() => {
  localStorage.clear();
  document.documentElement.removeAttribute('style');
  document.documentElement.classList.remove('dark');
});

describe('Theme integration', () => {
  it('applies theme colors to entire app', () => {
    render(<ThemeAwareApp />);
    
    expect(document.documentElement.style.getPropertyValue('--theme-accent')).toBe('#fbb041');
    expect(document.documentElement.style.getPropertyValue('--theme-background')).toBe('#0f172a');
  });

  it('updates all themed components when theme changes', () => {
    render(<ThemeAwareApp />);
    
    fireEvent.click(screen.getByLabelText('Switch to light mode'));
    
    expect(document.documentElement.style.getPropertyValue('--theme-accent')).toBe('#f59e0b');
    expect(document.documentElement.style.getPropertyValue('--theme-background')).toBe('#ffffff');
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('persists theme choice between sessions', () => {
    const { unmount } = render(<ThemeAwareApp />);
    
    fireEvent.click(screen.getByLabelText('Switch to light mode'));
    expect(localStorage.getItem('colorMode')).toBe('light');
    
    unmount();
    render(<ThemeAwareApp />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(false);
  });

  it('starts with correct default theme state', () => {
    render(<ThemeAwareApp />);
    
    expect(document.documentElement.classList.contains('dark')).toBe(true);
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });
});
