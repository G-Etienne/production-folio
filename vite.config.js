import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mimetype from './mimetype.config'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/production-folio/',
  router: {
    base: '/',
  },
  plugins: [react()],
  mimetype
})
