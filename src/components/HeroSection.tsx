import type { ReactNode } from 'react';

export interface HeroSectionProps {
  logoSrc: string;
  logoAlt: string;
  brandName: string;
  headline: string;
  subline: string;
  description: string;
  valuePropositions: Array<{
    text: string;
    variant: 'primary' | 'secondary' | 'tertiary';
  }>;
  primaryAction: ReactNode;
  secondaryAction: ReactNode;
  className?: string;
}

export function HeroSection({
  logoSrc,
  logoAlt,
  brandName,
  headline,
  subline,
  description,
  valuePropositions,
  primaryAction,
  secondaryAction,
  className = ""
}: HeroSectionProps) {
  return (
    <section className={`hero-section ${className}`} data-testid="hero-section" aria-labelledby="hero-heading" lang="en">
      <div className="hero-section__background">
        <div className="hero-section__grid"></div>
        <div className="hero-section__gradient"></div>
      </div>
      
      <div className="hero-section__container">
        <div className="hero-section__content">
          <div className="hero-section__brand">
            <img src={logoSrc} alt={logoAlt} className="hero-section__logo" />
            <div className="hero-section__brand-text">
              <h1 className="hero-section__brand-name">
                {brandName}
              </h1>
              <div className="hero-section__brand-line"></div>
            </div>
          </div>
          
          <h2 className="hero-section__headline">
            {headline}
            <span className="hero-section__subline">{subline}</span>
          </h2>
          
          <p className="hero-section__description">
            {description}
          </p>
          
          <div className="hero-section__value-props">
            {valuePropositions.map((prop, index) => (
              <span key={index} className={`hero-section__value-prop hero-section__value-prop--${prop.variant}`}>
                <span className="hero-section__value-prop-dot" aria-hidden="true"></span>
                {prop.text}
              </span>
            ))}
          </div>
          
          <div className="hero-section__actions">
            {primaryAction}
            {secondaryAction}
          </div>
        </div>
      </div>
      
      <div className="hero-section__floating-elements">
        <div className="hero-section__floating-element hero-section__floating-element--primary"></div>
        <div className="hero-section__floating-element hero-section__floating-element--secondary"></div>
        <div className="hero-section__floating-element hero-section__floating-element--tertiary"></div>
        <div className="hero-section__floating-element hero-section__floating-element--quaternary"></div>
      </div>
    </section>
  );
}