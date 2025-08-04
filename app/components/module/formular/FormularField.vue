<script setup lang="ts">
import ChevronDown from '~/components/icons/ChevronDown.vue';
defineProps({
    buttonId: String,
    label: String,
    text: String,

})
</script>

<template>
    <div class="relative flex flex-col gap-1">
        <label class="pointer-events-none w-fit text-sm" :for="buttonId"> {{ label }} </label>

        <button
            class="group relative w-full rounded-t-[5px] border border-b-black-500 bg-black-100 px-4 py-[15px] text-left leading-[140%] text-black-500 hover:rounded-b-[5px] hover:border-2 hover:border-black hover:px-[15px] hover:py-[14px] hover:text-black focus-visible:rounded-b-[5px] focus-visible:!border-focus-dark focus-visible:outline disabled:!cursor-not-allowed disabled:rounded-b-none disabled:border disabled:border-black-100 disabled:border-b-black-500 disabled:px-4 disabled:py-[15px] disabled:text-black-300"
            :id="buttonId">

            <span v-if="text"> {{ text }}</span>
            <ChevronDown class="size-5 absolute bottom-4 right-4 transition-transform duration-300 group-hover:bottom-[15px] group-hover:right-[15px]" />
        </button>
    </div>
</template>
