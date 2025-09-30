import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider } from '../ThemeContext';
import { ThemeToggle } from '../ThemeToggle';
import { amberTheme } from '../amberTheme';

function renderThemeToggle(props = {}) {
  return render(
    <ThemeProvider theme={amberTheme}>
      <ThemeToggle {...props} />
    </ThemeProvider>
  );
}

describe('ThemeToggle User Experience', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.classList.remove('dark');
  });

  it('allows user to switch from dark to light theme', () => {
    renderThemeToggle();
    
    const toggle = screen.getByLabelText('Switch to light mode');
    fireEvent.click(toggle);
    
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('allows user to switch from dark back to light theme', () => {
    renderThemeToggle();
    
    const darkToggle = screen.getByLabelText('Switch to light mode');
    fireEvent.click(darkToggle);
    
    const lightToggle = screen.getByLabelText('Switch to dark mode');
    fireEvent.click(lightToggle);
    
    expect(screen.getByLabelText('Switch to light mode')).toBeInTheDocument();
  });

  it('remembers user theme choice after component remount', () => {
    const { unmount } = renderThemeToggle();
    
    const toggle = screen.getByLabelText('Switch to light mode');
    fireEvent.click(toggle);
    
    unmount();
    renderThemeToggle();
    
    expect(screen.getByLabelText('Switch to dark mode')).toBeInTheDocument();
  });

  it('provides accessible toggle for screen readers', () => {
    renderThemeToggle();
    
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toHaveAccessibleName('Switch to light mode');
    expect(toggle).toBeChecked();
  });

  it('updates accessible name when theme changes', () => {
    renderThemeToggle();
    
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    
    expect(toggle).toHaveAccessibleName('Switch to dark mode');
    expect(toggle).not.toBeChecked();
  });

  it('persists theme choice in localStorage', () => {
    renderThemeToggle();
    
    const toggle = screen.getByRole('checkbox');
    fireEvent.click(toggle);
    
    expect(localStorage.getItem('colorMode')).toBe('light');
  });

  it('applies custom className to wrapper', () => {
    renderThemeToggle({ className: 'custom-toggle-class' });
    
    const wrapper = screen.getByRole('checkbox').closest('div');
    expect(wrapper).toHaveClass('custom-toggle-class');
  });

  it('works in standalone mode with own ThemeProvider', () => {
    render(<ThemeToggle standalone={true} />);
    
    const toggle = screen.getByRole('checkbox');
    expect(toggle).toBeInTheDocument();
    expect(toggle).toHaveAccessibleName('Switch to light mode');
  });
});
