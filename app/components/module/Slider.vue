<script setup lang="ts">
import { ref } from 'vue';
import TitelVue from '../section/TitelVue.vue';
import ButtonSlider from '../ui/ButtonSlider.vue';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

defineProps ({
    slides: {
        type: Array as () => { imgSrc: string; imgAlt: string } [],
    required: true,
    }
})
</script>

<template>
    <section class="flex flex-col gap-4">
        <div class="flex flex-col gap-8 2xl:px-1">
            <div class="flex items-end gap-8 lg:min-h[72] justify-between">
                <TitelVue title="Slider Title" />
                <!-- Slider's buttons -->
                <div class="hidden self-end lg:flex">
                    <!-- button left -->
                    <ButtonSlider class="rotate-90" />
                    <!-- button right -->
                    <ButtonSlider class="-rotate-90" />
                    <!-- swiper slider -->
                    <div class="flex w-full flex-col gap-6 lg;flex-row">
                        <div
                            class="swiper swiper-initialized swiper-horizontal swiper-free-mode box-content w-full hasScrollbar !overflow-visible swiper-backface-hidden">
                            <div class="swiper-wrapper">
                                <div  
                                
                                class="swiper-slide swiper-slider-active">
                                    <img :imgSrc="imgSrc" :imgAlt="imgAlt">

                                </div>

                            </div>

                        </div>

                    </div>





                </div>

            </div>

        </div>

    </section>
</template>

<style scoped>
.swiper-wrapper {
    transform: translate3d(0px, 0px, 0px);
}

.swiper-slide {
    
    margin-right: 24px
}
</style>
