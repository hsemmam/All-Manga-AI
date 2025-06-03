import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Remplace "All-Manga-AI" si ton dépôt a un nom différent
export default defineConfig({
  plugins: [react()],
  base: "/All-Manga-AI/", 
});

