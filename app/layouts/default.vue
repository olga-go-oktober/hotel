<script setup lang="ts">
import HeaderNavSection from '~/components/layoutsElement/HeaderNavSection.vue';
import  FooterSection from '~/components/layoutsElement/FooterSection.vue'
</script>

<template>
    <div>
        <HeaderNavSection/>
        <slot />
        <FooterSection />
    </div>
</template>
