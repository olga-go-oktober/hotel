<template>
  <div class="relative group">
    <!-- Main Menu Item -->
    <button
      @click="toggleDropdown"
      @mouseenter="showDropdown = true"
      @mouseleave="showDropdown = false"
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
    <transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0 transform scale-95"
      enter-to-class="opacity-100 transform scale-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100 transform scale-100"
      leave-to-class="opacity-0 transform scale-95"
    >
      <div
        v-show="showDropdown"
        @mouseenter="showDropdown = true"
        @mouseleave="showDropdown = false"
        class="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 z-50"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        <div class="py-1" role="none">
          <NuxtLink
            v-for="(item, index) in submenu"
            :key="index"
            :to="item.path"
            class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors duration-150"
            role="menuitem"
            @click="closeDropdown"
          >
            {{ item.menuItem }}
          </NuxtLink>
        </div>
      </div>
    </transition>
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
</script>

<style scoped>
/* Ensure dropdown appears above other elements */
.group:hover .group-hover\:block {
  display: block;
}
</style> 