import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // Set the correct base path for GitHub Pages deployment. If your repository
  // name is "portfolio", the site will be served from /portfolio/.
  // Adjust this if you deploy under a different repository name or a custom domain.
  base: "/neelzanwar/",
  build: {
    // Build to docs/ so GitHub Pages can serve from main branch /docs
    outDir: "docs",
    emptyOutDir: true,
  },
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {

      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
