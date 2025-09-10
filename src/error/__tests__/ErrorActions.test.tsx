import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ErrorActions } from '../ErrorActions.js';

describe('ErrorActions', () => {
  it('renders primary and secondary buttons with provided labels', () => {
    render(
      <ErrorActions 
        primaryLabel="Primary Action"
        secondaryLabel="Secondary Action"
      />
    );
    
    expect(screen.getByRole('button', { name: 'Primary Action' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Secondary Action' })).toBeInTheDocument();
  });

  it('calls onPrimaryAction callback when primary button clicked', async () => {
    const user = userEvent.setup();
    const mockPrimaryAction = vi.fn();
    
    render(
      <ErrorActions 
        primaryLabel="Primary"
        secondaryLabel="Secondary"
        onPrimaryAction={mockPrimaryAction}
      />
    );
    
    await user.click(screen.getByRole('button', { name: 'Primary' }));
    expect(mockPrimaryAction).toHaveBeenCalledOnce();
  });

  it('calls onSecondaryAction callback when secondary button clicked', async () => {
    const user = userEvent.setup();
    const mockSecondaryAction = vi.fn();
    
    render(
      <ErrorActions 
        primaryLabel="Primary"
        secondaryLabel="Secondary"
        onSecondaryAction={mockSecondaryAction}
      />
    );
    
    await user.click(screen.getByRole('button', { name: 'Secondary' }));
    expect(mockSecondaryAction).toHaveBeenCalledOnce();
  });

  it('does not execute actions when callbacks not provided', async () => {
    const user = userEvent.setup();
    
    render(
      <ErrorActions 
        primaryLabel="Primary"
        secondaryLabel="Secondary"
      />
    );
    
    // Should not throw or cause side effects
    await user.click(screen.getByRole('button', { name: 'Primary' }));
    await user.click(screen.getByRole('button', { name: 'Secondary' }));
  });

  it('supports i18n with custom button text', () => {
    render(
      <ErrorActions 
        primaryLabel="Volver al Inicio"
        secondaryLabel="Página Anterior"
      />
    );
    
    expect(screen.getByRole('button', { name: 'Volver al Inicio' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Página Anterior' })).toBeInTheDocument();
  });
});
