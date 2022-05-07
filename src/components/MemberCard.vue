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
  <div v-for="member in members" :key="member.id">
    <router-link :to="{ name: `${member.ID}` }">
      <div
        class="bg-slate-gray w-56 h-76 transition ease-in-out duration-500 p-4 rounded-md pb-6 hover:text-purple-300"
      >
        <img
          :src="`${member.pfp}`"
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
</template>
