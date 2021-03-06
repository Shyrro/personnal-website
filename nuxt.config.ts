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
  css: [
    "@fontsource/molle/400-italic.css",
    "@fontsource/lobster",
    "@fontsource/cabin",
  ],
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
    safelist: [
      "i-vscode-icons-file-type-typescript",
      "i-vscode-icons-file-type-vite",
      "i-vscode-icons-file-type-reactjs",
      "i-vscode-icons-file-type-ng-component-js",
      "i-vscode-icons-file-type-csharp",
      "i-vscode-icons-file-type-vue",
      "i-vscode-icons-file-type-js-official",
      "i-vscode-icons-file-type-js",
      "bg-cyan",
      "bg-purple",
      "bg-blue-600",
      "bg-primary",
      "bg-green-400",
      "bg-green-700",
      "bg-orange",
      "bg-purple-600",
    ],
    shortcuts: {
      titleColor: "text-label-primary dark:text-dark-primary",
      bodyText: "text-black dark:text-white",
      background: "bg-white dark:bg-background-dark",
      redBackground: "bg-primary dark:bg-dark-primary",
      borders: "border-primary dark:border-dark-primary",
    },
    rules: [
      ["lobster", { "font-family": "Lobster" }],
      ["cabin", { "font-family": "Cabin" }],
    ],
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
      breakpoints: {
        xs: "300px",
        md: "640px",
      },
    },
    transformers: [transformerDirective()],
  },
});
