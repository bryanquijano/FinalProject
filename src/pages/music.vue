<script setup>
// import AlbumCard from "../components/AlbumCard.vue";

import { onUnmounted, ref } from "vue";
import albumCard from "../composable/albumCard";
import singleCard from "../composable/singleCard";
// import useChat from "../composable/albumCard";

const { albums, unsubscribe } = albumCard();
const { singles } = singleCard();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div class="mt-5 font-bold text-4xl mb-4">Albums</div>
  <div class="grid grid-cols-6 gap-8">
    <div v-for="album in albums" :key="album.id">
      <router-link :to="{ name: 'Album01' }">
        <div
          class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
        >
          <img
            src="#"
            alt=""
            class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
          />
          <h2 class="font-bold text-xl pt-2 truncate ...">
            {{ album.title }}
          </h2>
          <h4 class="text-gray-400">{{ album.year }}</h4>
        </div>
      </router-link>
    </div>
  </div>
  <div class="mt-10 font-bold text-4xl mb-4">Singles & EPs</div>
  <div class="grid grid-cols-6 gap-8">
    <div v-for="single in singles" :key="single.id">
      <router-link :to="{ name: 'Album01' }">
        <div
          class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
        >
          <img
            src="#"
            alt=""
            class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
          />
          <h2 class="font-bold text-xl pt-2 truncate ...">
            {{ single.title }}
          </h2>
          <h4 class="text-gray-400">{{ single.year }}</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
