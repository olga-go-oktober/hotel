<script setup>
import StatisticModule from '../module/StatisticModule.vue'
import Building from '../icons/Building.vue';
import Leaf from '../icons/Leaf.vue';
import Usercircle from '../icons/Usercircle.vue'
import Heart from '../icons/Heart.vue';

const statistic = [
  {
    icon: Leaf,
    numberText: '1340 Ökologische Produkte',
    infoLink: 'Mehr Informationen',
    iconRef: 'https://hotel.allnatura.de/hotelausstattung/'

  },
  {
    icon: Heart,
    numberText: 'Profitieren Sie von 40 Jahren Fachwissen',
    infoLink: 'Von Anfang an natürlich',
    iconRef: 'https://www.allnatura.de/allnatura-essenziell/unsere-philosophie.html'

  },
  {
    icon: Building,
    numberText: '149 ausgestattete Hotels und Pensionen',
    infoLink: 'Mehr Informationen',
    iconRef: 'https://hotel.allnatura.de/hotelausstattung/'
  },
  {
    icon: Usercircle,
    numberText: '2 persönliche Ansprechpartner',
    infoLink: 'Kontakt aufnehmen',
    iconRef: 'https://hotel.allnatura.de/hotelausstattung/'
  },
]
</script>

<template>
  <section class="relative max-w-9xl overflow-hidden 2xl:mx-auto 2xl:overflow-visible mb-24 px-4 md:px-8">
    <div
      class="grid max-w-8xl grid-cols-1 gap-6 rounded-[10px] px-4 py-6 md:grid-cols-3 md:flex-row md:gap-y-11 md:px-8 lg:gap-y-6 xl:flex xl:grid-cols-3 xl:flex-nowrap xl:justify-between 2xl:mx-auto bg-light-grey">
      <StatisticModule v-for="(stat, index) in statistic" :key="index" :icon="stat.icon" :numberText="stat.numberText"
        :infoLink="stat.infoLink" :iconRef="stat.iconRef" />
    </div>
  </section>
</template>
