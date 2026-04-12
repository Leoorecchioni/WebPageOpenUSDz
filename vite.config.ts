import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // On indique à Vite de traiter les fichiers 3D comme des assets statiques
  assetsInclude: ['**/*.usdz', '**/*.glb', '**/*.gltf']
})
