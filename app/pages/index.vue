<script setup lang="ts">
import SliderSection from '~/components/section/SliderSection.vue'
import TitelVue from '~/components/section/TitelVue.vue'
import SubTitle from '~/components/section/SubTitle.vue'
import ImageTextSection from '~/components/section/ImageTextSection.vue'
import GallerySection from '~/components/section/GallerySection.vue'
import LogoBlock from '~/components/section/LogoSection.vue'
import VorteilSection from '~/components/section/VorteilSection.vue'
import StatisticSection from '~/components/section/ContactSection.vue'
import ContactSection from '~/components/section/ContactSection.vue'
import TextCopy from '~/components/module/TextCopy.vue'

definePageMeta({
  layout: 'default',
})

// Title and copy-text
const paragraph = [
  { textOne: "Seit über 40 Jahren steht allnatura für gesunden Schlaf und bewusstes Wohnen. Profitieren Sie von unserer Erfahrung und entdecken Sie, wie einfach nachhaltiges Leben sein kann.." },
  { textOne: "Lassen Sie sich inspirieren – mit praktischen Tipps für ein natürliches Zuhause und ein rundum gutes Wohngefühl." }
]

// GallerySection
const galleryHotelzimmer = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M1_Det_02205_19-1024x576.jpg',
    alt: 'Einzelbett "Dormida"',
    caption: 'Einzelzimmer „Dormida“'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M2_Det_01_02216_19-1024x576.jpg',
    alt: 'Doppelbett "Dormida',
    caption: 'Doppelzimmer „Dormida“'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M2_Det_03_02218_19-1024x576.jpg',
    alt: 'Doppelbett "Verona“',
    caption: 'Doppelzimmer „Verona“'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_01_02186_19-1-1024x724.jpg',
    alt: 'Doppelbett "Svariata',
    caption: 'Suite „Svariata“'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_04_02189_19-1024x724.jpg',
    alt: 'Boxspringbett "Savalis-Comfort"',
    caption: 'Suite „Savalis“'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_Hotel_M3_Bett_05_02190_19-1024x724.jpg',
    alt: 'Doppelbett "Cubus"',
    caption: 'Suite „Cubus“'
  }
]

const galleryProduktvielfalt = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/sanastarComfort_mil02-1024x576.jpg',
    alt: 'sanastarComfort_mil02',
    caption: 'Öko-Naturmatratzen'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/kissen-1024x576.jpg',
    alt: 'kissen',
    caption: 'Kopfkissen aus natürlichen Rohstoffen'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bettdecken-1024x576.webp',
    alt: 'bettdecken',
    caption: 'Bettdecken aus Naturfasern'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/base_-11352_base_big-1024x576.jpg',
    alt: 'base_-11352_base_big',
    caption: 'Handtücher aus 100% Bio-Baumwolle'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bademantel-1024x576.webp',
    alt: 'bademantel',
    caption: 'Bademäntel aus 100% Baumwolle (kbA)'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/bettwaesche-1024x576.webp',
    alt: 'bettwäsche',
    caption: 'Bio-Bettwäsche aus 100% Bio-Baumwolle'
  }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <SliderSection />
    <TitelVue class="main-title" title="Die Vorteile Ihrer allnatura Hotelausstattung" />
    <div class="richtext-wrapper md:text-md">
      <TextCopy v-for="(text, index) in paragraph" :key="index" :textOne="text.textOne" />
    </div>    
    <TitelVue class="main-title" title="Entdecken Sie unsere Empfehlungen für Ihr Hotel:" />
    <ImageTextSection />
    <TitelVue class="main-title" title="Unsere Auszeichnungen, Partnerschaften und Referenzen:" />
    <LogoBlock />
    <TitelVue class="main-title" title="Hotelzimmer von allnatura" />
    <SubTitle subtitle="Hier finden Sie von uns zusammengestellte Beispielzimmer:" />
    <GallerySection :gallery="galleryHotelzimmer" />
    <TitelVue class="main-title" title="Entdecken Sie unsere gesamte Produktvielfalt in unserem Shop" />
    <SubTitle
      subtitle="Selbstverständlich steht unser gesamtes Sortiment auch für Geschäftskunden zur Verfügung. Sprechen Sie uns an für ein individuelles Angebot:" />
    <GallerySection :gallery="galleryProduktvielfalt" />
    <VorteilSection />
    <StatisticSection />
    <TitelVue class="main-title" title="Ihr direkter Kontakt zu uns!" />
    <ContactSection />

  </main>
</template>
