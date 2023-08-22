export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: true,
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Mickael Goulart",
    htmlAttrs: {
      lang: "pt-br",
      //amp: true
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Fisioterapeuta especialista em quiropraxia, quiropraxia instrumental e osteopatia. Mais de 100 mil consultas e atendimentos com mais de 15 anos de experiência clínica.",
      },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com/",
        crossorigin: true,
      },
      {
        rel: "dns-prefetch",
        href: "https://fonts.gstatic.com/",
      },
      {
        rel: "preload",
        as: "style",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap",
        onload: "this.onload=null;this.rel='stylesheet'",
      },
    ],
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

  // linkExactActiveClass: "exact-active-link",

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxt/image",
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",
    "@nuxtjs/tailwindcss",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    "@nuxt/image",
    "@nuxtjs/sitemap",
    ['nuxt-facebook-pixel-module', {
      /* module options */
      track: 'PageView',
      pixelId: '745129640714075',
      autoPageView: true,
      disabled: false
    }],
    [
      "@nuxtjs/robots",
      {
        UserAgent: "*",
        Disallow: "",
        Sitemap: "https://mickaelgoulart.com.br/sitemap.xml",
      },
    ],
    [
      "nuxt-canonical",
      {
        baseUrl: "https://mickaelgoulart.com.br",
      },
    ],
  ],

  image: {
    baseURL: "https://mickaelgoulart.com.br",
  },

  sitemap: {
    hostname: "https://mickaelgoulart.com.br",
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
