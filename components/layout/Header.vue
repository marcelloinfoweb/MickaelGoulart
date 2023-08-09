<script lang="ts">
import { defineComponent } from "vue";
import LayoutHeaderBottom from "~/components/layout/HeaderBottom.vue";
import LayoutBotaoQueroAgendar from "~/components/layout/BotaoQueroAgendar.vue";

export default defineComponent({
  name: "layout-header",
  components: { LayoutBotaoQueroAgendar, LayoutHeaderBottom },
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
          <layout-botao-quero-agendar />
        </div>
        <div class="w-full md:w-2/5 py-6 text-center">
          <nuxt-img
            format="webp"
            src="/imgs/a-quiropraxia-.png"
            sizes="sm:100vw md:50vw lg:400px"
          />
        </div>
      </div>
    </div>
    <LayoutHeaderBottom />
  </div>
</template>

<style scoped></style>
