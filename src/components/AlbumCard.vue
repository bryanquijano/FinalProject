<template>
  <div class="mt-4">
    <div class="grid grid-cols-6 gap-8">
      <router-link :to="{ name: 'Album' }">
        <div
          class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
        >
          <img
            src="../assets/albumCovers/alb1.png"
            alt=""
            class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
          />
          <h2 class="font-bold text-xl pt-2 truncate ...">
            [Dystopia: The Tree of Language]
          </h2>
          <h4 class="text-gray-400">2020</h4>
        </div>
      </router-link>
      <router-link :to="{ name: 'Album' }">
        <div
          class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
        >
          <img
            src="../assets/albumCovers/alb2.png"
            alt=""
            class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-lg"
          />
          <h2 class="font-bold text-xl pt-2 truncate ...">
            The Beginning of The End
          </h2>
          <h4 class="text-gray-400">2019</h4>
        </div>
      </router-link>
    </div>
  </div>
</template>
