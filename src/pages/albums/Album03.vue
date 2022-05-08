<script setup>
import { ref } from "vue";

const isLiked = ref(false);
</script>

<template>
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-72 mr-12">
        <img
          src="../../assets/albumCovers/20.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-1200 mt-10">
        <h2 class="text-7xl font-bold">[Apocalypse : Save Us]</h2>
        <h2 class="text-2xl font-semibold mt-4 text-purple-300">
          Dreamcatcher
        </h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2022</span>
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
          <td class="text-right text-gray-400">210,831</td>
          <td class="text-right text-gray-400">1:01</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-normal">Locked Inside A Door</td>
          <td class="text-right text-gray-400">397,012</td>
          <td class="text-right text-gray-400">3:07</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-normal">MAISON</td>
          <td class="text-right text-gray-400">1,672,521</td>
          <td class="text-right text-gray-400">3:05</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">4</td>
          <td class="font-normal">Starlight</td>
          <td class="text-right text-gray-400">531,806</td>
          <td class="text-right text-gray-400">3:19</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">5</td>
          <td class="font-normal">Together</td>
          <td class="text-right text-gray-400">320,310</td>
          <td class="text-right text-gray-400">3:44</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">6</td>
          <td class="font-normal">Always</td>
          <td class="text-right text-gray-400">272,478</td>
          <td class="text-right text-gray-400">4:29</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">7</td>
          <td class="font-normal">Skit : The seven doors</td>
          <td class="text-right text-gray-400">205,568</td>
          <td class="text-right text-gray-400">1:45</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">8</td>
          <td class="font-normal">Cherry (Real Miracle) (JI U SOLO)</td>
          <td class="text-right text-gray-400">290,607</td>
          <td class="text-right text-gray-400">3:15</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">9</td>
          <td class="font-normal">No Dot (SU A SOLO)</td>
          <td class="text-right text-gray-400">361,364</td>
          <td class="text-right text-gray-400">3:19</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">10</td>
          <td class="font-normal">Entrancing (SIYEON SOLO)</td>
          <td class="text-right text-gray-400">318,757</td>
          <td class="text-right text-gray-400">3:32</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">11</td>
          <td class="font-normal">Winter (HANDONG SOLO)</td>
          <td class="text-right text-gray-400">242,892</td>
          <td class="text-right text-gray-400">3:51</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">12</td>
          <td class="font-normal">For (YOOHYEON SOLO)</td>
          <td class="text-right text-gray-400">274,298</td>
          <td class="text-right text-gray-400">3:44</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">13</td>
          <td class="font-normal">Beauty Full (DAMI SOLO)</td>
          <td class="text-right text-gray-400">296,151</td>
          <td class="text-right text-gray-400">3:03</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">14</td>
          <td class="font-normal">Playground (GAHYEON SOLO)</td>
          <td class="text-right text-gray-400">224,970</td>
          <td class="text-right text-gray-400">3:01</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2022 DREAMCATCHER COMPANY.</p>
  </div>
</template>
