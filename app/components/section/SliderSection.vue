<template>
  <section class="relative h-[70vh] overflow-hidden py-6 lg:my-8 lg:py-8 ">
    <div
      v-for="(slide, index) in slides"
      :key="index"
      :class="index === currentIndex ? 'opacity-100 z-10' : 'opacity-0 z-0'"
      :style="{ backgroundImage: `url(${slide.image})` }"
      class="absolute inset-0 bg-center bg-cover bg-no-repeat transition-opacity duration-700 ease-in-out rounded-[10px]"

  >
    <!--  Overlay for better readability -->
    <div class="absolute inset-0 bg-gradient-to-r from-white/60  to-transparent"></div>
    <!-- left-aligning text -->
      <div class="flex flex-col gap-6 absolute bottom-6 left-0 z-10 px-4 pb-6 lg:bottom-8 lg:px-12 lg:pb-12">
        <p class=" text-subline">
            {{ slide.text }}
          </p>
        <h1 class="hyphens-auto	text-balance pt-1 font-heading text-5xl font-semibold leading-[120%] md:text-6xl text-black line-clamp-3 lg:line-clamp-2">
          {{ slide.title }}
        </h1>
          
      </div>
    </div>
  </section>
</template>

<script setup>
  import { ref, onMounted } from 'vue'
  
  const slides = [
    {
      image: '//hotel.allnatura.de/wp-content/uploads/allnatura_hotelausstattung-startseite.jpg',
      title: 'Manufaktur-Qualität',
      text: 'Ökologisch nachhaltig hergestellte Produkte in höchster Qualität'
    },
    {
      image: '//hotel.allnatura.de/wp-content/uploads/allnatura_hotelausstattung-zimmer.jpg',
      title: 'Einfach Wohlfühlen',
      text: 'Hochwertige Produkte aus wertvollsten Naturmaterialien'
    },
    {
      image: '//hotel.allnatura.de/wp-content/uploads/allnatura-firmengebaude.jpg',
      title: 'Ihre Firma allnatura',
      text: 'Der Spezialist für gesundes Schlafen & Wohnen'
    }
  ]

  const currentIndex = ref(0)
  onMounted(() => {
    setInterval(() => {
      currentIndex.value = (currentIndex.value + 1) % slides.length
    }, 10000) // alle 10 Sekunden wechseln
  })
</script>