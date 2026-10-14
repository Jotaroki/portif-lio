import React, { useState, useMemo } from 'react';
import { projectsData } from '../data/projects';
import { ProjectCategory } from '../types';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectFilters } from '../components/ProjectFilters';
import { ProjectCard } from '../components/ProjectCard';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'all') return projectsData;
    return projectsData.filter((project) => project.category === activeFilter);
  }, [activeFilter]);

  const counts: Record<ProjectCategory, number> = useMemo(() => {
    return {
      all: projectsData.length,
      backend: projectsData.filter((p) => p.category === 'backend').length,
      cli: projectsData.filter((p) => p.category === 'cli').length,
      linux: projectsData.filter((p) => p.category === 'linux').length
    };
  }, []);

  return (
    <section id="projects" className="section" aria-label="Projetos em destaque">
      <div className="container">
        <SectionHeading
          badge="PORTFÓLIO &amp; REPOSITÓRIOS"
          title="Projetos em Destaque"
          subtitle="Aplicações práticas voltadas a backend, automação de linha de comando e customização de sistemas."
        />

        {/* Filter Tabs */}
        <ProjectFilters
          currentFilter={activeFilter}
          onFilterChange={setActiveFilter}
          counts={counts}
        />

        {/* Projects Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
            gap: '1.75rem'
          }}
        >
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};
