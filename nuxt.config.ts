import { defineNuxtConfig } from "nuxt";
import transformerDirective from "@unocss/transformer-directives";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    "@unocss/nuxt",
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@vueuse/motion/nuxt",
  ],
  css: ["@fontsource/molle/400-italic.css", "@fontsource/lobster"],
  experimental: {
    reactivityTransform: true,
  },
  colorMode: {
    preference: "dark", // default value of $colorMode.preference
    hid: "nuxt-color-mode-script",
    globalName: "__NUXT_COLOR_MODE__",
    componentName: "ColorScheme",
    classPrefix: "",
    classSuffix: "",
    storageKey: "nuxt-color-mode",
  },
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,*
    shortcuts: {
      titleColor: "text-label-primary dark:text-dark-primary",
      bodyText: "text-black dark:text-white",
      background: "bg-white dark:bg-background-dark",
      redBackground: "bg-primary dark:bg-dark-primary",
      borders: "border-primary dark:border-dark-primary",
    },
    rules: [["lobster", { "font-family": "Lobster" }]],
    theme: {
      textShadow: {
        contour:
          "1px 0 0 #ff5B5B, -1px 0 0 #ff5B5B, 0 1px 0 #ff5B5B, 0 -1px 0 #ff5B5B, 1px 1px #ff5B5B, -1px -1px 0 #ff5B5B, 1px -1px 0 #ff5B5B, -1px 1px 0 #ff5B5B",
      },
      colors: {
        primary: "#9c2727",
        darkPrimary: "#ff5B5B",
        labelPrimary: "#851300",
        backgroundDark: "#22272e",
      },
    },
    transformers: [transformerDirective()],
  },
});
