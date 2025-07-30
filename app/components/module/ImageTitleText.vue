<template>
    <div class="flex w-full flex-col gap-0">
      <TitelVue class="img-text-title "
        :title="title"/>

      <div class="richtext-wrapper md:text-md">
        <TextCopy v-if="textOne" :textOne="textOne" />
        <TextCopy v-if="textTwo" :textOne="textTwo" /> 

      </div>
    </div>
  </template>
    
  <script setup>
  import TitelVue from '../section/TitelVue.vue'
  import TextCopy from './TextCopy.vue'
  
  defineProps({
    title: String,
    textOne: String,
    textTwo: String

  })
  </script>
  