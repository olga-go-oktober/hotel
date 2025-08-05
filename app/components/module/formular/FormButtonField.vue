<script setup lang="ts">
import { ref } from 'vue'
import ChevronDown from '~/components/icons/ChevronDown.vue';

const props = defineProps({
    buttonId: String,
    label: String,
    text: String,
    required: Boolean
})

const isOpen = ref(false)
const selected = ref(props.text || 'Bitte wählen')

function toggleDropdown() {
    isOpen.value = !isOpen.value
}

function selectOption(option: string) {
    selected.value = option
    isOpen.value = false
}
</script>

<template>
    <div class="relative flex flex-col gap-1">
        <label 
        :for="buttonId"
        class="pointer-events-none w-fit text-sm">
        {{ label }} <span v-if="required"> *</span></label>
        <button
            type="button"
            class="group relative w-full rounded-t-[5px] border border-b-black-500 bg-black-100 px-4 py-[15px] text-left leading-[140%] text-black-500"
            :id="buttonId"
            @click="toggleDropdown"
        >
            <span class="text-black">{{ selected }}</span>
            <ChevronDown
                class="size-5 absolute bottom-4 right-4 transition-transform duration-300"
                :class="{ 'rotate-180': isOpen }"
            />
        </button>
        <div
            v-if="isOpen"
            class="absolute top-[79px] z-10 min-h-[54.4px] w-full list-none gap-0 rounded-[5px] border border-black-100 bg-white p-0 shadow"
        >
            <div class="cursor-pointer p-4 border-b" @click="selectOption('Frau')">Frau</div>
            <div class="cursor-pointer p-4 border-b" @click="selectOption('Herr')">Herr</div>
            <div class="cursor-pointer p-4" @click="selectOption('Divers')">Divers</div>
        </div>
    </div>
</template>