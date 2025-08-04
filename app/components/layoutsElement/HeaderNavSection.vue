<script setup lang="ts">
import { ref } from "vue";
import Burger from "../icons/Burger.vue";
import Close from "../icons/Close.vue";
import Navigation from '../layoutsElement/header/Navigation.vue';
import { MENU_ITEMS } from '~/constants/data';

const menuOpen = ref(false);
const openDropdownIndex = ref<number|null>(null);

function toggleMenu() {
  menuOpen.value = !menuOpen.value;
}

function closeMenu() {
  menuOpen.value = false;
}

</script>

<template>
  <header
    class="w-full border-b border-gray-300 bg-white px-4 py-3 transition-all duration-200 ease-in-out focus-visible:outline-none md:px-8 lg:pb-6 lg:pt-[17px] 3xl:px-0"
  >
    <div class="mx-auto max-w-7xl">
      <div class="flex flex-col gap-5">
        <div class="flex items-center justify-between flex-wrap">
          <!-- Logo -->
          <NuxtLink
            to="/"
            class="w-[120px] outline-offset-2 outline-focus-dark focus-visible:outline lg:w-[156px]"
          >
            <img class="w-32" src="/logo.svg" alt="allnatura_logo" />
          </NuxtLink>
          
          <!-- Burger Button nur auf mobilen Geräten -->
          <button
            @click="toggleMenu"
            class="md:hidden focus:outline-none z-50"
            aria-label="Toggle menu"
          >
            <Burger />
          </button>

          <!-- Desktop Navigation -->
          <div class="hidden md:flex items-center gap-6 whitespace-nowrap overflow-x-auto">
            <template v-for="(item, index) in MENU_ITEMS" :key="index">
              <!-- Dropdown Navigation für Hotelausstattung -->
              <div v-if="item.submenu" class="relative">
                <button
                  @mouseenter="openDropdownIndex = index"
                  @mouseleave="openDropdownIndex = null"
                  @focus="openDropdownIndex = index"
                  @blur="openDropdownIndex = null"
                  class="flex items-center gap-1 cursor-pointer fill-current !px-0 font-subline font-normal underline-offset-[5px] visited:text-black focus:no-underline focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-focus-dark active:!text-black-500 no-underline hover:underline"
                >
                  <span class="flex w-full items-center gap-2 active:text-black-500 flex-row">
                    {{ item.menuItem }}
                  </span>
                  <!-- Dropdown Arrow -->
                  <svg 
                    class="w-4 h-4 transition-transform duration-200"
                    :class="{ 'rotate-180': openDropdownIndex === index }"
                    fill="currentColor" 
                    viewBox="0 0 20 20"
                  >
                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                  </svg>
                </button>

                <!-- Dropdown Menu -->
                <div
                  v-if="openDropdownIndex === index"
                  @mouseenter="openDropdownIndex = index"
                  @mouseleave="openDropdownIndex = null"
                  class="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-2xl border-2 border-gray-300 z-[9999]"
                  style="position: absolute; z-index: 9999;"
                >
                  <div class="py-2">
                    <NuxtLink
                      v-for="(subItem, subIndex) in item.submenu"
                      :key="subIndex"
                      :to="subItem.path"
                      class="block px-4 py-3 text-sm text-gray-700 hover:bg-blue-500 hover:text-white transition-colors duration-150 border-b border-gray-200 last:border-b-0"
                      @click="openDropdownIndex = null"
                    >
                      {{ subItem.menuItem }}
                    </NuxtLink>
                  </div>
                </div>
              </div>
              <!-- Normale Navigation für andere Menüpunkte -->
              <Navigation
                v-else
                :menuItem="item.menuItem"
                :path="item.path"
              />
            </template>
          </div>
        </div>
      </div>
    </div>

    <!-- Mobile Overlay Menü -->
    <transition name="fade">
      <div
        v-if="menuOpen"
        class="fixed inset-0 bg-black bg-opacity-70 z-40 flex justify-center items-center md:hidden"
        @click.self="closeMenu"
      >
        <nav class="bg-white rounded-lg w-3/4 max-w-xs p-6">
          <div class="flex justify-between items-center mb-6">
            <h2 class="text-xl font-semibold">Menü</h2>
            <button
              @click="closeMenu"
              aria-label="Close menu"
              class="text-gray-500 hover:text-gray-700"
            >
              <Close />
            </button>
          </div>
          <ul class="flex flex-col gap-4">
            <li v-for="(item, index) in MENU_ITEMS" :key="index">
              <!-- Mobile Navigation mit Submenu -->
              <div v-if="item.submenu" class="mb-4">
                <NuxtLink
                  :to="item.path"
                  class="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
                >
                  {{ item.menuItem }}
                </NuxtLink>
                <!-- Mobile Submenu -->
                <ul class="ml-4 mt-2 space-y-2">
                  <li v-for="(subItem, subIndex) in item.submenu" :key="subIndex">
                    <NuxtLink
                      :to="subItem.path"
                      @click="closeMenu"
                      class="block text-sm text-gray-600 hover:text-gray-800 py-1"
                    >
                      {{ subItem.menuItem }}
                    </NuxtLink>
                  </li>
                </ul>
              </div>
              <!-- Normale Mobile Navigation -->
              <NuxtLink
                v-else
                :to="item.path"
                @click="closeMenu"
                class="block text-lg font-medium text-gray-700 hover:text-gray-900 py-2"
              >
                {{ item.menuItem }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
      </div>
    </transition>
  </header>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Force dropdown visibility */
.relative {
  position: relative !important;
}

[v-if] {
  position: absolute !important;
  z-index: 9999 !important;
  background: white !important;
  border: 2px solid #d1d5db !important;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25) !important;
}
</style>
