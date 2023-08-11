<script lang="ts">
import { defineComponent } from "vue";
import LayoutBotaoQueroAgendar from "~/components/layout/BotaoQueroAgendar.vue";

export default defineComponent({
  name: "layout-contato",
  components: {
    LayoutBotaoQueroAgendar
  }
});
</script>

<template>
  <div>
    <section id="contato" class="container mx-auto text-center py-6 mb-12">
      <h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
        Agende uma consulta agora mesmo
      </h2>
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <h3 data-aos="fade-up" class="my-4 text-3xl leading-tight">
        Ficaremos felizes em lhe atender
      </h3>
      <div data-aos="zoom-in-down" class="inset-0 flex items-center justify-center">
        <layout-botao-quero-agendar />
      </div>
    </section>
  </div>
</template>

<style scoped></style>
