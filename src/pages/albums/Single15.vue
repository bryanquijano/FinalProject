<script setup>
import { ref } from "vue";

const isLiked = ref(false);
</script>

<template>
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-72 mr-12">
        <img
          src="../../assets/albumCovers/17.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-1200 mt-10">
        <h2 class="text-7xl font-bold">[Dystopia : Road to Utopia]</h2>
        <h2 class="text-2xl font-semibold mt-4 text-purple-300">
          Dreamcatcher
        </h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2021</span>
        <span class="text-sm mt-2 text-gray-400"> • 7 songs</span>
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
          <td class="font-normal">Intro</td>
          <td class="text-right text-gray-400">1,033,491</td>
          <td class="text-right text-gray-400">1:31</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-normal">Odd Eye</td>
          <td class="text-right text-gray-400">21,471,933</td>
          <td class="text-right text-gray-400">3:04</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-normal">Wind Blows</td>
          <td class="text-right text-gray-400">4,647,192</td>
          <td class="text-right text-gray-400">3:17</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">4</td>
          <td class="font-normal">Poison Love</td>
          <td class="text-right text-gray-400">3,949,019</td>
          <td class="text-right text-gray-400">3:57</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">5</td>
          <td class="font-normal">4 Memory</td>
          <td class="text-right text-gray-400">2,591,483</td>
          <td class="text-right text-gray-400">3:08</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">6</td>
          <td class="font-normal">New Days</td>
          <td class="text-right text-gray-400">2,472,905</td>
          <td class="text-right text-gray-400">3:31</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">7</td>
          <td class="font-normal">Odd Eye (Inst.)</td>
          <td class="text-right text-gray-400">624,812</td>
          <td class="text-right text-gray-400">3:04</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2021 Dreamcatcher Company</p>
  </div>
</template>
