// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: true,

  app: {
    head: {
      htmlAttrs: {
        class: "h-full bg-white",
      },
      bodyAttrs: {
        class: "h-full",
      },
      title: "jehu.app",
      charset: "utf-16",
      viewport: "width=device-width, initial-scale=1",
      meta: [{ name: "description", content: "Hij rijdt als een gek" }],
      link: [
        {
          rel: "stylesheet",
          href: "https://rsms.me/inter/inter.css",
        },
      ],
    },
  },

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  devtools: {
    enabled: true,
  },
});
