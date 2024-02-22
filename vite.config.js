/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  base: '/movies-react/',
  plugins: [react(), tsconfigPaths()],
  build: {
    outDir: './dist'
  },
  test: {
    globals: true,
    environment: 'jsdom',
  }
})
