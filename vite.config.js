import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 Qui abilitiamo il fallback per SPA (Single Page App)
export default defineConfig({
  plugins: [react()],
  server: {
    historyApiFallback: true
  }
})
