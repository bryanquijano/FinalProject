<script setup>
import { onUnmounted, ref } from "vue";
import productItem from "../composable/shopItem";

const { products, unsubscribe } = productItem();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div v-for="product in products" :key="product.id">
    <router-link :to="{ name: `${product.ID}` }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          :src="`${product.img}`"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">
          {{ product.name }}
        </h2>
        <h4 class="text-gray-400">{{ album.price }}</h4>
        <!-- <li v-for="album in albums" :key="album.test">
          <h4 class="text-gray-400">{{ album.test }}</h4>
        </li> -->
      </div>
    </router-link>
  </div>
</template>
