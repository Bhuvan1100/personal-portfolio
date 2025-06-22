import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./main/src"),
    },
  },
  root: "main",
  build: {
    outDir: "../dist/public",
    emptyOutDir: true,
  },
  server: {
    host: "0.0.0.0",
    port: 5000,
    allowedHosts: [
      "localhost",
      ".replit.dev",
      "95a612f5-bbb2-4876-96f4-0fb4098edfb1-00-3ulax5s64u7vo.worf.replit.dev"
    ],
  },
});