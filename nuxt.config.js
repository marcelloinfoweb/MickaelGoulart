export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mickael Goulart",
    htmlAttrs: {
      lang: "pt-br",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Fisioterapeuta especialista em quiropraxia (quiropraxia instrumental e osteopatia). Mais de 100 mil consultas e atendimentos com mais de 15 anos de experiência clínica.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/css/style.css"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: "~/plugins/aos.js", mode: "client" },
    { src: "~/plugins/vue-gtag.js" },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/image",
    // https://go.nuxtjs.dev/typescript
    // "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
    "@nuxt/image",
    // [
    //   "nuxt-cloudflare-analytics",
    //   {
    //     token: "60e5e5365b8f472886ec449c98667166",
    //   },
    // ],
    [
      "nuxt-canonical",
      {
        baseUrl: "https://mickaelgoulart.pages.dev",
      },
    ],
  ],
  robots: {
    UserAgent: "*",
    Disallow: "",
    Sitemap: "https://mickaelgoulart.pages.dev/sitemap.xml",
  },
  image: {
    baseURL: "https://mickaelgoulart.pages.dev",
  },

  sitemap: {
    hostname: "https://mickaelgoulart.pages.dev",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      postcssOptions: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
    },
  },
};
