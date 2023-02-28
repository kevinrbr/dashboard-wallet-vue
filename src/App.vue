<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
import Stock from './views/Stock.vue';
</script>

<template>
  <Navbar />
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style>
  .container {
    margin-top: 60px;
    padding: 0 50px;
  }
</style>