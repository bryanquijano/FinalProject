<script setup>
import { onUnmounted, ref } from "vue";
import singleCard from "../composable/singleCard";

const { singles, unsubscribe } = singleCard();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div v-for="single in singles" :key="single.id">
    <router-link :to="{ name: `${single.ID}` }">
      <div
        class="bg-slate-gray w-56 h-76 transition ease-in-out duration-500 p-4 rounded-md pb-6 hover:bg-white hover:text-black"
      >
        <img
          :src="`${single.cover}`"
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
</template>
