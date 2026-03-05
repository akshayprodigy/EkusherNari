import { defineConfig } from 'vite'
import path from 'path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(() => {
  const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

  return {
    // When deployed to GitHub Pages (project pages), the app is served from
    // https://<user>.github.io/<repo>/, so Vite needs the base path.
    base: isGitHubActions ? '/EkusherNari/' : '/',
  plugins: [
    // The React and Tailwind plugins are both required for Make, even if
    // Tailwind is not being actively used – do not remove them
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      // Alias @ to the src directory
      '@': path.resolve(__dirname, './src'),
    },
  },

  // File types to support raw imports. Never add .css, .tsx, or .ts files to this.
  assetsInclude: ['**/*.svg', '**/*.csv'],
  }
})
