<script lang="ts">
import { defineComponent } from "vue";
import LayoutBotaoQueroAgendar from "~/components/layout/BotaoQueroAgendar.vue";

export default defineComponent({
  name: "layout-mickaelgoulart",
  components: { LayoutBotaoQueroAgendar },
});
</script>

<template>
  <section id="sobre" class="bg-white py-8">
    <div class="container max-w-5xl mx-auto m-8">
      <h2 data-aos="fade-up" class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
        Quem Sou
      </h2>
      <div data-aos="fade-up" class="w-full mb-4">
        <div class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
      </div>
      <div data-aos="fade-up-right" class="flex items-center flex-wrap">
        <div class="w-5/6 sm:w-1/2 p-6">
          <h3 class="text-3xl text-gray-800 font-bold leading-none mb-3">
            Mickael Goulart / CREFITO 117193F
          </h3>
          <p class="text-gray-600 mb-8">
            Fisioterapeuta especialista em quiropraxia, instrumental e osteopatia.
          </p>
          <p class="text-gray-600 mb-8">
            Mais de 100 mil consultas e atendimentos com mais de 15 anos de
            experiência clínica.
          </p>
          <p class="text-gray-600 mb-8">
            Não espere a dor chegar para se cuidar! Agende agora mesmo sua
            avaliação com o melhor especialista da região!
          </p>
          <div data-aos="zoom-in-down" class="inset-0 flex items-center justify-center">
            <layout-botao-quero-agendar />
          </div>
        </div>
        <div class="w-full sm:w-1/2 p-6">
          <nuxt-img format="webp" src="/imgs/Mickael_Goulart.png" sizes="sm:100vw md:50vw lg:300px" alt="Mickael Goulart"
            class="rounded-full border-8" />
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
