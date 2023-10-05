import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/production-folio/',
  router: {
    base: '/production-folio/',
  },
  plugins: [react()]
})
