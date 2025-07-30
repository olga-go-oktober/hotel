<template>
    <section class="relative max-w-9xl overflow-hidden 2xl:mx-auto 2xl:overflow-visible px-4 md:px-8">
      <div class="flex flex-wrap gap-6 rounded-[10px] border border-dark-grey bg-white p-6 ">        <!-- <div class="grid gap-6 md:grid-cols-2"> -->
            <ContactModule
                v-for="(item, index) in contactItems"
                :key="index"
                :icon="item.icon"
                :title="item.title"
                :text="item.text"
                :contact="item.contact"
                :iconRef="item.iconRef"
            />
        </div>
      <!-- </div>   -->
    </section>
</template>

<script setup>
import Dialog from '../icons/Dialog.vue';
import Phone from '../icons/Phone.vue';
import Mail from '../icons/Mail.vue'
import ContactModule from '../module/ContactModule.vue';
  
const contactItems = [

  { icon: Dialog, 
    title: 'Sprechen Sie uns an',
    text: '',
    contact:'Kontaktformular ', 
    iconRef: 'http://hotel.allnatura.at/kontakt/' 
  },
  { icon: Phone, 
    title: 'Rufen Sie uns an',
    text: '',
    contact:'+49 7173 9216 500', 
    iconRef: 'tel:+49717392160'

  },
  { icon: Mail, 
    title: 'Schreiben Sie uns eine E-Mail',
    text: '',
    contact:'hotel@allnatura.de', 
    iconRef: 'hotel@allnatura.de' 
  }   
]
</script>

<style scoped>
  
</style>