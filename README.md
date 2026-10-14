# Portfólio Pessoal — Nicolas de Araujo Silveira

> **IT Support Analyst & Backend / CLI Developer**  
> *Uma experiência digital moderna e nostálgica inspirada na estética Frutiger Aero (2004–2013).*

[![Deploy to GitHub Pages](https://github.com/Jotaroki/portif-lio/actions/workflows/deploy.yml/badge.svg)](https://github.com/Jotaroki/portif-lio/actions/workflows/deploy.yml)
[![Vite](https://img.shields.io/badge/Vite-6.1-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![React](https://img.shields.io/badge/React-18.3-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

---

## 1. Visão Geral

Este projeto é uma aplicação web estática (SPA) de alta performance, desenvolvida para apresentar as habilidades, experiências práticas e projetos autorais de **Nicolas de Araujo Silveira**. 

O design celebra a estética **Frutiger Aero** — caracterizada por vidros translúcidos (*Aero Glass*), botões com acabamento tátil em gel (*glossy*), reflexos luminosos, orbes e paleta de céu azul, ciano e toques orgânicos — combinando nostalgia visual com a robustez da engenharia front-end contemporânea.

### Principais Destaques:
- **Aero Glass Nativo:** Efeitos de vidro com `backdrop-filter`, bordas chanfradas, reflexos internos especulares e fallbacks sólidos para compatibilidade abrangente.
- **Microinterações:** Botões táteis com feixes de luz (*sheen*) no hover, bolhas atmosféricas em camada independente e indicador LED pulsante em tempo real.
- **Gadget de Sistema Retrô-Moderno:** Painel no estilo dos widgets do Windows Vista/7 que sintetiza o ambiente de trabalho (Arch Linux / CachyOS, Hyprland, Fish Shell, Terminal e ferramentas de automação).
- **Acessibilidade:** Suporte total a navegação por teclado (`:focus-visible`), contraste validado (WCAG AAA em textos) e respeito estrito a `prefers-reduced-motion`.
- **Arquitetura Modular:** Separação limpa entre dados tipados (`src/data/`), componentes reutilizáveis (`src/components/`), seções (`src/sections/`) e tokens de estilo (`src/styles/`).
- **Deploy Automatizado:** Configuração integrada com GitHub Actions para publicação direta no GitHub Pages.

---

## 2. Tecnologias Utilizadas

- **Core:** [React 18](https://react.dev/) com [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite 6](https://vitejs.dev/) (bundler ultrarrápido com HMR)
- **Ícones:** [Lucide React](https://lucide.dev/)
- **Estilos:** CSS Moderno nativo com Custom Properties, Flexbox, CSS Grid e animações por GPU
- **CI/CD:** [GitHub Actions](https://github.com/features/actions) com as actions oficiais do GitHub Pages (`upload-pages-artifact` e `deploy-pages`)

---

## 3. Pré-requisitos

Antes de iniciar, certifique-se de ter instalado em sua máquina:
- **Node.js:** Versão 18.x, 20.x ou superior (testado com Node v20+ e v26).
- **npm:** Versão 9+ ou superior.
- **Git:** Para clonar e versionar o código.

---

## 4. Instalação e Execução Local

### Passo 1: Clonar o repositório
```bash
git clone https://github.com/Jotaroki/portif-lio.git
cd portif-lio
```

### Passo 2: Instalar as dependências
No **Windows PowerShell**:
```powershell
npm.cmd install
```
*(No Linux ou macOS: `npm install`)*

> **Nota sobre políticas do PowerShell no Windows:** Se você receber o aviso de segurança `O arquivo npm.ps1 não pode ser carregado porque a execução de scripts foi desabilitada`, use sempre o comando `npm.cmd` em vez de apenas `npm`, ou configure `Set-ExecutionPolicy -Scope CurrentUser RemoteSigned`.

### Passo 3: Executar o servidor de desenvolvimento
No **Windows PowerShell**:
```powershell
npm.cmd run dev
```
*(No Linux ou macOS: `npm run dev`)*

Abra seu navegador no endereço indicado (geralmente [http://localhost:3000](http://localhost:3000)).

---

## 5. Scripts Disponíveis

| Comando | Descrição |
| :--- | :--- |
| `npm.cmd run dev` | Inicia o servidor local de desenvolvimento com hot-reload. |
| `npm.cmd run typecheck` | Executa a validação de tipos do TypeScript sem emitir arquivos (`tsc --noEmit`). |
| `npm.cmd run build` | Valida tipos e compila a aplicação minificada para a pasta `dist/`. |
| `npm.cmd run preview` | Inicia um servidor estático local para pré-visualizar o build de produção. |

---

## 6. Personalização dos Dados

Todo o conteúdo pessoal do portfólio está centralizado e fortemente tipado em arquivos TypeScript dentro do diretório `src/data/`:

### 6.1. Perfil, Contatos e Widget (`src/data/profile.ts`)
Edite suas informações principais, links de redes sociais e os dados exibidos no gadget do Hero:
```typescript
export const profileData: ProfileData = {
  name: 'Nicolas de Araujo Silveira',
  roleTitle: 'IT Support Analyst & Backend / CLI Developer',
  tagline: 'Conectando infraestrutura, desenvolvimento e automação...',
  contacts: {
    github: 'https://github.com/Jotaroki',
    linkedin: 'https://www.linkedin.com/in/seu-perfil', // Insira seu LinkedIn real aqui
    email: 'nilsilveira.silveira@gmail.com'
  },
  systemWidget: {
    os: 'Linux (Arch Linux / CachyOS)',
    environment: 'Hyprland & Fish Shell',
    focus: 'Backend & Automação CLI',
    tools: 'Terminal, Git, Shell Scripts',
    status: 'Desenvolvendo novas soluções'
  }
};
```

### 6.2. Habilidades e Tecnologias (`src/data/skills.ts`)
Para adicionar ou editar uma competência ou ferramenta:
- Localize a categoria desejada (`Desenvolvimento e Backend`, `Sistemas e Infraestrutura`, `Ferramentas de Desenvolvimento`).
- Cada item possui `name`, `categoryTag`, `context` (descrição contextual do uso) e `iconName`.

### 6.3. Projetos em Destaque (`src/data/projects.ts`)
Cada projeto listado no portfólio possui os seguintes campos:
- `title`: Nome do projeto.
- `shortDescription`: Resumo do projeto.
- `problemSolved`: O problema prático que o software soluciona.
- `technologies`: Array de strings com as tecnologias utilizadas.
- `status`: Ex: `'Em desenvolvimento'` ou `'Estável'`.
- `category`: Categoria para filtro (`'backend'`, `'cli'`, `'linux'`).
- `repoUrl`: Link para o repositório no GitHub.
- `demoUrl`: Link opcional de demonstração online.

---

## 7. Publicação no GitHub Pages via GitHub Actions

O projeto já inclui o workflow oficial do GitHub Actions em `.github/workflows/deploy.yml`.

### Como Ativar o Deploy Automático:

1. Acesse o seu repositório no GitHub: `https://github.com/Jotaroki/portif-lio`.
2. Clique na aba **Settings** (Configurações).
3. No menu lateral esquerdo, vá em **Pages**.
4. Em **Build and deployment** > **Source**, altere a opção de *"Deploy from a branch"* para:
   👉 **GitHub Actions**.
5. Faça um commit e push para a branch `main`:
   ```powershell
   git add .
   git commit -m "feat: implementar portfolio Frutiger Aero completo"
   git push origin main
   ```
6. O workflow será executado automaticamente. Você pode acompanhar a execução na aba **Actions** do GitHub.
7. Ao término, seu portfólio estará online em:
   **`https://jotaroki.github.io/portif-lio/`**

---

## 8. Entendendo a Resolução de Caminhos (Vite `base`)

O arquivo [vite.config.ts](vite.config.ts) foi construído de forma inteligente para se adaptar automaticamente a qualquer cenário de hospedagem:

```typescript
const getBasePath = (): string => {
  if (process.env.VITE_BASE_PATH) {
    return process.env.VITE_BASE_PATH;
  }
  if (process.env.GITHUB_REPOSITORY) {
    const repoName = process.env.GITHUB_REPOSITORY.split('/')[1];
    return `/${repoName}/`;
  }
  return './';
};
```

### Cenários Suportados:
1. **Repositório de Projeto Padrão (`https://usuario.github.io/nome-do-repositorio/`):**
   - O GitHub Actions injeta automaticamente a variável `GITHUB_REPOSITORY="Jotaroki/portif-lio"`.
   - O Vite automaticamente aplica `base: "/portif-lio/"`.
2. **Repositório Especial de Usuário (`https://usuario.github.io/`):**
   - Caso você renomeie ou mova este projeto para um repositório com o nome exato `jotaroki.github.io`, defina a variável de ambiente `VITE_BASE_PATH="/"`.
3. **Execução Local e Preview Estático:**
   - Fora do GitHub Actions, o Vite utiliza caminhos relativos (`./`), permitindo testar o build localmente em qualquer servidor estático ou pasta sem conflitos de caminho 404.

---

## 9. Solução de Problemas Comuns

- **Assets retornando 404 no GitHub Pages:**
  Verifique se o nome do repositório no GitHub corresponde ao subcaminho da URL. Se o repositório mudar de nome, o workflow detecta automaticamente a partir de `${{ github.repository }}` no build seguinte.
- **Falha no passo `npm ci` no GitHub Actions:**
  Certifique-se de que o arquivo `package-lock.json` esteja commitado no repositório. O comando `npm ci` exige a presença exata do lockfile.
- **Links externos abrindo sem segurança:**
  Todos os links externos nos botões foram implementados com o atributo `rel="noopener noreferrer"` para proteger o usuário e evitar vazamento de contexto da aba.
- **Animações lentas em dispositivos móveis ou economia de energia:**
  O sistema respeita a diretiva CSS `@media (prefers-reduced-motion: reduce)`. Em dispositivos com redução de movimento ativada, todas as animações decorativas de fundo são desativadas automaticamente para poupar bateria e garantir acessibilidade.

---

## 10. Licença

Este projeto é disponibilizado sob a licença [MIT](LICENSE). Sinta-se livre para utilizar como referência ou base para seus próprios projetos pessoais.