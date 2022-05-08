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
        class="bg-slate-gray w-56 h-76 transition ease-in-out duration-500 p-4 rounded-md pb-6 hover:bg-white hover:text-black"
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
      </div>
    </router-link>
  </div>
</template>
