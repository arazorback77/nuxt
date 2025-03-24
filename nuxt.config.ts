import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],
  components: {
    global: true,
    dirs: ["~/components"],
  },
  // modules: ["@primevue/nuxt-module", "@nuxt/content", "reka-ui/nuxt"],
  modules: [
    "@nuxt/content",
    "@nuxt/ui",
    "@nuxt/image",
    "@nuxthub/core",
    "@clerk/nuxt",
    "reka-ui/nuxt",
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  ui: {
    theme: {
      colors: [
        "primary",
        "secondary",
        "success",
        "info",
        "warning",
        "error",
        "gof",
        "gofinv",
        "gofhead",
      ],
    },
  },
  content: {
    build: {
      markdown: {
        toc: {
          depth: 4,
          searchDepth: 4,
        },
        remarkPlugins: {
          "remark-math": {},
        },
        rehypePlugins: {
          "rehype-mathjax": {
            tex: {
              inlineMath: [["$", "$"]],
              processEscapes: true,
            },
          },
        },
        highlight: {
          theme: {
            default: "github-light",
            dark: "github-dark",
          },
          langs: [
            "c",
            "cpp",
            "java",
            "json",
            "js",
            "ts",
            "html",
            "css",
            "vue",
            "shell",
            "mdc",
            "md",
            "yaml",
          ],
        },
      },
    },
  },

  runtimeConfig: {
    // Private keys are only available on the server
    apiSecret: "123",

    // Public keys that are exposed to the client
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || "/api",
    },
  },
  // hooks: {
  //   "pages:extend"(pages) {
  //     // add a route
  //     pages.push({
  //       name: "profile",
  //       path: "/dd",
  //       file: "~/pages/ddd.vue",
  //     });
  //     // remove routes
  //     function removePagesMatching(pattern: RegExp, pages: NuxtPage[] = []) {
  //       const pagesToRemove: NuxtPage[] = [];
  //       for (const page of pages) {
  //         if (page.file && pattern.test(page.file)) {
  //           pagesToRemove.push(page);
  //         } else {
  //           removePagesMatching(pattern, page.children);
  //         }
  //       }
  //       for (const page of pagesToRemove) {
  //         pages.splice(pages.indexOf(page), 1);
  //       }
  //     }
  //   },
  // },
});
