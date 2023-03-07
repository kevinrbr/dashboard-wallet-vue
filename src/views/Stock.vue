<script setup lang="ts">

import { dataService } from '@/shared/data.service';
import { IItems } from '@/types/items';
import { reactive, ref, watch } from 'vue';

const items = ref<IItems[]>(await dataService.getStock());

  watch(items, (newValue) => {
    }, { deep: true })

</script>

<template>
  <section class="container">
    <h1 class="font-heading text-4xl sm:text-5xl my-10">Stock</h1>
    <div class="grid uppercase text-gray border-b-[0.5px] border-lightGray pb-2 mb-6 sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_100px]">
      <span>Item</span>
      <span class="text-center">Categorie</span>
      <span class="text-center">Prix</span>
      <span class="text-center">Quantite</span>
      <span class="text-center">Date d'achat</span>
      <span class="text-center">In-Hand</span>
    </div>
    <div v-for="i in items" key="i.id" class="grid mb-10 items-center sm:grid-cols-[2fr_1fr_1fr_1fr_1fr_1fr_100px]">
        <div class="font-title flex items-center">
          <img src="images/one-piece-1131-chopper-en-armure-chase-2-1669110369_0x460.webp" class="w-[15%]"/>
          <p class="uppercase ml-6 sm:max-w-[200px]">{{ i.name }}</p>
        </div>
        <p class="uppercase text-center">{{ i.category }}</p>
        <p class="text-center">{{ i.price }}</p>
        <p class="text-center">{{ i.quantity }}</p>
        <p class="text-center">{{ i.buying_date }}</p>
        <div class="text-center flex flex-col justify-center items-center">
          <input class="cursor-pointer" type="checkbox" v-model="i.in_hand" @change="dataService.updateProduct(i)">
          <label class="mt-1">{{ i.in_hand ? "Stock" : "Preorder" }}</label>
        </div>
        <div class="flex justify-between">
          <font-awesome-icon icon="fa-solid fa-circle-check" class="text-2xl cursor-pointer" />
          <font-awesome-icon 
            icon="fa-solid fa-circle-xmark" 
            class="text-2xl text-red cursor-pointer" 
            @click="() => {
              dataService.deleteProduct(i);
              items = items.filter(item => item.id !== i.id);
            }"
          />
          <font-awesome-icon icon="fa-solid fa-chevron-right" class="text-2xl cursor-pointer" />
        </div>
    </div>
  </section>
</template>