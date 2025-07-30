<script setup lang="ts">
defineProps ({
    imgSrc: String,
    imgAlt: String
})
</script>

<template>
    <section class="relative mx-4 max-w-8xl py-6 lg:mx-8 lg:py-8 2xl:mx-auto ">
            <!--  Overlay for better readability -->
        <div class="absolute inset-0 bg-gradient-to-r from-white/40  to-transparent"></div>
        <div class="contents size-full">
            <img
            class="object-left lg:aspect-[10/4] lg:h-auto h-[454px] rounded-[10px] w-screen object-cover" 
            :src="imgSrc" :alt="imgAlt">
        </div>
    </section>
</template>
