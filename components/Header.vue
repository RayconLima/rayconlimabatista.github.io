<template>
  <nav>
    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <nuxt-link to="/" class="">
            <img src="~/static/img/logo.webp" width="50" height="50" alt="Logo">
          </nuxt-link>
        </div>
        <div class="flex items-center">

          <div class="hidden md:block">
            <div class="flex items-baseline ml-10 space-x-6">
              <nuxt-link to="/" class="px-3 py-2 text-sm font-medium rounded-md dark:text-white">
                Inicio
              </nuxt-link>
              <nuxt-link to="/sobre" class="px-3 py-2 text-sm font-medium rounded-md dark:text-white">
                Sobre
              </nuxt-link>
              <nuxt-link to="/portfolio" class="px-3 py-2 text-sm font-medium rounded-md dark:text-white">
                Projetos
              </nuxt-link>
              <AppDarkModeToggle />
            </div>
          </div>
        </div>
        <div class="flex -mr-2 md:hidden">
          <div class="flex items-center justify-center">
            <AppDarkModeToggle class="mr-3" />
            <button type="button" @click="showMenu = !showMenu" aria-controls="mobile-menu" aria-expanded="false">
              <span class="sr-only">Open main menu</span>
           
              <svg :class="{ 'text-white': $colorMode.preference  === 'dark' }" xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div class="md:hidden" v-if="showMenu" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <nuxt-link to="/" class="block px-3 py-2 text-base font-medium rounded-md  dark:text-white">
          Home
        </nuxt-link>
        <nuxt-link to="/sobre" class="block px-3 py-2 text-base font-medium rounded-md  dark:text-white">
          Sobre
        </nuxt-link>
        <nuxt-link to="/portfolio" class="block px-3 py-2 text-base font-medium rounded-md  dark:text-white">
          Projetos
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { ref } from 'vue';

const showMenu = ref(false);

const toggleNavbar = () => {
  showMenu.value = !showMenu.value;
};
</script>