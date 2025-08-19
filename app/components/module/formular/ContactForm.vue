<script setup lang="ts">
import { ref } from 'vue'

import FormButtonField from './FormButtonField.vue'
import FormInputField from './FormInputField.vue'
import FormTextField from './FormTextField.vue'
import FormCheckbox from './FormCheckbox.vue'
import Notification from './Notification.vue'
import TitelVue from '~/components/section/TitelVue.vue'
import ButtonBgGreen from '../../ui/ButtonBgGreen.vue'

const formFieldsOne = [
    { buttonId: "anrede", label: "Anrede", text: "Bitte wählen", required: true },

]

const formFieldsTwo = [
    { inputId: "nachname", placeholder: "Nachname", required: true },
    { inputId: "vorname", placeholder: "Vorname" },
    { inputId: "firma", placeholder: "Firma" },
    { inputId: "email", placeholder: "E-Mail Adresse", required: true },
]

const isSubmitted = ref(false)

function handleSubmit () {
    isSubmitted.value = true
    console.log("Formular wurde abgeschickt")
    // e-mail logic
}
</script>

<template>
    <div class="lg:grid lg:grid-cols-1 lg:gap-6">
        <TitelVue title="Bitte füllen Sie alle mit * gekennzeichneten Felder aus" />
        <div class="flex flex-col gap-6">
            <div class="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div class="card">

                    <form class="flex flex-col gap-y-6 mt-6 w-full">

                        <FormButtonField v-for="(item, index) in formFieldsOne" :key="index" :buttonId="item.buttonId"
                            :label="item.label" :text="item.text" :required="item.required" />
                        <FormInputField v-for="(item, index) in formFieldsTwo" :key="index" :inputId="item.inputId"
                            :label="item.placeholder" :placeholder="item.placeholder" :required="item.required" />

                    </form>

                </div>
                <div>
                    <form 
                    @submit.prevent="handleSubmit"
                    class="flex flex-col gap-y-6 mt-6 w-full">
                        <FormTextField />
                        <FormCheckbox />
                        <!-- button -->
                        <div class="mt-auto flex flex-col item-center gap-6 py-6 lg:gap-8 xl:flex-row">
                            <ButtonBgGreen
                         
                            type="submit"
                            :disabled= "false">
                            Abschicken</ButtonBgGreen>
                        </div>
                    </form>
                </div>

            </div>
            <section>
                <Notification />
            </section>
        </div>
    </div>
</template>
