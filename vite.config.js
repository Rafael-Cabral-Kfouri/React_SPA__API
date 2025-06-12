import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
  postcss: './postcss.config.js', // Garante que o Vite use o PostCSS
  },
})
