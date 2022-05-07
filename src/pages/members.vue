<script setup>
import MemberCard from "../components/MemberCard.vue";
</script>

<template>
  <div class="mt-36 font-bold text-4xl mb-4">Members</div>

  <div
    class="min-h-full grid lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-2 gap-8 mb-36"
  >
    <MemberCard />
  </div>
</template>
