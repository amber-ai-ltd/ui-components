import React from 'react';
import { useTheme } from '../theme/ThemeContext.js';

interface SubmissionMessageProps {
  message: string;
  isSuccess: boolean;
}

export const SubmissionMessage: React.FC<SubmissionMessageProps> = ({ message, isSuccess }) => {
  const { theme, colorMode } = useTheme();
  const colors = theme.colors[colorMode];
  
  const successStyle = {
    backgroundColor: colorMode === 'dark' ? '#064e3b' : '#dcfce7',
    color: colorMode === 'dark' ? '#6ee7b7' : '#166534',
    borderColor: colorMode === 'dark' ? '#047857' : '#bbf7d0',
  };
  
  const errorStyle = {
    backgroundColor: colorMode === 'dark' ? '#7f1d1d' : '#fef2f2',
    color: colorMode === 'dark' ? '#fca5a5' : '#b91c1c',
    borderColor: colorMode === 'dark' ? '#b91c1c' : '#fecaca',
  };
  
  const messageStyle = isSuccess ? successStyle : errorStyle;
  
  return (
    <div 
      className="p-4 rounded-lg border"
      style={messageStyle}
    >
      {message}
    </div>
  );
};
