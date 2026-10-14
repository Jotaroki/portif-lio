import { ProfileData } from '../types';

export const profileData: ProfileData = {
  name: 'Nicolas de Araujo Silveira',
  initials: 'NAS',
  roleTitle: 'IT Support Analyst & Backend / CLI Developer',
  tagline: 'Conectando infraestrutura, desenvolvimento e automação para transformar problemas complexos em soluções práticas.',
  introSummary:
    'Profissional de TI com atuação prática em suporte técnico, diagnóstico de redes e administração de ambientes Linux. Em constante evolução na Engenharia de Software, direcionando meus estudos e projetos para o desenvolvimento backend, ferramentas de linha de comando e automações de sistemas.',
  aboutParagraphs: [
    'Minha trajetória é guiada pela compreensão prática de como a tecnologia funciona em todas as camadas — desde o hardware e o suporte ao usuário final, até a configuração avançada do sistema operacional e o desenvolvimento de software.',
    'No dia a dia em suporte de TI, desenvolvi habilidades essenciais de diagnóstico, troubleshooting de redes e resolução analítica de problemas sob demanda. Essa vivência me deu uma visão clara dos gargalos reais que os usuários e sistemas enfrentam.',
    'Paralelamente aos estudos em Engenharia de Software, aprofundei meus conhecimentos no ecossistema Linux, adotando distribuições como Arch Linux e CachyOS no meu fluxo diário. Essa imersão fortaleceu meu apreço por controle, desempenho, segurança da informação e personalização via scripts em Bash, Lua e ferramentas modernas de terminal.',
    'Hoje, concentro minha evolução na construção de aplicações backend sólidas com Node.js, Go e TypeScript, além de utilitários de automação e ferramentas CLI que tornam fluxos de trabalho mais eficientes e confiáveis.'
  ],
  availability: {
    available: true,
    statusText: 'Disponível para novos desafios e colaborações'
  },
  contacts: {
    github: 'https://github.com/Jotaroki',
    linkedin: 'https://www.linkedin.com/in/nicolas-silveira', // Atualize com o seu URL público de perfil
    email: 'nilsilveira.silveira@gmail.com'
  },
  systemWidget: {
    os: 'Linux (Arch Linux / CachyOS)',
    kernel: 'Linux x86_64 Zen/Bore',
    focus: 'Backend & Automação CLI',
    tools: 'Terminal, Git, Shell Scripts',
    status: 'Desenvolvendo novas soluções',
    environment: 'Hyprland & Fish Shell'
  }
};
