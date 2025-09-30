import type { ReactNode } from 'react';

type FeatureCardVariant = 'primary' | 'secondary' | 'tertiary' | 'quaternary';

export interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  variant?: FeatureCardVariant;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  variant = 'primary',
  className = ""
}: FeatureCardProps) {
  return (
    <div className={`feature-card feature-card--${variant} ${className}`}>
      <div className="feature-card__icon">
        {icon}
      </div>
      <h4 className="feature-card__title">{title}</h4>
      <p className="feature-card__description">
        {description}
      </p>
    </div>
  );
}