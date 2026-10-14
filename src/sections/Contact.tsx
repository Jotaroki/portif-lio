import React, { useState } from 'react';
import { Mail, Github, Linkedin, Copy, Check, Send, MessageSquare } from 'lucide-react';
import { ProfileData } from '../types';
import { GlassPanel } from '../components/GlassPanel';
import { GlossyButton } from '../components/GlossyButton';
import { SectionHeading } from '../components/SectionHeading';

interface ContactProps {
  profile: ProfileData;
}

export const Contact: React.FC<ContactProps> = ({ profile }) => {
  const [copied, setCopied] = useState(false);

  const copyEmailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(profile.contacts.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
    }
  };

  return (
    <section id="contact" className="section" aria-label="Contato profissional">
      <div className="container" style={{ maxWidth: '960px' }}>
        <SectionHeading
          badge="CONEXÃO &amp; OPORTUNIDADES"
          title="Vamos Conversar?"
          subtitle="Estou sempre aberto a dialogar sobre projetos em desenvolvimento, oportunidades técnicas em suporte/backend ou colaborações em código aberto."
        />

        <GlassPanel
          variant="prominent"
          style={{
            padding: 'clamp(1.75rem, 4vw, 3rem)',
            textAlign: 'center',
            position: 'relative'
          }}
        >
          {/* Top Decorative Icon */}
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'radial-gradient(circle at 35% 30%, #a5f3fc 0%, #38bdf8 45%, #0284c7 90%)',
              border: '2px solid rgba(255, 255, 255, 0.95)',
              boxShadow: '0 8px 24px rgba(2, 132, 199, 0.3), inset 0 2px 2px rgba(255, 255, 255, 0.9)',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '1.5rem'
            }}
          >
            <MessageSquare size={30} color="#ffffff" />
          </div>

          <h3
            style={{
              fontSize: '1.6rem',
              fontWeight: 800,
              color: 'var(--text-main)',
              marginBottom: '0.75rem'
            }}
          >
            Entre em Contato Diretamente
          </h3>

          <p
            style={{
              fontSize: '1rem',
              color: 'var(--text-secondary)',
              maxWidth: '560px',
              margin: '0 auto 2.2rem',
              lineHeight: 1.6
            }}
          >
            Caso queira saber mais sobre meu fluxo de trabalho, discutir ideias de automação CLI ou propor desafios profissionais, envie uma mensagem pelos canais abaixo.
          </p>

          {/* Contact Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '1.25rem',
              marginBottom: '2.5rem'
            }}
          >
            {/* Email Card */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.8) 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(2, 132, 199, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Mail size={20} color="var(--sky-600)" />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>
                E-mail
              </div>
              <div
                style={{
                  fontSize: '0.82rem',
                  color: 'var(--sky-900)',
                  fontFamily: 'var(--font-mono)',
                  wordBreak: 'break-all'
                }}
              >
                {profile.contacts.email}
              </div>
              <div style={{ display: 'flex', gap: '0.4rem', marginTop: '0.4rem', width: '100%' }}>
                <GlossyButton
                  variant="primary"
                  size="sm"
                  href={`mailto:${profile.contacts.email}`}
                  icon={<Send size={13} />}
                  style={{ flex: 1 }}
                >
                  Enviar
                </GlossyButton>
                <button
                  type="button"
                  onClick={copyEmailToClipboard}
                  aria-label="Copiar endereço de e-mail"
                  title="Copiar e-mail"
                  style={{
                    padding: '0.45rem 0.75rem',
                    borderRadius: 'var(--radius-full)',
                    background: copied ? 'rgba(34, 197, 94, 0.15)' : 'rgba(255, 255, 255, 0.9)',
                    border: '1px solid rgba(255, 255, 255, 0.95)',
                    color: copied ? '#15803d' : 'var(--text-main)',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: 'all 0.2s ease',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                  }}
                >
                  {copied ? <Check size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* GitHub Card */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.8) 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(2, 132, 199, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Github size={20} color="var(--sky-600)" />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>
                GitHub
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Repositórios, dotfiles e scripts
              </div>
              <div style={{ marginTop: '0.4rem', width: '100%' }}>
                <GlossyButton
                  variant="secondary"
                  size="sm"
                  href={profile.contacts.github}
                  isExternal
                  icon={<Github size={14} />}
                  style={{ width: '100%' }}
                >
                  Acessar Perfil
                </GlossyButton>
              </div>
            </div>

            {/* LinkedIn Card */}
            <div
              style={{
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(240, 249, 255, 0.8) 100%)',
                border: '1.5px solid rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-md)',
                padding: '1.25rem',
                boxShadow: '0 4px 14px rgba(2, 132, 199, 0.1)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '0.6rem'
              }}
            >
              <div
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  background: 'rgba(2, 132, 199, 0.1)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <Linkedin size={20} color="var(--sky-600)" />
              </div>
              <div style={{ fontWeight: 700, fontSize: '0.92rem', color: 'var(--text-main)' }}>
                LinkedIn
              </div>
              <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>
                Conexões profissionais &amp; rede
              </div>
              <div style={{ marginTop: '0.4rem', width: '100%' }}>
                <GlossyButton
                  variant="secondary"
                  size="sm"
                  href={profile.contacts.linkedin}
                  isExternal
                  icon={<Linkedin size={14} />}
                  style={{ width: '100%' }}
                >
                  Conectar
                </GlossyButton>
              </div>
            </div>
          </div>

          {/* Quick status note */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              fontSize: '0.85rem',
              color: 'var(--sky-900)',
              background: 'rgba(224, 242, 254, 0.75)',
              padding: '0.4rem 1rem',
              borderRadius: 'var(--radius-full)',
              border: '1px solid rgba(56, 189, 248, 0.3)'
            }}
          >
            <span className="aero-led-live" style={{ width: '6px', height: '6px' }} />
            <span>Respondo habitualmente por e-mail em até 24–48 horas úteis.</span>
          </div>
        </GlassPanel>
      </div>
    </section>
  );
};
