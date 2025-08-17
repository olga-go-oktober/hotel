<script setup lang="ts">
import VorteilModule from './VorteilModule.vue';
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
  <!-- Map -->
  <section class="py-12">
    <div class="max-w-7xl mx-auto px-4">
      <div class="grid gap-6 md:grid-cols-2">
        <VorteilModule v-for="(img, index) in vorteilModule" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
          :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" />
      </div>     
    </div>
  </section>
</template>
