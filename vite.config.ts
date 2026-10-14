import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
// Configuração adaptável para GitHub Pages:
// - Em GitHub Actions, GITHUB_REPOSITORY (ex: "Jotaroki/portif-lio") define automaticamente o subcaminho "/portif-lio/".
// - Caso utilize domínio customizado ou repositório especial (ex: usuario.github.io), pode definir VITE_BASE_PATH="/".
// - Em desenvolvimento local ou preview estático, utiliza './' como fallback relativo.
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

export default defineConfig({
  plugins: [react()],
  base: getBasePath(),
  server: {
    port: 3000,
    open: false,
  },
  build: {
    outDir: 'dist',
    sourcemap: false,
    emptyOutDir: true,
  },
});
