// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ["@nuxtjs/tailwindcss", "@nuxt/icon", "@nuxt/content", "@nuxt/image"],

  content: {
    highlight: {
      theme: "nord",
      preload: ["ts", "js", "css", "java", "json", "bash", "vue"],
    },
  },

  compatibilityDate: "2024-07-11",
});