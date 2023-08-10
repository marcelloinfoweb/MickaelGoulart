<script lang="ts">
import { defineComponent } from "vue";
import LayoutBotaoQueroAgendar from "~/components/layout/BotaoQueroAgendar.vue";

export default defineComponent({
  name: "layout-sobre-quiropraxia",
  components: { LayoutBotaoQueroAgendar },
});
</script>

<template>
  <section id="quiropraxia" class="bg-white border-b py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Sobre a Quiropraxia
      </h2>
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div data-aos="fade-up-right" class="flex flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Corrigir problemas vertebrais
          </h3>
          <p class="text-gray-600 mb-8">
            O tratamento de quiropraxia serve para corrigir problemas vertebrais
            em qualquer lugar da coluna, não apenas nas costas. Ela pode ser
            usada tanto para tratar quanto para previnir problemas relacionados
            ao desalinhamento da coluna vertebral.
          </p>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <nuxt-img format="webp" src="/imgs/quiropraxia_coluna.png" alt="Quiropraxia" />
        </div>
      </div>
      <div data-aos="fade-up-left" class="flex flex-wrap flex-col-reverse sm:flex-row">
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <nuxt-img format="webp" src="/imgs/quiropraxia_dores.jpg" alt="Quiropraxia" />
        </div>
        <div class="w-full sm:w-1/2 p-6 mt-6">
          <div class="align-middle">
            <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
              Além da coluna
            </h3>
            <p class="text-gray-600 mb-8">
              Além disso, pode tratar tensões, dores de cabeça, enxaqueca, má
              postura, dor no pescoço, rigidez na nuca, dores nos ombros,
              articulações em geral, artrose, dor ciática, hérnia de disco,
              entre outros. Se você sente algum desses sintomas, não deixe para
              depois, os horários são preenchidos rapidamente, então agende hoje
              mesmo seu horário!
            </p>
            <div data-aos="zoom-in-down" class="inset-0 flex items-center justify-center">
              <layout-botao-quero-agendar />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
