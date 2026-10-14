import React from 'react';
import { ArrowDown, Mail, FolderGit2 } from 'lucide-react';
import { ProfileData } from '../types';
import { GlossyButton } from '../components/GlossyButton';
import { SystemWidget } from '../components/SystemWidget';

interface HeroProps {
  profile: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section
      id="hero"
      aria-label="Apresentação inicial"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '7.5rem',
        paddingBottom: '4.5rem',
        position: 'relative'
      }}
    >
      <div className="container">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            alignItems: 'center',
            gap: '3rem'
          }}
        >
          {/* Left Column: Personal Introduction & CTAs */}
          <div style={{ maxWidth: '640px' }}>
            {/* Availability Badge */}
            {profile.availability.available && (
              <div style={{ marginBottom: '1.25rem' }}>
                <span className="aero-pill aero-pill--green">
                  <span className="aero-led-live" style={{ width: '7px', height: '7px' }} />
                  {profile.availability.statusText}
                </span>
              </div>
            )}

            {/* Name */}
            <h1
              style={{
                fontSize: 'clamp(2.4rem, 5.2vw, 3.8rem)',
                fontWeight: 800,
                color: 'var(--text-main)',
                letterSpacing: '-0.025em',
                lineHeight: 1.15,
                marginBottom: '0.75rem',
                textShadow: '0 2px 4px rgba(255, 255, 255, 0.8)'
              }}
            >
              {profile.name}
            </h1>

            {/* Role Title with Aero Glow */}
            <div
              style={{
                display: 'inline-block',
                background: 'linear-gradient(90deg, rgba(2, 132, 199, 0.12) 0%, rgba(56, 189, 248, 0.05) 100%)',
                borderLeft: '4px solid var(--sky-600)',
                padding: '0.4rem 0.9rem',
                borderRadius: '0 var(--radius-sm) var(--radius-sm) 0',
                marginBottom: '1.4rem'
              }}
            >
              <h2
                style={{
                  fontSize: 'clamp(1.1rem, 2.2vw, 1.35rem)',
                  fontWeight: 700,
                  color: 'var(--sky-800)',
                  letterSpacing: '-0.01em'
                }}
              >
                {profile.roleTitle}
              </h2>
            </div>

            {/* Tagline / Subtitle */}
            <p
              style={{
                fontSize: 'clamp(1.05rem, 1.9vw, 1.25rem)',
                fontWeight: 600,
                color: 'var(--text-main)',
                lineHeight: 1.5,
                marginBottom: '1rem'
              }}
            >
              {profile.tagline}
            </p>

            {/* Concise Bio Lead */}
            <p
              style={{
                fontSize: '1rem',
                color: 'var(--text-secondary)',
                lineHeight: 1.65,
                marginBottom: '2.2rem'
              }}
            >
              {profile.introSummary}
            </p>

            {/* Main Action Buttons */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: '1rem'
              }}
            >
              <GlossyButton
                variant="primary"
                size="md"
                href="#projects"
                icon={<FolderGit2 size={18} />}
                ariaLabel="Navegar até a seção de projetos"
              >
                Explorar Projetos
              </GlossyButton>

              <GlossyButton
                variant="secondary"
                size="md"
                href="#contact"
                icon={<Mail size={17} />}
                ariaLabel="Navegar até a seção de contato"
              >
                Entrar em Contato
              </GlossyButton>
            </div>
          </div>

          {/* Right Column: Retro-Modern OS Widget */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <SystemWidget widgetData={profile.systemWidget} />
          </div>
        </div>

        {/* Scroll down indicator */}
        <div
          style={{
            marginTop: '4rem',
            display: 'flex',
            justifyContent: 'center'
          }}
        >
          <a
            href="#about"
            aria-label="Rolar para a seção Sobre mim"
            style={{
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '0.3rem',
              color: 'var(--sky-800)',
              fontSize: '0.78rem',
              fontWeight: 600,
              textDecoration: 'none'
            }}
          >
            <span>Conheça minha trajetória</span>
            <span
              className="animate-hover"
              style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.75)',
                border: '1px solid rgba(255, 255, 255, 0.9)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 2px 6px rgba(2, 132, 199, 0.15)'
              }}
            >
              <ArrowDown size={15} color="var(--sky-600)" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
