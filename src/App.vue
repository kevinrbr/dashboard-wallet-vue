<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>

<style>
  .container {
    margin-top: 80px;
    padding: 0 100px;
  }
</style>