<script setup>
import useAuth from "../composable/useAuth";
const { isAuthenticated, user } = useAuth();
</script>

<template>
  <div
    class="flex flex-col justify-center items-center min-h-screen-nonav space-y-12 pt-4 bg-slate-gray-light"
  >
    <h2
      v-if="isAuthenticated"
      class="font-extralight text-2xl tracking-tighter text-white text-center"
    >
      Welcome,
      <span class="font-bold text-purple-300">{{ user }} </span>
      , to <span class="font-bold">InSomniasDream</span>. The one stop shop for
      everything related to the KPOP group:
      <span class="font-bold">Dreamcatcher</span>!
    </h2>
    <h2
      v-else
      class="font-extralight text-2xl tracking-tighter text-white text-center"
    >
      To get the full <span class="font-bold">Dreamcatcher</span> experience,
      login!
    </h2>
    <img src="../assets/group.jpg" alt="Hello GB" class="w-2/3" />
  </div>
</template>
