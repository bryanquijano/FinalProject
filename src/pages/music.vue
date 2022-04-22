<script setup>
import AlbumCard from "../components/AlbumCard.vue";
import SingleCard from "../components/SingleCard.vue";
</script>

<template>
  <div class="mt-10 font-bold text-4xl mb-4">Albums</div>
  <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8">
    <AlbumCard />
  </div>

  <div class="mt-10 font-bold text-4xl mb-4">Singles & EPs</div>
  <div class="grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8">
    <SingleCard />
  </div>
</template>
