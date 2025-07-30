<template>
    <section class="py-8">
      <div class="">
        <div class="grid gap-6 md:grid-cols-3">
          <GalleryModule
            v-for="(img, index) in gallery"
            :key="index"
            :imgSrc="img.src"
            :imgAlt="img.alt"
            :caption="img.caption"
          />
        </div>
      </div>  
    </section>
</template>
  
  <script setup> 
  import GalleryModule from '../module/GalleryModule.vue'

  defineProps({
    gallery: Array
  })
  
  </script>

  <style scoped>
  
  </style>
  