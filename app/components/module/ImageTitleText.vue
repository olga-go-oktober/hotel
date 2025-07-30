<template>
  <div class="flex w-full flex-col gap-0">
    <TitelVue 
      class="img-text-title"
      :title="title"
    />

    <div class="richtext-wrapper md:text-md">
      <TextCopy v-if="textOne" :textOne="textOne" />
      <TextCopy v-if="textTwo" :textOne="textTwo" />
      <TextCopy v-if="textThree" :textOne="textThree" />
    </div>
  </div>
</template>
    
<script setup lang="ts">
import TitelVue from '../section/TitelVue.vue';
import TextCopy from './TextCopy.vue';

interface Props {
  title: string;
  textOne?: string;
  textTwo?: string;
  textThree?: string;
}

defineProps<Props>();
</script>
  