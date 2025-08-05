<script setup lang="ts">
defineProps({
    inputId: String,
    label: String,
    placeholder: String,
    required: Boolean
})
</script>

<template>
    <div class="flex w-full flex-col gap-1">
        <label class="pointer-events-none w-fit text-sm" :for="inputId">
            {{ label }} <span v-if="required"> *</span> </label>
        <div class="relative">
            <input :id="inputId" type="text" :placeholder="label" class="border border-black-100 pl-4 leading-[140%]
                    placeholder:text-black-500 hover:rounded-[5px] hover:border-2 hover:border-black hover:pl-[15px]
                    hover:placeholder:text-black focus-visible:rounded-b-[5px] focus-visible:border-2
                    focus-visible:pl-[15px] focus-visible:outline-none disabled:cursor-not-allowed
                    disabled:rounded-b-none disabled:border disabled:border-black-100 disabled:border-b-black-300
                    disabled:text-black-300 disabled:placeholder:text-black-300 py-[15px] hover:py-[14px]
                    focus-visible:py-[14px] disabled:p-[15px] focus-visible:border-focus-dark border-b-black
                    placeholder-shown:border-b-black-500 bg-black-100 pr-4 w-full focus-visible:bg-transparent
                    focus-visible:placeholder:text-transparent">
        </div>

    </div>
</template>
