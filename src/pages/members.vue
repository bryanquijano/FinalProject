<script setup>
import { onUnmounted, ref } from "vue";
import memberCard from "../composable/memberCard";
import useChat from "../composable/memberCard";

const { members, unsubscribe } = memberCard();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div class="mt-10 font-bold text-4xl mb-4">Members</div>

  <div class="grid grid-cols-6 gap-8">
    <!-- <ul> -->
    <!-- <li> -->
    <div v-for="member in members" :key="member.id">
      <router-link :to="{ name: 'Member01' }">
        <div
          class="bg-gray-800 w-56 h-76 hover:opacity-80 transition ease-in-out duration-500 p-4 rounded-md pb-6"
        >
          <img
            src="#"
            alt=""
            class="w-48 h-48 mx-auto bg-gray-300 shadow-2xl rounded-full"
          />
          <h2 class="font-bold text-xl pt-2 truncate ...">
            {{ member.name }}
          </h2>
          <h4 class="text-gray-400">{{ member.role }}</h4>
        </div>
      </router-link>
    </div>
    <!-- </li> -->
    <!-- </ul> -->
    <!--  -->
  </div>
</template>
