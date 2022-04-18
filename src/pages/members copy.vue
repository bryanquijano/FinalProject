<template>
  <div class="mt-10 font-bold text-4xl mb-4">Members</div>
  <div class="grid grid-cols-6 gap-8">
    <router-link :to="{ name: 'Member01' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem1.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">JiU</h2>
        <h4 class="text-gray-400">Leader</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member02' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem2.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">SuA</h2>
        <h4 class="text-gray-400">Lead Dancer</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member03' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem3.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">Siyeon</h2>
        <h4 class="text-gray-400">Main Vocalist</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member04' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem4.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">Handong</h2>
        <h4 class="text-gray-400">Sub-Vocalist</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member05' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem5.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">Yoohyeon</h2>
        <h4 class="text-gray-400">Lead Vocalist</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member06' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem6.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">Dami</h2>
        <h4 class="text-gray-400">Rapper</h4>
      </div>
    </router-link>
    <router-link :to="{ name: 'Member07' }">
      <div
        class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
      >
        <img
          src="../assets/memberProfiles/mem7.jpg"
          alt=""
          class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
        />
        <h2 class="font-bold text-xl pt-2 truncate ...">Gahyeon</h2>
        <h4 class="text-gray-400">Sub-Vocalist</h4>
      </div>
    </router-link>
  </div>
</template>

<script setup>
// import MemberCard from "../components/MemberCard.vue";
</script>
