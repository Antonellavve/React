import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 8004, // Puedes cambiar el número de puerto según tus necesidades
  },
  plugins: [react()],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
});
