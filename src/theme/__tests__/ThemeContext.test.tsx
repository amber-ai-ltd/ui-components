import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';
import { Toggle } from '../../toggle/Toggle';

function TestToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <Toggle 
      checked={theme === 'dark'} 
      onChange={() => toggleTheme()}
      aria-label={`Current theme: ${theme}`}
    />
  );
}

function TestThemeUser() {
  const { theme } = useTheme();
  return <div data-testid="theme">{theme}</div>;
}

describe('Theme', () => {
  it('toggles', () => {
    render(
      <ThemeProvider>
        <TestToggle />
      </ThemeProvider>
    );
    
    const toggle = screen.getByRole('switch');
    const initialChecked = toggle.getAttribute('aria-checked');
    
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).not.toBe(initialChecked);
    
    fireEvent.click(toggle);
    expect(toggle.getAttribute('aria-checked')).toBe(initialChecked);
  });

  it('throws without provider', () => {
    const spy = vi.spyOn(console, 'error').mockImplementation(() => {});
    
    expect(() => render(<TestThemeUser />))
      .toThrow('useTheme must be used within ThemeProvider');
    
    spy.mockRestore();
  });
});
