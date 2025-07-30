<script setup lang="ts">
import SliderSection from '~/components/section/SliderSection.vue';
import TitelVue from '~/components/section/TitelVue.vue'
import TextCopy from '~/components/module/TextCopy.vue';
import SubTitle from '~/components/section/SubTitle.vue'
import VorteilSection from '~/components/section/VorteilSection.vue'
import ContactSection from '~/components/section/ContactSection.vue'
import ImageTextModule from '~/components/module/ImageTextModule.vue';
import VorteilModule from '~/components/module/VorteilModule.vue';

// ImageTextModule
const content = [
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/Familie_Olle_.jpg',
        alt: 'Familie Olle',
        title: 'Dieses Geschäftskonzept setzt sich nun seit insgesamt 40 Jahren durch.',
        textOne: 'Bereits vor der Gründung der Firma allnatura im Jahr 2001 waren Reinhard und Alexandra Olle im ökologischen Bereich des Schlafens und Wohnens tätig. Seit jeher ist es das Ziel der beiden Gründer von allnatura, ein harmonisches Zusammenspiel von Mensch und Natur zu schaffen.',
        textTwo: 'Seit 2016 führt Sohn Felix Olle als Geschäftsführer die hohen Ansprüche an Herkunft und Qualität der Naturwaren fort.'

    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura-hotel-service-qualitat-2-700x430.jpg',
        alt: 'allnatura-hotel-service-qualitat-2',
        title: 'Genießen Sie ökologisch nachhaltige allnatura-Produkte – höchste Qualität zu fairen Preisen!',
        textOne: 'Über die Jahre hat sich umfangreiches Wissen im Bereich des ökologischen Schlafens angesammelt, welches wir gerne an Sie weitergeben. Unsere hohen Qualitätsstandards werden regelmäßig mit Auszeichnungen aller Art bestätigt.',
        textTwo: 'All das bedingt unser starkes Wachstum der letzten Jahre, von dem wir Sie gerne mit profitieren lassen.'

    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/allnatura_gebaeude_neu-700x430.jpg',
        alt: 'allnatura_gebaeude_neu',
        title: 'allnatura-Produkte hautnah erleben – natürlich, hochwertig, eindrucksvoll!',
        textOne: 'Im Juli 2017 wurde unser neu errichtetes Firmengebäude mit Verkaufsfläche eröffnet. Aufgrund unseres Wachstums und steigender Mitarbeiterzahl folgte 2023 noch ein Erweiterungsbau. Sowohl beim Bau der Gebäude als auch bei der Inneneinrichtung wurden ausschließlich rein ökologische Baumaterialien verwendet. Damit setzt allnatura ein Zeichen für mehr Nachhaltigkeit und Umweltbewusstsein.',
        textTwo: 'Besuchen Sie uns jetzt und genießen Sie eine noch persönlichere und intensivere Beratung durch unser kompetentes Verkaufsteam!'

    },
]
const grid = [
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/nachhaltigkeit-3.jpg',
        alt: 'Vorteile Erfahrung',
        title: 'Erfahrung',
        textOne: 'Schon immer war es unser Ziel, eine dauerhafte Harmonie zwischen Mensch und Natur zu schaffen. Ökologie und Nachhaltigkeit haben bei allnatura Priorität.',
        textTwo: 'Alle unsere Projekte und Entscheidungen sind von Nachhaltigkeit und Kontinuität geprägt. Dieses stete und konsequente Handeln mit Blick auf die Zukunft führt zu Vertrauen und langfristigen Geschäftsbeziehungen. Auszeichnungen wie Wachstumschampion, Kundenliebling und bester Online-Shop stellen dies unter Beweis.',
        textThree: 'Als nachhaltiger Online-Fachhändler bieten wir unseren Kunden die deutschlandweit größte Auswahl an ökologischen Bettwaren an. Auch unser neues Firmengebäude mit integriertem Bettenfachgeschäft ist ein nachhaltiges Vorzeigeprojekt.'
    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/vorteile_erfahrung_720x720-1-500x500.jpg',
        alt: 'Vorteile Erfahrung',
        title: 'Erfahrung',
        textOne: 'Profitieren Sie bei der Ausstattung Ihres Hotelzimmers von 40 Jahren Erfahrung im Schlafbereich!',
        textTwo: 'Alle unsere Projekte und Entscheidungen sind von Nachhaltigkeit und Kontinuität geprägt. Dieses stete und konsequente Handeln mit Blick auf die Zukunft führt zu Vertrauen und langfristigen Geschäftsbeziehungen. Auszeichnungen wie Wachstumschampion, Kundenliebling und bester Online-Shop stellen dies unter Beweis.',
        textThree: 'Als nachhaltiger Online-Fachhändler bieten wir unseren Kunden die deutschlandweit größte Auswahl an ökologischen Bettwaren an. Auch unser neues Firmengebäude mit integriertem Bettenfachgeschäft ist ein nachhaltiges Vorzeigeprojekt.'
    },
]
</script>

<template>
    <main class="max-w-7xl mx-auto px-4">
        <SliderSection />
        <TitelVue class="main-title" title="40 Jahre Erfahrung" />
        <SubTitle subtitle="Entdecken Sie hier die Geschichte der Firma allnatura" />
        <ImageTextModule v-for="(img, index) in content" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
            :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" :reversed="index % 2 === 1" />
        <TitelVue class="main-title" title="Unsere Werte" />
        <SubTitle subtitle="Wofür die Firma allnatura steht" />
        <section class="py-32">
            <div class="max-w-7xl mx-auto px-4">
                <div class="grid gap-6 md:grid-cols-2">
                    <VorteilModule v-for="(img, index) in grid" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
                        :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" :textThree="img.textThree" />
                </div>
            </div>
        </section>


        <ContactSection />
    </main>
</template>
