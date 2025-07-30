<template>
  <div class="">
    <article class="group relative flex size-full min-h-[420px] overflow-hidden rounded-[10px] no-underline outline-focus-dark focus-visible:outline items-end">
      <!-- Hintergrundbild -->
      <img
        :src="imgSrc"
        :alt="imgAlt"
        class="object-center absolute top-0 z-10 size-full object-cover"
      />

      <!-- Optional: Gradient Overlay für bessere Lesbarkeit -->
      <div class="absolute inset-0 bg-gradient-to-t from-white/40 to-transparent z-10"></div>

      <!-- Text über dem Bild -->
      <div class="flex flex-col gap-[10px] p-6 text-black z-10">
        <hgroup class="flex flex-col gap-[10px]">
          <h2
            v-if="caption"
            class="hyphens-auto text-balance pt-1 font-heading text-4xl font-semibold leading-[130%] md:text-4xl line-clamp-3"
          >
            {{ caption }}
          </h2>
        </hgroup>
      </div>
    </article>
  </div>
</template>



  <!-- <div class="rounded overflow-hidden shadow hover:shadow-lg transition">
    <img :src="imgSrc" :alt="imgAlt" class="w-full h-auto object-cover" />
    <p v-if="caption" class="mt-2 text-sm text-center text-gray-600">{{ caption }}</p>
  </div> -->
  
<script setup>
defineProps({
  imgSrc: String,
  imgAlt: String,
  caption: String
})
</script>

<style scoped>

</style>