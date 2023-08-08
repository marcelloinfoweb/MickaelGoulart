<template>
  <nav id="header" class="fixed w-full z-30 top-0 text-white">
    <div
      class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2"
    >
      <div class="pl-4 flex justify-between items-center">
        <a href="#">
          <img class="w-40" :src="logo" alt="Mickael Goulart" />
        </a>
      </div>
      <div class="block lg:hidden pr-4">
        <button
          @click="mobileSidebar = !mobileSidebar"
          id="nav-toggle"
          class="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          <svg
            class="fill-current h-6 w-6"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        :class="mobileSidebar ? '' : 'hidden'"
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
        id="nav-content"
      >
        <ul class="list-reset lg:flex justify-end flex-1 items-center">
          <menu-item
            v-for="(item, index) in menuItems"
            :key="index"
            :item="item"
          />
        </ul>
      </div>
    </div>
    <hr class="border-b border-gray-100 opacity-25 my-0 py-0" />
  </nav>
</template>

<script>
import MenuItem from "@/components/layout/MenuItem.vue";
import Logo from "@/assets/imgs/logo_Mickael_Goulart.png";

export default {
  name: "layout-nav",

  components: {
    MenuItem,
  },

  data() {
    return {
      logo: Logo,
      scrollY: typeof window !== "undefined" ? window.scrollY : 0,
      mobileSidebar: false,
      menuItems: [
        { text: "Início", href: "#" },
        { text: "Mickael Goulart", href: "#sobre" },
        { text: "Quiropraxia", href: "#quiropraxia" },
        { text: "Depoimentos", href: "#customers" },
        { text: "Contato", href: "#contact" },
      ],
    };
  },

  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },

  watch: {
    scrollY(newValue) {
      const navaction = document.getElementById("navAction");
      const header = document.getElementById("header");
      const toToggle = document.querySelector(".toggleColour");

      if (newValue > 10) {
        navaction?.classList.remove("bg-white");
        navaction?.classList.add("gradient");
        navaction?.classList.remove("text-[#170F4F]");
        navaction?.classList.add("text-white");
        header?.classList.add("bg-white");
        header?.classList.add("navbar-active");
        toToggle?.classList.add("text-gray-800");
        toToggle?.classList.remove("text-white");
      } else {
        navaction?.classList.add("bg-white");
        navaction?.classList.remove("gradient");
        navaction?.classList.add("text-[#170F4F]");
        navaction?.classList.remove("text-white");
        header?.classList.remove("bg-white");
        header?.classList.remove("navbar-active");
        toToggle?.classList.remove("text-gray-800");
        toToggle?.classList.add("text-white");
      }
    },
  },

  methods: {
    handleScroll() {
      this.scrollY = window.scrollY;
    },
  },
};
</script>

<style scoped>
a {
  font-weight: 600;
  font-style: normal !important;
  color: white;
}

.navbar-active ul li a {
  color: #170f4f;
}
</style>
