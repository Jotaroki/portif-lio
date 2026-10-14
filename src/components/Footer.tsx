import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { GlossyButton } from './GlossyButton';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer
      style={{
        position: 'relative',
        zIndex: 2,
        padding: '3rem 1.5rem 2.5rem',
        marginTop: '3rem',
        borderTop: '1.5px solid rgba(255, 255, 255, 0.8)',
        background: 'linear-gradient(180deg, rgba(224, 242, 254, 0.45) 0%, rgba(14, 165, 233, 0.25) 100%)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)'
      }}
    >
      <div className="container" style={{ maxWidth: '1080px' }}>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.5rem',
            paddingBottom: '2rem',
            borderBottom: '1px solid rgba(56, 189, 248, 0.25)'
          }}
        >
          {/* Brand Info */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
            <div
              style={{
                width: '38px',
                height: '38px',
                borderRadius: '50%',
                background: 'radial-gradient(circle at 35% 30%, #a5f3fc 0%, #38bdf8 50%, #0284c7 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                boxShadow: '0 2px 8px rgba(2, 132, 199, 0.25)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
                fontWeight: 800,
                fontSize: '0.85rem'
              }}
            >
              NAS
            </div>
            <div>
              <div style={{ fontWeight: 700, color: 'var(--text-main)', fontSize: '1rem' }}>
                Nicolas de Araujo Silveira
              </div>
              <div style={{ fontSize: '0.8rem', color: 'var(--sky-800)', fontFamily: 'var(--font-mono)' }}>
                IT Support Analyst &amp; Backend / CLI Developer
              </div>
            </div>
          </div>

          {/* Nav Quick Links */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.25rem', fontSize: '0.88rem', fontWeight: 600 }}>
            <a href="#hero" style={{ color: 'var(--text-secondary)' }}>Início</a>
            <a href="#about" style={{ color: 'var(--text-secondary)' }}>Sobre</a>
            <a href="#skills" style={{ color: 'var(--text-secondary)' }}>Habilidades</a>
            <a href="#projects" style={{ color: 'var(--text-secondary)' }}>Projetos</a>
            <a href="#experience" style={{ color: 'var(--text-secondary)' }}>Trajetória</a>
            <a href="#contact" style={{ color: 'var(--text-secondary)' }}>Contato</a>
          </div>

          {/* Back to top button */}
          <GlossyButton
            variant="secondary"
            size="sm"
            onClick={scrollToTop}
            icon={<ArrowUp size={14} />}
            ariaLabel="Voltar ao topo da página"
          >
            Topo
          </GlossyButton>
        </div>

        {/* Bottom Credits */}
        <div
          style={{
            paddingTop: '1.5rem',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontSize: '0.82rem',
            color: 'var(--text-muted)'
          }}
        >
          <div>
            &copy; {currentYear} Nicolas de Araujo Silveira. Todos os direitos reservados.
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.4rem',
              background: 'rgba(255, 255, 255, 0.65)',
              padding: '0.25rem 0.75rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(255, 255, 255, 0.85)',
              fontSize: '0.78rem',
              color: 'var(--sky-900)'
            }}
          >
            <Sparkles size={13} color="var(--sky-600)" />
            <span>Crafted with code, curiosity &amp; a little Aero Glass</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
