<script setup lang="ts">
import TitelVue from '~/components/section/TitelVue.vue'
import SubTitle from '~/components/section/SubTitle.vue'
import TextCopy from '~/components/module/TextCopy.vue'
import VorteilSection from '~/components/section/VorteilSection.vue'
import ContactSection from '~/components/section/ContactSection.vue'

// SEO Meta Tags
useHead({
  title: 'Hotelzimmer Ausstattung - allnatura Hotelausstattung',
  meta: [
    { name: 'description', content: 'Entdecken Sie unsere Hotelzimmer Ausstattung. Von Einzelzimmern bis Suiten - nachhaltige und komfortable Lösungen für Ihr Hotel.' },
    { name: 'keywords', content: 'Hotelzimmer, Hotelausstattung, Einzelzimmer, Doppelzimmer, Suite, allnatura' },
    { property: 'og:title', content: 'Hotelzimmer Ausstattung - allnatura Hotelausstattung' },
    { property: 'og:description', content: 'Entdecken Sie unsere Hotelzimmer Ausstattung. Nachhaltige und komfortable Lösungen für Ihr Hotel.' },
  ]
})

definePageMeta({
  layout: 'default',
})

// Content data
const content = [
  { textOne: "Entdecken Sie unsere umfassende Hotelzimmer Ausstattung. Von komfortablen Einzelzimmern bis hin zu luxuriösen Suiten - wir bieten nachhaltige und hochwertige Lösungen für jeden Anspruch." },
  { textOne: "Unsere Zimmerausstattung kombiniert modernen Komfort mit ökologischer Nachhaltigkeit. Jedes Detail ist sorgfältig ausgewählt, um Ihren Gästen ein unvergessliches Erlebnis zu bieten." }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <TitelVue class="main-title" title="Hotelzimmer Ausstattung" />
    <SubTitle subtitle="Nachhaltige und komfortable Lösungen für Ihr Hotel" />
    
    <div class="richtext-wrapper md:text-md mb-8">
      <TextCopy v-for="(text, index) in content" :key="index" :textOne="text.textOne" />
    </div>

    <!-- Zimmer Kategorien -->
    <section class="py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Einzelzimmer -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Einzelzimmer</h3>
          <p class="text-gray-600 mb-4">
            Komfortable Einzelzimmer mit allem, was Ihre Gäste für einen erholsamen Aufenthalt benötigen.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Einzelbetten in verschiedenen Größen</li>
            <li>• Bio-Matratzen für optimalen Schlaf</li>
            <li>• Nachhaltige Bettwäsche</li>
            <li>• Individuelle Gestaltungsmöglichkeiten</li>
          </ul>
        </div>

        <!-- Doppelzimmer -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Doppelzimmer</h3>
          <p class="text-gray-600 mb-4">
            Geräumige Doppelzimmer mit hochwertiger Ausstattung für Paare und Geschäftsreisende.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Doppelbetten und zwei Einzelbetten</li>
            <li>• Premium Matratzen und Kissen</li>
            <li>• Luxuriöse Bettwäsche</li>
            <li>• Flexible Raumaufteilung</li>
          </ul>
        </div>

        <!-- Suiten -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Suiten</h3>
          <p class="text-gray-600 mb-4">
            Exklusive Suiten mit erstklassiger Ausstattung für anspruchsvolle Gäste.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Luxuriöse Boxspringbetten</li>
            <li>• Premium Bettwaren</li>
            <li>• Individuelle Raumgestaltung</li>
            <li>• Zusätzliche Komfortartikel</li>
          </ul>
        </div>
      </div>
    </section>

    <VorteilSection />
    <ContactSection />
  </main>
</template> 