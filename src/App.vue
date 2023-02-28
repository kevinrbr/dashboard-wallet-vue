<script setup lang="ts">
  import Navbar from './components/Navbar.vue';
</script>

<template>
  <Navbar />
  <router-view></router-view>
</template>

<style>
  .container {
    margin-top: 60px;
    padding: 0 50px;
  }
</style>