import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Toggle } from '../Toggle.js';

function ToggleWithState({ initialChecked = false, disabled = false }) {
  const [checked, setChecked] = useState(initialChecked);
  return (
    <Toggle 
      checked={checked} 
      onChange={setChecked} 
      disabled={disabled}
      aria-label={`Feature ${checked ? 'enabled' : 'disabled'}`}
    />
  );
}

describe('Toggle behavior', () => {
  it('changes state when clicked', () => {
    render(<ToggleWithState />);
    const toggle = screen.getByRole('switch');
    
    expect(screen.getByLabelText('Feature disabled')).toBeInTheDocument();
    
    fireEvent.click(toggle);
    expect(screen.getByLabelText('Feature enabled')).toBeInTheDocument();
    
    fireEvent.click(toggle);
    expect(screen.getByLabelText('Feature disabled')).toBeInTheDocument();
  });

  it('starts in the specified initial state', () => {
    render(<ToggleWithState initialChecked={true} />);
    expect(screen.getByLabelText('Feature enabled')).toBeInTheDocument();
  });

  it('prevents interaction when disabled', () => {
    render(<ToggleWithState disabled />);
    const toggle = screen.getByRole('switch');
    
    expect(toggle).toBeDisabled();
    expect(screen.getByLabelText('Feature disabled')).toBeInTheDocument();
    
    fireEvent.click(toggle);
    expect(screen.getByLabelText('Feature disabled')).toBeInTheDocument();
  });

  it('communicates state to screen readers', () => {
    const { rerender } = render(<Toggle checked={false} onChange={vi.fn()} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'false');
    
    rerender(<Toggle checked={true} onChange={vi.fn()} />);
    expect(screen.getByRole('switch')).toHaveAttribute('aria-checked', 'true');
  });
});
