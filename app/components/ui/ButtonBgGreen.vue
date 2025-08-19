<script setup lang="ts">
import type { PropType } from 'vue'
import { ref} from 'vue'

const isHover = ref(false)

 defineProps({
    type: String as PropType<'button' | 'submit' | 'reset'>,
    disabled: Boolean,
    text: String, // optional, fallback wenn kein slot
    path: String as PropType<string | null>,
})

</script>

<template>
    <!-- if path is: NuxtLink -->
    <NuxtLink v-if="path" :to="path">
    <button 
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
        type="button"    
        :disabled="disabled"
        
        class="relative inline-flex w-max cursor-pointer overflow-hidden fill-current text-center font-copy text-md font-bold no-underline disabled:cursor-not-allowed !disabled:text-black-500 lg:outline-2 transition-[color,background-color,border-color,outline-color] justify-center rounded-3xl px-8 py-3 outline-offset-4
         bg-dark-green text-white visited:text-white disabled:!bg-dark-grey disabled:!text-black-500 outline-focus-dark hover:bg-black-800 hover:text-white active:bg-black active:text-white">
        <span><slot>{{ text }}</slot></span>
    </button>
</NuxtLink>

<!-- if it is not path: normal button -->
 <button
    v-else
    @mouseenter="isHover = true"
    @mouseleave="isHover = false"
    :type="type"
    :disabled="disabled"
    class="relative inline-flex w-max cursor-pointer overflow-hidden fill-current text-center font-copy text-md font-bold no-underline disabled:cursor-not-allowed !disabled:text-black-500 lg:outline-2 transition-[color,background-color,border-color,outline-color] justify-center rounded-3xl px-8 py-3 outline-offset-4
       bg-dark-green text-white visited:text-white disabled:!bg-dark-grey disabled:!text-black-500 outline-focus-dark hover:bg-black-800 hover:text-white active:bg-black active:text-white">
       <span><slot>{{ text }}</slot></span>
 </button>
</template>
