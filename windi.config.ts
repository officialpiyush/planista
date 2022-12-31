import { defineConfig } from "vite-plugin-windicss";

export default defineConfig({
  theme: {
    extend: {
      fontFamily: {
        jetbrains: ["JetBrains Mono", "monospace"],
      },
      colors: {
        pastel: {
          red: "#FFB5A7",
          pink: "#FCD5CE",
          peach: "#FEC89A",
          "peach-light": "#F9DCC4",
          light: "#F8EDEB",
        },
      },
    },
  },
});
