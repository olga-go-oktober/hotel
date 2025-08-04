<script setup lang="ts">
interface Link {
  text: string
  href: string
}

defineProps<{
  title: string
  linksOne: Link[]
  linksTwo: Link[]
}>()
</script>

<template>
  <div class="flex flex-col gap-[14px]">
    <p class="footer-title">{{ title }}</p>
    <div class="mx-0 max-w-8xl lg:grid lg:grid-cols-2 lg:gap-6">
      <ul class="flex flex-col gap-[14px]">
        <li v-for="link in linksOne" :key="link.text">
          <a :href="link.href">
            <p class="footer-text no-underline hover:underline">{{ link.text }}</p>
          </a>
        </li>
      </ul>
      <ul class="flex flex-col gap-[14px]">
        <li v-for="link in linksTwo" :key="link.text">
          <a :href="link.href">
            <p class="footer-text no-underline hover:underline">{{ link.text }}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>