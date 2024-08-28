import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LamanHub Documentation",
  description: "Documentation for LamanHub",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "lamanhub.svg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Dashboard", link: "https://app.lamanhub.site" },
      { text: "Docs", link: "/docs/what-is-lamanhub" },
    ],
    footer: {
      message: "Made with ❤️ by LamanHub",
      copyright: "Copyright © 2024-present",
    },
    logo: "/lamanhub.svg",
    siteTitle: "LamanHub",

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "What is LamanHub?", link: "/docs/what-is-lamanhub" },
          { text: "Getting Started", link: "/docs/getting-started" },
          { text: "Routing", link: "/docs/routing" },
          { text: "Edge.js", link: "/docs/edgejs" },
          { text: "SSR Fetching", link: "/docs/ssr-fetching" },
          { text: "Deployment", link: "/docs/deployment" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lamanhub" }],
  },
});
