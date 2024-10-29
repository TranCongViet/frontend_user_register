import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/frontend_user_register/",
  plugins: [react()],
  server: {
    port: 5173, // Thay đổi port tại đây
  },
})
