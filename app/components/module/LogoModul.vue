<template>
  <div class="w-full">
    <article class="group relative flex size-full min-h-[auto] overflow-hidden rounded-[10px] p-10">
      <div class="contents size-full">
        <a :href="imgRef" target="_blank" >
          <img 
            class="block mx-auto w-full h-auto object-cover" 
            loading="lazy"
            :alt="imgAlt" 
            :src="imgSrc">
        </a>
      </div>      
    </article>
  </div>
</template>

<script setup>
defineProps({
  imgSrc: String,
  imgAlt: String,
  imgRef: String,
})
</script>
