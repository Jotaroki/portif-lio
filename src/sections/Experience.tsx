import React from 'react';
import { Briefcase, GraduationCap, Milestone, CheckCircle2 } from 'lucide-react';
import { timelineData } from '../data/timeline';
import { TimelineItem } from '../types';
import { GlassPanel } from '../components/GlassPanel';
import { SectionHeading } from '../components/SectionHeading';

const getTimelineIcon = (type: TimelineItem['type']) => {
  const props = { size: 18, color: '#0284c7' };
  switch (type) {
    case 'experience':
      return <Briefcase {...props} />;
    case 'education':
      return <GraduationCap {...props} />;
    case 'milestone':
      return <Milestone {...props} />;
    default:
      return <Milestone {...props} />;
  }
};

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="section" aria-label="Experiência e trajetória">
      <div className="container">
        <SectionHeading
          badge="HISTÓRICO &amp; FORMAÇÃO"
          title="Trajetória e Experiência"
          subtitle="A evolução contínua entre atendimento de suporte, formação em Engenharia de Software e desenvolvimento de sistemas."
        />

        <div style={{ maxWidth: '820px', margin: '0 auto', position: 'relative' }}>
          {/* Vertical Glass Track Line */}
          <div
            style={{
              position: 'absolute',
              top: '20px',
              bottom: '20px',
              left: '24px',
              width: '3px',
              background: 'linear-gradient(180deg, #38bdf8 0%, #0284c7 50%, rgba(56, 189, 248, 0.2) 100%)',
              borderRadius: '2px',
              boxShadow: '0 0 10px rgba(56, 189, 248, 0.4)'
            }}
          />

          <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {timelineData.map((item) => (
              <div
                key={item.id}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '1.75rem',
                  position: 'relative'
                }}
              >
                {/* Node Orb Marker */}
                <div
                  style={{
                    width: '50px',
                    height: '50px',
                    minWidth: '50px',
                    borderRadius: '50%',
                    background: 'radial-gradient(circle at 35% 30%, #ffffff 0%, #e0f2fe 50%, #bae6fd 100%)',
                    border: '2px solid #ffffff',
                    boxShadow: '0 4px 12px rgba(2, 132, 199, 0.25), inset 0 1px 1px #ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 2
                  }}
                >
                  {getTimelineIcon(item.type)}
                </div>

                {/* Content Glass Panel */}
                <GlassPanel
                  variant="standard"
                  interactive
                  style={{
                    flex: 1,
                    padding: '1.5rem 1.75rem'
                  }}
                >
                  {/* Period Tag & Type */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      flexWrap: 'wrap',
                      gap: '0.5rem',
                      marginBottom: '0.6rem'
                    }}
                  >
                    <span className="aero-pill aero-pill--cyan" style={{ fontSize: '0.78rem' }}>
                      {item.period}
                    </span>
                    <span
                      style={{
                        fontSize: '0.82rem',
                        fontWeight: 600,
                        color: 'var(--sky-800)',
                        fontFamily: 'var(--font-mono)'
                      }}
                    >
                      {item.organization}
                    </span>
                  </div>

                  {/* Title */}
                  <h3
                    style={{
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      marginBottom: '0.75rem'
                    }}
                  >
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    style={{
                      fontSize: '0.92rem',
                      color: 'var(--text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1rem'
                    }}
                  >
                    {item.description}
                  </p>

                  {/* Highlights */}
                  {item.highlights.length > 0 && (
                    <ul
                      style={{
                        listStyle: 'none',
                        padding: 0,
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '0.45rem'
                      }}
                    >
                      {item.highlights.map((highlight, idx) => (
                        <li
                          key={idx}
                          style={{
                            display: 'flex',
                            alignItems: 'flex-start',
                            gap: '0.55rem',
                            fontSize: '0.86rem',
                            color: 'var(--text-main)',
                            lineHeight: 1.45
                          }}
                        >
                          <CheckCircle2
                            size={15}
                            color="#0284c7"
                            style={{ minWidth: '15px', marginTop: '2px' }}
                          />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </GlassPanel>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
