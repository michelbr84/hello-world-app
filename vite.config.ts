/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite configuration for the Hello World app.
//
// `base` keeps the GitHub Pages sub-path (`/hello-world-app/`) working
// for the production build. `build.outDir` matches the directory the
// existing CI workflow uploads as the Pages artifact, so no changes
// to `.github/workflows/ci.yml` are required for the deploy step.
//
// The `test` block enables Vitest as the unit-test runner, using jsdom
// for a browser-like environment (required for Testing Library).
export default defineConfig({
  base: '/hello-world-app/',
  publicDir: false,
  build: {
    outDir: 'build',
  },
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./src/test-setup.ts'],
    css: true,
    coverage: {
      provider: 'v8',
      reporter: ['text', 'lcov', 'json-summary', 'html'],
      reportsDirectory: './coverage',
    },
  },
});
