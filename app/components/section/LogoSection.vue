<template>
  <div class="max-w-7xl mx-auto px-0">
    <div class="grid gap-6 md:grid-cols-4">
      <LogoModul
        v-for="(item, index) in LOGO_DATA"
        :key="index"
        :imgSrc="item.src"
        :imgAlt="item.alt"
        :imgRef="item.href"
      />
    </div>
  </div>  
</template>

<script setup lang="ts">
import LogoModul from '../module/LogoModul.vue';
import { LOGO_DATA } from '~/constants/data';
</script>

<style scoped>

</style>
