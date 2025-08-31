import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button.js';

describe('Button behavior', () => {
  it('executes click handlers', () => {
    const handleClick = vi.fn();
    render(<Button onClick={handleClick}>Click me</Button>);
    
    fireEvent.click(screen.getByRole('button'));
    expect(handleClick).toHaveBeenCalledOnce();
  });

  it('navigates when used as link', () => {
    render(<Button href="/dashboard">Go to Dashboard</Button>);
    const link = screen.getByRole('link');
    
    expect(link).toHaveAttribute('href', '/dashboard');
    expect(link).toHaveTextContent('Go to Dashboard');
  });

  it('prevents interaction when disabled', () => {
    const handleClick = vi.fn();
    render(<Button disabled onClick={handleClick}>Disabled</Button>);
    
    const button = screen.getByRole('button');
    expect(button).toBeDisabled();
    
    fireEvent.click(button);
    expect(handleClick).not.toHaveBeenCalled();
  });

  it('displays icons alongside text', () => {
    render(
      <Button 
        leftIcon={<span data-testid="save-icon">💾</span>}
        rightIcon={<span data-testid="arrow-icon">→</span>}
      >
        Save Changes
      </Button>
    );
    
    expect(screen.getByTestId('save-icon')).toBeInTheDocument();
    expect(screen.getByText('Save Changes')).toBeInTheDocument();
    expect(screen.getByTestId('arrow-icon')).toBeInTheDocument();
  });

  it('accepts custom styling', () => {
    render(<Button className="my-custom-styles">Styled Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('my-custom-styles');
  });

  it('expands to full container width when requested', () => {
    render(<Button fullWidth>Full Width Button</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });
});
