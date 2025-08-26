import { render, screen, fireEvent } from '@testing-library/react';
import { AccessibilityControls } from '../AccessibilityControls';

describe('AccessibilityControls', () => {
  beforeEach(() => {
    localStorage.clear();
    document.documentElement.className = '';
  });

  it('opens and closes panel', () => {
    render(<AccessibilityControls />);
    
    fireEvent.click(screen.getByLabelText('Accessibility settings'));
    expect(screen.getByRole('dialog')).toBeInTheDocument();
    
    fireEvent.click(screen.getByLabelText('Close accessibility settings'));
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument();
  });

  it('applies accessibility settings to document', () => {
    render(<AccessibilityControls />);
    
    fireEvent.click(screen.getByLabelText('Accessibility settings'));
    fireEvent.click(screen.getByRole('switch', { name: /high contrast/i }));
    
    expect(document.documentElement).toHaveClass('high-contrast');
  });

  it('persists settings to localStorage', () => {
    render(<AccessibilityControls />);
    
    fireEvent.click(screen.getByLabelText('Accessibility settings'));
    fireEvent.click(screen.getByRole('switch', { name: /reduce motion/i }));
    
    const saved = JSON.parse(localStorage.getItem('accessibility-settings') || '{}');
    expect(saved.reduceMotion).toBe(true);
  });

  it('loads saved settings on mount', () => {
    localStorage.setItem('accessibility-settings', JSON.stringify({
      reduceMotion: false,
      highContrast: true,
      largeText: false,
      textSpacing: false
    }));
    
    render(<AccessibilityControls />);
    
    expect(document.documentElement).toHaveClass('high-contrast');
    
    fireEvent.click(screen.getByLabelText('Accessibility settings'));
    expect(screen.getByRole('switch', { name: /high contrast/i })).toHaveAttribute('aria-checked', 'true');
  });

  it('resets all settings', () => {
    render(<AccessibilityControls />);
    
    fireEvent.click(screen.getByLabelText('Accessibility settings'));
    fireEvent.click(screen.getByRole('switch', { name: /large text/i }));
    fireEvent.click(screen.getByRole('switch', { name: /text spacing/i }));
    
    fireEvent.click(screen.getByText('Reset to Defaults'));
    
    expect(document.documentElement).not.toHaveClass('large-text', 'text-spacing');
    screen.getAllByRole('switch').forEach(toggle => {
      expect(toggle).toHaveAttribute('aria-checked', 'false');
    });
  });

  it('applies different shapes to the floating button', () => {
    const { rerender } = render(<AccessibilityControls shape="circle" />);
    const button = screen.getByLabelText('Accessibility settings');
    
    expect(button).toHaveClass('rounded-full');
    
    rerender(<AccessibilityControls shape="square" />);
    expect(button).toHaveClass('rounded-lg');
    
    rerender(<AccessibilityControls shape="hexagon" />);
    expect(button).toHaveClass('hexagon-shape');
  });
});
