<template>
  <div class="richtext-wrapper text-md lg:text-lg my-6">
        <p v-if="subtitle" v-html="subtitle" class="text-subline"></p>
  </div>
  
</template>

<script setup>
defineProps({
  subtitle: String
})
</script>

<style scoped>

</style>