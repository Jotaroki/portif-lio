import { SkillCategory } from '../types';

export const skillCategories: SkillCategory[] = [
  {
    id: 'backend',
    title: 'Desenvolvimento e Backend',
    subtitle: 'Linguagens, frameworks e ferramentas para APIs, serviços e scripts',
    iconName: 'Server',
    skills: [
      {
        name: 'Node.js',
        categoryTag: 'Runtime',
        context: 'Construção de APIs REST, serviços de backend e ferramentas de automação.',
        iconName: 'Terminal'
      },
      {
        name: 'Go',
        categoryTag: 'Linguagem',
        context: 'Desenvolvimento de ferramentas CLI de alto desempenho, concorrência e microsserviços.',
        iconName: 'Code'
      },
      {
        name: 'Prisma ORM',
        categoryTag: 'Banco de Dados',
        context: 'Modelagem de dados fortemente tipada e consultas eficientes em bancos relacionais.',
        iconName: 'Database'
      },
      {
        name: 'Bash',
        categoryTag: 'Shell Script',
        context: 'Automação de rotinas no sistema operacional, pipelines de CI e scripts de manutenção.',
        iconName: 'Terminal'
      },
      {
        name: 'Lua',
        categoryTag: 'Scripting',
        context: 'Configuração avançada de ambientes de desktop e scripts modulares para UI rápida.',
        iconName: 'FileCode'
      },
      {
        name: 'TypeScript & JavaScript',
        categoryTag: 'Linguagem',
        context: 'Desenvolvimento moderno com tipagem estática rigorosa para projetos backend e frontend.',
        iconName: 'Code'
      }
    ]
  },
  {
    id: 'systems',
    title: 'Sistemas e Infraestrutura',
    subtitle: 'Administração de sistemas, redes e ambientes operacionais',
    iconName: 'Cpu',
    skills: [
      {
        name: 'Linux',
        categoryTag: 'Sistema Operacional',
        context: 'Administração de processos, gerenciamento de permissões, logs e serviços systemd.',
        iconName: 'Terminal'
      },
      {
        name: 'Arch Linux & CachyOS',
        categoryTag: 'Distribuição',
        context: 'Ambientes rolling release com customização de kernels, otimizações de compilação e pacotes.',
        iconName: 'Cpu'
      },
      {
        name: 'Redes de Computadores',
        categoryTag: 'Infraestrutura',
        context: 'Diagnóstico de conexões, TCP/IP, DNS, roteamento, DHCP e isolamento de falhas.',
        iconName: 'Network'
      },
      {
        name: 'Administração & Troubleshooting',
        categoryTag: 'Suporte & Operações',
        context: 'Resolução metódica de incidentes técnicos de hardware, software e suporte corporativo.',
        iconName: 'Wrench'
      },
      {
        name: 'Fish Shell',
        categoryTag: 'Shell Interativo',
        context: 'Fluxo de trabalho diário de alta produtividade com autocompletar inteligente e funções customizadas.',
        iconName: 'Terminal'
      },
      {
        name: 'Hyprland & Ambientes Wayland',
        categoryTag: 'Window Manager',
        context: 'Configuração de compositores Wayland modernos, controle de janelas em blocos e scripts de automação.',
        iconName: 'Layout'
      }
    ]
  },
  {
    id: 'tools',
    title: 'Ferramentas de Desenvolvimento',
    subtitle: 'Ecossistema diário de edição, versionamento e gerenciamento de pacotes',
    iconName: 'Wrench',
    skills: [
      {
        name: 'Git & GitHub',
        categoryTag: 'Controle de Versão',
        context: 'Versionamento semântico, fluxo de branches, pull requests e automações com GitHub Actions.',
        iconName: 'GitBranch'
      },
      {
        name: 'VS Code',
        categoryTag: 'Editor / IDE',
        context: 'Ambiente de desenvolvimento integrado com extensões de produtividade, linters e depuração.',
        iconName: 'Code2'
      },
      {
        name: 'npm',
        categoryTag: 'Gerenciador de Pacotes',
        context: 'Gerenciamento de dependências, scripts de execução e controle de pacotes do ecossistema Node.',
        iconName: 'Package'
      },
      {
        name: 'pacman & yay',
        categoryTag: 'Gerenciamento Arch',
        context: 'Gestão de pacotes oficiais e do Arch User Repository (AUR), incluindo checagem de PKGBUILDs.',
        iconName: 'Layers'
      },
      {
        name: 'Terminal & Ferramentas CLI',
        categoryTag: 'Produtividade',
        context: 'Uso diário de ferramentas como ripgrep, fzf, fd, tmux e utilitários modernos de linha de comando.',
        iconName: 'Terminal'
      }
    ]
  }
];
