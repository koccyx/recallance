// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: ["vuetify-nuxt-module", "@nuxtjs/i18n", "@pinia/nuxt"],
  runtimeConfig: {
    public: {
      BASE_API_URL: "http://127.0.0.1:3000"
    }
  },
  i18n: {
    vueI18n: "./i18n.config.ts"
  },
  
  devServer: {
    port: 8080,
    host: "127.0.0.1"
  },
  imports: {
    autoImport: true
  },
  ssr: false
});