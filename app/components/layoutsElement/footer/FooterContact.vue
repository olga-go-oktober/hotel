<script setup lang="ts">
defineProps({
  title: String,
  contact: Object
})
</script>
<template>
    <div class="flex flex-col gap-[14px]">

      <p class="footer-title">{{ title }}</p>
      <p class="footer-text">{{ contact?.company }}</p>
      <p class="footer-text">{{ contact?.address }}</p>
      <p class="footer-text">
        <a :href="`tel:${contact?.phone}`">{{ contact?.phone }}</a>
      </p>
      <p class="footer-text">
        <a :href="`mailto:${contact?.email}`">{{ contact?.email }}</a>
      </p>
    </div>
  </template>
  

  