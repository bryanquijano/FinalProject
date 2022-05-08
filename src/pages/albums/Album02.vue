<script setup>
import { ref } from "vue";

const isLiked = ref(false);
</script>

<template>
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-72 mr-12">
        <img
          src="../../assets/albumCovers/14.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-1200 mt-10">
        <h2 class="text-7xl font-bold">[Dystopia: The Tree of Language]</h2>
        <h2 class="text-2xl font-semibold mt-4 text-purple-300">
          Dreamcatcher
        </h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2020</span>
        <span class="text-sm mt-2 text-gray-400"> • 13 songs</span>
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
          <td class="text-right text-gray-400">1,134,579</td>
          <td class="text-right text-gray-400">1:19</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-normal">Scream</td>
          <td class="text-right text-gray-400">35,085,173</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-normal">Tension</td>
          <td class="text-right text-gray-400">2,931,961</td>
          <td class="text-right text-gray-400">3:11</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">4</td>
          <td class="font-normal">Red Sun</td>
          <td class="text-right text-gray-400">9,673,708</td>
          <td class="text-right text-gray-400">3:05</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">5</td>
          <td class="font-normal">Black Or White</td>
          <td class="text-right text-gray-400">7,540,916</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">6</td>
          <td class="font-normal">Jazz Bar</td>
          <td class="text-right text-gray-400">6,925,879</td>
          <td class="text-right text-gray-400">3:34</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">7</td>
          <td class="font-normal">SAHARA</td>
          <td class="text-right text-gray-400">5,645,014</td>
          <td class="text-right text-gray-400">3:10</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">8</td>
          <td class="font-normal">In The Frozen</td>
          <td class="text-right text-gray-400">4,895,520</td>
          <td class="text-right text-gray-400">3:16</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">9</td>
          <td class="font-normal">Daybreak</td>
          <td class="text-right text-gray-400">2,166,625</td>
          <td class="text-right text-gray-400">3:03</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">10</td>
          <td class="font-normal">Full Moon</td>
          <td class="text-right text-gray-400">9,372,817</td>
          <td class="text-right text-gray-400">3:09</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">11</td>
          <td class="font-normal">Outro</td>
          <td class="text-right text-gray-400">861,737</td>
          <td class="text-right text-gray-400">1:03</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">12</td>
          <td class="font-normal">Scream (Inst.)</td>
          <td class="text-right text-gray-400">748,030</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">13</td>
          <td class="font-normal">Paradise</td>
          <td class="text-right text-gray-400">3,832,622</td>
          <td class="text-right text-gray-400">4:03</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2020 Dreamcatcher Company</p>
  </div>
</template>
