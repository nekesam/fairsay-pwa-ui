import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true //To allow for test PWA features in dev mode
      },
      includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-group.svg'],
      manifest: {
        name: 'FairSay Workplace Rights',
        short_name: 'FairSay',
        description: 'Empowering employees to report workplace violations safely.',
        theme_color: '#1E3A8A',
        background_color: '#F8FAFC',
        display: 'standalone',
        orientation: 'portrait',
        icons: [
          {
            src: '/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: '/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any maskable'
          }
        ]
      }
    }) 
  ]
})
