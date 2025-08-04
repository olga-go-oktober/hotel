<script setup lang="ts">
import FormularField from './FormularField.vue';

const formFieldsOne = [
    {buttonId: "anrede", label: "Anrede", text: "Please choose an option"},
    {buttonId: "vorname", label: "Vorname", text: "#"},
    {buttonId: "nachname", label: "Nachname", text: "#"}
]

const formFieldsTwo = [
    {buttonId: "firma", label: "Firma", text: "#"},
    {buttonId: "email", label: "E-Mail", text: "#"},
   ]

const formFieldsThree = [
    {buttonId: "betreff", label: "Betreff", text: "#"},
    {buttonId: "nachricht", label: "Ihre Nachricht", text: "#"}
]

</script>

<template>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <FormularField 
        v-for="(item, index) in formFieldsOne" :key="index"
        :buttonId="item.buttonId" :label="item.label" :text="item.text" />
    </div>
    <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <FormularField 
        v-for="(item, index) in formFieldsTwo" :key="index"
        :buttonId="item.buttonId" :label="item.label" :text="item.text" />
    </div>
    <div class="grid gap-6 md:grid-cols-1">
        <FormularField 
        v-for="(item, index) in formFieldsThree" :key="index"
        :buttonId="item.buttonId" :label="item.label" :text="item.text" />

    </div>



</template>
