import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
base: '/vite-project/',
export default defineConfig({
  plugins: [vue()],
})
