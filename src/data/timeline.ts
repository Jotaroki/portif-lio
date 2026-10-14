import { TimelineItem } from '../types';

export const timelineData: TimelineItem[] = [
  {
    id: 'trajetoria-backend',
    period: 'Presente',
    title: 'Evolução em Backend & Automação de Sistemas',
    organization: 'Projetos Pessoais & Estudos Avançados',
    description:
      'Desenvolvimento contínuo de ferramentas de linha de comando, automações de infraestrutura e serviços backend utilizando Go, Node.js, TypeScript e ecossistemas Linux.',
    highlights: [
      'Criação de utilitários CLI estruturados e scripts de automação em Bash e Lua',
      'Modelagem de banco de dados e APIs REST com Node.js e Prisma ORM',
      'Aprofundamento em segurança de sistemas e análise de pacotes de código aberto'
    ],
    type: 'milestone'
  },
  {
    id: 'trajetoria-graduacao',
    period: 'Em andamento',
    title: 'Bacharelado em Engenharia de Software',
    organization: 'Ensino Superior',
    description:
      'Formação acadêmica focada em arquitetura de software, estruturas de dados, algoritmos, governança de TI e metodologias de desenvolvimento ágil.',
    highlights: [
      'Estudo formal de engenharia de requisitos, testes e ciclo de vida de software',
      'Aprofundamento conceitual em redes de computadores e sistemas distribuídos',
      'Aplicação prática de padrões de projeto e boas práticas de código limpo'
    ],
    type: 'education'
  },
  {
    id: 'trajetoria-suporte',
    period: 'Atuação Prática',
    title: 'Suporte Técnico de TI & Operações de Infraestrutura',
    organization: 'Atendimento & Diagnóstico Técnico',
    description:
      'Experiência direta com atendimento a demandas de suporte, troubleshooting de hardware e software, configuração e manutenção de redes locais e suporte a usuários.',
    highlights: [
      'Diagnóstico de incidentes de conectividade, protocolos de rede e sistemas operacionais',
      'Configuração e manutenção de estações de trabalho e periféricos',
      'Comunicação clara e empática com usuários para mitigação ágil de problemas'
    ],
    type: 'experience'
  }
];
