import React from 'react';
import { Wrench, Terminal, Code2, ShieldAlert } from 'lucide-react';
import { ProfileData } from '../types';
import { GlassPanel } from '../components/GlassPanel';
import { SectionHeading } from '../components/SectionHeading';

interface AboutProps {
  profile: ProfileData;
}

export const About: React.FC<AboutProps> = ({ profile }) => {
  const pillars = [
    {
      icon: <Wrench size={22} color="var(--sky-600)" />,
      title: 'Suporte & Diagnóstico',
      desc: 'Atendimento a demandas técnicas reais, resolução metódica de incidentes e entendimento das dores do usuário final.'
    },
    {
      icon: <Terminal size={22} color="var(--sky-600)" />,
      title: 'Linux & Automação',
      desc: 'Imersão diária em Arch Linux e CachyOS, com scripts em Bash e Lua para transformar tarefas manuais em rotinas automatizadas.'
    },
    {
      icon: <Code2 size={22} color="var(--sky-600)" />,
      title: 'Engenharia & Backend',
      desc: 'Estudos em Engenharia de Software aplicados à construção de APIs tipadas, bancos de dados relacionais e CLIs eficientes.'
    },
    {
      icon: <ShieldAlert size={22} color="var(--sky-600)" />,
      title: 'Segurança & Confiabilidade',
      desc: 'Atenção constante à integridade de sistemas, auditoria de fontes de pacotes e boas práticas de código limpo.'
    }
  ];

  return (
    <section id="about" className="section" aria-label="Sobre Nicolas">
      <div className="container">
        <SectionHeading
          badge="PERFIL PROFISSIONAL"
          title="Sobre Mim"
          subtitle="Uma visão integrada entre operação técnica, administração de sistemas e engenharia de software."
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '2rem'
          }}
        >
          {/* Main Glass Narrative Panel */}
          <GlassPanel
            variant="prominent"
            style={{
              padding: 'clamp(1.5rem, 3.5vw, 2.8rem)'
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                gap: '2rem',
                alignItems: 'start'
              }}
            >
              {profile.aboutParagraphs.map((paragraph, index) => (
                <p
                  key={index}
                  style={{
                    fontSize: '1rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.75
                  }}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </GlassPanel>

          {/* Pillars Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1.25rem'
            }}
          >
            {pillars.map((pillar, idx) => (
              <GlassPanel
                key={idx}
                variant="subtle"
                interactive
                style={{
                  padding: '1.4rem'
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: 'var(--radius-sm)',
                    background: 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.95)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: '1rem',
                    boxShadow: '0 2px 8px rgba(2, 132, 199, 0.12)'
                  }}
                >
                  {pillar.icon}
                </div>
                <h3
                  style={{
                    fontSize: '1.1rem',
                    fontWeight: 700,
                    color: 'var(--text-main)',
                    marginBottom: '0.5rem'
                  }}
                >
                  {pillar.title}
                </h3>
                <p
                  style={{
                    fontSize: '0.86rem',
                    color: 'var(--text-secondary)',
                    lineHeight: 1.55
                  }}
                >
                  {pillar.desc}
                </p>
              </GlassPanel>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
