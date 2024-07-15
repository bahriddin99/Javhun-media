import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as  path from "path"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@" : path.resolve(__dirname, "./src"),
      "@pages" : path.resolve(__dirname, "./src/pages"),
      "@com" : path.resolve(__dirname, "./src/component"),
      "@router" : path.resolve(__dirname, "./src/router/routers"),
      "@com-header" : path.resolve(__dirname, "./src/component/header/header"),
      "@com-footer" : path.resolve(__dirname, "./src/component/footer/footer"),
      "@com-layout" : path.resolve(__dirname, "./src/component/layout/layout")
    }
  }
})
