import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css"],

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
});
