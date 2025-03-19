import tailwindcss from "@tailwindcss/vite";
import Aura from "@primeuix/themes/aura";
// import Mypreset from "./utils/Mypreset";
import { definePreset } from "@primeuix/themes";

const Mypreset = definePreset(Aura, {
  semantic: {
    primary: {
      50: "{indigo.50}",
      100: "{indigo.100}",
      500: "{indigo.500}",
      900: "{indigo.900}",
    },
    gof: {
      100: "{orange.100}",
      200: "{orange.200}",
      300: "{orange.300}",
      400: "{orange.400}",
      500: "#546E7A",
      600: "#455A64",
      700: "#37474F",
      800: "#263238",
      900: "{orange.900}",
    },
    colorScheme: {
      light: {
        primary: {
          color: "{primary.500}",
          inverseColor: "#ffffff",
          hoverColor: "{primary.600}",
          activeColor: "{primary.700}",
        },
        gheader: {
          color: "{gof.500}",
          background: "{gof.500}",
          foreground: "#ffffff",
          inverseColor: "#ffffff",
          hoverColor: "{gof.600}",
          activeColor: "{gof.700}",
          accentColor: "{gof.800}",
        },
      },
      dark: {},
    },
  },

  components: {
    button: {
      root: {
        // paddingX: "500px",
        contrast: {
          color: "{gheader.color}",
          background: "{surface.300}",
          // borderColor: "{surface.300}",
          hoverColor: "{surface.300}",
          hoverBackground: "{gheader.accent}",
          // hoverBorderColor: "{gheader.accent}",
        },
      },
      colorScheme: {
        light: {
          root: {
            contrast: {
              color: "{gheader.color}",
              background: "{surface.300}",
              borderColor: "{surface.300}",
              hoverColor: "{gheader.color}",
              hoverBackground: "{primary.500}",
              hoverBorderColor: "{amber.500}",
              // hoverBackground: "{gheader.accent}",
              // hoverBorderColor: "{gheader.accent}",
            },
          },
        },
      },
    },
    card: {
      colorScheme: {
        light: {
          root: {
            // background: "{primary.color}",
            background: "{gheader.color}",
            color: "{surface.700}",
          },
          subtitle: {
            color: "{surface.500}",
          },
        },
        dark: {
          root: {
            background: "{blue.300}",
            color: "{surface.0}",
          },
          subtitle: {
            color: "{surface.400}",
          },
        },
      },
    },
    megamenu: {
      root: {},
      submenu: {
        gap: "20",
      },
      submenuLabel: {
        fontWeight: "900",
        background: "red",
        color: "{yellow.900}",
      },
      submenuIcon: {
        color: "white",
        focusColor: "{gof.600}",
        activeColor: "{gof.600}",
      },
      overlay: {
        background: "{gof.600}",
        borderColor: "{gof.600}",
      },
      item: {
        color: "white",
        icon: { color: "white" },
      },
      separator: {
        borderColor: "{surface.700}",
      },
      colorScheme: {
        light: {
          root: {
            background: "{gheader.color}",
            color: "{surface.100}",
            borderColor: "{gheader.color}",
          },
        },
        dark: {
          root: {
            background: "{surface.900}",
            color: "{surface.0}",
          },
        },
      },
    },
  },
});

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: false },
  css: ["~/assets/css/main.css", "primeicons/primeicons.css"],

  // modules: ["@primevue/nuxt-module", "@nuxt/content", "reka-ui/nuxt"],
  modules: [
    "@nuxt/content",
    "@primevue/nuxt-module",
    "reka-ui/nuxt",
    "@nuxt/image",
    "@nuxthub/core",
    "@clerk/nuxt",
  ],

  vite: {
    plugins: [tailwindcss()],
  },
  primevue: {
    options: {
      theme: {
        // preset: Mypreset,
        preset: Aura,
        // options: {
        //   darkModeSelector: ".p-dark",
        //   color: "blue",
        // },
      },
    },
    components: {
      exclude: ["Editor", "Form", "Chart", "FormField"],
    },
  },
});
