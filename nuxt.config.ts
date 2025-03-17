// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],

  // modules: ["@primevue/nuxt-module", "@nuxt/content", "reka-ui/nuxt"],
  modules: ["@nuxt/content", "reka-ui/nuxt"],

  vite: {
    plugins: [tailwindcss()],
  },
});
