import React from 'react';

interface SubmissionMessageProps {
  message: string;
  isSuccess: boolean;
}

export const SubmissionMessage: React.FC<SubmissionMessageProps> = ({ message, isSuccess }) => {
  const successStyle = {
    backgroundColor: '#dcfce7',
    color: '#166534',
    borderColor: '#bbf7d0',
  };
  
  const errorStyle = {
    backgroundColor: '#fef2f2',
    color: '#b91c1c',
    borderColor: '#fecaca',
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
