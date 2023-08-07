<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeaderBottom from "~/components/layout/HeaderBottom.vue";

export default defineComponent({
  name: "layout-header",
  components: { LayoutHeaderBottom },
});
</script>

<template>
  <div>
    <div data-aos="fade-up" class="pt-24">
      <div
        class="container px-3 mx-auto flex flex-wrap flex-col md:flex-row items-center"
      >
        <div
          class="flex flex-col w-full md:w-3/5 justify-center items-start text-center md:text-left"
        >
          <h1 class="my-4 text-5xl font-bold leading-tight">
            Acabe de uma vez com a dor na coluna
          </h1>
          <p class="leading-normal text-2xl mb-8">
            Não sofra mais com dores, agende uma avaliação com o maior
            especialista em coluna da região.
          </p>
          <a
            href="#contact"
            class="mx-auto lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Quero agendar minha avaliação
          </a>
        </div>
        <div class="w-full md:w-2/5 py-6 text-center">
          <img
            class="w-full md:w-4/5 object-none z-50"
            src="~/assets/imgs/a-quiropraxia-.png"
          />
        </div>
      </div>
    </div>
    <LayoutHeaderBottom />
  </div>
</template>

<style scoped></style>
