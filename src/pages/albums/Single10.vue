<script setup>
import { ref } from "vue";

const isLiked = ref(false);
</script>

<template>
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-72 mr-12">
        <img
          src="../../assets/albumCovers/10.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-1200 mt-10">
        <h2 class="text-7xl font-bold">Piri</h2>
        <h2 class="text-2xl font-semibold mt-4 text-purple-300">
          Dreamcatcher
        </h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2019</span>
        <span class="text-sm mt-2 text-gray-400"> • 3 songs</span>
        <br />
        <button v-if="isLiked == false" @click="isLiked = true">
          <img
            src="../../assets/unfilled-heart.svg"
            alt=""
            class="w-10 h-10 mt-4"
          />
        </button>
        <button v-else @click="isLiked = false">
          <img
            src="../../assets/filled-heart.svg"
            alt=""
            class="w-10 h-10 mt-4"
          />
        </button>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <table class="table-auto w-full text-xl">
      <thead class="border-b-2 border-slate-gray-lighter">
        <tr class="">
          <th class="w-24 text-center font-light">#</th>
          <th class="w-3/5 text-left font-light">TITLE</th>
          <th class="text-right font-light">PLAYS</th>
          <th class="text-right font-light">DUR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center text-gray-400">1</td>
          <td class="font-normal">Piri</td>
          <td class="text-right text-gray-400">948,391</td>
          <td class="text-right text-gray-400">3:28</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-normal">Good Night</td>
          <td class="text-right text-gray-400">939,598</td>
          <td class="text-right text-gray-400">2:58</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-normal">Wonderland</td>
          <td class="text-right text-gray-400">733,190</td>
          <td class="text-right text-gray-400">3:13</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2019 Dreamcatcher Company</p>
  </div>
</template>
