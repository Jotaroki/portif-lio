import React from 'react';

export interface GlossyButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md';
  href?: string;
  onClick?: (e: React.MouseEvent<HTMLElement>) => void;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  isExternal?: boolean;
  type?: 'button' | 'submit' | 'reset';
  ariaLabel?: string;
  className?: string;
  style?: React.CSSProperties;
}

export const GlossyButton: React.FC<GlossyButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  icon,
  iconPosition = 'left',
  isExternal = false,
  type = 'button',
  ariaLabel,
  className = '',
  style
}) => {
  const variantClass = {
    primary: 'glossy-btn--primary',
    secondary: 'glossy-btn--secondary',
    accent: 'glossy-btn--accent'
  }[variant];

  const sizeClass = size === 'sm' ? 'glossy-btn--sm' : '';
  const combinedClasses = `glossy-btn ${variantClass} ${sizeClass} ${className}`.trim();

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="btn-icon">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="btn-icon">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={onClick}
        aria-label={ariaLabel}
        style={style}
        {...(isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type={type}
      className={combinedClasses}
      onClick={onClick}
      aria-label={ariaLabel}
      style={style}
    >
      {content}
    </button>
  );
};
