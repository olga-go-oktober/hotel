<template>
        <div class="flex grow flex-nowrap gap-2 py-[10px] md:px-[10px] xl:flex-1">
        <div class="flex">
            <component :is="icon" class="size-6 shrink-0 mr-2 "/>
        </div>
        <div class="mt-0.5 flex flex-col gap-2">
            <p class="hyphens-auto text-balance font-subline font-bold leading-[140%] lg:text-md text-black !text-wrap">{{ numberText }}</p>

            <div class="richtext-wrapper text-black !text-xs">
                <a :href="iconRef" target="_blank" rel="noopener noreferrer" class="block cursor-pointer fill-current !px-0 font-normal underline underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 hover:no-underline">
                    <span class="flex w-full items-center gap-2 active:text-black-500 flex-row ">
                        {{ infoLink }}
                    </span>
                </a>

            </div>
        </div>       
    </div>

</template>

<script setup>

defineProps({
    icon: Object,
    numberText: String,
    iconRef: String,
    infoLink: String

})
</script>

<style>

</style>