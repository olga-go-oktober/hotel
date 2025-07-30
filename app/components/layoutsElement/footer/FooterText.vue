<script setup lang="ts">
defineProps({
  title: String,
  text: String
})
</script>
<template>
  <div class="flex flex-col gap-[14px]">
    <p class="footer-title">{{ title }}</p>
    <p class="footer-text">
      {{ text }}
    </p>
  </div>
</template>
