<template>
  <section class="py-32">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-6 md:grid-cols-3">
        <VorteilModule
          v-for="(item, index) in VORTEIL_DATA"
          :key="index"
          :imgSrc="item.src"
          :imgAlt="item.alt"
          :title="item.title"
          :textOne="item.textOne"
          :textTwo="item.textTwo"
        />
      </div>
    </div>  
  </section>
</template>
  
<script setup lang="ts">
import VorteilModule from '../module/VorteilModule.vue';
import { VORTEIL_DATA } from '~/constants/data';
</script>

