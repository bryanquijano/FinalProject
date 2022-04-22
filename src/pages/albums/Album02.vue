<script setup>
// // import AlbumCard from "../components/AlbumCard.vue";

// import { onUnmounted, ref } from "vue";
// import albumCard from "../composable/albumCard";
// import singleCard from "../composable/singleCard";
// // import useChat from "../composable/albumCard";

// const { albums, unsubscribe } = albumCard();
// const { singles } = singleCard();

// onUnmounted(() => {
//   unsubscribe();
// });
//
</script>

<template>
  <!-- <div v-for="album in albums" :key="album.id">
    <div
      class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
    >
      <img
        src="#"
        alt=""
        class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
      />
      <h2 class="font-bold text-xl pt-2 truncate ...">
        {{ album.title }}
      </h2>
      <h4 class="text-gray-400">{{ album.year }}</h4>
    </div>
  </div> -->
  <div>
    <div class="flex container mx-auto mt-20">
      <div class="w-1/4">
        <img
          src="../../assets/albumCovers/14.jpg"
          alt=""
          class="w-72 h-72 bg-gray-400 rounded-xl"
        />
      </div>
      <div class="w-3/4 mt-8">
        <h2 class="text-7xl font-bold">[Dystopia: The Tree of Language]</h2>
        <h2 class="text-2xl font-semibold mt-1 text-red-500">Dreamcatcher</h2>
        <span class="text-sm mt-2 text-gray-400">KPOP</span>
        <span class="text-sm mt-2 text-gray-400"> • 2020</span>
        <span class="text-sm mt-2 text-gray-400"> • 13 songs</span>
        <br />
        <button>
          <img src="../../assets/heart.svg" alt="" class="w-10 h-10" />
        </button>
      </div>
    </div>
  </div>
  <div class="mt-10">
    <table class="table-auto w-full text-xl">
      <thead class="border-b-2 border-gray-700">
        <tr class="">
          <th class="w-24 text-center">#</th>
          <th class="w-3/5">TITLE</th>
          <th class="">PLAYS</th>
          <th class="">DUR</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="text-center text-gray-400">1</td>
          <td class="font-bold">Intro</td>
          <td class="text-right text-gray-400">1,134,579</td>
          <td class="text-right text-gray-400">1:19</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">2</td>
          <td class="font-bold">Scream</td>
          <td class="text-right text-gray-400">35,085,173</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">3</td>
          <td class="font-bold">Tension</td>
          <td class="text-right text-gray-400">2,931,961</td>
          <td class="text-right text-gray-400">3:11</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">4</td>
          <td class="font-bold">Red Sun</td>
          <td class="text-right text-gray-400">9,673,708</td>
          <td class="text-right text-gray-400">3:05</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">5</td>
          <td class="font-bold">Black Or White</td>
          <td class="text-right text-gray-400">7,540,916</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">6</td>
          <td class="font-bold">Jazz Bar</td>
          <td class="text-right text-gray-400">6,925,879</td>
          <td class="text-right text-gray-400">3:34</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">7</td>
          <td class="font-bold">SAHARA</td>
          <td class="text-right text-gray-400">5,645,014</td>
          <td class="text-right text-gray-400">3:10</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">8</td>
          <td class="font-bold">In The Frozen</td>
          <td class="text-right text-gray-400">4,895,520</td>
          <td class="text-right text-gray-400">3:16</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">9</td>
          <td class="font-bold">Daybreak</td>
          <td class="text-right text-gray-400">2,166,625</td>
          <td class="text-right text-gray-400">3:03</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">10</td>
          <td class="font-bold">Full Moon</td>
          <td class="text-right text-gray-400">9,372,817</td>
          <td class="text-right text-gray-400">3:09</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">11</td>
          <td class="font-bold">Outro</td>
          <td class="text-right text-gray-400">861,737</td>
          <td class="text-right text-gray-400">1:03</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">12</td>
          <td class="font-bold">Scream (Inst.)</td>
          <td class="text-right text-gray-400">748,030</td>
          <td class="text-right text-gray-400">3:24</td>
        </tr>
        <tr>
          <td class="text-center text-gray-400">13</td>
          <td class="font-bold">Paradise</td>
          <td class="text-right text-gray-400">3,832,622</td>
          <td class="text-right text-gray-400">4:03</td>
        </tr>
      </tbody>
    </table>
    <p class="text-sm pt-4 text-gray-400">© 2020 Dreamcatcher Company</p>
  </div>
</template>
