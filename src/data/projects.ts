import { Project } from '../types';

export const projectsData: Project[] = [
  {
    id: 'projeto-arton',
    title: 'Projeto Arton',
    shortDescription: 'Assistente digital para campanhas de RPG de mesa do sistema Tormenta 20.',
    problemSolved:
      'Facilita o gerenciamento de fichas de personagens, magias, perícias e regras complexas de Tormenta 20, reduzindo o tempo de consulta durante as sessões e tornando a experiência do mestre e jogadores mais fluida.',
    technologies: ['Node.js', 'Prisma ORM', 'TypeScript', 'PostgreSQL'],
    status: 'Em desenvolvimento',
    category: 'backend',
    repoUrl: 'https://github.com/Jotaroki/projeto-arton',
    iconName: 'Dices',
    featured: true
  },
  {
    id: 'antigravity-cli',
    title: 'Antigravity CLI',
    shortDescription: 'CLI para automação de tarefas, orquestração de meta-prompts e configurações YAML.',
    problemSolved:
      'Organiza fluxos de automação de desenvolvimento através de estruturas declarativas em YAML, permitindo disparar tarefas contextuais, gerenciar variáveis de ambiente e orquestrar meta-prompts de maneira consistente.',
    technologies: ['CLI', 'YAML', 'Node.js', 'TypeScript'],
    status: 'Em desenvolvimento',
    category: 'cli',
    repoUrl: 'https://github.com/Jotaroki/antigravity',
    iconName: 'Terminal',
    featured: true
  },
  {
    id: 'aur-security-scanner',
    title: 'AUR Security Scanner',
    shortDescription: 'Utilitário de apoio para inspeção e análise de segurança de PKGBUILDs no Arch User Repository.',
    problemSolved:
      'Ajuda usuários e administradores Linux a inspecionar arquivos PKGBUILD e scripts .install antes da compilação, sinalizando padrões que merecem revisão manual (como chamadas a URLs desconhecidas, curls diretos ou manipulação indevida de permissões). Não substitui auditorias completas, mas atua como um primeiro filtro de conscientização.',
    technologies: ['Shell Scripting', 'Bash', 'Linux CLI', 'Gawk'],
    status: 'Em desenvolvimento',
    category: 'linux',
    repoUrl: 'https://github.com/Jotaroki/aur-security-scanner',
    iconName: 'ShieldAlert',
    featured: true
  },
  {
    id: 'caelestia-shell',
    title: 'Caelestia Shell – Hyprland',
    shortDescription: 'Ambiente de desktop Linux customizado para Hyprland com foco em produtividade e estética limpa.',
    problemSolved:
      'Combina scripts em Lua e integração com Quickshell para orquestrar painéis translúcidos, notificações de sistema, controle de volume, indicadores de rede e navegação em mosaico por atalhos rápidos e sem atrito.',
    technologies: ['Lua', 'Quickshell', 'Hyprland', 'Wayland', 'Linux'],
    status: 'Em desenvolvimento',
    category: 'linux',
    repoUrl: 'https://github.com/Jotaroki/caelestia-shell',
    iconName: 'Layout',
    featured: true
  }
];
