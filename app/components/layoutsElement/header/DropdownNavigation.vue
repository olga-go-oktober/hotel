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
    position: "fixed",
    top: `${rect.bottom + 8}px`,
    left: `${rect.left}px`
  };
});

//define function open/closeDropdown with hover delay: DropdownMenu
let closeTimeout: ReturnType<typeof setTimeout>;

function openDropdown() {
  clearTimeout(closeTimeout);
  showDropdown.value = true;
}
function closeDropdown() {
  closeTimeout = setTimeout(() => {
    showDropdown.value = false;
  }, 200); //200 ms

}
</script>

<template>
  <div class="relative inline-block">
    <!-- Main Menu Item -->
    <div 
    @mouseenter="openDropdown" 
    @mouseleave="closeDropdown"
      class="flex w-full items-center gap-1 cursor-pointer font-subline font-normal underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 no-underline hover:underline bg-transparent border-none p-0"
      :aria-expanded="showDropdown" aria-haspopup="true" role="button" tabindex="0" ref="buttonRef">
      <NuxtLink v-if="path" :to="path" class="flex w-full items-center gap-2 active:text-black-500" >
        <span class="">
          {{ menuItem }}
        </span>

        <!-- Dropdown Arrow -->
        <svg class="w-4 h-4 transition-transform duration-200 pointer-events-none"
          :class="{ 'rotate-180': showDropdown }" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clip-rule="evenodd" />
        </svg>
      </NuxtLink>
    </div>

    <!-- Dropdown Menu - Rendered at body level -->
    <Teleport to="body">
      <div 
      v-if="showDropdown" 
      :style="dropdownStyle"
      @mouseenter="openDropdown"
      @mouseleave="closeDropdown"
        style="position: fixed; width: 200px; background: white; border: 2px solid #d1d5db; border-radius: 8px; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25); z-index: 10000; min-width: 200px;"
        role="menu" aria-orientation="vertical" aria-labelledby="dropdown-button">
        <div style="padding: 8px 0;">
          <NuxtLink v-for="(item, index) in submenu" :key="index" :to="item.path"
            style="display: block; padding: 12px 16px; font-size: 14px; color: #374151; text-decoration: none; border-bottom: 1px solid #e5e7eb; transition: background-color 0.15s;"
            role="menuitem" @click="closeDropdown"
            @mouseenter="$event.target.style.backgroundColor = '#3b82f6'; $event.target.style.color = 'white'"
            @mouseleave="$event.target.style.backgroundColor = 'transparent'; $event.target.style.color = '#374151'">
            {{ item.menuItem }}
          </NuxtLink>
        </div>
      </div>
    </Teleport>
  </div>
</template>
