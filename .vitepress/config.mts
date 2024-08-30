import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Laman.js",
  description: "Simplifying Modern Web Development with Edge-Powered Elegance",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "lamanhub.svg" }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "LamanHub", link: "https://lamanhub.site" },
      { text: "Docs", link: "/docs/introduction" },
    ],
    footer: {
      message: "Made with ❤️ by LamanHub Team",
      copyright: "Copyright © 2024-present",
    },
    logo: "/lamanhub.svg",
    siteTitle: "Laman.js",

    sidebar: [
      {
        text: "Docs",
        items: [
          { text: "Introduction", link: "/docs/introduction" },
          { text: "Getting Started", link: "/docs/getting-started" },
          { text: "Routing", link: "/docs/routing" },
          { text: "Edge.js", link: "/docs/edgejs" },
          { text: "SSR Fetching", link: "/docs/ssr-fetching" },
          { text: "Deployment", link: "/docs/deployment" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/lamanhub/lamanjs" },
    ],
  },
});
