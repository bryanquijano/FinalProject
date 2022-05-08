<script setup>
import MusicVideoCard from "../components/MusicVideoCard.vue";
</script>

<template>
  <div class="mt-36 font-bold text-4xl mb-8">Music Videos</div>

  <div
    class="min-h-full grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-8 mb-36"
  >
    <MusicVideoCard />
  </div>
</template>
