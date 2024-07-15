import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/Portfolio-site/", // Correct base path for GitHub Pages
  plugins: [react()],
  build: {
    outDir: "build", // Ensure this matches your deploy script
  },
});
