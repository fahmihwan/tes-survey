import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   host: true,
  //   port: 5173
  // }

  // server: {
  //   allowedHosts: [
  //     '5801-2404-8000-1095-2bfd-2464-be53-6344-3ebf.ngrok-free.app'
  //   ]
  // }
})
