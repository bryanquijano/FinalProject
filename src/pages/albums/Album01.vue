<script setup>
import { ref } from "vue";

const isLiked = ref(false);
</script>

<template>
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-72 mr-12">
        <img
          src="../../assets/albumCovers/11.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-1200 mt-10">
        <h2 class="text-7xl font-bold">The Beginning of The End</h2>
        <h2 class="text-2xl font-semibold mt-4 text-purple-300">
          Dreamcatcher
        </h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2019</span>
        <span class="text-sm mt-2 text-gray-400"> • 12 songs</span>
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
          <td class="text-right text-gray-400">459,404</td>
          <td class="text-right text-gray-400">1:27</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-normal">Breaking Out</td>
          <td class="text-right text-gray-400">3,541,307</td>
          <td class="text-right text-gray-400">3:19</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-normal">My Way</td>
          <td class="text-right text-gray-400">1,235,364</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">4</td>
          <td class="font-normal">Chase Me</td>
          <td class="text-right text-gray-400">931,100</td>
          <td class="text-right text-gray-400">3:11</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">5</td>
          <td class="font-normal">Good Night</td>
          <td class="text-right text-gray-400">939,548</td>
          <td class="text-right text-gray-400">2:57</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">6</td>
          <td class="font-normal">Wonderland</td>
          <td class="text-right text-gray-400">733,623</td>
          <td class="text-right text-gray-400">3:13</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">7</td>
          <td class="font-normal">Piri</td>
          <td class="text-right text-gray-400">948,043</td>
          <td class="text-right text-gray-400">3:28</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">8</td>
          <td class="font-normal">What</td>
          <td class="text-right text-gray-400">839,501</td>
          <td class="text-right text-gray-400">3:27</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">9</td>
          <td class="font-normal">I Miss You</td>
          <td class="text-right text-gray-400">2,775,367</td>
          <td class="text-right text-gray-400">3:08</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">10</td>
          <td class="font-normal">Mata Hitori ni Natta</td>
          <td class="text-right text-gray-400">736,751</td>
          <td class="text-right text-gray-400">2:54</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">11</td>
          <td class="font-normal">You and I</td>
          <td class="text-right text-gray-400">563,301</td>
          <td class="text-right text-gray-400">3:16</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">12</td>
          <td class="font-normal">Outro</td>
          <td class="text-right text-gray-400">331,464</td>
          <td class="text-right text-gray-400">1:44</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2019 PONY CANYON INC.</p>
  </div>
</template>
