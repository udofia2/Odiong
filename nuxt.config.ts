// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  app: {
    head: {
      title: "Udofia Abasiodiong Portfolio",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          name: "description",
          content:
            "Portfolio website of Udofia Abasiodiong - Backend Developer & Freelancer",
        },
        {
          name: "keywords",
          content: "backend, developer, portfolio, nodejs, vue, nuxt",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/assets/img/favicon/favicon-32x32.png",
        },
        {
          rel: "apple-touch-icon",
          href: "/assets/img/favicon/apple-touch-icon.png",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Raleway:300,300i,400,400i,500,500i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@pinia/nuxt", "@nuxt/icon", "@nuxtjs/color-mode", "@vueuse/nuxt", "@nuxt/icon"],
  css: ["~/assets/css/main.css"],
  vite: { plugins: [tailwindcss()] },
  pinia: {
    storesDirs: ["./stores/**"],
  },
  colorMode: {
    classSuffix: "",
  },
  // components: [{ path: "~/components", pathPrefix: false }],
  // build: {
  //   transpile: ["nodemailer"],
  // },
  runtimeConfig: {
    emailHost: process.env.EMAIL_HOST || "smtp.ethereal.email",
    emailPort: process.env.EMAIL_PORT || "587",
    emailSecure: process.env.EMAIL_SECURE === "true",
    emailUser: process.env.EMAIL_USER,
    emailPass: process.env.EMAIL_PASS,
    emailTo: process.env.EMAIL_TO || "enalsy22@gmail.com",

    // Public keys
    public: {
      apiBase: process.env.API_BASE || "/api",
    },
  },
  devServer: {
    port: 3000,
  },
});