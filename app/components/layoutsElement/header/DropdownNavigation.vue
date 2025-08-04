<template>
  <div class="relative inline-block">
    <!-- Main Menu Item -->
    <button
      @click="toggleDropdown"
      @mouseenter="showDropdown = true"
      @mouseleave="handleMouseLeave"
      class="flex items-center gap-1 cursor-pointer fill-current !px-0 font-subline font-normal underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 no-underline hover:underline"
      :aria-expanded="showDropdown"
      aria-haspopup="true"
    >
      <span class="flex w-full items-center gap-2 active:text-black-500 flex-row">
        {{ menuItem }}
      </span>
      <!-- Dropdown Arrow -->
      <svg 
        class="w-4 h-4 transition-transform duration-200"
        :class="{ 'rotate-180': showDropdown }"
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="showDropdown"
      @mouseenter="showDropdown = true"
      @mouseleave="showDropdown = false"
      class="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-2xl border-2 border-gray-300 z-[9999]"
      style="position: absolute; z-index: 9999;"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="dropdown-button"
    >
      <div class="py-2" role="none">
        <NuxtLink
          v-for="(item, index) in submenu"
          :key="index"
          :to="item.path"
          class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-150 border-b border-gray-200 last:border-b-0"
          role="menuitem"
          @click="closeDropdown"
        >
          {{ item.menuItem }}
        </NuxtLink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

interface Props {
  menuItem: string;
  path: string;
  submenu: Array<{
    menuItem: string;
    path: string;
  }>;
}

defineProps<Props>();

const showDropdown = ref(false);

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function closeDropdown() {
  showDropdown.value = false;
}

function handleMouseLeave() {
  setTimeout(() => {
    showDropdown.value = false;
  }, 200);
}
</script>

<style scoped>
/* Force visibility */
.relative {
  position: relative !important;
}

/* Ensure dropdown is above everything */
[v-if] {
  position: absolute !important;
  z-index: 9999 !important;
  background: white !important;
  border: 2px solid #d1d5db !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}
</style> 