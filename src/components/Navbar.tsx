import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Sparkles } from 'lucide-react';
import { GlossyButton } from './GlossyButton';

interface NavItem {
  id: string;
  label: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'skills', label: 'Habilidades' },
  { id: 'projects', label: 'Projetos' },
  { id: 'experience', label: 'Trajetória' },
  { id: 'contact', label: 'Contato' }
];

interface NavbarProps {
  activeSection: string;
  githubUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, githubUrl }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      style={{
        position: 'fixed',
        top: '1rem',
        left: 0,
        right: 0,
        zIndex: 100,
        display: 'flex',
        justifyContent: 'center',
        padding: '0 1rem',
        pointerEvents: 'none'
      }}
    >
      <nav
        aria-label="Navegação principal"
        className="navbar-glass"
        style={{
          pointerEvents: 'auto',
          width: '100%',
          maxWidth: '1080px',
          background: isScrolled ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.72)',
          backdropFilter: 'blur(16px)',
          WebkitBackdropFilter: 'blur(16px)',
          border: '1.5px solid rgba(255, 255, 255, 0.9)',
          borderRadius: 'var(--radius-full)',
          boxShadow: isScrolled
            ? '0 12px 30px rgba(2, 132, 199, 0.2), inset 0 1px 1px #ffffff'
            : '0 8px 20px rgba(2, 132, 199, 0.12), inset 0 1px 1px #ffffff',
          padding: '0.55rem 1.25rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          transition: 'all 0.3s ease'
        }}
      >
        {/* Brand / Monogram */}
        <a
          href="#hero"
          onClick={(e) => {
            e.preventDefault();
            handleNavClick('hero');
          }}
          aria-label="Ir para o topo"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '0.6rem',
            textDecoration: 'none'
          }}
        >
          {/* Aero Orb Monogram Icon */}
          <div
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #a5f3fc 0%, #38bdf8 45%, #0284c7 90%)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 2px 6px rgba(2, 132, 199, 0.35), inset 0 1px 2px rgba(255, 255, 255, 0.9)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative'
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-sans)',
                fontWeight: 800,
                fontSize: '0.82rem',
                color: '#ffffff',
                textShadow: '0 1px 2px rgba(12, 35, 64, 0.5)'
              }}
            >
              NAS
            </span>
            <Sparkles
              size={10}
              color="#ffffff"
              style={{ position: 'absolute', top: '2px', right: '3px', opacity: 0.8 }}
            />
          </div>

          <div style={{ display: 'flex', flexDirection: 'column' }}>
            <span
              style={{
                fontSize: '0.92rem',
                fontWeight: 700,
                color: 'var(--text-main)',
                lineHeight: 1.1
              }}
            >
              Nicolas Silveira
            </span>
            <span
              style={{
                fontSize: '0.68rem',
                fontWeight: 600,
                color: 'var(--sky-700)',
                fontFamily: 'var(--font-mono)'
              }}
            >
              IT &amp; Dev
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div
          style={{
            display: 'none',
            alignItems: 'center',
            gap: '0.35rem'
          }}
          className="nav-desktop-links"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  color: isActive ? '#0369a1' : 'var(--text-secondary)',
                  padding: '0.4rem 0.85rem',
                  borderRadius: 'var(--radius-full)',
                  transition: 'all 0.2s ease',
                  background: isActive ? 'rgba(224, 242, 254, 0.8)' : 'transparent',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.4)' : '1px solid transparent',
                  boxShadow: isActive ? 'inset 0 1px 1px rgba(255, 255, 255, 0.9)' : 'none'
                }}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Right Action: GitHub button & Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <GlossyButton
            variant="secondary"
            size="sm"
            href={githubUrl}
            isExternal
            icon={<Github size={15} />}
            ariaLabel="Acessar perfil do GitHub"
          >
            GitHub
          </GlossyButton>

          {/* Mobile Hamburger Toggle */}
          <button
            type="button"
            className="nav-mobile-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            aria-expanded={mobileMenuOpen}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '38px',
              height: '38px',
              borderRadius: 'var(--radius-full)',
              background: 'rgba(255, 255, 255, 0.85)',
              border: '1px solid rgba(255, 255, 255, 0.95)',
              color: 'var(--text-main)',
              cursor: 'pointer',
              boxShadow: '0 2px 6px rgba(2, 132, 199, 0.1)'
            }}
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-label="Menu móvel"
          style={{
            position: 'absolute',
            top: 'calc(100% + 0.5rem)',
            left: '1rem',
            right: '1rem',
            background: 'rgba(255, 255, 255, 0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1.5px solid rgba(255, 255, 255, 0.95)',
            borderRadius: 'var(--radius-lg)',
            boxShadow: '0 16px 36px rgba(2, 132, 199, 0.22), inset 0 1px 1px #ffffff',
            padding: '1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.4rem',
            pointerEvents: 'auto',
            animation: 'aeroFadeIn 0.25s ease-out forwards'
          }}
        >
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item.id);
                }}
                style={{
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  color: isActive ? '#0369a1' : 'var(--text-main)',
                  padding: '0.65rem 1rem',
                  borderRadius: 'var(--radius-sm)',
                  background: isActive ? 'rgba(224, 242, 254, 0.9)' : 'rgba(255, 255, 255, 0.5)',
                  border: isActive ? '1px solid rgba(56, 189, 248, 0.3)' : '1px solid rgba(255, 255, 255, 0.6)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{item.label}</span>
                {isActive && <span className="aero-led-live" />}
              </a>
            );
          })}
        </div>
      )}

      {/* Inline styles for media query responsiveness */}
      <style>{`
        @media (min-width: 768px) {
          .nav-desktop-links {
            display: flex !important;
          }
          .nav-mobile-toggle {
            display: none !important;
          }
        }
      `}</style>
    </header>
  );
};
