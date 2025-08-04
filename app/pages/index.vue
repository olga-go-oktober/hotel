<script setup lang="ts">
import SliderSection from '~/components/section/SliderSection.vue'
import TitelVue from '~/components/section/TitelVue.vue'
import ImageTextSection from '~/components/section/ImageTextSection.vue'
import GallerySection from '~/components/section/GallerySection.vue'
import LogoBlock from '~/components/section/LogoSection.vue'
import VorteilSection from '~/components/section/VorteilSection.vue'
import StatisticSection from '~/components/section/StatisticSection.vue'
import ContactSection from '~/components/section/ContactSection.vue'
import TextCopy from '~/components/module/TextCopy.vue'
import { GALLERY_HOTELZIMMER, GALLERY_PRODUKTVielfalt } from '~/constants/data'

definePageMeta({
  layout: 'default',
})

// SEO Meta Tags
useHead({
  title: 'allnatura Hotelausstattung - Nachhaltige Hotelzimmer Einrichtung',
  meta: [
    { name: 'description', content: 'Entdecken Sie nachhaltige Hotelausstattung von allnatura. 40 Jahre Erfahrung in ökologischer Hotelzimmer Einrichtung mit Bio-Matratzen, Bettwäsche und mehr.' },
    { name: 'keywords', content: 'Hotelausstattung, Bio-Matratzen, Hotelzimmer, nachhaltig, allnatura, ökologisch' },
    { property: 'og:title', content: 'allnatura Hotelausstattung - Nachhaltige Hotelzimmer Einrichtung' },
    { property: 'og:description', content: 'Entdecken Sie nachhaltige Hotelausstattung von allnatura. 40 Jahre Erfahrung in ökologischer Hotelzimmer Einrichtung.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' }
  ]
})

// Title and copy-text
const paragraph = [
  { textOne: "Seit über 40 Jahren steht allnatura für gesunden Schlaf und bewusstes Wohnen. Profitieren Sie von unserer Erfahrung und entdecken Sie, wie einfach nachhaltiges Leben sein kann." },
  { textOne: "Lassen Sie sich inspirieren – mit praktischen Tipps für ein natürliches Zuhause und ein rundum gutes Wohngefühl." }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <SliderSection />
    <TitelVue class="main-title" title="Die Vorteile Ihrer allnatura Hotelausstattung" />
    <div class="richtext-wrapper ">
      <TextCopy v-for="(text, index) in paragraph" :key="index" :textOne="text.textOne" />
    </div>    
    <TitelVue class="main-title" title="Entdecken Sie unsere Empfehlungen für Ihr Hotel:" />
    <ImageTextSection />
    <TitelVue class="main-title" title="Unsere Auszeichnungen, Partnerschaften und Referenzen:" />
    <LogoBlock />
    <TitelVue class="main-title" title="Hotelzimmer von allnatura" />
    <div class="richtext-wrapper ">
      <TextCopy textOne="Hier finden Sie von uns zusammengestellte Beispielzimmer:" />
    </div>
    <GallerySection :gallery="GALLERY_HOTELZIMMER" />
    <TitelVue class="main-title" title="Entdecken Sie unsere gesamte Produktvielfalt in unserem Shop" />
    <div class="richtext-wrapper ">
      <TextCopy textOne="Selbstverständlich steht unser gesamtes Sortiment auch für Geschäftskunden zur Verfügung. Sprechen Sie uns an für ein individuelles Angebot:" />
    </div>
    <GallerySection :gallery="GALLERY_PRODUKTVielfalt" />
    <VorteilSection />
    <StatisticSection />
    <TitelVue class="main-title" title="Ihr direkter Kontakt zu uns!" />
    <ContactSection />
  </main>
</template>
