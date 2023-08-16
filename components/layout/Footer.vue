<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6 text-xs">
        <div class="flex-1 w-auto md:mr-6 pb-4">
          <nuxt-img format="webp" sizes="sm:100vw md:50vw lg:160px" class="w-40" src="/imgs/logo_Mickael_Goulart.png"
            width="160" height="54" alt="Mickael Goulart" />
        </div>
        <div class="flex-1">
          <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-1 mb-2">
            Atendimentos
          </p>
          <div class="md:mb-1 pb-3">
            <span class="no-underline hover:underline text-gray-800 hover:text-pink-500">
              De segunda a sexta das 8 às 11h e das 13 às 18h
            </span>
          </div>
          <div class="flex md:mb-1 pb-2">
            <p class="mr-1 text-gray-800 md:mb-1 mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                class="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
            </p>
            <a href="https://goo.gl/maps/gurso9rausfAhXbLA" target="_blank" rel="noopener noreferrer"
              aria-label="Avenida Jacob Lopes de Castro 120, Loja 3. Bairro Nova Era. Viçosa - MG CEP 36.574.196"
              title="Nosso Endereço" class="no-underline hover:underline text-gray-800 hover:text-pink-500">
              Avenida Jacob Lopes de Castro 120, Loja 3.
              <br />Bairro Nova Era. Viçosa - MG <br />CEP 36.574.196
            </a>
          </div>
        </div>
        <div class="flex-1">
          <div class="">
            <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-1 mb-2">
              Contatos
            </p>
            <div class="flex md:mb-1 pb-2">
              <p class="mr-1 text-gray-800 md:mb-1 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-telephone-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd"
                    d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                </svg>
              </p>
              <a href="tel:55+3138911213" aria-label="31 3891-1213" title="Nosso telefone"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">31 3891-1213</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800 md:mb-1 mb-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                  class="bi bi-envelope-fill" viewBox="0 0 16 16">
                  <path
                    d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414.05 3.555ZM0 4.697v7.104l5.803-3.558L0 4.697ZM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586l-1.239-.757Zm3.436-.586L16 11.801V4.697l-5.803 3.546Z" />
                </svg>
              </p>
              <a href="mailto:clinicafs@hotmail.com" aria-label="clinicafs@hotmail.com" title="Nosso email"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">clinicafs@hotmail.com</a>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-1 mb-2">
            Social
          </p>
          <div class="flex items-center mt-1 space-x-3">
            <a href="https://instagram.com/mickaelgoulart/" aria-label="Siga-nos no Instagram"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-10">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                </path>
              </svg>
            </a>
            <a href="https://www.facebook.com/fisiosaudevicosa" aria-label="Siga-nos no Facebook"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-8">
                <path
                  d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z">
                </path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "layout-footer"
});
</script>
