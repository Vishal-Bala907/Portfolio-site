import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/", // ✅ Change this from "/Portfolio-site/" to "/"
  plugins: [react()],
  build: {
    outDir: "build",
  },
});
