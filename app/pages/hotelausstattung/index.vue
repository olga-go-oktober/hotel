<script setup lang="ts">
import HeroStageModule from '~/components/module/HeroStageModule.vue';
import TitelVue from '~/components/section/TitelVue.vue';
import TextCopy from '~/components/module/TextCopy.vue';
import ImageTextModule from '~/components/module/ImageTextModule.vue';
import Map from '~/components/module/Map.vue';
import ContactSection from '~/components/section/ContactSection.vue';
import Slider from '~/components/module/Slider.vue';


const content = [ 
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_hotelausstattung-zimmer-800x560.jpg',
    alt: 'sanastarComfort_mil02',
    title: 'Hotelzimmer',
    textOne: 'Wir haben für Sie Hotelzimmer-Kombinationen zusammengestellt, die alles bieten, was Ihre Gäste sich wünschen. Selbstverständlich bleiben Sie in der Gestaltung flexibel – Ihnen steht unser gesamtes Sortiment zur Verfügung.',
    textTwo: 'Massivholzmöbel mit natürlicher Oberflächen-Behandlung sind robust und pflegeleicht. Sie schaffen eine wohnlich-warme Atmosphäre, in der sich Ihre Gäste sehr wohlfühlen werden.',
    path: '/hotelausstattung/zimmer',
   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura-hotel-bettwaren-800x560.jpg',
    alt: 'Bettwaren',
    title: 'Bettwaren',
    textOne: 'Bleiben Sie auch bei der Bettausstattung für Ihre Gäste natürlich! Bei allnatura finden Sie Matratzen, Bettdecken und Kissen in bester, ökologisch sinnvoller Qualität.',
    textTwo: 'Freuen Sie sich über langlebige, pflegeleichte Naturbettwaren, die für die besonderen Ansprüche in der Hotellerie bestens geeignet sind. Wir beraten Sie gerne bei der Auswahl.',
    path: '/hotelausstattung/bettwaren',
   },
]
const sliderSource = [
    {
        imgSrc: '//hotel.allnatura.de/wp-content/uploads/allnatura-hotel-teppiche.jpg',
        imgAlt: 'Teppiche',

    },
]

</script>

<template>
    <main>
        <!-- slider/herosectin -->
        <HeroStageModule imgSrc="//hotel.allnatura.at/wp-content/uploads/allnatura_hotelausstattung-zimmer.jpg"
            imgAlt="allnatura_hotelausstattung" />
        <TitelVue class="main-title" title="Ihre Hotel-Ausstattung von allnatura" />
      
        <div class="richtext-wrapper md:text-md">
            <TextCopy textOne="Finden Sie hier das neue Traum-Hotelzimmer für Ihre Gäste" />
        </div>
        <!-- ImageTextModule with button -->

        <ImageTextModule 
        v-for="(img, index) in content" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
            :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" :reversed="index % 2 === 1"
            
            :show-button="true"
            type="button"
            
            :disabled="false"
            text="Mehr erfahren"
            :path="img.path"/>
            

        <!-- Base-Slider-Headline -->
         <Slider 
            v-for="(index, img) in sliderSource"
            :key="index"
            :imgSrc="img.imgSrc"
            :imgAlt="img.imgAlt"

         />



        <!-- Map -->
         <Map />

        <!-- ContactSection -->
        <ContactSection />


    </main>
</template>
