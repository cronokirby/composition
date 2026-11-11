import { resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig({
  root: resolve(import.meta.dirname, 'site'),
  base: './',
  build: {
    outDir: resolve(import.meta.dirname, 'dist/site'),
    emptyOutDir: true,
    rolldownOptions: {
      input: {
        index: resolve(import.meta.dirname, 'site/index.html'),
        coral: resolve(import.meta.dirname, 'site/demos/coral/index.html'),
        blue: resolve(import.meta.dirname, 'site/demos/blue/index.html'),
      },
    },
  },
});
