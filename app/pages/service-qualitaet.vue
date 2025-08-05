<script setup lang="ts">
import TitelVue from '~/components/section/TitelVue.vue';
import TextCopy from '~/components/module/TextCopy.vue';
import VorteilModule from '~/components/module/VorteilModule.vue';
import { SERVICE_VORTEIL } from '~/constants/data';


</script>

<template>
    <!-- video -->
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

</template>
