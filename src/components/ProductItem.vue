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
    <div
      class="w-64 h-76 transition ease-in-out duration-500 p-4 rounded-md pb-6"
    >
      <img
        :src="`${product.Img}`"
        alt=""
        class="w-56 h-56 mx-auto bg-gray-300 shadow-2xl"
      />
      <h2 class="font-bold text-xl pt-2 truncate ...">{{ product.Name }}</h2>
      <h4 class="text-gray-400">${{ product.Price }}</h4>
      <button
        v-if="product.SoldOut == false"
        class="text-center w-full bg-blue-600 rounded-md py-2 mt-2 hover:bg-blue-800"
      >
        Add to Cart
      </button>
      <button
        v-else
        class="text-center w-full bg-gray-600 rounded-md py-2 mt-2 hover:cursor-default"
      >
        Sold Out
      </button>
    </div>
  </div>
</template>
