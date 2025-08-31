import { useState } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from '../button/Button.js';
import { Toggle } from '../toggle/Toggle.js';

function UserSettingsForm() {
  const [notifications, setNotifications] = useState(true);
  const [autoSave, setAutoSave] = useState(false);
  const [saveCount, setSaveCount] = useState(0);

  const handleSave = () => setSaveCount(prev => prev + 1);

  return (
    <div>
      <Toggle 
        checked={notifications} 
        onChange={setNotifications}
        aria-label="Email notifications"
      />
      
      <Toggle 
        checked={autoSave} 
        onChange={setAutoSave}
        aria-label="Auto-save drafts"
      />
      
      <Button onClick={handleSave}>
        Save Settings {saveCount > 0 && `(${saveCount})`}
      </Button>
    </div>
  );
}

describe('User interactions', () => {
  it('allows users to change multiple settings', () => {
    render(<UserSettingsForm />);
    
    expect(screen.getByLabelText('Email notifications')).toHaveAttribute('aria-checked', 'true');
    expect(screen.getByLabelText('Auto-save drafts')).toHaveAttribute('aria-checked', 'false');
    
    fireEvent.click(screen.getByLabelText('Email notifications'));
    fireEvent.click(screen.getByLabelText('Auto-save drafts'));
    
    expect(screen.getByLabelText('Email notifications')).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByLabelText('Auto-save drafts')).toHaveAttribute('aria-checked', 'true');
  });

  it('tracks user actions over time', () => {
    render(<UserSettingsForm />);
    
    expect(screen.getByText('Save Settings')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Save Settings'));
    expect(screen.getByText('Save Settings (1)')).toBeInTheDocument();
    
    fireEvent.click(screen.getByText('Save Settings (1)'));
    expect(screen.getByText('Save Settings (2)')).toBeInTheDocument();
  });

  it('maintains independent toggle states', () => {
    render(<UserSettingsForm />);
    
    fireEvent.click(screen.getByLabelText('Email notifications'));
    expect(screen.getByLabelText('Email notifications')).toHaveAttribute('aria-checked', 'false');
    expect(screen.getByLabelText('Auto-save drafts')).toHaveAttribute('aria-checked', 'false');
  });
});
