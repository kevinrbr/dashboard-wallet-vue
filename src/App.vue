<script setup lang="ts">
import { useWindowSize } from '@vueuse/core'
import { computed } from 'vue';
import NavbarDesktop from './components/NavbarDesktop.vue';
import NavbarMobile from './components/NavbarMobile.vue';

const { width } = useWindowSize()
const mobileScreenSize = 480
const isMobile = computed(() => {
  return width.value < mobileScreenSize;
});

</script>

<template>
  <component :is="isMobile ? NavbarMobile : NavbarDesktop"></component>
  <router-view></router-view>
</template>