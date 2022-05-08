<script setup>
import { onUnmounted, ref } from "vue";
// import videoCard from "../composable/videos";
import musicVideoCard from "../composable/musicVideos";

// const { videos, unsubscribe } = videoCard();
const { musicVideos, unsubscribe } = musicVideoCard();

onUnmounted(() => {
  unsubscribe();
});
</script>

<template>
  <div v-for="musicVideo in musicVideos" :key="musicVideo.id">
    <div class="w-fit">
      <iframe
        width="280"
        height="157.5"
        :src="`https://www.youtube.com/embed/${musicVideo.URL}`"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <div class="pt-2 w-full">
        <p>{{ musicVideo.Name }}</p>
        <p class="text-slate-gray-lightest w-36">
          {{ musicVideo.Views }} views
        </p>
      </div>
    </div>
  </div>
</template>
