<template>

      <ImageTextModule
      v-for="(img, index) in content"
      :key="index"
      :imgSrc="img.src"
      :imgAlt="img.alt"
      :title="img.title"
      :textOne="img.textOne"
      :textTwo="img.textTwo"
      :reversed="index %2 === 1"
      />
     
</template>

<script setup>
import ImageTextModule from '../module/ImageTextModule.vue';


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

<style>

</style>