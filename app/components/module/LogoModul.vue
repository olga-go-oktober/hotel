<template>
  <div class="w-full">
    <article class="group relative flex size-full min-h-[auto] overflow-hidden rounded-[10px] p-10">
      <div class="contents size-full">
        <a 
          :href="imgRef" 
          target="_blank" 
          rel="noopener noreferrer"
          :aria-label="`Besuchen Sie ${imgAlt}`"
        >
          <img 
            class="block mx-auto w-full h-auto object-cover" 
            loading="lazy"
            :alt="imgAlt" 
            :src="imgSrc"
          />
        </a>
      </div>      
    </article>
  </div>
</template>

<script setup lang="ts">
interface Props {
  imgSrc: string;
  imgAlt: string;
  imgRef: string;
}

defineProps<Props>();
</script>
