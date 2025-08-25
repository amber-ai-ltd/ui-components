import { render, screen, fireEvent } from '@testing-library/react';
import { ThemeProvider, useTheme } from '../ThemeContext';

function TestToggle() {
  const { theme, toggleTheme } = useTheme();
  return (
    <button onClick={toggleTheme}>
      {theme}
    </button>
  );
}

describe('theme switching', () => {
  it('toggles between themes', () => {
    render(
      <ThemeProvider>
        <TestToggle />
      </ThemeProvider>
    );
    
    const button = screen.getByRole('button');
    expect(button).toHaveTextContent('light');
    
    fireEvent.click(button);
    expect(button).toHaveTextContent('dark');
    
    fireEvent.click(button);
    expect(button).toHaveTextContent('light');
  });
});
