<template>
  <div class="banner">
    <a class="flex items-start justify-start" href='https://www.freepik.es/vectores/fondo'>Vector de Fondo creado por pikisuperstar - www.freepik.es</a>
    <div class="container flex items-center justify-center h-full px-4 mx-auto">
      <div>
        <div class="text-center">
          <span class="text-gray-100">Welcome To My Website</span>
          <h1 class="text-3xl text-gray-100">I'm Raycon Lima</h1>
          <ul class="flex flex-row justify-center">
            <li v-for="(item, index) in socialNetworks" :key="index">
              <a :href="item.url">
                <div class="block max-w-sm p-1 ml-1 bg-white rounded-lg shadow-lg">
                  <img width="48" height="48" :src="item.img" :alt="item.name" />
                </div>
              </a>
            </li>
          </ul>
        </div>
        <div class="mt-8 text-center">
          <a href="#my-work" class="px-3 py-2 font-medium text-white bg-green-800 rounded">Ver o meu trabalho</a>
          <nuxt-link to="contato" class="px-3 py-2 font-medium text-white bg-green-800 rounded">Contrate-me</nuxt-link>
        </div>
      </div>

    </div>

  </div>
</template>

<style scoped>
.banner {
  background: url('~/static/img/banner.webp') no-repeat;
  background-size: cover;
  height: 450px;
}
</style>

<script setup>
import { ref } from 'vue';
import data from '~/static/social_medias.json';

// Corrigindo os IDs únicos
data.forEach((item, index) => {
  item.id = index + 1;
});

const socialNetworks = ref(data);
</script>
