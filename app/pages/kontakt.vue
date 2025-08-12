<script setup lang="ts">
import HeroStageModule from '~/components/module/HeroStageModule.vue';
import TitelVue from '~/components/section/TitelVue.vue';
import ContactSection from '~/components/section/ContactSection.vue';
import TextCopy from '~/components/module/TextCopy.vue';
import ContactForm from '~/components/module/formular/ContactForm.vue';
import Map from '~/components/module/Map.vue';


// VorteilModule

</script>

<template>
  <HeroStageModule imgSrc="//hotel.allnatura.at/wp-content/uploads/kontakt_allnatura_hotel.jpg" imgAlt="Kontakt" />
  <TitelVue class="main-title" title="Erleben auch Sie den Service von allnatura" />
  <div class="richtext-wrapper md:text-md">
    <TextCopy textOne="Sie werden begeistert sein!" />
  </div>
  <TitelVue class="main-title" title="Ihr direkter Kontakt zu uns" />
  <ContactSection />
  <!-- Contact form -->
  <ContactForm class="my-24" />


  <TitelVue title="Wir helfen Ihnen gerne weiter!" />
  <div class="richtext-wrapper md:text-md">
    <TextCopy
      textOne="Rufen Sie uns einfach an, schreiben Sie ein E-Mail oder besuchen Sie uns in unserem Flagship-Store!" />
  </div>
  <!-- Map -->
   <Map />

</template>
