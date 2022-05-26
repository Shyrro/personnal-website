import { defineNuxtConfig } from "nuxt";
import transformerDirective from "@unocss/transformer-directives";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content", "@nuxtjs/color-mode"],
  colorMode: {
    preference: 'system', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '',
    storageKey: 'nuxt-color-mode'
  },
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,*
    shortcuts: {
      title: 'text-label-primary dark:text-dark-primary',
      bodyText: 'text-black dark:text-white',
      background: 'bg-white dark:bg-[#22272e]',
      redBackground: 'bg-primary dark:bg-dark-primary',
      borders: 'border-primary dark:border-dark-primary',
    },
    theme: {
      colors: {
        primary: '#9c2727',
        darkPrimary: '#ff5B5B',
        labelPrimary: '#851300'
        // labelPrimary: {
        //   light: "#851300",
        //   dark: "white",
        // },
        // primary: {
        //   light: "#9c2727",
        //   dark: "#ff373",
        // },
      },
    },
    transformers: [transformerDirective()],
  },
});
