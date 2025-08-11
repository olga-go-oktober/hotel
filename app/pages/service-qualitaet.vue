<script setup lang="ts">
import HeroStageModule from '~/components/module/HeroStageModule.vue';
import TitelVue from '~/components/section/TitelVue.vue';
import TextCopy from '~/components/module/TextCopy.vue';
import VorteilModule from '~/components/module/VorteilModule.vue';
import { SERVICE_VORTEIL } from '~/constants/data';
import { SERVICE_EINRICHTUNG } from '~/constants/data';
import ContactSection from '~/components/section/ContactSection.vue';



</script>

<template>
    <!-- video in herostage-->
     <section>
        <a href="https://www.youtube.com/watch?v=i9BDwUkjm_A" target="_blankc">
            <HeroStageModule imgSrc="https://hotel.allnatura.de/wp-content/uploads/allnatura-video.jpg" imgAlt="allnatura-video"/>
        </a>
     </section>
     

    <!-- vorteilmodule SERVICE_VORTEILE -->
    <div class="flex flex-col gap-3 lg:flex-row">

    </div>
    <TitelVue title="allnatura bietet einfach mehr" />
    <div class="richtext-wrapper ">
        <TextCopy
            textOne="Bei uns werden Service und Qualität groß geschrieben! Entdecken Sie jetzt die Besonderheiten einer Hotelzimmer-Ausstattung von allnatura!" />
    </div>
    <section class="py-32">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid gap-6 md:grid-cols-3">

                <VorteilModule v-for="(item, index) in SERVICE_VORTEIL" :key="index" :imgSrc="item.src"
                    :imgAlt="item.alt" :title="item.title" :textOne="item.textOne" :textTwo="item.textTwo" />


            </div>
        </div>
    </section>
    <TitelVue title="Der Weg zu Ihrem allnatura-Zimmer" />
    <div class="richtext-wrapper ">
        <TextCopy
            textOne="Von der Planung bis zur Montage – mit allnatura haben Sie einen kompetenten Partner bei der Einrichtung Ihres Hotelzimmers zur Seite." />
    </div>
    <!-- vorteilmodule SERVICE_EINRICHTUNG-->
    <section class="py-32">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid gap-6 md:grid-cols-3">

                <VorteilModule v-for="(item, index) in SERVICE_EINRICHTUNG" :key="index" :imgSrc="item.src"
                    :imgAlt="item.alt" :title="item.title" :textOne="item.textOne" :textTwo="item.textTwo" />
            </div>
        </div>
    </section>
    <!-- contactSection -->
     <ContactSection />


</template>
