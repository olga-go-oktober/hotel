<template>
  <div class="mt-2 mb-4">
    <h2 class="font-heading text-2xl md:text-3xl font-bold text-black">{{ title }}</h2>
  </div>
</template>

<script setup lang="ts">
interface Props {
  title: string;
}

defineProps<Props>();
</script>

<style scoped>

</style>