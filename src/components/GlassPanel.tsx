import React from 'react';

export interface GlassPanelProps {
  children: React.ReactNode;
  variant?: 'standard' | 'prominent' | 'subtle' | 'tint';
  interactive?: boolean;
  className?: string;
  style?: React.CSSProperties;
  showGlare?: boolean;
  as?: 'div' | 'section' | 'article' | 'aside';
  id?: string;
}

export const GlassPanel: React.FC<GlassPanelProps> = ({
  children,
  variant = 'standard',
  interactive = false,
  className = '',
  style,
  showGlare = true,
  as: Component = 'div',
  id
}) => {
  const variantClass = {
    standard: '',
    prominent: 'aero-glass--prominent',
    subtle: 'aero-glass--subtle',
    tint: 'aero-glass--tint'
  }[variant];

  const interactiveClass = interactive ? 'aero-glass--interactive' : '';

  return (
    <Component
      id={id}
      className={`aero-glass ${variantClass} ${interactiveClass} ${className}`.trim()}
      style={style}
    >
      {showGlare && <div className="aero-glass-glare" aria-hidden="true" />}
      {children}
    </Component>
  );
};
