<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-depoimento",
});
</script>

<template>
  <section id="depoimentos" class="bg-gray-100 py-6">
    <div class="container mx-auto flex flex-wrap pt-4 pb-12">
      <h2
        data-aos="fade-up"
        class="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800"
      >
        Depoimentos
      </h2>
      <div data-aos="fade-up" class="w-full mb-4">
        <div
          class="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"
        ></div>
      </div>
      <div
        data-aos="zoom-in-down"
        class="w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <blockquote>
            <p class="text-sm tracking-tight italic text-gray-800 px-6 my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                />
              </svg>
              Quando comecei a quiro com Mickael, tinha dores musculares
              fortíssimas, não conseguia mexer o braço. Com apenas algumas
              sessões já senti uma diferença enorme. Hoje eu posso dizer que sou
              outra pessoa. Só agradecer ao profissional Mickael, obrigada por
              me ajudar! 😀🙌🏻🙏🏻
            </p>
            <p
              class="w-full text-gray-950 underline text-xs md:text-sm px-6 my-5"
            >
              Anay Bhakti
            </p>
          </blockquote>
        </div>
      </div>

      <div
        data-aos="zoom-in-down"
        class="w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <blockquote>
            <p class="text-sm tracking-tight italic text-gray-800 px-6 my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                />
              </svg>
              Sempre tive muito problema de dor na coluna. Fiz muitas sessões de
              fisioterapia clínica, mas depois que descobri a quiropraxia senti
              um enorme alívio das dores me sinto super bem. Faço com Mickael
              que por sinal é um excelente profissional.
            </p>
            <p
              class="w-full text-gray-950 underline text-xs md:text-sm px-6 my-5"
            >
              Patrícia Caetano
            </p>
          </blockquote>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        class="w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <blockquote>
            <p class="text-sm tracking-tight italic text-gray-800 px-6 my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                />
              </svg>
              Eu não conhecia a quiropraxia. Estava em busca de melhoras das
              minhas dores musculares, principalmente na coluna onde tenho
              hérnia de disco, lombalgia, dores muito intensas. Depois que
              comecei, me senti super bem, relaxada e sem dores. Na primeira
              sessão já senti uma melhora significativa. Indico a quiropraxia a
              todas as pessoas com dores articulares, e principalmente a coluna.
              Hoje estou me sentindo muito bem.
            </p>
            <p
              class="w-full text-gray-950 underline text-xs md:text-sm px-6 my-5"
            >
              Miriam Magalhães
            </p>
          </blockquote>
        </div>
      </div>
      <div
        data-aos="zoom-in-down"
        class="w-full md:w-1/2 p-2 flex flex-col flex-grow flex-shrink"
      >
        <div
          class="flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow"
        >
          <blockquote>
            <p class="text-sm tracking-tight italic text-gray-800 px-6 my-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                class="inline-block h-7 w-7 pr-2"
                viewBox="0 0 24 24"
              >
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z"
                />
              </svg>
              A quiropraxia é uma grande aliada para mim , que sou um
              esportista, praticante de corrida de rua na modalidade Maratona.
              Desde 2020 quando tive o primeiro contato com quiropraxia até hoje
              sem ter lesão, sempre fazendo as sessões de forma preventiva, fiz
              um ciclo completo esse ano para a maratona do Rio sem nenhuma
              lesão, fazendo sessões de 15 em 15 dias praticamente, é o
              complemento perfeito para minhas atividades físicas.
            </p>
            <p
              class="w-full text-gray-950 underline text-xs md:text-sm px-6 my-5"
            >
              Anderson Luis
            </p>
          </blockquote>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
