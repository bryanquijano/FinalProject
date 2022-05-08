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
      class="w-64 h-76 transition ease-in-out duration-500 p-4 rounded-md pb-6 root"
    >
      <span
        v-if="product.OnSale == true"
        class="bg-red-500 px-6 py-2 absolute animate-pulse"
        >On Sale!</span
      >
      <img
        :src="`${product.Img}`"
        alt=""
        class="w-56 h-56 mx-auto bg-gray-300 shadow-2xl hover:scale-125 duration-300"
      />
      <h2 class="font-bold text-xl pt-2 truncate ...">{{ product.Name }}</h2>
      <h4
        v-if="product.OnSale == true && product.SoldOut == false"
        class="text-gray-400"
      >
        <span class="line-through"> ${{ product.Price }}</span>
        <span class="pl-2 text-green-500">${{ product.SalePrice }}</span>
      </h4>
      <h4 v-else-if="product.SoldOut == false" class="text-gray-400">
        ${{ product.Price }}
      </h4>
      <h4 v-else class="text-gray-400 line-through">${{ product.Price }}</h4>
      <button
        v-if="product.SoldOut == false"
        class="text-center w-full bg-white text-black rounded-full py-2 mt-4 hover:text-white hover:bg-slate-gray-lighter"
      >
        Add to Cart
      </button>
      <button
        v-else
        class="text-center w-full bg-gray-600 rounded-full py-2 mt-4 hover:cursor-default"
      >
        Sold Out
      </button>
    </div>
  </div>
</template>
