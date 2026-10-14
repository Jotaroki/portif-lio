import React from 'react';

export interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
  center?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  title,
  subtitle,
  center = true,
  className = ''
}) => {
  return (
    <div
      className={`section-heading ${className}`}
      style={{
        textAlign: center ? 'center' : 'left',
        marginBottom: '2.8rem',
        maxWidth: center ? '780px' : '100%',
        marginLeft: center ? 'auto' : '0',
        marginRight: center ? 'auto' : '0'
      }}
    >
      {/* Pill Badge */}
      <div style={{ marginBottom: '0.85rem' }}>
        <span className="aero-pill aero-pill--cyan">
          <span className="aero-led-live" style={{ width: '6px', height: '6px' }} />
          {badge}
        </span>
      </div>

      {/* Main Title */}
      <h2
        style={{
          fontSize: 'clamp(1.9rem, 4vw, 2.7rem)',
          fontWeight: 800,
          color: 'var(--text-main)',
          letterSpacing: '-0.02em',
          marginBottom: '0.75rem',
          textShadow: '0 1px 1px rgba(255, 255, 255, 0.8)'
        }}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            fontSize: 'clamp(1rem, 1.8vw, 1.15rem)',
            color: 'var(--text-secondary)',
            lineHeight: 1.6
          }}
        >
          {subtitle}
        </p>
      )}

      {/* Aero Divider */}
      <div className="aero-divider" />
    </div>
  );
};
