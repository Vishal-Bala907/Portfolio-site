import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/portfolio/portfolio/", // Correct base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "dist", // Ensure this matches your deploy script
  },
});
