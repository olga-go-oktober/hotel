<template>
  <div class="swiper-slide swiper-slide-next">
    <div class="group flex flex-col gap-5 rounded-[10px] no-underline outline-offset-[10px]">
      <div class="relative h-auto overflow-hidden rounded-[10px] lg:size-full aspect-square">
        <div class="contents size-full">
          <img 
            :src="imgSrc" 
            :alt="imgAlt"
            loading="lazy"
            class="object-center size-full object-cover duration-200 ease-in lg:group-hover:scale-[1.07]"
          />
        </div>
      </div>

      <div class="flex flex-col gap-4 lg:justify-center mb-12">
        <div class="flex flex-col gap-6">
          <ImageTitleText
            :title="title"
            :textOne="textOne"
            :textTwo="textTwo"
            :textThree="textThree"
          />
        </div>
      </div>
    </div>
  </div>
</template>
    
<script setup lang="ts">
import ImageTitleText from './ImageTitleText.vue';

interface Props {
  imgSrc: string;
  imgAlt: string;
  title: string;
  textOne: string;
  textTwo: string;
  textThree?: string;
}

defineProps<Props>();
</script>
  
<style scoped>
  
</style>