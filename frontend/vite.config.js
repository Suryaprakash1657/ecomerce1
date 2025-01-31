import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5555, // Set the port to 5555
    host: '0.0.0.0', // Use '0.0.0.0' to make the server accessible from the network (if needed)
    open: true, // Automatically open the app in the browser
    proxy: {
      // You can configure proxy to forward API requests to another server
      '/api': 'http://localhost:8000', // Change this to your backend API URL
    },
  },
})
