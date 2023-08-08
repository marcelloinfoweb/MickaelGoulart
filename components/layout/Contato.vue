<script lang="ts">
import { defineComponent } from "vue";
function buttonWhatsApp() {
  const button = document.querySelector(".whatsapp-button");
  const message = encodeURIComponent(
    "✨ Olá, vi a propagando em uma página e gostaria de saber a disponibilidade de um horário para *quiropraxia*."
  );

  button.addEventListener("click", () => {
    window.open(
      `https://api.whatsapp.com/send?phone=5531992538186&text=${message}`,
      "_blank"
    );
  });
}
export default defineComponent({
  name: "layout-contato",
  mounted() {
    buttonWhatsApp();
  },
});
</script>

<template>
  <section id="contact" class="container mx-auto text-center py-6 mb-12">
    <h2
      data-aos="fade-up"
      class="w-full my-2 text-5xl font-bold leading-tight text-center text-white"
    >
      Agende uma consulta agora mesmo
    </h2>
    <div data-aos="fade-up" class="w-full mb-4">
      <div
        class="h-1 mx-auto bg-white w-1/6 opacity-25 my-0 py-0 rounded-t"
      ></div>
    </div>
    <h3 data-aos="fade-up" class="my-4 text-3xl leading-tight">
      Ficaremos felizes em lhe atender
    </h3>
    <div
      data-aos="zoom-in-down"
      class="inset-0 flex items-center justify-center"
    >
      <button
        type="button"
        class="lg:mx-0 hover:underline bg-white text-gray-800 font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out flex items-center justify-center whatsapp-button"
        style="background-color: #00a884; color: #d1d7db"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"
          />
        </svg>
        Abrir no WhatsApp
      </button>
    </div>
  </section>
</template>

<style scoped></style>
