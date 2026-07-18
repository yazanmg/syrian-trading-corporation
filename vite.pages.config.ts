import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsConfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  base: "/syrian-trading-corporation/",
  plugins: [react(), tailwindcss(), tsConfigPaths()],
});
