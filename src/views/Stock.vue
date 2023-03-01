<script setup lang="ts">

import { dataService } from '@/shared/data.service';
import { IItems } from '@/shared/types/items';
import { ref } from 'vue';

const items = ref<IItems[]>(await dataService.getStock());

</script>

<template>
  <section class="container">
    <h1 class="font-heading text-4xl sm:text-5xl my-10">Stock</h1>
    <div class="grid uppercase text-gray border-b-[0.5px] border-lightGray pb-2 mb-6 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]">
      <span>Item</span>
      <span class="text-center">Categorie</span>
      <span class="text-center">Prix</span>
      <span class="text-center">Quantite</span>
      <span class="text-center">Date d'achat</span>
      <span class="text-center">In-Hand</span>
    </div>
    <div v-for="i in items" key="i.id" class="grid mb-10 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_1fr]">
        <div class="font-title flex items-center">
          <img :src="i.image" class="w-[15%]"/>
          <p class="uppercase ml-6 sm:max-w-[200px]">{{ i.name }}</p>
        </div>
        <p class="uppercase text-center">{{ i.category }}</p>
        <p class="text-center">{{ i.price }}</p>
        <p class="text-center">{{ i.quantity }}</p>
        <p class="text-center">{{ i.buyingDate }}</p>
        <div class="text-center flex flex-col justify-center items-center">
          <input type="checkbox" v-model="i.inHand" @change="dataService.updateStock(i)">
          <label class="mt-1">{{ i.inHand ? "Stock" : "Preorder" }}</label>
          {{ i.inHand }}
        </div>
    </div>
  </section>
</template>