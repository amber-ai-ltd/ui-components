import type { ReactNode } from 'react';

type ServiceCardVariant = 'primary' | 'secondary' | 'tertiary';

export interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  variant?: ServiceCardVariant;
  className?: string;
}

export function ServiceCard({
  icon,
  title,
  description,
  features,
  variant = 'primary',
  className = ""
}: ServiceCardProps) {
  return (
    <div className={`service-card service-card--${variant} ${className}`}>
      <div className="service-card__background"></div>
      <div className="service-card__content">
        <div className="service-card__icon">
          {icon}
        </div>
        <h3 className="service-card__title">
          {title}
        </h3>
        <p className="service-card__description">
          {description}
        </p>
        <ul className="service-card__features">
          {features.map((feature, index) => (
            <li key={index} className="service-card__feature">
              <span className="service-card__feature-dot"></span>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
