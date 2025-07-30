<script setup lang="ts">
import HeaderNavSection from '~/components/layoutsElement/HeaderNavSection.vue';
import FooterSection from '~/components/layoutsElement/FooterSection.vue';
import ErrorBoundary from '~/components/ErrorBoundary.vue';
</script>

<template>
  <div>
    <ErrorBoundary>
      <HeaderNavSection />
      <main>
        <slot />
      </main>
      <FooterSection />
    </ErrorBoundary>
  </div>
</template>
