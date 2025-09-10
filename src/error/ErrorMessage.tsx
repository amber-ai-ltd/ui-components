interface ErrorMessageProps {
  title: string;
  message: string;
  showTechnicalDetails?: boolean;
  technicalMessage?: string;
  className?: string;
}

export function ErrorMessage({ 
  title,
  message,
  showTechnicalDetails = false,
  technicalMessage,
  className = ''
}: ErrorMessageProps) {
  return (
    <div className={`error-message ${className}`}>
      <div className="error-code">404</div>
      
      <h1 className="error-title">{title}</h1>
      
      <p className="error-description">{message}</p>
      
      {showTechnicalDetails && (
        <div className="error-technical">
          <div className="technical-label">Technical Details</div>
          <p className="technical-message">{technicalMessage}</p>
          <p className="technical-code">Error Code: 404 • Resource Not Available</p>
        </div>
      )}
      
      <p className="error-footer">
        No personal data was harmed in the making of this error
      </p>
    </div>
  );
}
