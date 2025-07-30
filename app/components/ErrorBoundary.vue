<template>
  <div v-if="error" class="error-boundary">
    <div class="max-w-7xl mx-auto px-4 py-8">
      <div class="text-center">
        <h2 class="text-2xl font-bold text-red-600 mb-4">
          Es ist ein Fehler aufgetreten
        </h2>
        <p class="text-gray-600 mb-6">
          Entschuldigung, etwas ist schiefgelaufen. Bitte versuchen Sie es später erneut.
        </p>
        <button 
          @click="resetError"
          class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Seite neu laden
        </button>
      </div>
    </div>
  </div>
  <slot v-else />
</template>

<script setup lang="ts">
import { ref, onErrorCaptured } from 'vue';

const error = ref<Error | null>(null);

onErrorCaptured((err: Error) => {
  error.value = err;
  console.error('Error caught by boundary:', err);
  return false; // Prevent error from propagating
});

function resetError() {
  error.value = null;
  window.location.reload();
}
</script>

<style scoped>
.error-boundary {
  min-height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style> 