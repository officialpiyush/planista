import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import Pages from "vite-plugin-pages"
import WindiCss from "vite-plugin-windicss"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    Pages(),
    WindiCss(),
  ],
})
