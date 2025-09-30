import type { ReactNode } from 'react';

export interface ContactFeature {
  icon: ReactNode;
  title: string;
  description: string;
  variant: 'primary' | 'secondary' | 'tertiary';
}

export interface ContactSectionProps {
  logoSrc: string;
  logoAlt: string;
  headline: string;
  description: string;
  features: ContactFeature[];
  contactForm: ReactNode;
  className?: string;
}

export function ContactSection({
  logoSrc,
  logoAlt,
  headline,
  description,
  features,
  contactForm,
  className = ""
}: ContactSectionProps) {
  return (
    <section id="contact" className={`contact-section ${className}`}>
      <div className="contact-section__container">
        <div className="contact-section__header">
          <div className="contact-section__brand">
            <img src={logoSrc} alt={logoAlt} className="contact-section__logo" />
            <h2 className="contact-section__headline">
              {headline}
            </h2>
          </div>
          <p className="contact-section__description">
            {description}
          </p>
        </div>
        
        <div className="contact-section__content">
          <div className="contact-section__grid">
            <div className="contact-section__features">
              <h3 className="contact-section__features-title">Get Started Today</h3>
              <div className="contact-section__features-list">
                {features.map((feature, index) => (
                  <div key={index} className={`contact-section__feature contact-section__feature--${feature.variant}`}>
                    <div className="contact-section__feature-icon">
                      {feature.icon}
                    </div>
                    <div className="contact-section__feature-content">
                      <h4 className="contact-section__feature-title">{feature.title}</h4>
                      <p className="contact-section__feature-description">{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="contact-section__form">
              {contactForm}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}