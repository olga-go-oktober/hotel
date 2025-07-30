<template>
  <div class="lazy-image-container">
    <img
      v-if="isLoaded"
      :src="src"
      :alt="alt"
      :class="imageClass"
      @load="onImageLoad"
      @error="onImageError"
    />
    <div 
      v-else 
      class="lazy-image-placeholder"
      :class="placeholderClass"
    >
      <div class="loading-spinner"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';

interface Props {
  src: string;
  alt: string;
  imageClass?: string;
  placeholderClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  imageClass: 'w-full h-full object-cover',
  placeholderClass: 'bg-gray-200 animate-pulse'
});

const isLoaded = ref(false);
const hasError = ref(false);

function onImageLoad() {
  isLoaded.value = true;
}

function onImageError() {
  hasError.value = true;
  console.error(`Failed to load image: ${props.src}`);
}

onMounted(() => {
  // Simple intersection observer for lazy loading
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        isLoaded.value = true;
        observer.unobserve(entry.target);
      }
    });
  });

  // Observe the component
  const element = document.querySelector('.lazy-image-container');
  if (element) {
    observer.observe(element);
  }
});
</script>

<style scoped>
.lazy-image-container {
  position: relative;
  overflow: hidden;
}

.lazy-image-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 200px;
}

.loading-spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style> 