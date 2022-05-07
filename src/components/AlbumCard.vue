<script setup>
import { onUnmounted, ref } from "vue";
import albumCard from "../composable/albumCard";

const { albums, unsubscribe } = albumCard();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div v-for="album in albums" :key="album.id">
    <router-link :to="{ name: `${album.ID}` }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          :src="`${album.cover}`"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">
          {{ album.title }}
        </h2>
        <h4 class="text-gray-400">{{ album.year }}</h4>
        <!-- <li v-for="(album, index) in albums" :key="index">
          <h4 class="text-gray-400">{{ index }}</h4>
        </li> -->
      </div>
    </router-link>
  </div>
</template>
