import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"), // Correctly resolve client/src directory
      "@shared": path.resolve(__dirname, "shared"), // Resolve shared directory
      "@assets": path.resolve(__dirname, "attached_assets"), // Resolve attached_assets directory
    },
  },
});
