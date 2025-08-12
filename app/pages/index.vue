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


const content = [ 
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/sanastarComfort_mil02-300x169.jpg',
    alt: 'sanastarComfort_mil02',
    title: 'Matratze „Sanastar-Maxima“',
    textOne: 'Ob klein oder groß, leicht oder schwer, die allnatura Hotel-Matratze passt sich all Ihren Gästen an. Der Körper wird durch den 100 % Naturlatexkern angenehm gestützt und gelagert. Die darunterliegende Kokos-Schicht verleiht der Matratze einen Touch an Festigkeit.',
    textTwo: 'Zur Reinigung lässt sich der waschbare Matratzenbezug aus Lyocell/Tencel durch den obenliegenden Reißverschluss schnell und rückenschonend abziehen. Mit der 23 cm hohen Matratze aus Naturmaterialien schenken Sie Ihren Gästen luxuriösen Schlafkomfort.'

   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Allnatura_Oberbett_ultraleicht_E02_01709_21-300x169.jpg',
    alt: 'Allnatura_Oberbett_ultraleicht_E02_01709_21',
    title: 'Kissen „Hevea“',
    textOne: 'Auf diesem hochwertigen Kissen können Ihre Gäste Nacht für Nacht entspannt Kraft für den nächsten Tag tanken. Das Kissen ist mit Latexflocken aus 100 % Naturkautschuk gefüllt und passt sich perfekt den verschiedenen Bedürfnissen Ihrer Gäste an.',
    textTwo: 'Das pflegeleichte Kissen lässt sich durch Aufschütteln wieder in Form bringen und die Bezüge sind waschbar. Handmade in Germany und in <a href="https://hotel.allnatura.de/bettwaren" target="_blank">vielen unterschiedlichen</a> Größen erhältlich.'
   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Allnatura_Oberbett_ultraleicht_E01_01708_21-1-300x169.jpg',
    alt: 'Allnatura_Oberbett_ultraleicht_E01_01708_21',
    title: 'Bettdecke „Lyovita“',
    textOne: 'Von dieser Bettdecke werden Ihre Gäste begeistert sein. Die kuschelige und innovative Lyocell-Füllung sorgt mit ihren temperaturausgleichenden und feuchtigkeitsregulierenden Eigenschaften für einen entspannten Schlaf – auch bei Allergikern.',
    textTwo: 'Die sehr atmungsaktive Decke wurde speziell für den Hotel-Bedarf entwickelt. Sie kann problemlos gewaschen und in den Trockner gegeben werden. Die Hotel-Bettdecke „Lyovita“ ist handmade in Germany und in <a href="https://hotel.allnatura.de/bettwaren" target="_blank">allen gängigen Bettdeckengrößen</a> erhältlich.'
   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/base_-11352_base_big-300x169.jpg',
    alt: 'base_-11352_base_big',
    title: 'Handtuch „Lavari“',
    textOne: 'Diese schönen Handtücher werden Ihre Gäste mit ihrer Weichheit und der nachhaltigen Qualität verzaubern. Die 50×100 cm großen Handtücher sind aus 100 % Bio-Baumwolle und GOTS-zertifiziert. Wählen Sie aus 8 Farben die passende für Ihr Hotel.',
    textTwo: ''
   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/felpa-300x169.jpg',
    alt: 'felpa',
    title: 'Bademantel „Felpa“',
    textOne: 'Mit dem molligen Frottee-Stoff aus 100 % Baumwolle verwöhnen Sie Ihre Gäste beim luxuriösen Wellness-Urlaub. Er ist GOTS-zertifiziert, hat einen schicken Kimono-Kragen, Bindegürtel, praktische Taschen und ist in natur und dunkelgrau verfügbar.',
    textTwo: ''
   },
   {
    src: 'https://hotel.allnatura.de/wp-content/uploads/natura-300x169.jpg',
    alt: 'natura',
    title: 'Bettwäsche „Natura“',
    textOne: 'Mit Bettwäsche von allnatura begeistern Sie Ihre Gäste mit einem kuschelweichen Schlafgefühl aus 100 % Bio-Baumwolle.',
    textTwo: 'Die Naturbaumwoll-Bettwäsche „Natura“ hüllt Ihre Gäste in glatt-weichen Cretonne-Stoff, die Streifensatin-Bettwäsche „Kastilia“ umschmeichelt Ihre Gäste elegant mit glänzendem Baumwoll-Satin. Beide Bettwäschen sind in natürlichem Crèmeton gehalten und sind mit hochwertigen Steinnuss-Knöpfen ausgestattet.'
   },
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
