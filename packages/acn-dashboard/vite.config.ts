import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import tailwindcss from '@tailwindcss/vite'

const apiPort = Number(process.env.ACN_DASH_API_PORT ?? 4886)
const uiPort = Number(process.env.ACN_DASH_UI_PORT ?? 4887)

export default defineConfig({
  // Bun can materialize a second Vite copy for this workspace; normalize the
  // plugin boundary until Vite exposes a shared workspace type package.
  plugins: [
    svelte(),
    tailwindcss(),
  ] as any,
  server: {
    port: uiPort,
    strictPort: true,
    proxy: {
      '/api': `http://localhost:${apiPort}`,
    },
  },
  build: {
    outDir: 'dist',
  },
})
