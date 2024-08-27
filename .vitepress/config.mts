import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LamanHub Documentation",
  description: "Documentation for LamanHub",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/lamanhub.svg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [],

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "What is LamanHub?", link: "/what-is-lamanhub" },
          { text: "Getting Started", link: "/getting-started" },
          { text: "Routing", link: "/routing" },
          { text: "Edge.js", link: "/edgejs" },
          { text: "SSR Fetching", link: "/ssr-fetching" },
          { text: "Deployment", link: "/deployment" },
        ],
      },
    ],

    socialLinks: [{ icon: "github", link: "https://github.com/lamanhub" }],
  },
});
