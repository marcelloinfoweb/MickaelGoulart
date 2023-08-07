<template>
  <footer class="bg-white">
    <div class="container mx-auto px-8">
      <div class="w-full flex flex-col md:flex-row py-6">
        <div class="flex-1 mb-6 text-black">
          <a class="text-pink-600 no-underline hover:no-underline font-bold text-2xl lg:text-4xl" href="#">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
              stroke="currentColor" class="h-8 inline">
              <path stroke-linecap="round" stroke-linejoin="round"
                d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" />
            </svg>
            Mickael Goulart
          </a>
        </div>
        <div class="flex-1">
          <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">
            Atendimentos
          </p>
          <span class="no-underline hover:underline text-gray-800 hover:text-pink-500">
            De segunda a sexta das 8 às 11h e das 13 às 18h</span>
        </div>
        <div class="flex-1">
          <div class="">
            <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">
              Contatos
            </p>
            <div class="flex">
              <p class="mr-1 text-gray-800">Telefone:</p>
              <a href="tel:55+3138911213" aria-label="Nosso telefone" title="Nosso telefone"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">31 3891-1213</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Email:</p>
              <a href="mailto:clinicafs@hotmail.com" aria-label="Nosso email" title="Nosso email"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">clinicafs@hotmail.com</a>
            </div>
            <div class="flex">
              <p class="mr-1 text-gray-800">Endereço:</p>
              <a href="https://goo.gl/maps/gurso9rausfAhXbLA" target="_blank" rel="noopener noreferrer"
                aria-label="Nosso Endereço" title="Nosso Endereço"
                class="no-underline hover:underline text-gray-800 hover:text-pink-500">
                Avenida Jacob Lopes de Castro, Loja 3. <br />Bairro Nova Era.
                Viçosa - MG <br />CEP 36.574.196
              </a>
            </div>
          </div>
        </div>
        <div class="flex-1">
          <p class="text-base font-bold tracking-wide uppercase text-gray-500 md:mb-6">
            Social
          </p>
          <div class="flex items-center mt-1 space-x-3">
            <a href="https://instagram.com/mickaelgoulart/"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 30 30" fill="currentColor" class="h-6">
                <circle cx="15" cy="15" r="4"></circle>
                <path
                  d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z">
                </path>
              </svg>
            </a>
            <a href="https://www.facebook.com/fisiosaudevicosa"
              class="text-gray-500 transition-colors duration-300 hover:text-deep-purple-accent-400">
              <svg viewBox="0 0 24 24" fill="currentColor" class="h-5">
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
  name: "layout-footer",
});
</script>
