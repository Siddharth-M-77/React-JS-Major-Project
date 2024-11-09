import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: [
        'module-name' // Replace 'module-name' with the actual module that Vite suggests externalizing
      ]
    }
  }
})
