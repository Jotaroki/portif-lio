import React from 'react';
import { skillCategories } from '../data/skills';
import { SectionHeading } from '../components/SectionHeading';
import { SkillCard } from '../components/SkillCard';

export const Skills: React.FC = () => {
  return (
    <section id="skills" className="section" aria-label="Habilidades e tecnologias">
      <div className="container">
        <SectionHeading
          badge="STACK &amp; CONHECIMENTO"
          title="Habilidades e Tecnologias"
          subtitle="Ferramentas e ecossistemas com os quais trabalho em desenvolvimento, automação e infraestrutura."
        />

        <div style={{ display: 'flex', flexDirection: 'column', gap: '3.5rem' }}>
          {skillCategories.map((category) => (
            <div key={category.id}>
              {/* Category Subheader */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: '1.25rem',
                  paddingLeft: '0.25rem'
                }}
              >
                <div
                  style={{
                    width: '8px',
                    height: '24px',
                    borderRadius: '4px',
                    background: 'var(--btn-primary-grad)'
                  }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: '1.35rem',
                      fontWeight: 700,
                      color: 'var(--text-main)',
                      letterSpacing: '-0.01em'
                    }}
                  >
                    {category.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                    {category.subtitle}
                  </p>
                </div>
              </div>

              {/* Skills Grid */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
                  gap: '1.25rem'
                }}
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
