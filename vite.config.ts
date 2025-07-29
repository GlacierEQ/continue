import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './packages/gui/src'),
      '@core': path.resolve(__dirname, './packages/core/src'),
    },
  },
  server: {
    port: 3000,
    open: true,
  },
  build: {
    outDir: 'dist/gui',
    emptyOutDir: true,
    lib: {
      entry: path.resolve(__dirname, 'packages/gui/src/index.tsx'),
      name: 'GuiPlugin',
      fileName: (format) => `gui.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
});
