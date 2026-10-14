export type ProjectCategory = 'all' | 'backend' | 'cli' | 'linux';

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  problemSolved: string;
  technologies: string[];
  status: 'Em desenvolvimento' | 'Estável' | 'Em planejamento';
  category: ProjectCategory;
  repoUrl: string;
  demoUrl?: string;
  iconName: 'Dices' | 'Terminal' | 'ShieldAlert' | 'Layout' | 'Code' | 'Server';
  featured?: boolean;
}

export interface SkillItem {
  name: string;
  categoryTag: string;
  context: string;
  iconName: string;
}

export interface SkillCategory {
  id: string;
  title: string;
  subtitle: string;
  iconName: string;
  skills: SkillItem[];
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  organization: string;
  description: string;
  highlights: string[];
  type: 'experience' | 'education' | 'milestone';
}

export interface ProfileData {
  name: string;
  initials: string;
  roleTitle: string;
  tagline: string;
  introSummary: string;
  aboutParagraphs: string[];
  availability: {
    available: boolean;
    statusText: string;
  };
  contacts: {
    github: string;
    linkedin: string;
    email: string;
  };
  systemWidget: {
    os: string;
    kernel: string;
    focus: string;
    tools: string;
    status: string;
    environment: string;
  };
}
