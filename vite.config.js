import { defineConfig } from 'vite';

export default defineConfig({
  // Базовый путь для дев-сервера и сборки
  base: './',
  clearScreen: false, // Не очищать терминал, чтобы видеть ошибки компиляции
  server: {
    host: '127.0.0.1', // Жесткая привязка к IPv4 для обхода проблем с localhost на Windows
    open: true, // Автоматически открывать браузер при запуске
    port: 3050, 
    strictPort: false, 
  },
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler', // Устраняем Deprecation Warning для Dart Sass
      }
    }
  }
});