<script setup lang="ts">
import TitelVue from '~/components/section/TitelVue.vue'
import SubTitle from '~/components/section/SubTitle.vue'
import TextCopy from '~/components/module/TextCopy.vue'
import VorteilSection from '~/components/section/VorteilSection.vue'
import ContactSection from '~/components/section/ContactSection.vue'

// SEO Meta Tags
useHead({
  title: 'Hotel Bettwaren - allnatura Hotelausstattung',
  meta: [
    { name: 'description', content: 'Entdecken Sie unsere hochwertigen Hotel Bettwaren. Von Bio-Matratzen bis Bettwäsche - nachhaltige Qualität für Ihren Hotelbetrieb.' },
    { name: 'keywords', content: 'Hotel Bettwaren, Bio-Matratzen, Bettwäsche, Kissen, Bettdecken, allnatura' },
    { property: 'og:title', content: 'Hotel Bettwaren - allnatura Hotelausstattung' },
    { property: 'og:description', content: 'Entdecken Sie unsere hochwertigen Hotel Bettwaren. Nachhaltige Qualität für Ihren Hotelbetrieb.' },
  ]
})

definePageMeta({
  layout: 'default',
})

// Content data
const content = [
  { textOne: "Entdecken Sie unsere umfassende Auswahl an Hotel Bettwaren. Von Bio-Matratzen bis hin zu luxuriöser Bettwäsche - wir bieten nachhaltige und hochwertige Lösungen für jeden Anspruch." },
  { textOne: "Unsere Bettwaren sind sorgfältig ausgewählt, um Ihren Gästen einen erholsamen und gesunden Schlaf zu ermöglichen. Alle Produkte entsprechen höchsten ökologischen Standards." }
]
</script>

<template>
  <main class="max-w-7xl mx-auto px-4">
    <TitelVue class="main-title" title="Hotel Bettwaren" />
    <SubTitle subtitle="Nachhaltige und hochwertige Bettwaren für Ihren Hotelbetrieb" />
    
    <div class="richtext-wrapper md:text-md mb-8">
      <TextCopy v-for="(text, index) in content" :key="index" :textOne="text.textOne" />
    </div>

    <!-- Bettwaren Kategorien -->
    <section class="py-12">
      <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <!-- Matratzen -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Bio-Matratzen</h3>
          <p class="text-gray-600 mb-4">
            Hochwertige Bio-Matratzen für optimalen Schlafkomfort und gesunden Schlaf.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Natürliche Materialien</li>
            <li>• Verschiedene Härtegrade</li>
            <li>• Orthopädisch getestet</li>
            <li>• Langlebige Qualität</li>
          </ul>
        </div>

        <!-- Bettwäsche -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Bettwäsche</h3>
          <p class="text-gray-600 mb-4">
            Luxuriöse Bettwäsche aus 100% Bio-Baumwolle für höchsten Komfort.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• 100% Bio-Baumwolle</li>
            <li>• Verschiedene Fadendichten</li>
            <li>• Pflegeleicht und langlebig</li>
            <li>• Individuelle Gestaltung</li>
          </ul>
        </div>

        <!-- Kissen & Bettdecken -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Kissen & Bettdecken</h3>
          <p class="text-gray-600 mb-4">
            Komfortable Kissen und Bettdecken für einen erholsamen Schlaf.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Natürliche Füllungen</li>
            <li>• Verschiedene Größen</li>
            <li>• Allergikerfreundlich</li>
            <li>• Atmungsaktiv</li>
          </ul>
        </div>

        <!-- Handtücher -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Handtücher</h3>
          <p class="text-gray-600 mb-4">
            Weiche und saugfähige Handtücher aus 100% Bio-Baumwolle.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• 100% Bio-Baumwolle</li>
            <li>• Verschiedene Größen</li>
            <li>• Schnelltrocknend</li>
            <li>• Langlebig</li>
          </ul>
        </div>

        <!-- Bademäntel -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Bademäntel</h3>
          <p class="text-gray-600 mb-4">
            Komfortable Bademäntel für den ultimativen Wellness-Komfort.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• 100% Baumwolle (kbA)</li>
            <li>• Verschiedene Größen</li>
            <li>• Weich und angenehm</li>
            <li>• Pflegeleicht</li>
          </ul>
        </div>

        <!-- Zusatzartikel -->
        <div class="bg-white rounded-lg shadow-md p-6">
          <h3 class="text-xl font-bold mb-4 text-black">Zusatzartikel</h3>
          <p class="text-gray-600 mb-4">
            Ergänzende Artikel für den perfekten Hotelaufenthalt.
          </p>
          <ul class="text-sm text-gray-600 space-y-2">
            <li>• Matratzenauflagen</li>
            <li>• Bettdecken</li>
            <li>• Zierkissen</li>
            <li>• Bettvorleger</li>
          </ul>
        </div>
      </div>
    </section>

    <VorteilSection />
    <ContactSection />
  </main>
</template> 