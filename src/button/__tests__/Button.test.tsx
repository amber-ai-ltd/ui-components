import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../Button';

describe('Button', () => {
  it('clicks', () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalledOnce();
  });

  it('navigates', () => {
    render(<Button href="/test">Link</Button>);
    expect(screen.getByRole('link')).toHaveAttribute('href', '/test');
  });

  it('shows left icon', () => {
    render(<Button leftIcon={<span data-testid="icon">←</span>}>Text</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('shows right icon', () => {
    render(<Button rightIcon={<span data-testid="icon">→</span>}>Text</Button>);
    expect(screen.getByTestId('icon')).toBeInTheDocument();
  });

  it('shows both icons', () => {
    render(
      <Button 
        leftIcon={<span data-testid="left">←</span>}
        rightIcon={<span data-testid="right">→</span>}
      >
        Text
      </Button>
    );
    expect(screen.getByTestId('left')).toBeInTheDocument();
    expect(screen.getByTestId('right')).toBeInTheDocument();
  });

  it('disables', () => {
    render(<Button disabled>Test</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
  });

  it('accepts custom classes', () => {
    render(<Button className="custom">Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('custom');
  });

  it('spans full width', () => {
    render(<Button fullWidth>Test</Button>);
    expect(screen.getByRole('button')).toHaveClass('w-full');
  });

  it('applies variants', () => {
    const { rerender } = render(<Button variant="primary">Test</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('bg-primary-600');
    
    rerender(<Button variant="destructive">Test</Button>);
    expect(button).toHaveClass('bg-red-600');
    
    rerender(<Button variant="floating">Test</Button>);
    expect(button).toHaveClass('fixed', 'rounded-full');
  });

  it('applies sizes', () => {
    const { rerender } = render(<Button size="sm">Test</Button>);
    const button = screen.getByRole('button');
    
    expect(button).toHaveClass('px-3');
    
    rerender(<Button size="lg">Test</Button>);
    expect(button).toHaveClass('px-6');
  });
});
