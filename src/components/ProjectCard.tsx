import React from 'react';
import {
  Dices,
  Terminal,
  ShieldAlert,
  Layout,
  Code,
  Server,
  Github,
  ExternalLink,
  HelpCircle
} from 'lucide-react';
import { Project } from '../types';
import { GlassPanel } from './GlassPanel';
import { GlossyButton } from './GlossyButton';

interface ProjectCardProps {
  project: Project;
}

const getProjectIcon = (iconName: Project['iconName']) => {
  const props = { size: 28, color: '#0284c7' };
  switch (iconName) {
    case 'Dices':
      return <Dices {...props} />;
    case 'Terminal':
      return <Terminal {...props} />;
    case 'ShieldAlert':
      return <ShieldAlert {...props} />;
    case 'Layout':
      return <Layout {...props} />;
    case 'Code':
      return <Code {...props} />;
    case 'Server':
      return <Server {...props} />;
    default:
      return <Code {...props} />;
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <GlassPanel
      variant="standard"
      interactive
      style={{
        padding: '1.75rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-between'
      }}
    >
      <div>
        {/* Header: Icon, Category & Status Badge */}
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
            gap: '1rem',
            marginBottom: '1.25rem'
          }}
        >
          {/* Project Glossy Icon Orb */}
          <div
            style={{
              width: '54px',
              height: '54px',
              borderRadius: 'var(--radius-md)',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.85) 100%)',
              border: '1.5px solid rgba(255, 255, 255, 0.95)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              boxShadow: '0 4px 12px rgba(2, 132, 199, 0.15), inset 0 1px 1px rgba(255, 255, 255, 1)'
            }}
          >
            {getProjectIcon(project.iconName)}
          </div>

          {/* Status Badge */}
          <span className="aero-pill aero-pill--amber" style={{ fontSize: '0.74rem' }}>
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                background: '#f59e0b',
                display: 'inline-block'
              }}
            />
            {project.status}
          </span>
        </div>

        {/* Title */}
        <h3
          style={{
            fontSize: '1.35rem',
            fontWeight: 800,
            color: 'var(--text-main)',
            letterSpacing: '-0.015em',
            marginBottom: '0.6rem'
          }}
        >
          {project.title}
        </h3>

        {/* Short Description */}
        <p
          style={{
            fontSize: '0.92rem',
            color: 'var(--text-secondary)',
            lineHeight: 1.55,
            marginBottom: '1.1rem'
          }}
        >
          {project.shortDescription}
        </p>

        {/* Problem Solved Callout Box */}
        <div
          style={{
            background: 'linear-gradient(180deg, rgba(240, 249, 255, 0.8) 0%, rgba(224, 242, 254, 0.6) 100%)',
            border: '1px solid rgba(56, 189, 248, 0.25)',
            borderRadius: 'var(--radius-sm)',
            padding: '0.85rem 1rem',
            marginBottom: '1.25rem',
            boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.9)'
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.75rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
              color: 'var(--sky-800)',
              marginBottom: '0.35rem'
            }}
          >
            <HelpCircle size={13} color="var(--sky-600)" />
            <span>Problema que resolve</span>
          </div>
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-main)',
              lineHeight: 1.5,
              margin: 0
            }}
          >
            {project.problemSolved}
          </p>
        </div>

        {/* Technology Pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.4rem',
            marginBottom: '1.5rem'
          }}
        >
          {project.technologies.map((tech) => (
            <span
              key={tech}
              style={{
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                fontWeight: 600,
                color: 'var(--sky-900)',
                background: 'rgba(255, 255, 255, 0.85)',
                border: '1px solid rgba(255, 255, 255, 0.95)',
                borderRadius: 'var(--radius-xs)',
                padding: '0.2rem 0.55rem',
                boxShadow: '0 1px 3px rgba(2, 132, 199, 0.08)'
              }}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Action Links */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '0.75rem',
          paddingTop: '1rem',
          borderTop: '1px solid rgba(56, 189, 248, 0.2)'
        }}
      >
        <GlossyButton
          variant="secondary"
          size="sm"
          href={project.repoUrl}
          isExternal
          icon={<Github size={15} />}
          ariaLabel={`Ver repositório do projeto ${project.title} no GitHub`}
        >
          Repositório
        </GlossyButton>

        {project.demoUrl && (
          <GlossyButton
            variant="primary"
            size="sm"
            href={project.demoUrl}
            isExternal
            icon={<ExternalLink size={14} />}
            ariaLabel={`Ver demonstração do projeto ${project.title}`}
          >
            Demonstração
          </GlossyButton>
        )}
      </div>
    </GlassPanel>
  );
};
