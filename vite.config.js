import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: '.', // This should remain as the root of the project
  base: '/', // Base URL for assets
  publicDir: 'public', // Serves files from the public folder
  build: {
    outDir: 'dist', // Output directory
    emptyOutDir: true,
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'), // Allows using '@' for src imports
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});