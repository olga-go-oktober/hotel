<template>
  <div class="relative inline-block">
    <!-- Main Menu Item -->
    <div
      @click="toggleDropdown"
      class="flex items-center gap-1 cursor-pointer font-subline font-normal underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 no-underline hover:underline bg-transparent border-none p-0"
      :aria-expanded="showDropdown"
      aria-haspopup="true"
      role="button"
      tabindex="0"
      ref="buttonRef"
    >
      <span class="flex items-center gap-2 active:text-black-500">
        {{ menuItem }}
      </span>
      <!-- Dropdown Arrow -->
      <svg 
        class="w-4 h-4 transition-transform duration-200 pointer-events-none"
        :class="{ 'rotate-180': showDropdown }"
        fill="currentColor" 
        viewBox="0 0 20 20"
      >
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </div>

    <!-- Dropdown Menu - Rendered at body level -->
    <Teleport to="body">
      <div
        v-if="showDropdown"
        :style="dropdownStyle"
        style="position: fixed; width: 200px; background: white; border: 2px solid #d1d5db; border-radius: 8px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); z-index: 10000; min-width: 200px;"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="dropdown-button"
      >
        <div style="padding: 8px 0;">
          <NuxtLink
            v-for="(item, index) in submenu"
            :key="index"
            :to="item.path"
            style="display: block; padding: 12px 16px; font-size: 14px; color: #374151; text-decoration: none; border-bottom: 1px solid #e5e7eb; transition: background-color 0.15s;"
            role="menuitem"
            @click="closeDropdown"
            @mouseenter="$event.target.style.backgroundColor = '#3b82f6'; $event.target.style.color = 'white'"
            @mouseleave="$event.target.style.backgroundColor = 'transparent'; $event.target.style.color = '#374151'"
          >
            {{ item.menuItem }}
          </NuxtLink>
        </div>
      </div>
    </Teleport>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue';

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
const buttonRef = ref<HTMLElement>();

const dropdownStyle = computed(() => {
  if (!buttonRef.value) return {};
  
  const rect = buttonRef.value.getBoundingClientRect();
  return {
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`
  };
});

function toggleDropdown() {
  showDropdown.value = !showDropdown.value;
}

function closeDropdown() {
  showDropdown.value = false;
}

// Close dropdown when clicking outside
function handleClickOutside(event: Event) {
  if (buttonRef.value && !buttonRef.value.contains(event.target as Node)) {
    showDropdown.value = false;
  }
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
/* Ensure dropdown is visible */
.relative {
  position: relative !important;
}

/* Make button more clickable */
button {
  position: relative !important;
  z-index: 10 !important;
  background: transparent !important;
  border: none !important;
  padding: 0 !important;
  margin: 0 !important;
}
</style> 