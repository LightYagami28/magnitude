import { svelte } from "@sveltejs/vite-plugin-svelte"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

export default defineConfig({
  // Bun can materialize a second Vite copy for this workspace; normalize the
  // plugin boundary until Vite exposes a shared workspace type package.
  plugins: [tailwindcss(), svelte()] as any,
  server: {
    host: "127.0.0.1",
    port: 5187,
    strictPort: true,
    proxy: { "/api": "http://127.0.0.1:4897" },
  },
})
