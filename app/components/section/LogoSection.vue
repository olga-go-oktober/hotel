<template>
  <div class="max-w-7xl mx-auto px-0">
    <div class="grid gap-6 md:grid-cols-4">
      <LogoModul
        v-for="(img, index) in logogrid"
        :key="index"
        :imgSrc="img.src"
        :imgAlt="img.alt"
        :imgRef="img.href"
      />
    </div>
  </div>  
</template>s

<script setup>
import LogoModul from '../module/LogoModul.vue'

const logogrid = [
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Henriette-300x146.png',
    alt: 'Stadthotel Henriette Vienna',
    href: "https://www.hotelhenriette.at/",
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/Kranzegger_Berheimat_Logo-300x117.png',
    alt: 'Kranzegger_Berheimat',
    href: 'https://www.kranzegger.de/',
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/nordseemuehle_catharina-300x188.png',
    alt: 'nordseemühle_catharina',
    href: 'https://www.nordseemuehle-catharina.de/'
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/birkelogo-300x185.jpg',
    alt: 'birkelogo',
    href: 'https://www.hotel-birke.de/'
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/1552551048-300x166.png',
    alt: 'bio_hotels',
    href: '#'
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/deutsche_umweltstiftung720x465-300x194.jpg',
    alt: 'deutsche_umweltstiftung',
    href: '#'
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/stv-fst.jpeg',
    alt: 'stv-fst',
    href: 'https://www.stv-fst.ch/'
    
  },
  {
    src: 'https://hotel.allnatura.de/wp-content/uploads/veganresort-300x63.jpg',
    alt: 'veganresort',
    href: 'https://veganresort.de/'
    
  },
]

</script>

<style scoped>

</style>
