import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  resolve: {
    alias: {
      'src': "/src",
      'Api': path.resolve(__dirname, './src/api'),
      'Common': path.resolve(__dirname, './src/common'),
      'Containers': path.resolve(__dirname, './src/containers'),
      'Images': path.resolve(__dirname, './src/images'),
      'Views': path.resolve(__dirname, './src/views'),
    },
  },
});
