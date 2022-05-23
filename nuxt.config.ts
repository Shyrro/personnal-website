import { defineNuxtConfig } from "nuxt";
import transformerDirective from '@unocss/transformer-directives';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: ["@unocss/nuxt", "@nuxt/content-edge"],
  unocss: {
    uno: true, // enabled `@unocss/preset-uno`
    icons: true, // enabled `@unocss/preset-icons`
    attributify: true, // enabled `@unocss/preset-attributify`,*
    theme: {
      colors: {
        labelPrimary: "#851300",
        primary: "#9c2727",
      },
    },
    transformers: [transformerDirective()],
  },
});
