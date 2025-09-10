import { render, screen } from '@testing-library/react';
import { ErrorMessage } from '../ErrorMessage.js';

describe('ErrorMessage', () => {
  it('renders provided title and message', () => {
    render(
      <ErrorMessage 
        title="Test Error Title"
        message="Test error message content"
      />
    );
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Test Error Title');
    expect(screen.getByText('Test error message content')).toBeInTheDocument();
  });

  it('renders different title and message when provided', () => {
    render(
      <ErrorMessage 
        title="Different Error Title"
        message="Different error message for testing"
      />
    );
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Different Error Title');
    expect(screen.getByText('Different error message for testing')).toBeInTheDocument();
  });

  it('does not render technical details by default', () => {
    render(
      <ErrorMessage 
        title="Error Title"
        message="Error message"
      />
    );
    
    expect(screen.queryByText(/technical details/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/error code/i)).not.toBeInTheDocument();
  });

  it('renders technical details when explicitly enabled', () => {
    render(
      <ErrorMessage 
        title="Error Title"
        message="Error message"
        showTechnicalDetails
        technicalMessage="Technical error details"
      />
    );
    
    expect(screen.getByText(/technical details/i)).toBeInTheDocument();
    expect(screen.getByText(/error code: 404/i)).toBeInTheDocument();
  });

  it('renders custom technical details when provided', () => {
    render(
      <ErrorMessage 
        title="Error Title"
        message="Error message"
        showTechnicalDetails 
        technicalMessage="Custom technical explanation for developers"
      />
    );
    
    expect(screen.getByText('Custom technical explanation for developers')).toBeInTheDocument();
  });

  it('supports i18n with completely custom text', () => {
    render(
      <ErrorMessage 
        title="Página No Encontrada"
        message="Esta página ha decidido tomarse unas vacaciones inesperadas"
        showTechnicalDetails
        technicalMessage="Detalles técnicos en español"
      />
    );
    
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('Página No Encontrada');
    expect(screen.getByText(/vacaciones inesperadas/)).toBeInTheDocument();
    expect(screen.getByText('Detalles técnicos en español')).toBeInTheDocument();
  });
});
