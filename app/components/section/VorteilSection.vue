<template>
    <section class="py-32">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid gap-6 md:grid-cols-3">
          <VorteilModule
            v-for="(img, index) in grid"
            :key="index"
            :imgSrc="img.src"
            :imgAlt="img.alt"
            :title="img.title"
            :textOne="img.textOne"
            :textTwo="img.textTwo"
          />
        </div>
      </div>  
    </section>
</template>
  
<script setup>
import VorteilModule from '../module/VorteilModule.vue'

const grid = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_erfahrung_720x720-1-500x500.jpg',
    alt: 'Vorteile Erfahrung',
    title: 'Erfahrung',
    textOne: 'Profitieren Sie bei der Ausstattung Ihres Hotelzimmers von 40 Jahren Erfahrung im Schlafbereich!',
    textTwo: 'allnatura ist Ihr Spezialist für qualitativ hochwertige Produkte rund ums Schlafen – auch Sonderanfertigungen sind für uns kein Problem.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_nachhaltigkeit_500x500.jpg',
    alt: 'Vorteile Nachhaltigkeit',
    title: 'Nachhaltigkeit',
    textOne: 'allnatura bietet Ihnen hochwertige handwerklich hergestellte Produkte aus Deutschland oder dem benachbarten europäischen Ausland!',
    textTwo: 'Unsere Partner-Manufakturen fertigen Ihre neuen Möbel handwerklich und mit viel Liebe zum Detail.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_auswahl_500x500.jpg',
    alt: 'Vorteile Auswahl',
    title: 'Auswahl',
    textOne: 'Richten Sie aus unserem Sortiment mit über 1.000 Produkten Ihre neuen Hotelzimmer ein – Ihre Gäste werden es lieben!',
    textTwo: 'Stellen Sie sich Ihre persönliche Individuallösung aus einem großen Gesamtsortiment selbst oder gerne auch mit unserer Hilfe zusammen.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_qualitaet_500x500.jpg',
    alt: 'Vorteile Qualitaet',
    title: 'Qualität',
    textOne: 'Ökologische Qualität zu fairen Preisen!',
    textTwo: 'Wir legen höchsten Wert auf qualitativ hochwertige, nachhaltige Produktion. Die Ergebnisse unserer Schadstoffprüfungen sowie zahlreiche Testsiege stellen dies unter Beweis – überzeugen Sie sich selbst.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_beratung_500x500.jpg',
    alt: 'Vorteile Beratung',
    title: 'Beratung',
    textOne: 'Ein starkes Team sorgt für das Wohlbefinden Ihrer Gäste!',
    textTwo: 'Wir lassen Sie mit Ihrer Zimmerplanung nicht alleine! Unsere Experten beraten Sie individuell und kompetent. Kontaktieren Sie uns. Wir sind gerne für Sie da.'
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_faire_preise_500x500.jpg',
    alt: 'Vorteile Faire Preise',
    title: 'Faire Preise',
    textOne: 'Hohe Qualität zu fairen Preisen!',
    textTwo: 'Bei allnatura erhalten Sie neben der Best-Preis-Garantie auch attraktive Preisstaffeln und Mengenrabatte. '
  }

]
</script>

