import { renderToString } from 'react-dom/server';
import { ThemeProvider, useTheme } from '../ThemeContext.js';
import { amberTheme } from '../amberTheme.js';

function TestComponent() {
  const { theme, colorMode, toggleColorMode } = useTheme();
  return (
    <div data-testid="theme-consumer">
      <span data-testid="color-mode">{colorMode}</span>
      <span data-testid="accent-color">{theme.colors[colorMode].accent}</span>
      <button onClick={toggleColorMode} data-testid="toggle-button">Toggle</button>
    </div>
  );
}

describe('ThemeContext SSR behavior', () => {
  beforeEach(() => {
    Object.defineProperty(global, 'window', {
      value: undefined,
      writable: true
    });
    Object.defineProperty(global, 'document', {
      value: undefined,
      writable: true
    });
    Object.defineProperty(global, 'localStorage', {
      value: undefined,
      writable: true
    });
  });

  it('renders theme component during server-side rendering without crashing', () => {
    const renderSSR = () => {
      return renderToString(
        <ThemeProvider theme={amberTheme}>
          <TestComponent />
        </ThemeProvider>
      );
    };

    expect(renderSSR).not.toThrow();
  });

  it('provides default dark theme during SSR when no localStorage available', () => {
    const html = renderToString(
      <ThemeProvider theme={amberTheme}>
        <TestComponent />
      </ThemeProvider>
    );

    expect(html).toContain('dark');
    expect(html).toContain('data-testid="theme-consumer"');
  });

  it('renders useTheme hook safely outside provider during SSR', () => {
    const renderWithoutProvider = () => {
      return renderToString(<TestComponent />);
    };

    expect(renderWithoutProvider).not.toThrow();
  });
});
