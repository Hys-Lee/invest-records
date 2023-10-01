import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/stock': {
        target: 'https://www.koreaexim.go.kr',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/stock/, ''),
        secure: false,
        ws: true,
      },
    },
  },
});
