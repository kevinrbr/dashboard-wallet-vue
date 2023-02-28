<script setup lang="ts">

import { dataService } from '@/shared/data.service';

let stockList: [] = await dataService.getStock();
console.log(stockList);
  
</script>

<template>
  <section class="container">
    <p class="font-heading text-4xl sm:text-5xl my-10">Stock</p>
    <div class="grid grid-cols-7 uppercase text-gray">
      <div>Item</div>
      <div>Categorie</div>
      <div>Prix</div>
      <div>Quantite</div>
      <div>Date d'achat</div>
      <div>In-Hand</div>
    </div>
  </section>
</template>