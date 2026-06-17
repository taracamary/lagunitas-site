import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';

const rootDir = path.dirname(fileURLToPath(import.meta.url));

export default defineConfig({
  server: {
    host: '127.0.0.1',
    port: 3050,
    strictPort: true,
    open: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(rootDir, 'src'),
      '@styles': path.resolve(rootDir, 'src/styles'),
      '@js': path.resolve(rootDir, 'src/js'),
      '@assets': path.resolve(rootDir, 'src/assets'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
        loadPaths: [path.resolve(rootDir, 'src/styles')],
      },
    },
  },
  build: {
    cssMinify: true,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/gsap')) {
            return 'gsap';
          }
        },
      },
    },
  },
});
