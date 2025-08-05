<script setup lang="ts">
import HeroStageModule from '~/components/module/HeroStageModule.vue';
import TitelVue from '~/components/section/TitelVue.vue';
import ContactSection from '~/components/section/ContactSection.vue';
import VorteilModule from '~/components/module/VorteilModule.vue';
import TextCopy from '~/components/module/TextCopy.vue';
import ContactForm from '~/components/module/formular/ContactForm.vue';

// VorteilModule
const vorteilModule = [
  {
    src: 'https://a.storyblok.com/f/294642/1342x1007/cd1f34128e/landkarte-showrooms_fr.jpg',
    alt: 'Exhibition',
    title: '',
    textOne: 'Flagship-Store/Schlafstudio: Fachberatung durch erfahrene Schlafexperten, eingeschränktes Sortiment',
    textTwo: 'Ausstellung: keine Fachberatung, eingeschränktes Sortiment',
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura-karte.png',
    alt: 'karte',
    title: '',
    textOne: 'Daten von OpenStreetMap - Veröffentlicht unter ODbL',
    textTwo: '',
  },
]
</script>

<template>
  <HeroStageModule imgSrc="//hotel.allnatura.at/wp-content/uploads/kontakt_allnatura_hotel.jpg" imgAlt="Kontakt" />
  <TitelVue class="main-title" title="Erleben auch Sie den Service von allnatura" />
  <div class="richtext-wrapper md:text-md">
    <TextCopy textOne="Sie werden begeistert sein!" />
  </div>
  <TitelVue class="main-title" title="Ihr direkter Kontakt zu uns" />
  <ContactSection />
  <!-- Contact form -->
  <ContactForm class="my-24" />

<!-- Map -->
  <TitelVue title="Wir helfen Ihnen gerne weiter!" />
  <div class="richtext-wrapper md:text-md">
    <TextCopy
      textOne="Rufen Sie uns einfach an, schreiben Sie ein E-Mail oder besuchen Sie uns in unserem Flagship-Store!" />
  </div>
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-6 md:grid-cols-2">
        <VorteilModule v-for="(img, index) in vorteilModule" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
          :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" />
      </div>
    </div>
  </section>
</template>
