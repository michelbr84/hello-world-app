import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Hello World app.
//
// `base` keeps the GitHub Pages sub-path (`/hello-world-app/`) working
// for the production build. `build.outDir` matches the directory the
// existing CI workflow uploads as the Pages artifact, so no changes
// to `.github/workflows/ci.yml` are required for the deploy step.
// `publicDir` is disabled because the repository still contains a
// leftover `public/index.html` from the previous Create React App
// scaffold; Vite's entry HTML now lives at the project root. Once the
// orphan is deleted, this can be removed (or set back to `'public'`).
export default defineConfig({
  base: '/hello-world-app/',
  publicDir: false,
  build: {
    outDir: 'build',
  },
  plugins: [react()],
});
