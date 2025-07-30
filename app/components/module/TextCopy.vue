<template>
  <div class="break-words">
    <p class="hyphens-auto font-copy !leading-[150%] md:text-md font-normal text-black" v-if="textOne" v-html="textOne">
    </p>
  </div>
</template>

<script setup>
defineProps({
  textOne: String,
})
</script>
