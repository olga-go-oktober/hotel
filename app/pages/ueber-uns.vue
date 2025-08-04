<script setup lang="ts">
import SliderSection from '~/components/section/SliderSection.vue';
import TitelVue from '~/components/section/TitelVue.vue'
import SubTitle from '~/components/section/SubTitle.vue'
import ContactSection from '~/components/section/ContactSection.vue'
import ImageTextModule from '~/components/module/ImageTextModule.vue';
import VorteilModule from '~/components/module/VorteilModule.vue';

import HeroStageModule from '~/components/module/HeroStageModule.vue';

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
// VorteilModule
const vorteilModuleOne = [
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/nachhaltigkeit-3.jpg',
        alt: 'nachhaltigkeit',
        title: 'Nachhaltigkeit',
        textOne: 'Schon immer war es unser Ziel, eine dauerhafte Harmonie zwischen Mensch und Natur zu schaffen. Ökologie und Nachhaltigkeit haben bei allnatura Priorität.',
        textTwo: 'Alle unsere Projekte und Entscheidungen sind von Nachhaltigkeit und Kontinuität geprägt. Dieses stete und konsequente Handeln mit Blick auf die Zukunft führt zu Vertrauen und langfristigen Geschäftsbeziehungen. Auszeichnungen wie Wachstumschampion, Kundenliebling und bester Online-Shop stellen dies unter Beweis.',
        textThree: 'Als nachhaltiger Online-Fachhändler bieten wir unseren Kunden die deutschlandweit größte Auswahl an ökologischen Bettwaren an. Auch unser neues Firmengebäude mit integriertem Bettenfachgeschäft ist ein nachhaltiges Vorzeigeprojekt.'
    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/innovation-2.jpg',
        alt: 'innovation',
        title: 'Innovation',
        textOne: 'Nachhaltige Unternehmenspolitik heißt für uns auch, bewährtes ständig zu verbessern und Neues zu schaffen. Dies sichert unsere Wettbewerbsfähigkeit langfristig.',
        textTwo: 'Wir fördern und fordern Kreativität und Eigeninitiative, verlieren dabei aber nie unseren Fokus auf das harmonische Miteinander von Mensch und Natur. Nicht nur internes Know-How, sondern auch Rückmeldungen von Kunden und Geschäftspartnern sind für uns wichtig, um in unseren Märkten führende Lösungen zu entwickeln.',
        textThree: 'Veränderte Marktbedingungen erfordern spezifisches, aktives Handeln. Defensive Anpassungsstrategien wie Rationalisierung, Personalabbau oder Standortverlagerung kommen für uns nicht in Frage. Wir konzentrieren uns stattdessen auf kundenorientierte Innovationen.'
    },
]
const vorteilModuleTwo = [
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/soziale_verantwortung-2.jpg',
        alt: 'soziale_verantwortung',
        title: 'Soziale Verantwortung',
        textOne: 'Nachhaltiges Personalmanagement und Diversity Management sind für uns selbstverständlich.',
        textTwo: 'denn ein Unternehmen kann nur dann erfolgreich sein, wenn es zufriedene Mitarbeiter, Partner und Kunden hat.',
    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/ökologische_verantwortung.jpg',
        alt: 'ökologische_verantwortung',
        title: 'Ökologische Verantwortung',
        textOne: 'Wir zeigen Engagement für ökologische Projekte und fördern diese aktiv.',
        textTwo: 'Nachhaltige und starke Partnerschaften sind hier von größter Bedeutung, denn nur gemeinsam kann eine dauerhafte Harmonie zwischen Mensch und Natur geschaffen werden.',
    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/ökonomische_verantwortung.jpg',
        alt: 'ökonomische_verantwortung',
        title: 'Ökonomische Verantwortung',
        textOne: 'allnatura möchte langfristig am Markt agieren und sich seine nachhaltige Position sichern.',
        textTwo: 'Nachhaltiges und gesundes Wachstum sichern unsere unternehmerische Unabhängigkeit.',
    },
]
const vorteilModuleThree = [
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/transparenz_qualitaet-2-1.jpg',
        alt: 'transparenz_qualitaet-2',
        title: 'Transparenz & Qualität',
        textOne: 'Wir bieten unseren Kunden mit über 1300 ökologisch und orthopädisch konsequenten Produkten eine breite Auswahl an schadstoffgeprüften Artikeln für den Bereich Schlafen und Wohnen.',
        textTwo: 'Unseres Sortiments wird in Deutschland oder in der Europäischen Union hergestellt. Viele unserer hochwertigen Naturwaren sind Eigenentwicklungen, die es so nur bei allnatura gibt. Unser Fokus liegt immer auf der hohen Qualität unserer Produkte und der Transparenz gegenüber unseren Kunden, Mitarbeitern und Partnern.',
        textThree: 'Zur Qualitätskontrolle lassen wir alle Rohstoffe für unsere Produkte regelmäßig stichprobenartig von einem unabhängigen Institut auf Schadstoffe prüfen stellen die Prüfberichte ganz im Sinne des Transparenz-Gedankens online zur Verfügung.'
    },
    {
        src: 'https://hotel.allnatura.de/wp-content/uploads/fairness_vertrauen_ehrlichkeit-1.jpg',
        alt: 'fairness_vertrauen_ehrlichkeit',
        title: 'Fairness, Vertrauen & Ehrlichkeit',
        textOne: 'Fairness ist für uns nicht nur eine Floskel. Unser Denken und Handeln richtet sich stets auf eine langfristige Zusammenarbeit, welche auf Vertrauen und Ehrlichkeit baut.',
        textTwo: 'Ein fairer Umgang miteinander sowie eine offene und ehrliche Kommunikation auf Augenhöhe mit unseren Mitarbeitern, Partnern und Kunden über aktuelle und zukünftige Unternehmensentwicklungen sind für uns selbstverständlich. Grundlage dafür schaffen flache Hierarchien und ein kollegiales Miteinander.',
        textThree: 'Wir stehen hinter dem, was wir tun! Unsere Leidenschaft, unser Wissensdurst und der Spaß an der Arbeit sind dabei die Quelle unserer Kreativität. Wir zeigen Initiative, nehmen Herausforderungen gerne an und sind stolz auf unsere Konzepte und Ideen!'
    },
]

</script>

<template>
    <HeroStageModule imgSrc="//hotel.allnatura.at/wp-content/uploads/allnatura_Belegschaft-6.jpg" imgAlt="ueber-uns" />
    <TitelVue class="main-title" title="40 Jahre Erfahrung" />
    <SubTitle subtitle="Entdecken Sie hier die Geschichte der Firma allnatura" />
    <ImageTextModule v-for="(img, index) in content" :key="index" :imgSrc="img.src" :imgAlt="img.alt" :title="img.title"
        :textOne="img.textOne" :textTwo="img.textTwo" :reversed="index % 2 === 1" />
    <TitelVue class="main-title" title="Unsere Werte" />
    <SubTitle subtitle="Wofür die Firma allnatura steht" />
    <!-- Three VorteilModule -->
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid gap-6 md:grid-cols-2">
                <VorteilModule v-for="(img, index) in vorteilModuleOne" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
                    :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" :textThree="img.textThree" />
            </div>
        </div>
    </section>
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid gap-6 md:grid-cols-3">
                <VorteilModule v-for="(img, index) in vorteilModuleTwo" :key="index" :imgSrc="img.src" :imgAlt="img.alt"
                    :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo" />
            </div>
        </div>
    </section>
    <section class="py-12">
        <div class="max-w-7xl mx-auto px-4">
            <div class="grid gap-6 md:grid-cols-2">
                <VorteilModule v-for="(img, index) in vorteilModuleThree" :key="index" :imgSrc="img.src"
                    :imgAlt="img.alt" :title="img.title" :textOne="img.textOne" :textTwo="img.textTwo"
                    :textThree="img.textThree" />
            </div>
        </div>
    </section>
    <ContactSection />
</template>
