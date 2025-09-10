import { render, screen } from '@testing-library/react';
import { ThemeProvider } from '../../theme/ThemeContext.js';
import { amberTheme } from '../../theme/amberTheme.js';
import { ErrorLayout } from '../ErrorLayout.js';

describe('ErrorLayout', () => {
  const renderWithTheme = (ui: React.ReactElement, colorMode: 'light' | 'dark' = 'dark') => {
    const TestThemeProvider = ({ children }: { children: React.ReactNode }) => {
      const mockTheme = { ...amberTheme, colorMode };
      return (
        <ThemeProvider theme={amberTheme}>
          <div data-color-mode={colorMode}>
            {children}
          </div>
        </ThemeProvider>
      );
    };
    return render(ui, { wrapper: TestThemeProvider });
  };

  it('provides main landmark for screen reader navigation', () => {
    renderWithTheme(
      <ErrorLayout>
        <h1>Page Not Found</h1>
      </ErrorLayout>
    );
    
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
  });

  it('renders child content within accessible structure', () => {
    renderWithTheme(
      <ErrorLayout>
        <h1>Error Page</h1>
        <p>Custom message content</p>
      </ErrorLayout>
    );
    
    expect(screen.getByText('Error Page')).toBeInTheDocument();
    expect(screen.getByText('Custom message content')).toBeInTheDocument();
  });

  it('exposes theme mode through data attribute contract', () => {
    renderWithTheme(
      <ErrorLayout data-testid="layout">
        <p>Content</p>
      </ErrorLayout>,
      'dark'
    );
    
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-theme', 'dark');
  });

  it('accepts custom className without breaking theme contract', () => {
    renderWithTheme(
      <ErrorLayout className="custom-spacing" data-testid="layout">
        <p>Content</p>
      </ErrorLayout>
    );
    
    const layout = screen.getByTestId('layout');
    expect(layout).toHaveAttribute('data-theme', 'dark');
    expect(layout).toHaveClass('custom-spacing');
  });
});
