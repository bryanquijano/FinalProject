<script setup>
import Nav from "./components/Nav.vue";
import Footer from "./components/Footer.vue";
</script>

<template>
  <Nav />
  <div class="container mx-auto mb-8">
    <router-view />
  </div>
  <Footer />
</template>
