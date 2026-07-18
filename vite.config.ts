import { defineConfig } from "@lovable.dev/vite-tanstack-config";

const isGitHubPages = process.env.GITHUB_PAGES === "true";

export default defineConfig({
  base: isGitHubPages ? "/syrian-trading-corporation/" : "/",
  nitro: false,
  tanstackStart: {
    server: { entry: "server" },
    defaultSsr: false,
    spa: {
      enabled: true,
      maskPath: "/",
    },
    prerender: {
      enabled: true,
      crawlLinks: true,
      failOnError: true,
      concurrency: 8,
    },
  },
});
