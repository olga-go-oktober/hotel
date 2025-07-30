<template>
  <div class="break-words">
    <p 
      v-if="textOne" 
      class="hyphens-auto font-copy !leading-[150%] md:text-md font-normal text-black"
      v-html="textOne"
    />
  </div>
</template>

<script setup lang="ts">
interface Props {
  textOne: string;
}

defineProps<Props>();
</script>
