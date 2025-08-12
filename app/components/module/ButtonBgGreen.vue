<script setup lang="ts">
import type { PropType } from 'vue'


 defineProps({
    type: String as PropType<'button' | 'submit' | 'reset'>,
    disabled: Boolean,
    text: String,
    link: String as PropType<string | null>,
})

</script>

<template>
    <button 
        :type="type"
        :disabled="disabled"
        
        class="relative inline-flex w-max cursor-pointer overflow-hidden fill-current text-center font-copy text-md font-bold no-underline disabled:cursor-not-allowed !disabled:text-black-500 lg:outline-2 lg:transition-[color,background-color,border-color,outline-color] justify-center rounded-3xl px-8 py-3 lg:outline-offset-4 bg-dark-green text-white visited:text-white disabled:!bg-dark-grey disabled:!text-black-500 lg:outline-focus-dark lg:hover:bg-black-800 lg:hover:text-white lg:active:bg-black lg:active:text-white">
        <a v-if="link" :href="link" target="_blank">{{ text }}</a>
        <span v-else>{{ text }}</span>
    </button>
</template>
