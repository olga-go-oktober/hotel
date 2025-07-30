<script setup lang="ts">
import FooterText from '../layoutsElement/footer/FooterText.vue'
import FooterMenu from '../layoutsElement/footer/FooterMenu.vue'
import FooterContact from '../layoutsElement/footer/FooterContact.vue'
import FooterLogo from '../layoutsElement/footer/FooterLogo.vue'

const aboutText = 'allnatura ist Ihr Partner für natürliche Hotelausstattung. Wir bieten Ihnen ein abgestimmtes Sortiment für den gesunden Schlaf Ihrer Gäste!'

const menuLinksOne = [
  { text: 'Startseite', href: 'https://hotel.allnatura.de/' },
  { text: 'Hotelausstattung', href: 'https://hotel.allnatura.de/hotelausstattung/' },
  { text: 'Hotelzimmer', href: '/hotelzimmer' },
  { text: 'Bettwaren', href: '/bettwaren' },
  { text: 'Service & Qualität', href: 'https://hotel.allnatura.de/service-qualitaet/' },
  { text: 'Über uns', href: 'https://hotel.allnatura.de/ueber-uns-3/' },
]

const menuLinksTwo = [
  { text: 'Partnerprogramm', href: '/partnerprogramm' },
  { text: 'Bettenfachgeschäft', href: '/bettenfachgeschaeft' },
  { text: 'Kontakt', href: 'https://hotel.allnatura.de/kontakt-2/' },
  { text: 'Impressum', href: 'https://www.allnatura.de/hilfe-service/unser-service/impressum.html' },
  { text: 'Datenschutzerklärung', href: 'https://www.allnatura.de/hilfe-service/ihre-sicherheit/datenschutzerklaerung.html' },
  { text: 'AGB', href: '/wp-content/uploads/allnatura_agb-hotel_20230110.pdf' },
]

const contactData = {
  company: 'allnatura Vertriebs GmbH & Co. KG',
  address: 'Mögglinger Straße 71\n73540 Heubach',
  phone: '+49 7173 9216 – 500',
  email: 'hotel@allnatura.de', href: 'mailto:hotel@allnatura.de',
}
</script>

<template>
  <footer class="flex flex-col gap-12 mt-8 pt-8 lg:gap-8 lg:pb-8 bg-white border-t border-gray-300">
    <section class="hidden border-dark-grey lg:block">
      <div class="mx-auto max-w-7xl lg:grid lg:grid-cols-3 lg:gap-6 lg:px-8 lg:pb-8">
        <FooterText :title="'Über uns'" :text="aboutText" />
        <FooterMenu :title="'Menü'" :linksOne="menuLinksOne" :linksTwo="menuLinksTwo" />
        <FooterContact :title="'Kontakt'" :contact="contactData" />
      </div>
    </section>
    <!-- footerLogo -->
    <section class="flex w-full flex-col items-center gap-3 px-4 py-8 border-t border-gray-300">
      <FooterLogo />
    </section>
  </footer>
</template>
