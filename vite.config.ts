import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import { VitePluginFonts } from "vite-plugin-fonts";
import Pages from "vite-plugin-pages";
import WindiCss from "vite-plugin-windicss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginFonts({
      google: {
        families: ["JetBrains Mono"],
      },
    }),
    ,
    Pages(),
    WindiCss(),
  ],
});
