import React from 'react';
import {
  Terminal,
  Code,
  Database,
  FileCode,
  Cpu,
  Network,
  Wrench,
  Layout,
  GitBranch,
  Code2,
  Package,
  Layers,
  Sparkles
} from 'lucide-react';
import { SkillItem } from '../types';
import { GlassPanel } from './GlassPanel';

interface SkillCardProps {
  skill: SkillItem;
}

const getSkillIcon = (iconName: string) => {
  const iconProps = { size: 22, color: 'var(--sky-600)' };
  switch (iconName) {
    case 'Terminal':
      return <Terminal {...iconProps} />;
    case 'Code':
      return <Code {...iconProps} />;
    case 'Database':
      return <Database {...iconProps} />;
    case 'FileCode':
      return <FileCode {...iconProps} />;
    case 'Cpu':
      return <Cpu {...iconProps} />;
    case 'Network':
      return <Network {...iconProps} />;
    case 'Wrench':
      return <Wrench {...iconProps} />;
    case 'Layout':
      return <Layout {...iconProps} />;
    case 'GitBranch':
      return <GitBranch {...iconProps} />;
    case 'Code2':
      return <Code2 {...iconProps} />;
    case 'Package':
      return <Package {...iconProps} />;
    case 'Layers':
      return <Layers {...iconProps} />;
    default:
      return <Sparkles {...iconProps} />;
  }
};

export const SkillCard: React.FC<SkillCardProps> = ({ skill }) => {
  return (
    <GlassPanel
      variant="standard"
      interactive
      style={{
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        position: 'relative'
      }}
    >
      {/* Top Header: Icon & Category Tag */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem'
        }}
      >
        <div
          style={{
            width: '42px',
            height: '42px',
            borderRadius: 'var(--radius-sm)',
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(224, 242, 254, 0.8) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 2px 8px rgba(2, 132, 199, 0.12), inset 0 1px 1px rgba(255, 255, 255, 1)'
          }}
        >
          {getSkillIcon(skill.iconName)}
        </div>
        <span className="aero-pill aero-pill--cyan" style={{ fontSize: '0.72rem' }}>
          {skill.categoryTag}
        </span>
      </div>

      {/* Skill Name */}
      <h4
        style={{
          fontSize: '1.05rem',
          fontWeight: 700,
          color: 'var(--text-main)',
          marginBottom: '0.45rem'
        }}
      >
        {skill.name}
      </h4>

      {/* Contextual Description */}
      <p
        style={{
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          lineHeight: 1.5,
          marginTop: 'auto'
        }}
      >
        {skill.context}
      </p>
    </GlassPanel>
  );
};
