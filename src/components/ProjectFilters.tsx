import React from 'react';
import { ProjectCategory } from '../types';

interface ProjectFiltersProps {
  currentFilter: ProjectCategory;
  onFilterChange: (category: ProjectCategory) => void;
  counts: Record<ProjectCategory, number>;
}

interface FilterTab {
  id: ProjectCategory;
  label: string;
}

const TABS: FilterTab[] = [
  { id: 'all', label: 'Todos os Projetos' },
  { id: 'backend', label: 'Backend & APIs' },
  { id: 'cli', label: 'CLI & Automação' },
  { id: 'linux', label: 'Linux & Desktop' }
];

export const ProjectFilters: React.FC<ProjectFiltersProps> = ({
  currentFilter,
  onFilterChange,
  counts
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.65rem',
        marginBottom: '2.5rem'
      }}
    >
      {TABS.map((tab) => {
        const isActive = currentFilter === tab.id;
        return (
          <button
            key={tab.id}
            type="button"
            onClick={() => onFilterChange(tab.id)}
            style={{
              padding: '0.55rem 1.15rem',
              borderRadius: 'var(--radius-full)',
              border: isActive
                ? '1px solid rgba(255, 255, 255, 0.95)'
                : '1px solid rgba(255, 255, 255, 0.6)',
              background: isActive
                ? 'var(--btn-primary-grad)'
                : 'linear-gradient(180deg, rgba(255, 255, 255, 0.85) 0%, rgba(224, 242, 254, 0.6) 100%)',
              color: isActive ? '#ffffff' : 'var(--text-main)',
              fontWeight: 600,
              fontSize: '0.88rem',
              cursor: 'pointer',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              boxShadow: isActive
                ? '0 4px 14px rgba(2, 132, 199, 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.9)'
                : '0 2px 6px rgba(2, 132, 199, 0.08), inset 0 1px 1px rgba(255, 255, 255, 0.8)',
              textShadow: isActive ? '0 1px 2px rgba(12, 35, 64, 0.4)' : 'none',
              transition: 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              position: 'relative',
              overflow: 'hidden'
            }}
          >
            {/* Top Gloss Curve on active button */}
            {isActive && (
              <span
                style={{
                  position: 'absolute',
                  top: '1px',
                  left: '10%',
                  right: '10%',
                  height: '45%',
                  background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.7) 0%, rgba(255, 255, 255, 0.1) 100%)',
                  borderRadius: 'var(--radius-full)',
                  pointerEvents: 'none'
                }}
              />
            )}
            <span>{tab.label}</span>
            <span
              style={{
                fontSize: '0.72rem',
                padding: '0.1rem 0.45rem',
                borderRadius: 'var(--radius-full)',
                background: isActive ? 'rgba(255, 255, 255, 0.25)' : 'rgba(2, 132, 199, 0.1)',
                color: isActive ? '#ffffff' : 'var(--sky-800)',
                fontWeight: 700
              }}
            >
              {counts[tab.id] ?? 0}
            </span>
          </button>
        );
      })}
    </div>
  );
};
