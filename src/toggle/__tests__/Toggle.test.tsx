import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from '../Toggle';

describe('Toggle', () => {
  it('toggles', () => {
    const onChange = vi.fn();
    render(<Toggle checked={false} onChange={onChange} />);
    
    fireEvent.click(screen.getByRole('switch'));
    expect(onChange).toHaveBeenCalledWith(true);
  });

  it('shows state', () => {
    const { rerender } = render(<Toggle checked={false} onChange={vi.fn()} />);
    const toggle = screen.getByRole('switch');
    
    expect(toggle).toHaveAttribute('aria-checked', 'false');
    
    rerender(<Toggle checked={true} onChange={vi.fn()} />);
    expect(toggle).toHaveAttribute('aria-checked', 'true');
  });

  it('accepts custom label', () => {
    render(<Toggle checked={false} onChange={vi.fn()} aria-label="Custom toggle" />);
    expect(screen.getByLabelText('Custom toggle')).toBeInTheDocument();
  });

  it('disables', () => {
    render(<Toggle checked={false} onChange={vi.fn()} disabled />);
    expect(screen.getByRole('switch')).toBeDisabled();
  });
});
